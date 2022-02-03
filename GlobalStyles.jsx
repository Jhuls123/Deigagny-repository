import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Eagle+Lake&family=Epilogue:wght@500;600&family=Inter:wght@100;200;300;400;600;700&family=Neucha&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
	    padding: 51px 135px;
        position: relative;
        overflow-x: hidden;
    }
`;
export default GlobalStyles;
