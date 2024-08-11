/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from './Navbar';
import "./Patient.css";

const Patient = () => {
	const [patients, setPatients] = useState([]);
	const [newPatient, setNewPatient] = useState({
		id: "",
		name: "",
		disease: "",
		level: "",
		symptomsDate: "",
	});
	const [editPatient, setEditPatient] = useState(null);

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewPatient({
			...newPatient,
			[name]: value,
		});
	};

	const handleAddPatient = () => {
		if (
			!newPatient.id ||
			!newPatient.name ||
			!newPatient.disease ||
			!newPatient.level ||
			!newPatient.symptomsDate
		) {
			alert("Please fill out all fields.");
			return;
		}
		setPatients([...patients, newPatient]);
		setNewPatient({
			id: "",
			name: "",
			disease: "",
			level: "",
			symptomsDate: "",
		});
	};

	const handleDeletePatient = (id) => {
		setPatients(patients.filter((patient) => patient.id !== id));
	};

	const handleEditPatient = (patient) => {
		setEditPatient(patient);
	};

	const handleUpdatePatient = () => {
		setPatients(
			patients.map((patient) =>
				patient.id === editPatient.id ? editPatient : patient,
			),
		);
		setEditPatient(null);
	};

	const handleEditInputChange = (e) => {
		const { name, value } = e.target;
		setEditPatient({
			...editPatient,
			[name]: value,
		});
	};

	const handleNavigation = (path) => {
		navigate(path);
	};

	const handleLogout = () => {
		navigate("/");
	};
	return (
		<>
			<div className="dashboard">
				<header>
					<nav>
						<ul className="nav-lists">
							<li>
								<button onClick={() => handleNavigation("/dashboard")}>
									Dashboard
								</button>
							</li>
							<li>
								<button onClick={() => handleNavigation("/patients")}>
									Patients
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
				<div className="Patient">
					<main>
						<h1>Report Management</h1>
						<div className="form-container">
							<div className="add-patient-form">
								<h2>Make New Report</h2>
								<input
									type="text"
									name="id"
									placeholder="ID"
									value={newPatient.id}
									onChange={handleInputChange}
								/>
								<input
									type="text"
									name="name"
									placeholder="Name"
									value={newPatient.name}
									onChange={handleInputChange}
								/>
								<input
									type="text"
									name="disease"
									placeholder="Disease"
									value={newPatient.disease}
									onChange={handleInputChange}
								/>
								<input
									type="text"
									name="level"
									placeholder="Level"
									value={newPatient.level}
									onChange={handleInputChange}
								/>
								<input
									type="date"
									name="symptomsDate"
									placeholder="Symptoms Date"
									value={newPatient.symptomsDate}
									onChange={handleInputChange}
								/>
								<button onClick={handleAddPatient}>Make Report</button>
							</div>

							{editPatient && (
								<div className="edit-patient-form">
									<h2>Edit Patient</h2>
									<input
										type="text"
										name="id"
										placeholder="ID"
										value={editPatient.id}
										onChange={handleEditInputChange}
									/>
									<input
										type="text"
										name="name"
										placeholder="Name"
										value={editPatient.name}
										onChange={handleEditInputChange}
									/>
									<input
										type="text"
										name="disease"
										placeholder="Disease"
										value={editPatient.disease}
										onChange={handleEditInputChange}
									/>
									<input
										type="text"
										name="level"
										placeholder="Level"
										value={editPatient.level}
										onChange={handleEditInputChange}
									/>
									<input
										type="date"
										name="symptomsDate"
										placeholder="Symptoms Date"
										value={editPatient.symptomsDate}
										onChange={handleEditInputChange}
									/>
									<button onClick={handleUpdatePatient}>Update Patient</button>
								</div>
							)}
						</div>

						<div className="patient-list">
							<h2>Report's List</h2>
							<ul>
								{patients.map((patient) => (
									<li key={patient.id}>
											<div>ID: {patient.id}</div>
										<div>Name: {patient.name}</div>
										<div>Disease: {patient.disease}</div>
										<div>Level: {patient.level}</div>
										<div>Symptoms Date: {patient.symptomsDate}</div>
										<button onClick={() => handleEditPatient(patient)}>
											Edit
										</button>
										<button className="d" onClick={() => handleDeletePatient(patient.id)}>
											Delete
										</button>
									</li>
								))}
							</ul>
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default Patient;
