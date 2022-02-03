import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

import {
	FooterWrapper,
	SectionFooterBackground,
	FooterTitleBox,
	FooterHeader,
	FooterSpan,
	FooterNavBottomBox,
	FooterTitleBottom,
	FooterBottomLinks,
	FooterLinks,
	TitleBottomBox,
	FooterContainerIcons,
	FooterLinkIcons,
	// SHAPES
	CircleShapeDesignOne,
	CircleShapeDesignTwo,
	CircleShapeDesignThree,
} from "./Footer.style";
function index() {
	return (
		<FooterWrapper>
			{/* ================FOOTER SECTION=============== */}
			<SectionFooterBackground>
				<FooterTitleBox>
					<FooterHeader>Not just another Agency.</FooterHeader>
					<FooterSpan>
						Behold the power of innovation and skyrocket your business with a
						true Digital agency.
					</FooterSpan>
				</FooterTitleBox>
				<FooterNavBottomBox>
					<TitleBottomBox>
						<FooterTitleBottom to='/'>Deigagny</FooterTitleBottom>
					</TitleBottomBox>
					<FooterBottomLinks>
						<FooterLinks to='/'>Home</FooterLinks>
						<FooterLinks to='courses'>Courses</FooterLinks>
						<FooterLinks to='admission'>Admission</FooterLinks>
						<FooterLinks to='career'>Career</FooterLinks>
					</FooterBottomLinks>
					<FooterContainerIcons>
						<FooterLinkIcons to='/'>
							<FaFacebookF />
						</FooterLinkIcons>
						<FooterLinkIcons to='/'>
							<FaTiktok />
						</FooterLinkIcons>
						<FooterLinkIcons to='/'>
							<FaGithub />
						</FooterLinkIcons>
						<FooterLinkIcons to='/'>
							<FaLinkedinIn />
						</FooterLinkIcons>
						<FooterLinkIcons to='/'>
							<FaSnapchatGhost />
						</FooterLinkIcons>
						<FooterLinkIcons to='/'>
							<AiOutlineGoogle />
						</FooterLinkIcons>
					</FooterContainerIcons>
				</FooterNavBottomBox>
			</SectionFooterBackground>
			<CircleShapeDesignOne></CircleShapeDesignOne>
			<CircleShapeDesignTwo></CircleShapeDesignTwo>
			<CircleShapeDesignThree></CircleShapeDesignThree>
		</FooterWrapper>
	);
}

export default index;
