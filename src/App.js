import { Link, Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Link to="/">
				<h1>
					DEAD BY <span className="description-red">RANDOM</span>
				</h1>
			</Link>
			<Outlet />
		</div>
	);
};

export default App;
