import "../styles/deck.css"
import "../styles/reset.css"
import LogoSmall from "../assets/img/logo-pequeno.png"
import FlashCard from "./FlashCard"
import {useState} from "react"
import Result from "./Result"

const Deck = (props) => {
	const [numA, setNumA] = useState(0);
	const [ansImg, setAnsImg] = useState([]);
	const {reset, meta, deck} = props;

	function checkZaps() {
		let zapCount = 0;
		ansImg.forEach(e => {
			if(e === "/static/media/zap.9ae3a93a0ca609ed6ea17f9931dfd8e4.svg")
				zapCount++;
		})
		return zapCount;
	}

	function Counter() {
		setNumA(numA+1);
	}

	function getAnswerImgs(img) {
		setAnsImg([...ansImg, img]);
	}

	function resetStates(value,value2) {
		setNumA(value);
		setAnsImg(value2);
	}

	const result = `${numA}/${deck.length} CONCLUÍDOS`

	return (
		<div className="d-body">
			<div className="d-container">
				<div className="d-header">
					<img className="logo-small" src={LogoSmall} alt=""/>
					<h1 className="d-title">ZapRecall</h1>
				</div>
				<div>
				<div>
					{deck.map((d,index) => {
						const {question, answer} = d;
						return <div key={index}><FlashCard index={index} question={question} answer={answer} Counter={Counter} getAnswerImgs={getAnswerImgs}/></div>
					})}
				</div>
				</div>
			</div>
			<Result ansImg={ansImg} numA={numA} result={result} reset={reset} resetStates={resetStates} checkZaps={checkZaps} meta={meta}/>
		</div>
	)
}

export default Deck;