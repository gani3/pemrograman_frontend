import styled from "styled-components"

export const StyledMovie = styled.div`
    margin-bottom: 1rem;
   img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
   }
   h3{
    color: #4361ee;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
   }
   p{
    color: #64748b;
   }
   @media(min-width: 768px){
      flex-basis: 50%;
   }
   @media(min-width : 992px){
    flex-basis: 25%;
    padding: 1rem;
   }
`;

export const StyledNavbar = styled.div`
    background-color: #4361ee;
    padding: 1rem;
    color: #fff;
    nav {
        display: flex;
        flex-direction: column;
    }
    .navbar_item a:hover{
        color: white;
        text-decoration: underline;
    }
    .navbar_brand{
        margin-bottom: 1rem;
        font-size: 2.4rem;
     }
    
    .navbar_list{
        display: flex;
        flex-direction: column;
        list-style: none;
     }

     .navbar_item {
        margin-bottom: 1rem;
     }

     .navbar_item a{
        color: white;
        text-decoration: none;
     }
`;