import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const TestimonialWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: minmax(250px, auto);
	height: minmax(100vh, 1200px);
	/* background: green; */
	margin-top: 150px;
	gap: 20px;
`;
export const TesttimonialContainerLeftSide = styled.div`
	width: 540px;
	height: minmax(100%, 1200px);
	position: relative;
	.slick-next:before {
		content: "";
	}
	.slick-prev:before {
		content: "";
	}
	.slick-dots {
		position: absolute;
		left: -230px;
		bottom: -61px;
		font-size: 16px;
	}
	.slick-dots li button::before {
		content: "•";
		font-size: 16px;
		color: #10132e;
		opacity: 0.9;
	}
	.slick-dots li.slick-active button:before {
		color: #0ff;
		opacity: 1;
	}
`;

export const TestimonialSliderDivBox = styled.div`
	/* KET HOLDER */
`;
export const SliderDivSpan = styled.span`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 28px;
	line-height: 29px;
	color: #146ff7;
`;
export const SliderDivHeader = styled.h1`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 54px;
	line-height: 55px;
	color: #10132e;
	margin-top: 10px;
`;
export const SliderDivDesc = styled.p`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	color: #10132e;
	margin-top: 15px;
	padding: 0 10px;
`;
export const TesTimonialContainerRightSide = styled.div`
	background: #ecf3fe;
	border-radius: 8px;
	padding: 33px 50px;
	position: relative;
`;
export const RightsideContent = styled.div`
	width: 100%;
`;
export const RightsideContentDesc = styled.p`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	color: #10132e;
`;
export const RightsideContentHeader = styled.h2`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 18px;
	color: #10132e;
	margin-top: 18px;
	margin-bottom: 14px;
`;
export const RightsideContentSpan = styled.span`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 14px;
	color: #10132e;
`;
export const CardTestimonialImage = styled.img`
	position: absolute;
	top: -20px;
	left: -20px;
`;
export const TesTimonialBorderBox = styled.div`
	width: 503px;
	height: 272px;
	border: 1px solid #a2a2a2;
	box-sizing: border-box;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: end;
	position: absolute;
	top: 80px;
	left: 50px;
	z-index: -1;
`;
export const TesTimonialBorderContent = styled.div`
	/* background: red; */
	width: max-content;
	margin-left: 31px;
	margin-bottom: 24px;
`;
export const TestimonialNameHeader = styled.h2`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 18px;
	color: #10132e;
	margin-bottom: 14px;
`;
export const TestimonialNamespan = styled.span`
	font-family: Epilogue;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 14px;
	color: #10132e;
`;
