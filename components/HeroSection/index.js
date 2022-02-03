import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Items, Image, Cards } from "./Data";

import {
	HeroSectionWrapper,
	HeroSectionContainer,
	HeroCardBox,
	HeroBoxTitle,
	HeroContainerTitle,
	HeroContainerDescriptionBox,
	HeroContainerDescription,
	HeroContainerButton,
	HeroButtonLink,
	HeroContainerImage,
	HeroImage,
	HeroImageContentCard,
	HeroImageButton,
	HeroImageTitleCard,
	HeroImageDescriptionBox,
	HeroImageText,
	HeroButtonLoader,
	HeroButtonBox,
	ServiceWrapper,
	ServiceSpanTitle,
	ServiceHeaderTitle,
	ServiceContainerTitle,
} from "./Section.style";
import Service from "../Service";


function HeroSection() {
	const [showmore, setShowmore] = useState(5);
	const Loadless = () => {
		setShowmore(showmore + showmore);
	};
	const slice = Image.slice(0, showmore);
	
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<HeroSectionWrapper>
			<HeroSectionContainer>
				<Slider {...settings}>
					{Items.map((item, index) => (
						<HeroCardBox key={index}>
							<HeroBoxTitle>
								<HeroContainerTitle>{item.title}</HeroContainerTitle>
							</HeroBoxTitle>
							<HeroContainerDescriptionBox>
								<HeroContainerDescription>
									{item.dicreption}
								</HeroContainerDescription>
							</HeroContainerDescriptionBox>
							<HeroContainerButton>
								<HeroButtonLink to='/'>Get a Free Proposal</HeroButtonLink>
								<HeroButtonLink to='/'>
									How It Work <i class='fas fa-play'></i>
								</HeroButtonLink>
							</HeroContainerButton>
						</HeroCardBox>
					))}
				</Slider>
			</HeroSectionContainer>
			{/* ====================IMAGE SECTION================== */}
			<HeroContainerImage>
				{slice.map((item, index) => (
					<HeroImage src={item.url} />
				))}

				<HeroImageContentCard>
					<HeroImageButton to='/'><i class="fab fa-hotjar"></i>FEATURED PROJECTS</HeroImageButton>
					<HeroImageTitleCard>Product That Tells A Story</HeroImageTitleCard>
					<HeroImageDescriptionBox>
						<HeroImageText>
							If people love your brand story, 15% will buy it immediately, and
							55% will buy it in future. That’s why we develop products that
							deliver unmatched experience.
						</HeroImageText>
					</HeroImageDescriptionBox>
				</HeroImageContentCard>
			</HeroContainerImage>
			<HeroButtonBox>
				<HeroButtonLoader onClick={Loadless}>
					View All Projects
				</HeroButtonLoader>
			</HeroButtonBox>
			<Service />

		</HeroSectionWrapper>
	);
}

export default HeroSection;
