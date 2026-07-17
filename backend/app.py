from flask import Flask, request, jsonify
from flask_cors import CORS

from predictor import predict_news

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Fake News Detection API is Running!"


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    news = data.get("text",  "")

    result = predict_news(news)

    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)

