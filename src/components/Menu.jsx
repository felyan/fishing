import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhishingIcon from '@mui/icons-material/Phishing';

const Menu = () => {  
  const [burgerStatus, setburgerStatus] = useState(false);
    return (
      <Container>
        <Logo/>Horgász Egylet
        <RightMenu>
            <CostumMenu onClick={() => setburgerStatus(true)} />
          </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setburgerStatus(false)} />
          </CloseWrapper>
          <Link to="/">Főoldal</Link>
          <Link to="/fulllist">Résztvevők</Link>
          <Link to="/totalcatching">Összes fogás</Link>
          <Link to="/winner">Győztesek</Link>
          <Link to="/overtheaverage">Átlag felett teljesítők</Link>
          <Link to="/nocatch">Akik nem fogtak semmit</Link>
        </BurgerNav>
      </Container>
  )
}

export default Menu


const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, .5);
  color: white;
`

const Logo = styled(PhishingIcon)`
  font-size: 50px;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: flex-end;
`;

const CostumMenu = styled(MenuIcon)`
  cursor: pointer;
  &:hover, &:active {
        background: rgba(0, 0, 0, 0.1); 
        padding:2px;
        border-radius: 5px;        
        font-size: 30px;
      }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  

    a {
      font-size: 18px;
      font-weight: 400;
      text-transform: uppercase;
      margin-bottom: 30px;

      &:hover, &:active {
        color: white;
        background: rgba(0, 0, 0, 0.1); 
        padding:2px;
        border-radius: 5px;
        border-bottom: .5px solid white;
        font-size: 20px;
      }
    }
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  &:hover, &:active {
        background: rgba(0, 0, 0, 0.1); 
        padding:2px;
        border-radius: 5px;        
        font-size: 30px;
      }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
