
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"; 

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
    });
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleSave = () => {
        setIsEditing(false);
        alert("Profile saved");
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        let x = confirm("Do you want to logout?")
        if(x){
            navigate("/");
        }
	};

    return (
        <>
            <div className="profile-container">
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
                <div className="profile-content">
                    <img
                        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                        alt="Profile"
                        className="profile-picture"
                    />
                    {isEditing ? (
                        <div className="edit-profile">
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
                            <button onClick={handleSave} className="save-button">
                                Save
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="cancel-button"
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <div className="view-profile">
                            <h2>{profile.name}</h2>
                            <p>{profile.email}</p>
                            <button onClick={() => setIsEditing(true)} className="edit-button">
                                Edit Profile
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Profile;
