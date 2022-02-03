import styled from "styled-components";
import { Link } from "react-router-dom";
export const ServiceWrapper = styled.div`
	margin-top: 150px;
	/* background: #bbbb46; */
`;
export const ServiceContainerTitle = styled.div`
	text-align: center;
`;
export const ServiceSpanTitle = styled.span`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 28px;
	line-height: 29px;
	color: #146ff7;
`;
export const ServiceHeaderTitle = styled.h2`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 54px;
	line-height: 70px;
	color: #10132e;
	margin-top: 10px;
`;
export const ServiceSliderContainer = styled.div`
	.slick-next:before {
		content: "";
	}
	.slick-prev:before {
		content: "";
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
export const ServiceSlideDiv = styled.div`
	text-align: center;
	width: 270px;
	height: 292px;
	background: #ffffff;
	box-shadow: 0px 0px 6px 2px rgba(16, 19, 46, 0.08);
	border-radius: 8px;
	padding: 49px 24px;
	margin-top: 40px;
`;
export const ServiceIconBorder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	border: 1px solid #146ff7;
	margin: auto;
`;
export const ServiceSliderIcon = styled.span`
	/* text-align: center; */
	margin-top: auto;
	font-size: 30px;
	color: #146ff7;
`;
export const ServiceSliderTitle = styled.h1`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 23px;
	color: #10132e;
	margin-top: 30px;
	margin-bottom: 10px;
`;
export const ServiceSliderDesc = styled.p`
	font-family: Epilogue;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 16px;
	text-align: center;
	color: #10132e;
	width: 25ch;
`;
// =================SECTION COURSE=====================
export const SectionCourseContainer = styled.div`
	margin-top: 250px;
	height: 521px;
`;
export const CourseContainerTitle = styled.div`
	text-align: center;
`;
export const CourseSpanTitle = styled.span`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 28px;
	line-height: 29px;
	color: #146ff7;
`;
export const CourseHeaderTitle = styled.h1`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 54px;
	line-height: 70px;
	color: #10132e;
	margin-top: 10px;
`;
export const CourseCardFlex = styled.div`
	margin-top: 40px;
	display: flex;
	gap: 30px;
`;
export const CourseCardLinks = styled.div`
	flex: 1;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;
export const CourseLinksBox = styled.div`
	padding: 31px 50px;
	text-align: center;
	border: 1px solid rgba(125, 127, 140, 0.56);
	cursor: pointer;
	transition: all 200ms ease;
	&:hover {
		background: #146ff7;
	}
	&:hover * {
		color: #fff;
	}
`;
export const CourseLinkIcon = styled.span`
	color: #10132e;
	font-size: 30px;
`;
export const CourseLinkTitle = styled.p`
	text-align: center;
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 20px;
	color: #10132e;
	margin-top: 17px;
`;

export const CourseCardDesignBox = styled.div`
	flex: 1;
	padding: 40px;
	background: rgba(20, 111, 247, 0.08);
`;
export const CourseCardDesignTitle = styled.h1`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 28px;
	line-height: 29px;
	color: #10132e;
	margin-bottom: 15px;
`;
export const CourseCardDesignDesc = styled.p`
	font-family: Epilogue;
	font-style: normal;
	font-weight: normal;
	font-size: 17px;
	line-height: 22px;
	color: #10132e;
	margin-bottom: 20px;
`;
export const CourseCardDesignTextLink = styled(Link)`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 23px;
	color: #146ff7;
	text-decoration: none;
	transition: opacity 200ms ease;
	&:hover {
		opacity: 0.8;
	}
`;
export const CourseAdmissionBox = styled.div`
	width: 323px;
	height: 49px;
	text-align: center;
	background: #10132e;
	border-radius: 0px 30px 30px 0px;
	margin-top: 25px;
	display: flex;
`;
export const CourseAdmissonSpanContent = styled.span`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 23px;
	color: #e5e5e5;
	margin: auto;
	display: flex;
	align-items: center;
	& svg {
		font-size: 30px;
		margin-right: 11px;
	}
`;
// ===============EXPERTISE SECTION=================
export const SectionExpertiseWrapper = styled.div`
	margin-top: 160px;
	height: minmax(100vh, 1200px);
	/* background: red; */
`;
export const SectionExpertiseContentBox = styled.div`
	text-align: center;
`;
export const SectionExperiseSpan = styled.span`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 28px;
	line-height: 29px;
	color: #146ff7;
`;
export const SectionExperiseHeader = styled.h1`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 54px;
	line-height: 70px;
	color: #10132e;
	margin-top: 10px;
`;
export const SectionExpertiseDataContainer = styled.div`
	margin-top: 40px;
	/* background: yellow; */
	width: min(100%, 1200px);
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 30px;
`;
export const SectionDataBox = styled.div`
	/* kEYHOLDER */
	border-radius: 8px 8px 0px 0px;
	/* background: red; */
	transition: all .3s ease;

	position: relative;
	&:hover img {
		width: 202px;
		border-radius: 8px 0px 0px 0px;
	}
	&:hover {
		color: #fff;
		background: linear-gradient(187.39deg, #6193de 1.91%, #146ff7 91.53%);
		box-shadow: 0px 0px 15px 1px rgba(16, 19, 46, 0.06);
		border-radius: 8px;
	}
	&:hover span {
		color: #fff;
	}
	&:hover h1 {
		color: #fff;
	}
	&:hover svg {
		opacity: 1;
		color: #fff;
	}
`;
export const SectionDataImage = styled.img`
	display: block;
	width: 100%;
	height: 230px;
	object-fit: cover;
	border-radius: 8px 8px 0px 0px;
	transition: all 0.4s ease;
`;
export const SectionIconBox = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: calc(100% - 200px);
	height: 230px;
	padding: 38px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	& svg {
		opacity: 0;
	}
`;
export const SectionRightSideIcons = styled(Link)`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 23px;
	color: #e5e5e5;
	text-decoration: none;
	transition: all .3s ease;
	&:hover svg{
		color: #0061FF;
		transform: scale(1.2);
	}
`;

export const SectionExpertiseContent = styled.div`
	padding: 20px;
`;
export const SectionExpertiseTitle = styled.span`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 16px;
	color: #146ff7;
`;
export const SectionExpertiseName = styled.h1`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 23px;
	color: #10132e;
	margin-top: 15px;
`;
export const SectionExpertiseButtonBox = styled.div`
	margin-top: 40px;
	display: flex;
`;
export const SectionExpertiseButton = styled.button`
	width: 194px;
	height: 58px;
	cursor: pointer;
	font-family: DM Sans;
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 22px;
	color: #146ff7;
	margin: auto;
	border-radius: 8px;
	border: 1px solid #146ff7;
	transition: all 200ms ease;
	&:hover {
		color: #fff;
		background-color: #146ff7;
	}
	&:active {
		transform: scale(0.99);
	}
`;
