

import React, { useState } from "react";
import "./MedicineSearch.css";
import { useNavigate } from "react-router-dom";

const medicines = [
	{
		id: 1,
		name: "Aspirin",
		description: "Used to reduce pain and inflammation.",
	},
	{ id: 2, name: "Paracetamol", description: "Used to treat fever and pain." },
	{
		id: 3,
		name: "Ibuprofen",
		description: "Used to reduce fever and treat pain.",
	},
	{
		id: 4,
		name: "Amoxicillin",
		description: "An antibiotic used to treat bacterial infections.",
	},
	{
		id: 5,
		name: "Amoxicillin",
		description: "An antibiotic used to treat bacterial infections.",
	},{
		id: 6,
		name: "Amoxicillin",
		description: "An antibiotic used to treat bacterial infections.",
	},{
		id: 7,
		name: "Amoxicillin",
		description: "An antibiotic used to treat bacterial infections.",
	},
];

function MedicineSearch() {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredMedicines, setFilteredMedicines] = useState(medicines);

	const navigate = useNavigate();

	const handleNavigation = (path) => {
		navigate(path);
	};

	const handleLogout = () => {
        let x = confirm("Do you want to logout?")
        if(x){
            navigate("/");
        }
	};
	const handleSearchChange = (e) => {
		const value = e.target.value;
		setSearchTerm(value);
		if (value) {
			const results = medicines.filter((medicine) =>
				medicine.name.toLowerCase().includes(value.toLowerCase()),
			);
			setFilteredMedicines(results);
		} else {
			setFilteredMedicines(medicines);
		}
	};

	return (
		<>
		
			<header>
				<nav>
					<ul className="nav-lists">
						<li>
							<button onClick={() => handleNavigation("/dashboard")}>
								Dashboard
							</button>
						</li>
						
						<li>
							<button onClick={() => handleNavigation("/report")}>
								Reports
							</button>
						</li>
						<li>
							<button onClick={() => handleNavigation("/profile")}>
								Profile
							</button>
						</li>
						<li>
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
			<div className="medicine-search-container">
				<h1>Medicine Search</h1>
				<input
					type="text"
					value={searchTerm}
					onChange={handleSearchChange}
					placeholder="Search for medicines..."
					className="search-input"
				/>
				<ul className="medicine-list">
					{filteredMedicines.map((medicine) => (
						<li
							key={medicine.id}
							className="medicine-item"
						>
							<h3>{medicine.name}</h3>
							<p>{medicine.description}</p>
						</li>
					))}
					{filteredMedicines.length === 0 && (
						<li className="no-results">No medicines found.</li>
					)}
				</ul>
			</div>
		</>
	);
}

export default MedicineSearch;
