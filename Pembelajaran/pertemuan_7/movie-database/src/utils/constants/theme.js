import { css } from "styled-components"

const theme = {
    colors : {
        primary : "#4361ee",
        secondary : "#B5179e",
        info : "#00C4FF",
        success : "#06D6A0",
        danger : "red",
        warning : "orange"
    },
    colorsHover :{
        primary : "#6DA9E4",
        secondary : "#9A208C",
        success : "#98D8AA",
        danger : "#DF2E38",
        warning : "#EBB02D",
        info : "#97DEFF",
    },
    Fontsize : {
        sm : css`
                font-size:0,8rem;
                padding: 0.2rem 0.5rem ;
                `,
        md : css`
                font-size: 1rem;
                padding: 0.5rem 1rem ;
                `,
        lg : css`
                font-size: 1,3rem;
                padding: 0.5rem 1rem ;
                `
    }
}

export default theme