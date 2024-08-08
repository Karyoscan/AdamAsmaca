import React, { useEffect, useState } from "react";
import Data from "./Data/Data";
import Head from "./Data/Head";
import Main from "./component/Main";
import Inputs from "./component/Inputs";

function App() {
  const [sayi, setSayi] = useState<number>(0);
  const [kullan, setKullan] = useState<string[]>([]);
  const [animal, setAnimal] = useState<string>(() => {
    return Data[Math.floor(Math.random() * Data.length)];
  });

/* 
dizi = 2,1,3

*/



const win:boolean =animal.split('').every((us)=>kullan.includes(us)) 



  const Reset = () => {
    setSayi(7);
  };
  useEffect(() => {
    if (sayi === 7) {
      setAnimal(Data[Math.floor(Math.random() * Data.length)]);
      setSayi(0);
      setKullan([]);
    }
  }, [() => Reset()]);

  const HandleClick = (str: string) => {
    if (animal.split("").includes(str)) {
    
       
    }
    if (!animal.split("").includes(str)) {
      if (sayi === 6) {
        setSayi(6);
      } else {
        setSayi((us) => us + 1);
      }
    }

    setKullan((us) => [...us, str]);
  };

  
  return (
    <div className="h-screen flex flex-col gap-4 justify-evenly items-center bg-green-400/80 text-white">
      <Head sayi={sayi} setSayi={setSayi} Reset={Reset} win={win} />

      <Main
        sayi={sayi}
        setSayi={setSayi}
        animal={animal}
        kullan={kullan}
        Reset={Reset}
      />
      <Inputs
        HandleClick={HandleClick}
        sayi={sayi}
        animal={animal}
        kullan={kullan}
      />
    </div>
  );
}

export default App;
