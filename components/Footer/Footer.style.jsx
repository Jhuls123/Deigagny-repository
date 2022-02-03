import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const FooterWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: minmax(250px, auto);
	height: minmax(100vh, 1200px);
	/* background: green; */
	margin-top: 150px;
	gap: 20px;
	margin-top: 160px;
	
`;
export const SectionFooterBackground = styled.div`
	width: 100vw;
	height: 540px;
	margin: 0 calc(-50vw + 98%);
	margin-top: 160px;
	background: linear-gradient(
		262.57deg,
		rgba(15, 17, 38, 0.89) -54.49%,
		rgba(15, 17, 38, 0.89) -54.48%,
		#10132e 100%
	);
	display: flex;
	flex-direction: column;
`;
export const FooterTitleBox = styled.div`
	margin: auto;
	/* background: red; */
	text-align: center;
	width: 733px;
`;
export const FooterHeader = styled.h1`
	font-family: Epilogue;
	font-style: normal;
	font-weight: bold;
	font-size: 75px;
	line-height: 77px;
	text-align: center;
	color: #e5e5e5;
	margin-bottom: 25px;
`;
export const FooterSpan = styled.span`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 30px;
	line-height: 40px;
	text-align: center;
	color: #e5e5e5;
`;
export const FooterNavBottomBox = styled.div`
	width: 100%;
	height: 120px;
	background: #10132e;
	padding: 40px 135px;
	display: flex;
	align-items: center;
`;
export const TitleBottomBox = styled.div`
	flex: 15%;
`;
export const FooterTitleBottom = styled(Link)`
	font-family: Eagle Lake;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 39px;
	color: #146ff7;
	text-decoration: none;
`;
export const FooterBottomLinks = styled.div`
	flex: 50%;
	display: flex;
	justify-content: end;
	gap: 30px;
	/* background: red; */
`;
export const FooterLinks = styled(NavLink)`
	font-family: DM Sans;
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 22px;
	color: #e5e5e5;
	text-decoration: none;
	transition: color 200ms ease;

	&:hover {
		color: #146ff7;
	}
	&.active {
		color: #146ff7;
	}
`;
export const FooterContainerIcons = styled.div`
	flex: 35%;
	display: flex;
	justify-content: end;
	gap: 30px;
`;
export const FooterLinkIcons = styled(NavLink)`
	font-family: DM Sans;
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 22px;
	color: #e5e5e5;
	text-decoration: none;
	transition: color 200ms ease;
	&:hover {
		color: #146ff7;
	}
`;
export const CircleShapeDesignOne = styled.div`
	width: 600px;
	height: 600px;
	border-radius: 50%;
	position: absolute;
	top: -225px;
	left: -210px;
	z-index: -3;
	background: linear-gradient(
		180deg,
		rgba(20, 111, 247, 0.15) 0%,
		rgba(88, 153, 252, 0.082) 100%
	);
	filter: blur(30px);
`;
export const CircleShapeDesignTwo = styled.div`
	width: 800px;
	height: 800px;
	border-radius: 50%;
	position: absolute;
	top: 30px;
	right: -404px;
	z-index: -3;
	background: linear-gradient(
		180deg,
		rgba(20, 111, 247, 0.15) 0%,
		rgba(88, 153, 252, 0.082) 100%
	);
	filter: blur(30px);
`;
export const CircleShapeDesignThree = styled.div`
	background: yellow;
	width: 700px;
	height: 700px;
	border-radius: 50%;
	position: absolute;
	top: 1210px;
	right: -400px;
	z-index: -3;
	background: linear-gradient(
		180deg,
		rgba(20, 111, 247, 0.15) 0%,
		rgba(88, 153, 252, 0.082) 100%
	);
	filter: blur(30px);
`;
