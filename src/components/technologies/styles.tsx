import styled from "styled-components";

const TechnologiSection = styled.div`
    display: flex;
    flex-flow: row wrap;
    height: 100vh;
    margin: 36px;
    background-color: rgb(73 42 54);
    border-radius: 0.5rem;
 
    .android-logo{
        background-image: url("./android-logo.png");
        width: 100%;
        height: 50vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    ul{
        text-decoration: none;
        text-align: start;
    }
`
const Colum50 = styled.div`
    width: 50%;
    padding: 16px;
    
    
    

@media (max-width: 1366px) {
    width: 100%;
    height: 10px;
}
`
export { TechnologiSection, Colum50 }