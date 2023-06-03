import styled,{css} from "styled-components"

    const Button = styled.button`
    padding : 0.8rem 2rem;
    border:none;
    border-radius:10px;
    color :#fff;
    cursor : pointer;
    text-decoration: none;
    /* tangkap props variant */

    background-color:${( { variant,theme } ) => theme.colors[variant] || theme.colors['primary']};

    /* menangkap props full dan menampilkan banyak properti css menggnakan css helper */
    ${(props) => props.full && css`
        display: block;
        width: 100%;
    `}
    
    ${({size, theme}) => theme.Fontsize[size] || theme.Fontsize['medium'] }

    /* cara mengguakan hover di styled css component */
    &:hover {
     background-color : ${({variant,theme}) => theme.colorsHover[variant] || theme.colorsHover['primary']}
    }

    `;

export default Button