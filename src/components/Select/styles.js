import styled from 'styled-components'
import colors from '../../assets/colors.json'

export const SelectContainer = styled.section`
    position: relative;
    line-height: 16px;
`

export const SelectLabel = styled.p`
    padding: 7px 5px 7px 0;
    font-weight: bold;
    font-size: 23px;
    margin: 0;
    float: left;
    font-family : Lato;
    letter-spacing : 0.26px;
    color : #000000;
    text-align: center;
    line-height: 40px;
`

export const ControlsContainer = styled.div`
    background-color: #f4f4f4;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    float: left;
`

export const ButtonContainer = styled.div`
    display: flex;
    ${(props) => (props.disabled ? `background-color: ${colors.TBA_LIGHTER_GREY}; color: ${colors.TBA_LIGHT_GREY}; cursor: not-allowed;` : '')}
`

export const Selection = styled.p`
    font-family : Lato;
    line-height : 26px;
    font-size: 23px;
    font-weight: bold;
    margin: 0;
    min-width: 540px;
    height: 40px;
    border: 1px solid #999999;
    align-items: center;
    vertical-align: middle;
    padding : 0px 8px 0px 8px;
    text-align: center;
    line-height: 40px;
`

export const ArrowContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border: 1px solid #999999;
    border-left: none;
    width: 28px;
    text-align: center;
`

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 180px;
    ${(props) => props.items >= 7 && 'overflow-y: scroll;'}
    position: absolute;
    z-index: 10;
    background-color: #f4f4f4;
    width: 100%;
    border: 1px solid #999999;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    font-family : Lato;
    line-height : 18px;
    border-top: 0;
    box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.1);
`

export const ListItem = styled.li`
    padding: 0px 8px;
    font-size: 12px;
    font-weight: bold;
    height: 26px;
    line-height: 26px;
    text-align: left;
    vertical-align: middle;
    &:hover {
        background: #61ae34;
        color: white;
    }
`
