import styled from "styled-components";

const TechnologiSection = styled.div`
    display: flex;
    flex-flow: row wrap;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.47);
    border-radius: 0.5rem;
   // background-image: url("./bg-new.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    ul{
        text-decoration: none;
        text-align: start;
    }

    @media (max-width: 720px) {
        background-image: none;
    }
`

export { TechnologiSection }