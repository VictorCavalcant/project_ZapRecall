import "../styles/homepage.css";
import Logo from "../assets/img/logo.png"

const HomePage = (props) => {

	let value = true;
	const {isVisible, SetMeta} = props;

	function hideScreen() {
		value = false;
		isVisible(value);
	}

	const Zapmeta = (e) => {
		SetMeta(parseInt(e.target.value))
	}

	return (
		<div className="h-container">
          <img className="logo" src={Logo} alt=""/>
          <h1 className="title">ZapRecall</h1>
					<input className="input-zap" type="number" placeholder="Digite sua meta de zaps" onChange={Zapmeta}></input>
          <button className="start-btn" onClick={hideScreen}>Iniciar Recall!</button>
    </div>
	) 
}

export default HomePage;