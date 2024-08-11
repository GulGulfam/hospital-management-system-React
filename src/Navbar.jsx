
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	const navigate = useNavigate(); 
	const handleLogout = () => {
        let x = confirm("Do you want to logout?")
        if(x){
            navigate("/");
        }
	};
	
	return (
		<header>
			<nav>
				<ul className="nav-lists">
					
				
					<li>
						<Link to="/report">Reports</Link>
					</li>
					<li>
						<a
							onClick={handleLogout}
							href="#"
						>
							Logout
						</a>
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
	);
};

export default Navbar;
