import "./App.css";
import "./styles/output.css";
import {MoonPayBuyWidget} from "@moonpay/moonpay-react";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
	return (
		<BrowserRouter basename='/'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
			</Routes>
			<MoonPayBuyWidget
				variant='overlay'
				baseCurrencyCode='usd'
				baseCurrencyAmount='100'
				defaultCurrencyCode='eth'
				visible={false}
			/>
		</BrowserRouter>
	);
}

export default App;
