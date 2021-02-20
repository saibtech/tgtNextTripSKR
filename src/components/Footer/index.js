import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
background-color: #f5f5f4;
padding-top: 30px;
padding-bottom: 30px;
`
const ContactContainer = styled.div`
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
max-width: 540px;

`
const ContactText = styled.p`
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
`

const ContactUs = styled.button`
font-size: 1.25rem!important;
font-weight: 700;
min-width: 220px;
margin-bottom: 1rem;
color: #626462;
position: relative;
border: 2px solid #0097d0;
padding: .5rem 3rem;
cursor: pointer;
`

export const Footer = () => (
  <FooterContainer>
    <ContactContainer>
      <ContactUs>Contact Us</ContactUs>
      <ContactText>612-373-3333</ContactText>
    </ContactContainer>
  </FooterContainer>
)

export default Footer
