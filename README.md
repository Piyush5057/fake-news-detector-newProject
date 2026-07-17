# Fake News Detection using Machine Learning

A simple full-stack machine learning project that predicts whether a news article is **Fake** or **Real**.

The project uses **Logistic Regression** with **TF-IDF Vectorization** for text classification. The backend is built using **Flask**, and the frontend is developed with **React (Vite)**.

---

Check the app here:[Link Text](fakenewsdetector-pied.vercel.app)


## Features

- Detect whether a news article is Fake or Real
- Shows prediction confidence
- React frontend with a simple user interface
- Flask REST API
- Machine Learning model trained using Logistic Regression
- Text preprocessing before prediction

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- Flask
- Flask-CORS
- Scikit-learn
- Joblib

### Machine Learning
- TF-IDF Vectorizer
- Logistic Regression
- Pandas
- NumPy

---

## Project Structure

```
Fake-News-Detection/
│
├── backend/
│   ├── app.py
│   ├── predictor.py
│   ├── models/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── notebooks/
│   ├── 01_data_preprocessing.ipynb
│   └── 02_model_training.ipynb
│
├── data/
│
└── README.md
```

---

## Dataset

The project uses the **Fake and Real News Dataset** from Kaggle.

It contains news articles labeled as Fake or Real.

---

## Machine Learning Workflow

1. Load dataset
2. Clean and preprocess text
3. Create additional text features
4. Convert text into TF-IDF vectors
5. Train Logistic Regression model
6. Save trained model using Joblib
7. Use Flask API for prediction
8. Display result in React frontend

---

## How to Run

### Clone the repository

```bash
git clone <repository-url>
```

---

### Backend

```bash
cd backend

pip install -r requirements.txt

python app.py
```

Backend runs on

```
http://127.0.0.1:5000
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## API Endpoint

### POST /predict

Request

```json
{
    "text": "Your news article here..."
}
```

Response

```json
{
    "prediction": "Fake",
    "confidence": 97.52
}
```

---

## Screenshots

### Home Page

[![Alt text]](https://github.com/Piyush5057/fake-news-detector-newProject/blob/main/frontend/src/assets/HOME.png)


### Prediction Result

[![Alt text]](https://github.com/Piyush5057/fake-news-detector-newProject/blob/main/frontend/src/assets/TRUE_SS.png)

---

## Future Improvements

- Use transformer-based models like BERT
- Save prediction history
- User authentication
- Deploy using Docker
- Support multiple languages

---

## What I Learned

While building this project I learned about:

- Data preprocessing
- Text vectorization using TF-IDF
- Logistic Regression for text classification
- Building REST APIs with Flask
- Connecting React with Flask using Axios
- Deploying a machine learning model in a web application

---

## Author

Piyush Pandey
