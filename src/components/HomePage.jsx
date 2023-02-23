import "../styles/homepage.css";
import Logo from "../assets/img/logo.png"
import { useEffect, useState } from "react";
import {deckR, deckC} from "../data/decks"

const HomePage = (props) => {


	const [btn_act, SetBtn_Act] = useState("inactive-btn");
	const [deck_act, SetDeck_act] = useState("");

	let value = true;
	const {isVisible, SetMeta, meta, SetDeck, deck} = props;

	function hideScreen() {
		if(btn_act !== "inactive-btn") {
			value = false;
			isVisible(value);
		}
	}

	const DeckOption = (e) => {
		SetDeck_act(e.target.value)
	}

	const Zapmeta = (e) => {
		let zapValue = parseInt(e.target.value);
		if (zapValue <= 0) {
			zapValue = 1;
			SetMeta(zapValue);
		}
		if (zapValue > 8){
			zapValue = 8;
			SetMeta(zapValue);
		}
		SetMeta(zapValue);
	}

	useEffect(() => {
		console.log(deck_act);
		console.log(meta);
		if ((deck_act !== "") && (meta !== 0))
			SetBtn_Act("start-btn")
		if (deck_act === "deckReact")
			SetDeck(deckR)
		if(deck_act === "deck_C")
			SetDeck(deckC);
	}, [deck_act,meta]);


	return (
		<div className="h-container">
          <img className="logo" src={Logo} alt=""/>
          <h1 className="title">ZapRecall</h1>
					<input className="input-zap" type="number" placeholder="Digite sua meta de zaps" onChange={Zapmeta}></input>
					<select className="select-deck" defaultValue="" onChange={DeckOption}>
						<option value="" disabled hidden>Selecione um Deck</option>
						<option value="deckReact">Deck React</option>
						<option value="deck_C">Deck C</option>
					</select>
          <button className={btn_act} onClick={hideScreen}>Iniciar Recall!</button>
    </div>
	) 
}

export default HomePage;