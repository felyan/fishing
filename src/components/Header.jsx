import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Container>
            <Menu> 
                <a href="#">Adatbevitel</a>
                <a href="">Teljes lista</a>
                <a href="">Összes fogás</a>
                <a href="">Győztes(ek)</a>
                <a href="">Átlag felett teljesítők</a>
                <a href="">Nincs fogás</a>
                <a href="">Kilépés</a>
            </Menu>
        </Container>
  )
}

export default Header


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
  background-color: greenyellow;
`
const Menu = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 20px;
        flex-wrap: no-wrap;
    }
`