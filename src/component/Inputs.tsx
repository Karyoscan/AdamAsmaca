import React from "react";
import Input from "./Input";
import Deger from "../Data/Deger";

interface Fonk {
  HandleClick: (str: string) => void;
  sayi: number;
  animal : string
  kullan:string[]
}

const Inputs = ({ HandleClick, sayi, animal ,kullan}: Fonk) => {
  return (
    <div className="grid  grid-cols-10 grid-rows-3 gap-2 ">
      {Deger.map((us,index) => (
        <Input key={index} HandleClick={HandleClick} animal={animal} kullan ={kullan}  sayi={sayi} value={us} />
      ))}
    </div>
  );
};

export default Inputs;
