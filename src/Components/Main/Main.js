import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
	return (
		<div className="main">
			<h2>CHOOSE YOUR SIDE</h2>
			<nav>
				<div className="select-survivor">
					<Link to="/survivor">
						<img src="./Assets/survivor.png" alt="survivor selection" />
					</Link>
					<h3>SURVIVOR</h3>
				</div>
				<div className="divider"></div>
				<div className="select-killer">
					<Link to="/killer">
						<img src="./Assets/killer.png" alt="killer selection" />
					</Link>
					<h3>KILLER</h3>
				</div>
			</nav>
		</div>
	);
};

export default Main;
