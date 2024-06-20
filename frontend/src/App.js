import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const emotionEmojis = {
  anger: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Symbols%20on%20Mouth.png',
  disgust: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Nauseated%20Face.png',
  fear: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Fearful%20Face.png',
  joy: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face%20with%20Big%20Eyes.png',
  sadness: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Downcast%20Face%20with%20Sweat.png',
  surprise: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Astonished%20Face.png',
  neutral: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Neutral%20Face.png',
};

const App = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  const handleAnalyze = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/sentiment', { text });
      const sortedResults = response.data.sort((a, b) => b.score - a.score);
      setResults(sortedResults);
    } catch (error) {
      console.error("Error during request:", error);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="container">
      <label className="custom-font title" htmlFor="myInput">Sentiment Analysis</label>
      <div className="input-group">
        <textarea
          id="myInput"
          className="input-group__input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
          rows={5}
        />
        <button type="submit" onClick={handleAnalyze}>Analyze</button>
      </div>
      <div className="results">
        {results.map((result) => (
          <div key={result.label} className="result">
            <img src={emotionEmojis[result.label]} alt={result.label} width="50" height="50" />
            <p>{capitalizeFirstLetter(result.label)}: <span style={{ fontWeight: 'bold' }}>{(result.score * 100).toFixed(2)}%</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
