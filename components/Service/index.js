import React, { useState } from "react";
import Footer from "../Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Cards, Items, Data } from "./Data";
import { AiOutlineAndroid } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

import {
	ServiceContainerTitle,
	ServiceHeaderTitle,
	ServiceSpanTitle,
	ServiceWrapper,
	ServiceSliderContainer,
	ServiceSlideDiv,
	ServiceIconBorder,
	ServiceSliderIcon,
	ServiceSliderTitle,
	ServiceSliderDesc,
	// COURSE SECTION
	SectionCourseContainer,
	CourseContainerTitle,
	CourseSpanTitle,
	CourseHeaderTitle,
	CourseCardFlex,
	CourseCardLinks,
	CourseCardDesignBox,
	CourseLinksBox,
	CourseLinkIcon,
	CourseLinkTitle,
	CourseCardDesignTitle,
	CourseCardDesignDesc,
	CourseCardDesignTextLink,
	CourseAdmissionBox,
	CourseAdmissonSpanContent,
	// EXPERTISE SECTION
	SectionExpertiseWrapper,
	SectionExpertiseContentBox,
	SectionExperiseSpan,
	SectionExperiseHeader,
	SectionExpertiseDataContainer,
	SectionDataBox,
	SectionDataImage,
	SectionExpertiseContent,
	SectionExpertiseTitle,
	SectionExpertiseName,
	SectionExpertiseButtonBox,
	SectionExpertiseButton,
	SectionIconBox,
	SectionRightSideIcons,
} from "./Service.style";
import Testimonial from "../Testimonial";

function Service() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const [showmore, setShowmore] = useState(4);
	const slice = Data.slice(0, showmore);
	const LoadeData = () => {
		setShowmore(showmore + showmore);
	};
	return (
		<ServiceWrapper>
			<ServiceContainerTitle>
				<ServiceSpanTitle>Our Service</ServiceSpanTitle>
				<ServiceHeaderTitle>Awesome Service</ServiceHeaderTitle>
			</ServiceContainerTitle>
			<ServiceSliderContainer>
				<Slider {...settings}>
					{Cards.map((card, index) => (
						<ServiceSlideDiv>
							<ServiceIconBorder>
								<ServiceSliderIcon>{card.icon}</ServiceSliderIcon>
							</ServiceIconBorder>
							<ServiceSliderTitle>{card.title}</ServiceSliderTitle>
							<ServiceSliderDesc>{card.desc}</ServiceSliderDesc>
						</ServiceSlideDiv>
					))}
				</Slider>
			</ServiceSliderContainer>
			{/* =========COURSE SECTION============== */}
			<SectionCourseContainer>
				<CourseContainerTitle>
					<CourseSpanTitle>Our Courses</CourseSpanTitle>
					<CourseHeaderTitle>Top Courses For You</CourseHeaderTitle>
				</CourseContainerTitle>
				<CourseCardFlex>
					<CourseCardLinks>
						{Items.map((list, index) => (
							<CourseLinksBox key={index}>
								<CourseLinkIcon>{list.icon}</CourseLinkIcon>
								<CourseLinkTitle>{list.title}</CourseLinkTitle>
							</CourseLinksBox>
						))}
					</CourseCardLinks>
					<CourseCardDesignBox>
						<CourseCardDesignTitle>UI/UX Design</CourseCardDesignTitle>
						<CourseCardDesignDesc>
							This course UX & UI Design is designed for those people, who wants
							to design anything to keep users on first priority and working on
							to make them happy. In our course, we will guide you for complete
							website UI & Mobile UI based on User Experience. You will learn
							what is a user need, How can we solve user’s problem by web
							application & also by mobile application.
						</CourseCardDesignDesc>
						<CourseCardDesignTextLink to='/'>
							Read More
						</CourseCardDesignTextLink>
						<CourseAdmissionBox>
							<CourseAdmissonSpanContent>
								<AiOutlineAndroid />
								Admission Going on
							</CourseAdmissonSpanContent>
						</CourseAdmissionBox>
					</CourseCardDesignBox>
				</CourseCardFlex>
				{/* ==========EXPERTISE SECTION============= */}
				<SectionExpertiseWrapper>
					<SectionExpertiseContentBox>
						<SectionExperiseSpan>Team Members</SectionExperiseSpan>
						<SectionExperiseHeader>Our Expertise</SectionExperiseHeader>
					</SectionExpertiseContentBox>
					<SectionExpertiseDataContainer>
						{slice.map((data, index) => (
							<SectionDataBox key={index}>
								<SectionDataImage src={data.url} />
								<SectionIconBox>
									<SectionRightSideIcons to="/">
										<FaFacebookF />
									</SectionRightSideIcons>
									<SectionRightSideIcons to='/'>
										<FaTwitter />
									</SectionRightSideIcons>
									<SectionRightSideIcons to='/'>
										<GrInstagram />
									</SectionRightSideIcons>
									<SectionRightSideIcons to='/'>
										<FaLinkedinIn />
									</SectionRightSideIcons>
								</SectionIconBox>
								<SectionExpertiseContent>
									<SectionExpertiseTitle>{data.title}</SectionExpertiseTitle>
									<SectionExpertiseName>{data.name}</SectionExpertiseName>
								</SectionExpertiseContent>
							</SectionDataBox>
						))}
					</SectionExpertiseDataContainer>
				</SectionExpertiseWrapper>
				<SectionExpertiseButtonBox>
					<SectionExpertiseButton onClick={LoadeData}>
						View All Members
					</SectionExpertiseButton>
				</SectionExpertiseButtonBox>
				<Testimonial />
				<Footer />
			</SectionCourseContainer>
		</ServiceWrapper>
	);
}

export default Service;
