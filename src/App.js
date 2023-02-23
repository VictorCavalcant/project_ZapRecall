import "./styles/homepage.css"
import HomePage from "./components/HomePage";
import Deck from "./components/Deck";
import { useState, useEffect} from "react";


function App() {

  const [visible, SetVisible] = useState(true);
  const [meta, SetMeta] = useState(0);
  const [deck, SetDeck] = useState([]);
  const [shuffled, SetShuffled] = useState(true);

  function isVisible(value){
    SetVisible(value);
  }

  function ResetHomeStates (){
    SetVisible(true);
    SetShuffled(true);
    SetDeck([]);
  }

  useEffect(() => {
    console.log("valor de deck: ", deck);
    console.log("valor de shuffled:  ", shuffled);
    if (deck.length > 0 && shuffled) {
      SetDeck([...deck].sort(() => Math.random() - 0.5))
      SetShuffled(false);
    }
  },[deck,shuffled]);



  return (
    <>

      { visible ? 
      <HomePage isVisible={isVisible} SetMeta={SetMeta} meta={meta} SetDeck={SetDeck}/>
      : <Deck reset={ResetHomeStates} meta={meta} deck={deck}/>
      }
    </>
  );
}

export default App;
