import Putz from "../assets/img/sad.png"
import Yay from "../assets/img/party.png"
import "../styles/result.css"


const Result = (props) => {
	

	const {ansImg, numA, result, reset, resetStates, checkZaps, meta} = props;

	function Reset() {
		reset();
		resetStates(0,[]);
	}

	const defaultCheck = (checkZaps() < meta) && numA === 8;

	return (
		<>
			{defaultCheck ?  
				<div className="d-footer-result">
				<div className="df-result-alert">
					<img className="dfr-reaction" src={Putz} alt=""/>
					<p className="dfr-reaction_text">Putz...</p>
				</div>
				<h1 className="dfr-text">Ainda faltam alguns...Mas não desanime!</h1>
				<h1 className="df-text">
					{result}
					</h1>
				<div className="df-ans-imgs">
					{ansImg.map((ai, index) => {
						return <img key={index} className="df-ans-img" src={ai} alt=""/>
					})}
			</div>
					<button className="btn-reset" onClick={Reset}>
							<h1 className="btnr-text">REINICIAR RECALL</h1>
					</button>
			</div>
			: (numA === 8) ? 
			<div className="d-footer-result">
				<div className="df-result-alert">
					<img className="dfr-reaction" src={Yay} alt=""/>
					<p className="dfr-reaction_text">Parabéns!</p>
				</div>
				<h1 className="dfr-text">Você não esqueceu nenhum flashcard! </h1>
				<h1 className="df-text">
					{result}
					</h1>
				<div className="df-ans-imgs">
					{ansImg.map((ai, index) => {
						return <img key={index} className="df-ans-img" src={ai} alt=""/>
					})}
				</div>
				<button className="btn-reset" onClick={Reset}>
						<h1 className="btnr-text">REINICIAR RECALL</h1>
				</button>
			</div> : 
			<div className="d-footer">
				<h1 className="df-text">
					{result}
					</h1>
				<div className="df-ans-imgs">
					{ansImg.map((ai, index) => {
						return <img key={index} className="df-ans-img" src={ai} alt=""/>
					})}
				</div>
			</div>}
		</>
	)
}

export default Result;