import styled from "styled-components";

/* Add a black background color to the top navigation */
const TopNav = styled.div`
    width: 100%;
   
    background-color: #333;
    overflow: hidden;

/* Style the links inside the navigation bar */
    a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
/* Change the color of links on hover */
  a:hover {
    background-color: #ddd;
    color: black;
  }
/* Add a color to the active/current link */
  a.active {
    background-color: var(--primary-color);
    color: white;
  }

  :root{
    --primary-color: #da5e53;
  }
`


export{ TopNav }