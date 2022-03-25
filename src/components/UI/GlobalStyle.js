import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        color : black;
        font-family: 'Playfair Display', serif;
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800;1,900');

    }
    h1, h2, h3, h4 {
        letter-spacing: 1px;
    }
    h1{
        font-size: 4rem;
    }
    h2{
        font-size: 3rem;
    }
    h3{
        font-size: 2.8rem;
    }
    p{
        letter-spacing: 1px;
        line-height: 1.5rem;
    }
    a{
        text-decoration: none;
    }
    input{
        margin: 0;

    }
`;

export default GlobalStyle;