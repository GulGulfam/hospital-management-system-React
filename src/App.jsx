
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Report from "./Report";
import Profile from "./Profile";
import MedicineSearch from "./MedicineSearch"; 

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Login />}
				/>
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
				
				<Route
					path="/report"
					element={<Report />}
				/>
				<Route
					path="/profile"
					element={<Profile />}
				/>
				
				<Route
					path="/medicine-search"
					element={<MedicineSearch />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
