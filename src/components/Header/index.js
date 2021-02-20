import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import MetroTransit from '../../assets/images/MetroTransitLogo.svg'
const NavBar = Styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
      max-width: 540px;
  }
  @media (min-width: 768px) {
      max-width: 720px;
  }
  @media (min-width: 992px) {
      max-width: 960px;
  }
  @media (min-width: 1200px) {
      max-width: 1140px;
  }
`
const MetroTransitLogo = Styled.img`
  display: inline-block;
  padding-top: 0.33594rem;
  padding-bottom: 0.33594rem;
  margin-right: 1rem;
  font-size: 1.09375rem;
  line-height: inherit;
  white-space: nowrap;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`
const NavigationLinks = Styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
   margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

const Header = (props) => (
  <div>
    <NavBar>
      <MetroTransitLogo src={MetroTransit} />
      <NavigationLinks>
             <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sample">Sample</Link>
       
      </NavigationLinks>
    </NavBar>
  </div>
)

Header.propTypes = {

}

export default Header
