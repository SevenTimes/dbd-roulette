import './App.css';
import Survivor from './Components/Survivor/Survivor';
import Killer from './Components/Killer/Killer';

const App = () => {
	return (
		<div className="App">
			<h1>Hello World!</h1>
			{/* <Survivor /> */}
			<Killer />
		</div>
	);
};

export default App;
