import styled from "styled-components";

const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 8px;
    background-color: rgb(0 0 0 / 47%);
    border-radius: 0.5rem;
    
   
    h1 {
        text-align: center;
        font-size: 36px;
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
    .about-container{
        width: 70%;
        height: 50vh;
        padding: 8px;
    }
    .about-text{
        text-align: justify;
        height: 100vh;
        margin: 8px;
    }

    li{
        list-style: none;
        margin: 16px;
    }

    a{
        color: #fff;
        margin-right: 16px;
    }

    span{
        font-size: 1.5rem;
    }
`
const ImgJose = styled.div`
    margin: 16px;
    border-radius: 3rem;
    float: left;
    width: 50%;
    min-height: 700px;
    padding: 0 10px 0 0;
    background-image: url("./jose-ramalho-no-back.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;

    @media (max-width: 720px) {
    display: none;

    }
`
export { AboutContainer, ImgJose }