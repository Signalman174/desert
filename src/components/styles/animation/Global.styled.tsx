// import { FontGlobalStyle, styled } from "styled-components";
// import importGoogleFonts from 'import-google-fonts';
import { styled } from "styled-components";


export const FontGlobalStyle =styled.div `
    font-weight: 700;
    font-family: "Inter", serif;
    font-size: 16px;
    color: #000;
    margin: 20px 200px 0 20px;
`

// function importGoogleFonts(createGlobalStyle: <Props extends object>(strings: import("styled-components/dist/types").Styles<Props>, ...interpolations: Array<import("styled-components").Interpolation<Props>>) => React.NamedExoticComponent<import("styled-components").ExecutionProps & Props>, arg1: null, arg2: string[]) {
//   throw new Error("Function not implemented.");
// }
//    @font-face {
//         font-family: 'Inter Bold';
//         font-weight: 700;
//         font-size: 16px;
//         color: #000;
//         src: url(${App.css});
//     }  