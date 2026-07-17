import { useState } from "react";
import API from "../services/api";
import PredictionCard from "./PredictionCard";

function NewsForm() {
  const [news, setNews] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!news.trim()) {
      setError("Please enter a news article.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await API.post("/predict", {
        text: news,
      });

      setResult(response.data);
    } catch (err) {
      setError("Unable to connect to Flask Backend.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setNews("");
    setResult(null);
    setError("");
  };

  return (
    <div className="mt-12 flex justify-center px-4">

      <div className="
      w-full
      max-w-4xl
      rounded-3xl
      border
      border-white/20
      bg-white/10
      backdrop-blur-xl
      shadow-2xl
      p-8">

        <textarea
          rows="12"
          placeholder="Paste your complete news article here..."
          value={news}
          onChange={(e) => setNews(e.target.value)}
          className="
          w-full
          resize-none
          rounded-2xl
          bg-white/90
          p-5
          text-gray-800
          text-lg
          outline-none
          focus:ring-4
          focus:ring-blue-400"
        />

        <div className="mt-2 text-right text-gray-200">
          Characters : {news.length}
        </div>

        <div className="mt-8 flex gap-5">

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
            flex-1
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            py-4
            text-lg
            font-bold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-2xl
            disabled:bg-gray-500">

            {loading ? "Detecting..." : "Detect News"}

          </button>

          <button
            onClick={handleClear}
            className="
            flex-1
            rounded-xl
            border
            bg-white
            text-gray-800
            py-4
            text-lg
            font-semibold
            text-red-400
            transition
            hover:bg-gray-200
            hover:text-white">

            Clear

          </button>

        </div>

        {error && (

          <div className="
          mt-6
          rounded-xl
          bg-red-500/20
          p-4
          text-red-200">

            {error}

          </div>

        )}

        <PredictionCard result={result} />

      </div>

    </div>
  );
}

export default NewsForm;