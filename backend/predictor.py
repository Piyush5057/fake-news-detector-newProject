import joblib
import re
import string

def clean_text(text):

    text = text.lower()

    text = re.sub(r'http\S+|www\S+', '', text)

    text = re.sub(r'<.*?>', '', text)

    text = text.translate(
        str.maketrans('', '', string.punctuation)
    )

    text = re.sub(r'\d+', '', text)

    text = re.sub(r'\s+', ' ', text).strip()

    return text




model = joblib.load("models/model.pkl")

vectorizer = joblib.load("models/tfidf_vectorizer.pkl")


def predict_news(news):

    news_vector = vectorizer.transform([news])

    prediction = model.predict(news_vector)[0]

    confidence = model.predict_proba(news_vector).max()

    if prediction == 0:
        label = "Fake"
    else:
        label = "Real"

    return {
     "prediction": label,
     "confidence": round(confidence * 100, 2)
    }


