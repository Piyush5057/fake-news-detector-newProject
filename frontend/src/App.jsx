import Header from "./components/Header";
import NewsForm from "./components/NewsForm";
import Footer from "./components/Footer";

import hero from "./assets/hero.jpg";

function App() {

  return (

    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`
      }}
    >

      <div className="min-h-screen bg-black/60">

        <Header />

        <div
          className="
          mx-auto
          mt-16
          max-w-5xl
          px-5">

          <NewsForm/>

          </div>

        <Footer />

      </div>

    </div>

  );

}

export default App;