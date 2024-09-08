import React from "react";
import { Button } from "./styles/Button.styled";
export const MainButton = () => {
  return (
<Button>
  <button className="learn-more">
  <span class="circle" aria-hidden="true">
  <span class="icon arrow"></span>
  </span>
  <span class="button-text">Learn More</span>
  </button>
</Button>
  );
};
