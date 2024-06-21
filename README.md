# Duygu Analizi Uygulaması

Bu proje, kullanıcıların metinlerindeki duyguları analiz etmelerine olanak tanıyan bir web uygulamasıdır. FastAPI kullanılarak oluşturulmuş bir backend ve React kullanılarak oluşturulmuş bir frontend içermektedir.

## Özellikler

- Kullanıcı metin girişi yaparak duygusal analiz talebinde bulunabilir.
- Analiz sonucunda duygular ve ilgili yüzdeler görüntülenir.
- Analiz sonuçları emojilerle görsel olarak desteklenir.

## Kurulum ve Çalıştırma

### Gereksinimler

- Python 3.9+
- Node.js
- npm

### Backend Kurulumu

1. Gerekli Python paketlerini yükleyin:

```bash
pip install -r requirements.txt
```

2. FastAPI uygulamasını başlatın:

```bash
uvicorn app:app --reload
```

Backend, http://127.0.0.1:8000 adresinde çalışacaktır.

### Frontend Kurulumu

1. Gerekli npm paketlerini yükleyin:

```bash
npm install
```

2. React uygulamasını başlatın:

```bash
npm start
```

Frontend, http://localhost:3000 adresinde çalışacaktır.

## Dosya Yapısı

- `backend/`: FastAPI ile oluşturulmuş backend kodlarını içerir.
    - `app.py`: FastAPI uygulamasını ve duygu analizi endpoint'ini tanımlar.
- `frontend/`: React ile oluşturulmuş frontend kodlarını içerir.
    - `src/App.js`: React bileşenlerini ve uygulama mantığını içerir.
    - `src/App.css`: Stil dosyalarını içerir.

## Kullanım

- Uygulama açıldığında, kullanıcı metin giriş kutusuna metin yazabilir.
- Analyze butonuna tıklandığında, metin backend'e gönderilir ve analiz yapılır.
- Analiz sonuçları, duygular ve yüzdelerle birlikte ekranda görüntülenir.

