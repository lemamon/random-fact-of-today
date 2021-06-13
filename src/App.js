import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Typewriter from "typewriter-effect";

import logo from "./logo.svg";

const date = new Date();

function App() {
  const [fact, setFact] = useState({
    text: "",
  });
  const today = `${date.getUTCMonth() + 1}/${date.getDate()}`;
  const getRamdomFact4Today = async () => {
    const headers = {
      "x-rapidapi-key": "cff67389ccmsh13b98ebfc7cdf0bp12bc42jsn721078ef4add",
      "x-rapidapi-host": "numbersapi.p.rapidapi.com",
      useQueryString: true,
    };
    const data = await fetch(
      `https://numbersapi.p.rapidapi.com/${today}/date?json`,
      { headers }
    ).then((response) => response.json());
    setFact(data);
  };

  const getRamdomFactCallback = useCallback(getRamdomFact4Today, [
    getRamdomFact4Today,
  ]);

  useEffect(() => {
    getRamdomFactCallback(); // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <div className="container">
        <img src={logo} alt="calendar logo" className="logo" />
        <h2>Today's in {fact.year} </h2>

        <div className="text">
          <Typewriter
            options={{
              strings: fact.text,
              autoStart: true,
              delay: 80,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
