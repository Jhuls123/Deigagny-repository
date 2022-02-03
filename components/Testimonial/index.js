import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../../assets/image/profile_1.png";
import { Card } from "../Testimonial/Data";

import {
	TestimonialWrapper,
	TesttimonialContainerLeftSide,
	TestimonialSliderDivBox,
	SliderDivSpan,
	SliderDivHeader,
	SliderDivDesc,
	// RIGHTSIDE
	TesTimonialContainerRightSide,
	RightsideContent,
	RightsideContentDesc,
	RightsideContentHeader,
	RightsideContentSpan,
	CardTestimonialImage,
	TesTimonialBorderBox,
	TestimonialNameHeader,
	TestimonialNamespan,
	TesTimonialBorderContent,
} from "./Testimonial.style";
function Testimonial() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<TestimonialWrapper>
			{/* ================LEFTSIDE BAR================ */}
			<TesttimonialContainerLeftSide>
				<Slider {...settings}>
					{Card.map((list, index) => {
						return (
							<TestimonialSliderDivBox key={index}>
								<SliderDivSpan>{list.title}</SliderDivSpan>
								<SliderDivHeader>{list.body}</SliderDivHeader>
								<SliderDivDesc>{list.desc}</SliderDivDesc>
							</TestimonialSliderDivBox>
						);
					})}
				</Slider>
			</TesttimonialContainerLeftSide>
			{/* ================RIGHTSIDE BAR================ */}
			<TesTimonialContainerRightSide>
				<CardTestimonialImage src={Image} />
				<RightsideContent>
					<RightsideContentDesc>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit
						nisl mauris senectus sit eget viverra nullam. Amet risus donec
						imperdiet maecenas varius commodo dolor. Adipiscing nulla fermentum
						risus, egestas non nisi, tempus.Adipiscing nulla fermentum risus,
						egestas non nisi, tempus.
					</RightsideContentDesc>
					<RightsideContentHeader>Jame Jokovic</RightsideContentHeader>
					<RightsideContentSpan>United State</RightsideContentSpan>
				</RightsideContent>
				<TesTimonialBorderBox>
					<TesTimonialBorderContent>
						<TestimonialNameHeader>Cris Thomas</TestimonialNameHeader>
						<TestimonialNamespan>CEO of Red Button</TestimonialNamespan>
					</TesTimonialBorderContent>
				</TesTimonialBorderBox>
			</TesTimonialContainerRightSide>
		</TestimonialWrapper>
	);
}

export default Testimonial;
