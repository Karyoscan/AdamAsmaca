import React from "react";

interface Degerler {
  sayi: number;
  setSayi: React.Dispatch<React.SetStateAction<number>>;
  animal: string;
  kullan: string[];
  Reset: () => void;
}



const Main = ({ sayi, setSayi, animal, kullan, Reset }: Degerler) => {
  const Deneme = animal.split("").map((us, index) => {
    return (
      <div className="flex flex-col items-center justify-center h-12   ">
        {kullan.includes(us) ? (
          <div className=" text-5xl font-bold pb-2 ">{us}</div>
        ): sayi ===6 &&(
          <div className=" text-red-600  text-5xl font-bold pb-2 ">{us}</div>
        )}
        <div className="h-2 w-12 bg-white"></div>
      </div>
    );
  });


  

  return (
    <div className="flex items-center">
      <div className="flex flex-col  w-[800px]    items-center relative">
        <div className="flex flex-col ">
          <div className=" w-64 h-2 bg-white absolute "> </div>
          <div className=" h-52 w-2 bg-white "> </div>
          <div className=" right-0 absolute ">
            <div className="h-10 absolute right-36 w-2 bg-white"></div>

            {sayi >= 1 && (
              <div className="flex flex-col justify-center gap-2 items-center  h-10 w-10 top-10 absolute right-32 rounded-full border-black border-4   bg-white">
                <div className="flex justify-center gap-2 items-center">
                  <div className="w-2 h-1 bg-black "></div>
                  <div className="w-2 h-1 bg-black "></div>
                </div>
                <div className="w-4 h-1 bg-black "></div>
              </div>
            )}

            {sayi >= 2 && (
              <div className="h-14 w-2 top-20 absolute right-36 bg-black  "></div>
            )}
            {sayi >= 3 && (
              <div className="h-12 w-2 top-14 transform -rotate-45  bg-black  absolute right-40"></div>
            )}
            {sayi >= 4 && (
              <div className="h-12 w-2 top-14 transform rotate-45  bg-black  absolute right-32"></div>
            )}
            {sayi >= 5 && (
              <div className="h-12 w-2 top-32 transform rotate-45  bg-black  absolute right-40"></div>
            )}
            {sayi >= 6 && (
              <div className="h-12 w-2 top-32 transform -rotate-45  bg-black  absolute right-32"></div>
            )}
          </div>
        </div>
        <div className=" h-2 w-80 bg-white"></div>
      </div>
      <div className="flex gap-2 pt-28   ">{Deneme}</div>
    </div>
  );
};

export default Main;
