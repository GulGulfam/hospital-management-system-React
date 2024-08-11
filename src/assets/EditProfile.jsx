/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const EditProfile = () => {
	const [profile, setProfile] = useState({
		name: "John Doe",
		email: "john.doe@example.com",
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProfile((prevProfile) => ({
			...prevProfile,
			[name]: value,
		}));
	};

	const handleSave = () => {
		// Simulate saving the profile data (e.g., API call)
		alert("Profile saved");
		navigate("/profile"); // Redirect to profile page after saving
	};

	const handleCancel = () => {
		navigate("/profile"); // Redirect to profile page without saving
	};

	return (
		<div className="profile-container">
			<h1>Edit Profile</h1>
			<div>
				<input
					type="text"
					name="name"
					value={profile.name}
					onChange={handleChange}
					placeholder="Name"
				/>
				<input
					type="email"
					name="email"
					value={profile.email}
					onChange={handleChange}
					placeholder="Email"
				/>
				<button onClick={handleSave}>Save</button>
				<button onClick={handleCancel}>Cancel</button>
			</div>
		</div>
	);
};

export default EditProfile;
