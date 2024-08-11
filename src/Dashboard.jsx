
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Dash.css";

const Dashboard = () => {
	const location = useLocation(); 
	const navigate = useNavigate();

	const [patientData, setPatientData] = useState({
		name: "John Doe",
		totalSteps: 5000,
		heartRate: 72,
		bloodPressure: "120/80",
	});

	const handleNavigation = (path) => {
		navigate(path);
	};

	const handleLogout = () => {
        let x = confirm("Do you want to logout?")
        if(x){
            navigate("/");
        }
	};
	const isActive = (path) => location.pathname === path;

	return (
		<div className="Dashboard">
			<header>
				<nav>
					<ul className="nav-lists">
						<li className={isActive("/dashboard") ? "active" : ""}>
							<button onClick={() => handleNavigation("/dashboard")}>
								Dashboard
							</button>
						</li>
					
						<li className={isActive("/reports") ? "active" : ""}>
							<button onClick={() => handleNavigation("/report")}>
								Reports
							</button>
						</li>
						<li className={isActive("/profile") ? "active" : ""}>
							<button onClick={() => handleNavigation("/profile")}>
								Profile
							</button>
						</li>
						<li className={isActive("/medicine-search") ? "active" : ""}>
							<button onClick={() => handleNavigation("/medicine-search")}>
								Medicine Search
							</button>
						</li>
						<li>
							<button onClick={handleLogout}>Logout</button>
						</li>
					</ul>
					<div className="search-container">
						<input
							type="text"
							placeholder="Search..."
						/>
					</div>
				</nav>
			</header>
			<main>
				<div className="dashboard-content">
					<h1>Doctor Overview</h1>
					<div className="patient-data">
						<h2>{patientData.name}</h2>
						<div className="metric">
							<p>Total Steps:</p>
							<span>{patientData.totalSteps}</span>
						</div>
						<div className="metric">
							<p>Heart Rate:</p>
							<span>{patientData.heartRate} bpm</span>
						</div>
						<div className="metric">
							<p>Blood Pressure:</p>
							<span>{patientData.bloodPressure}</span>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Dashboard;
