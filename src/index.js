import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Survivor from './Components/Survivor/Survivor';
import Killer from './Components/Killer/Killer';
import Main from './Components/Main/Main';
import App from './App';

import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Main />} />
					<Route path="survivor" element={<Survivor />} />
					<Route path="killer" element={<Killer />} />
					<Route path="*" element={<h1>Nothing here!</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
