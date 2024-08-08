import React from "react";

interface Fonk {
  HandleClick: (str: string) => void;
  sayi: number;
  value: string;
  animal: string;
  kullan: string[];
}

const Input = ({ HandleClick, sayi, value, animal, kullan }: Fonk) => {
  return (
    <div className="">
      {sayi === 6 ? (
        <input
          type="button"
          onClick={() => HandleClick(value)}
          value={value}
          className={
            animal.split("").includes(value) && kullan.includes(value)
              ? " h-12 w-12 border-2 bg-blue-400 rounded-lg  border-white py-1 px-2"
              : kullan.includes(value)
              ? " h-12 w-12 border-2 bg-red-500   rounded-lg    border-white py-1 px-2"
              : " h-12 w-12 border-2   rounded-lg    border-white py-1 px-2"
          }
          disabled
        />
      ) : kullan.includes(value)? (
        <input
          type="button"
          onClick={() => HandleClick(value)}
          value={value}
          disabled
          className={
            animal.split("").includes(value) && kullan.includes(value)
              ? " h-12 w-12 border-2 bg-blue-400 rounded-lg  border-white py-1 px-2"
              : kullan.includes(value)
              ? " h-12 w-12 border-2 bg-red-500   rounded-lg  border-white py-1 px-2"
              : " h-12 w-12 border-2   rounded-lg   border-white py-1 px-2"
          }
        />
      ): (
        <input
          type="button"
          onClick={() => HandleClick(value)}
          value={value}
          
          className={
            animal.split("").includes(value) && kullan.includes(value)
              ? " h-12 w-12 border-2 bg-blue-400 rounded-lg  border-white py-1 px-2"
              : kullan.includes(value)
              ? " h-12 w-12 border-2 bg-red-500   rounded-lg  border-white py-1 px-2"
              : " h-12 w-12 border-2   rounded-lg hover:bg-slate-50/30   border-white py-1 px-2"
          }
        />
      )
    }
    </div>
  );
};

export default Input;
