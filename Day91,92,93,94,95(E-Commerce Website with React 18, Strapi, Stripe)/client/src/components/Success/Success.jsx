import React from "react";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const navi = useNavigate();
  return (
    <div>
      <h1>Payment sucessfull</h1>
      <button onClick={navi("/")}>Back To Home</button>
    </div>
  );
};

export default Success;
