import styled from "styled-components";

const TopNav = styled.div`
.topnav{
    background-color: #333;
    overflow: hidden;
    position: fixed;
    width: 100%;
}
    
a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

a:hover {
  background-color: #ddd;
  color: black;
}

.active {
  background-color: #04AA6D;
  color: white;
}

.icon {
  display: none;
}

@media screen and (max-width: 600px) {
  #tecnologi{
    display: none;
  }
  a:not(:first-child) {display: none;}
  a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  
  .responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
  
`


export { TopNav }