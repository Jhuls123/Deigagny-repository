import styled from "styled-components";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
export const HeroSectionWrapper = styled.div`
	/* background-color: green; */
	width: 100%;
	height: min(462px, 1293.47px);
	margin-top: 145px;
`;
export const HeroSectionContainer = styled.div`
	.slick-prev {
		z-index: 10;
	}
	.slick-prev:before {
		content: "\f104";
		font-family: "Font awesome 6 Free";
		font-weight: 900;
		position: absolute;
		top: 80%;
		left: 125%;
		color: #10132e;
	}
	.slick-next:before {
		content: "\f105";
		position: absolute;
		top: 80%;
		right: 125%;
		font-family: "Font awesome 6 Free";
		font-weight: 900;
		color: #10132e;
	}
	.slick-dots li button::before {
		content: "•";
		font-size: 16px;
		color: #10132e;
		margin-top: 20px;
		opacity: 0.9;
	}
	.slick-dots li.slick-active button:before {
		color: #0ff;
		opacity: 1;
	}
`;
export const HeroCardBox = styled.div`
	/* background: #0f0a0a; */
	z-index: -1;
`;
export const HeroBoxTitle = styled.div`
	/* background: red; */
	padding: 0 100px;
`;
export const HeroContainerTitle = styled.h1`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 75px;
	line-height: 117px;
	text-align: center;
	color: #10132e;
	/* background: yellow; */
`;
export const HeroContainerDescriptionBox = styled.div`
	width: 681px;
	height: 66px;
	margin: auto;
	margin-bottom: 20px;
`;
export const HeroContainerDescription = styled.p`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	color: #10132e;
`;
export const HeroContainerButton = styled.div`
	/* background: yellow; */
	height: 100px;
	width: 100%;
	margin: auto;
	display: flex;
	justify-content: center;
	gap: 30px;
`;
export const HeroButtonLink = styled(Link)`
	align-self: center;
	padding: 18px 30px;
	text-decoration: none;
	background: #146ff7;
	border-radius: 8px;
	font-family: DM Sans;
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 22px;
	color: #d8d8da;
	display: flex;
	align-items: center;
	gap: 10px;
	transition: opacity 200ms ease;
	& i {
		display: grid;
		place-items: center;
		width: 20px;
		height: 20px;
		border-radius: 50px;
		font-size: 10px;
		color: #146ff7;
		background: #d8d8da;
	}
	&:hover {
		opacity: 0.9;
	}
	&:active {
        transform: scale(.99);
    }
`;

// ==================================IMAGE SECTION HERE================================
export const HeroContainerImage = styled.div`
	margin-top: 160px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: minmax(250px, auto);
	grid-row-gap: 30px;
	grid-column-gap: 40px;
	background: linear-gradient(360deg, #fffcfc, rgba(255, 253, 253, 0) 30%);
`;

export const HeroImage = styled.img`
	z-index: -1;
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 10px;

	&:nth-of-type(1) {
		grid-column: 1 / span 2;
	}
	&:nth-of-type(2) {
		grid-column: 1 / 3;
	}
	&:nth-of-type(3) {
		grid-column: 3 / 5;
	}
	&:nth-of-type(4) {
		grid-column: 1 / 3;
	}
	&:nth-of-type(5) {
		grid-column: 3 / 5;
	}
	&:nth-of-type(6) {
		grid-column: 1 / 3;
	}
	&:nth-of-type(7) {
		grid-column: 3 / 5;
	}
	&:nth-of-type(8) {
		grid-column: 1 /3;
	}
	&:nth-of-type(9) {
		grid-column: 3 / 5;
	}
`;

export const HeroImageContentCard = styled.div`
	grid-column: 3 / 5;
	grid-row: 1;
`;

export const HeroImageButton = styled.button`
	font-family: DM Sans;
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 22px;
	color: #ffffff;
	text-decoration: none;
	padding: 18px 30px;
	background: #146ff7;
	border-radius: 32px;
	border: none;
	transition: opacity 200ms ease;
	& i {
		color: #F44336;
		margin-right: 12.65px;
	}
	&:hover {
		opacity: 0.9;
	}
	&:active {
        transform: scale(.99);
    }
`;
export const HeroImageTitleCard = styled.h1`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 54px;
	line-height: 70px;
	color: #10132e;
	margin-top: 40px;
	width: 12ch;
`;
export const HeroImageDescriptionBox = styled.div``;
export const HeroImageText = styled.p`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	color: #10132e;
	margin-top: 20px;
	width: 50ch;
`;
export const HeroButtonBox = styled.div`
	display: flex;
`;
export const HeroButtonLoader = styled.button`
	margin: auto;
    cursor: pointer;
	font-family: DM Sans;
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 22px;
	color: #146ff7;
	width: 194px;
	height: 58px;
	border: 1px solid #146ff7;
	border-radius: 8px;
	transition: all 200ms ease;
	&:hover {
		color: #fff;
		background-color: #146ff7;
	}
	&:active {
        transform: scale(.99);
    }
`;
