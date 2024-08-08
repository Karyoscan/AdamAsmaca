import React from "react";

interface Degerler {
  sayi: number;
  setSayi: React.Dispatch<React.SetStateAction<number>>;
  Reset: () => void;
  win : boolean
}

const Head = ({ sayi, setSayi, Reset, win }: Degerler) => {
  const game: number = 0;

  return (
    <div>
      {sayi >= 6 && (
        <div className="border-2 border-white py-2 px-4 rounded-md  h-40 w-80 flex  flex-col justify-evenly items-center gap-4 ">
          {sayi >= 6 && (
            <div className="flex  flex-col justify-evenly items-center gap-4">
              <h1 className=" text-center">
                {" "}
                Yeterince Hakkınız kalmadı ve Yenildiniz Tekrar deneyiniz{" "}
              </h1>
              <button
                onClick={() => Reset()}
                className="border-2 rounded-md  border-white py-2 px-4 font-bold  hover:bg-blue-200 hover:text-white"
              >
                Reset{" "}
              </button>
            </div>
          )}
        </div>
      )}
      {sayi < 6 && !win && (
        <div className="border-2 border-white py-2 px-4 rounded-md  h-40 w-80 flex  flex-col justify-evenly items-center gap-4 ">
          {sayi < 6 && (
            <div className="flex  flex-col justify-evenly items-center gap-4">
              <h1 className=" text-center">
                Bu Bir Hayvan Bakalim Bulabilecek Misin ? ? ?
              </h1>
            </div>
          )}
        </div>
      )}
      {(sayi < 6 && win) && (
        <div className="border-2 border-white py-2 px-4 rounded-md  h-40 w-80 flex  flex-col justify-evenly items-center gap-4 ">
           
            <div className="flex  flex-col justify-evenly items-center gap-4">
            {win &&  <h1 className=" text-center">Tebrikler Kazandiniz</h1> } 
              <button
                onClick={() => Reset()}
                className="border-2 rounded-md  border-white py-2 px-4 font-bold  hover:bg-blue-200 hover:text-white"
              >
                Tekrar Oyna{" "}
              </button>
            </div>
          
        </div>
      )}
    </div>
  );
};

export default Head;
