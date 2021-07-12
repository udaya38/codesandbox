import React, { useState } from "react";
let count = 0;
function App({ slides }) {
  const [show, setShow] = useState({
    title: slides[count].title,
    text: slides[count].text
  });

  const goNext = () => {
    document.querySelector(".small").removeAttribute("disabled");
    document.querySelector(".smallPrev").removeAttribute("disabled");
    count++;
    console.log(count);
    if (count >= slides.length - 1) {
      document.querySelector(".smallNext").setAttribute("disabled", true);
      setShow({ title: slides[count].title, text: slides[count].text });
      return;
    }

    setShow({ title: slides[count].title, text: slides[count].text });
  };
  const goBack = () => {
    document.querySelector(".smallNext").removeAttribute("disabled");
    count--;
    console.log(count);
    if (count === 0) {
      document.querySelector(".smallPrev").setAttribute("disabled", true);
      setShow({ title: slides[count].title, text: slides[count].text });
      return;
    }
    setShow({ title: slides[count].title, text: slides[count].text });
  };
  const goRestart = () => {
    document.querySelector(".smallPrev").setAttribute("disabled", true);
    document.querySelector(".small").setAttribute("disabled", true);
    document.querySelector(".smallNext").removeAttribute("disabled");
    count = 0;
    setShow({ title: slides[count].title, text: slides[count].text });
  };
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          onClick={goRestart}
          className="small outlined"
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          onClick={goBack}
          className="smallPrev"
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          onClick={goNext}
          className="smallNext"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{show.title}</h1>
        <p data-testid="text">{show.text}</p>
      </div>
    </div>
  );
}

export default App;
//https://codesandbox.io/s/vigilant-snowflake-2hc1u?file=/src/App.js
