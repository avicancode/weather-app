import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  // console.log(carouselIndex);

  return (
    <div className="App">
      <div className="container-fluid text-bg-dark">
        <Header index={carouselIndex} />
        <Home
          setIndex={(step) => {
            if (step === "Next") {
              if (carouselIndex > 1) {
                setCarouselIndex(0);
              } else {
                setCarouselIndex(carouselIndex + 1);
              }
            } else {
              if (carouselIndex < 0) {
                setCarouselIndex(2);
              } else {
                setCarouselIndex(carouselIndex - 1);
              }
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
