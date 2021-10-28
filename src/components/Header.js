import React from "react";

import { Button, Wrapper } from "./header.style";

export default function Header({ randomList, rangeChange, bubbleOnClick }) {
  return (
    <Wrapper>
      <Button disabled>Algorithm Visualizer</Button>
      <Button onClick={randomList}>Generate Elements</Button>
      <Button onClick={bubbleOnClick}>Bubble Sort</Button>
      
    </Wrapper>
  );
}
