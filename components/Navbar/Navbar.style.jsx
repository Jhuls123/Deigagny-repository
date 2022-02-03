import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavbarContainer = styled.div`
	height: 58px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* padding: 51px 135px; */
`;
export const NavbarTitleLinks = styled(Link)`
	font-family: "Eagle Lake";
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 39px;
	color: #146ff7;
	cursor: pointer;
	text-decoration: none;


`;
export const NavbarContainerLinks = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	gap: 30px;
`;
export const NavbarLinks = styled(NavLink)`
	font-family: DM Sans;
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 20px;
	color: #10132e;
	text-decoration: none;
	
	&:first-child {
		margin-left: auto;
	}
	&:hover {
		color: #146ff7;
	}
	&.active {
		color: #146ff7;
	}
`;
export const NavbarButtonLink = styled(Link)`
	font-family: DM Sans;
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 22px;
	color: #10132e;
    text-decoration: none;
	padding: 10px 20px;
	border: 1px solid #84b4fb;
    border-radius: 10px;
    margin-left: auto;
	transition: background 200ms ease;

	&:hover {
		color: #fff;
		background-color: #146ff7;
	}
	&:active {
        transform: scale(.99);
    }
`;
