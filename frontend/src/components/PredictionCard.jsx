import {
FaCheckCircle,
FaTimesCircle
} from "react-icons/fa";


function PredictionCard({ result }) {

  if (!result) return null;

  return (

        <div
        className="
        mt-8
        rounded-2xl
        bg-white/95
        p-6
        shadow-2xl
        animate-pulse
        "
        >

      <h2 className="text-2xl font-bold text-gray-800">

        Prediction Result

      </h2>

      <div className="mt-5 flex justify-between">

        <span className="text-lg font-semibold">

          Prediction

        </span>

        <span
          className={`text-xl font-bold ${
            result.prediction === "Fake"
              ? "text-red-600"
              : "text-green-600"
          }`}
        >

          <div className="flex items-center gap-2">

{

result.prediction==="Fake"

?

<FaTimesCircle className="text-red-600"/>

:

<FaCheckCircle className="text-green-600"/>

}

<span>

{result.prediction}

</span>

</div>

        </span>

      </div>

      <div className="mt-5 flex justify-between">

        <span className="text-lg font-semibold">

          Confidence

        </span>

        <span className="text-lg">

          {result.confidence}%

        </span>

      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-300">

        <div
          className={`h-full ${
            result.prediction === "Fake"
              ? "bg-red-600"
              : "bg-green-600"
          }`}
          style={{
            width: `${result.confidence}%`,
          }}
        />

      </div>

    </div>

  );

}

export default PredictionCard;