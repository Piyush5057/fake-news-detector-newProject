import { FaNewspaper } from "react-icons/fa";

function Header() {
  return (
    <header className="pt-16 text-center px-4">

      <div className="flex justify-center mb-5">

        <div className="
        h-24
        w-24
        rounded-full
        bg-white/20
        backdrop-blur-lg
        flex
        items-center
        justify-center
        shadow-xl">

          <FaNewspaper
            className="text-white text-5xl"
          />

        </div>

      </div>

      <h1 className="
      text-6xl
      font-black
      text-white
      tracking-wide
      drop-shadow-lg">

        Fake News Detector

      </h1>

      <p className="
      mt-5
      text-xl
      text-gray-200">

        Detect Fake or Real News using Machine Learning

      </p>

    </header>
  );
}

export default Header;