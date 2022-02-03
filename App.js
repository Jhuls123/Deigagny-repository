import GlobalStyles from "./GlobalStyles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
