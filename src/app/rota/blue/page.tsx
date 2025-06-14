import React from "react";
import findBeat from "@/components/beats";


const RotaPage = () => {
  const beat = findBeat(1)
  const beatLetter = beat.substring(0, 1).toUpperCase();
  return (
    <div className="container">
      <p className="beat-text">Today on Blue you can fish the {beat} beat</p>
      <h1 className="beat-letter">{beatLetter}</h1>
    </div>
  );
};

export default RotaPage;