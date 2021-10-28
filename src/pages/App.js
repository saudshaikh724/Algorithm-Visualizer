/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Main from "./Main";

import "./App.style.css";

import { sleep } from "../helpers";

function App() {
  const [size, setSize] = useState(19);
  const [arr, setArr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentNext, setCurrentNext] = useState(null);

  useEffect(() => {
    updateList();
  }, [size]);

  const updateList = () => {
    const randomArr = Array.from({ length: size }, () =>
      generateRandomInteger(50, 500)
    );
    setArr(randomArr);
  };

  const generateRandomInteger = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };

  const rangeChange = () => {
    const range = 15;};

  const generateRandomList = () => {
    const sizeOfList = generateRandomInteger(19, 19);
    const randomArr = Array.from({ length: sizeOfList }, () =>
      generateRandomInteger(50, 500)
    );
    setArr(randomArr);
  };

  const bubbleOnClick = async () => {
    let isSorted = false;
    let counter = 0;
    while (!isSorted){
      isSorted = true;
      for (let i = 0; i< arr.length -1 - counter; i++){
        setCurrentIndex(i);
        setCurrentNext(i + 1);
        await sleep(280);
        if (arr[i] > arr[i+1]) {
          const temp = arr[i+1];
          arr[i+1] = arr[i];
          arr[i] = temp;
          isSorted = false;
        }
        setArr([...arr]);
      }
      counter++;
    }
    setCurrentIndex(null);
    setCurrentNext(null);
  };

  return (
    <div className="App">
      <Header
        rangeChange={rangeChange}
        randomList={generateRandomList}
        bubbleOnClick={bubbleOnClick}
      />
      <Main data={arr} currentIndex={currentIndex} nextIndex={currentNext} />
    </div>
  );
}

export default App;
