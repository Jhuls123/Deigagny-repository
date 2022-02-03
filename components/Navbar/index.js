import React from "react";
import {
	NavbarContainer,
	NavbarTitleLinks,
	NavbarContainerLinks,
	NavbarLinks,
	NavbarButtonLink,
} from "./Navbar.style";
function Navbar() {
	return (
		<NavbarContainer>
			<NavbarTitleLinks to='/'>Deigagny</NavbarTitleLinks>
			<NavbarContainerLinks>
				<NavbarLinks to='/'>Home</NavbarLinks>
				<NavbarLinks to='projects'>Projects</NavbarLinks>
				<NavbarLinks to='courses'>Courses</NavbarLinks>
				<NavbarLinks to='admission'>Admission</NavbarLinks>
				<NavbarLinks to='about'>About us</NavbarLinks>
				<NavbarLinks to='blog'>Blog</NavbarLinks>
				<NavbarLinks to='career'>Career</NavbarLinks>
				<NavbarButtonLink to='contact'>Contact Us</NavbarButtonLink>
			</NavbarContainerLinks>
		</NavbarContainer>
	);
}

export default Navbar;
