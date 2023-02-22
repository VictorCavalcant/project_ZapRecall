import "../styles/flashcard.css"
import Setinha from "../assets/img/Vector.svg"
import Reveal from "../assets/img/setinha.png"
import Forgotimg from "../assets/img/forgot.svg"
import Almostimg from "../assets/img/almost.svg"
import Zapimg from "../assets/img/zap.svg"
import { useState } from "react"



const FlashCard = (props) => {

	const [revealQ, setRevealQ] = useState(false);
	const [revealA, setRevealA] = useState(false);
	const [imgAnswer, setImgAnswer] = useState("");

	function revealQuestion() {
		setRevealQ(true);
	}

	function revealAnswer() {
		setRevealA(true);
	}

	function forgotAnswer() {
		setImgAnswer("forgot");
		Counter();
		getAnswerImgs(Forgotimg)
	}

	function almostAnswer() {
		setImgAnswer("almost");
		Counter();
		getAnswerImgs(Almostimg)
	}

	function zapAnswer() {
		setImgAnswer("zap");
		Counter();
		getAnswerImgs(Zapimg);
	}

	const {index, question,answer, getAnswerImgs, Counter} = props;


	const ans_text = `${ (imgAnswer === "forgot") ? "dca-textf" : (imgAnswer === "almost") ? "dca-texta" : "dca-textz" } `
	const ans_img = (imgAnswer === "forgot") ? Forgotimg : (imgAnswer === "almost") ? Almostimg : Zapimg;
	const num_question = `Pergunta ${index+1}`;

	return (
		<>
		{
		(imgAnswer !== "") ? <div className="d-card">
				<h1 className={ans_text}>{num_question}</h1>
				<img className="dca-img" src={ans_img} alt=""/>
		</div>
		: !revealQ ? <div className="d-card" onClick={revealQuestion}>
					<h1 className="dc-text">{num_question}</h1>
					<img className="dc-arrow" src={Setinha} alt=""/>
				</div> : !revealA ? <div className="dc-question"> 
					<h1 className="dcq-text">{question}</h1>
					<img className="dcq-arrow" src={Reveal} alt="" onClick={revealAnswer}/>
				</div>
				: <div className="dc-answer"> 
						<h1 className="dcq-anstext">{answer}</h1>
						<div className="dcq-btns">
						<button className="dcq-btn-forgot" onClick={forgotAnswer}>
							<p className="dcq-btn-textf">Não lembrei</p>
						</button>
						<button className="dcq-btn-almost" onClick={almostAnswer}>
							<p className="dcq-btn-texta">Quase não lembrei</p>
						</button>
						<button className="dcq-btn-zap" onClick={zapAnswer}>
							<p className="dcq-btn-textz">Zap!</p>
						</button>
						</div>
				</div>
				}
		</>
	)
}

export default FlashCard;