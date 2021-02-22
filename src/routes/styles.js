import { FaWifi } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'
import NextTripImg from '../assets/images/nextrip.jpg'

export const PageContainer = styled.section`
margin-right: auto;
margin-left: auto;
max-width: 720px;
padding-right: 0;
padding-left: 0;
`

export const DivFullWidth = styled.div`
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%;
    overflow-x: hidden;
`

export const rotate = keyframes`
  0% { fill: gray; }
  100% { fill: blue; }
`

export const StyledWifi = styled(FaWifi)`
  animation-name: ${rotate};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  margin:auto;
`

export const StopDescription = styled.div`
      display: flex;
      padding-top: 20px;
      margin-bottom: 20px;
      margin-top: 1rem!important;
`
export const SelectContainer = styled.fieldset`
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    min-width: 992px !important;
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
export const NextTripImage = styled.div`
    background-size: cover;
    background-position: 90%;
    background-repeat: no-repeat;
    height: 10rem;
    width: 100%;
    background-image: url(${NextTripImg});
    @media (min-width: 768px) {
        height: 18rem;
    }
    @media (min-width: 992px) {
        height: 17.2rem;
    }
    @media (min-width: 1200px) {
        height: 20rem;
    }
`

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: transparent;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 0;
`

export const CustomSelect = styled.div`
    padding-top: 25px
`
