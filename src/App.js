import "./styles/homepage.css"
import HomePage from "./components/HomePage";
import Deck from "./components/Deck";
import { useState } from "react";


function App() {

  const [visible, SetVisible] = useState(true);
  const [meta, SetMeta] = useState(1);


  function isVisible(value){
    SetVisible(value);
  }


  // Automaticamente seta o valor de metas para 1, caso for menor ou igual a 0(valor mínimo)
  if (meta <= 0)
    SetMeta(1)

  // Automaticamente seta o valor de metas para 4, caso for maior que 4(valor maximo)
  if(meta > 4) 
    SetMeta(4);
  
  return (
    <>

      { visible ? 
      <HomePage isVisible={isVisible} SetMeta={SetMeta}/>
      : <Deck reset={isVisible} meta={meta}/>
      }
    </>
  );
}

export default App;
