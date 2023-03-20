import styled from "styled-components";

const AboutContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    height: 100vh;
    margin: 36px;
    padding: 8px;
    background-color: rgb(21 46 57);
    border-radius: 0.5rem;
    
   
    h1 {
        text-align: center;
        font-size: 36px;
       
        padding-top: 50%;
    }
    h2 {
        font-size: 24px;
        padding-top: 8px;
       
    }
    h3 {
        font-size: 16px;
        padding-top: 8px;
      
    }
    p {
        font-size: 16px;
        line-height: 25px;
        padding-top: 8px;
       
    }
`

const Colum = styled.div`
    width: 33%;

@media (max-width: 1366px) {
    width: 100%;
    height: 10px;

    h1{
        padding-top: 0;
    }
}
`

export { AboutContainer, Colum }