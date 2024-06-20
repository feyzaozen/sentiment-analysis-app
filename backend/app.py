from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline

app = FastAPI()


origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


model_name = "j-hartmann/emotion-english-distilroberta-base"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)

emotion_analyzer = pipeline('text-classification', model=model, tokenizer=tokenizer, return_all_scores=True)

class TextRequest(BaseModel):
    text: str

@app.post("/api/sentiment")
async def sentiment_analysis(request: TextRequest):
    results = emotion_analyzer(request.text)[0]
    return [{"label": result['label'], "score": result['score']} for result in results]

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
