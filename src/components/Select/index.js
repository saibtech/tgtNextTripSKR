import {
  array, func, node, object, oneOfType, string
} from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import {
  ArrowContainer, ButtonContainer, ControlsContainer, List, ListItem, SelectContainer, Selection, SelectLabel
} from './styles'

export const Select = ({
  children, items, action, selection, disabled
}) => {
  const [open, setOpen] = useState(false)
  const selectRef = useRef(null)

  const handleClick = (e) => {
    if (selectRef.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const toggle = () => setOpen(!open)

  const chooseSelect = (item) => {
    toggle()
    return item
  }

  return (
    <SelectContainer ref={selectRef} disabled={disabled}>
      {children &&
        <SelectLabel>{children}</SelectLabel>}
      <ControlsContainer>
        <ButtonContainer
          onClick={!disabled ? toggle : undefined}
          disabled={disabled}
          open={open}
        >
          <Selection>{selection}</Selection>
          <ArrowContainer>
            <IoIosArrowDropdownCircle
              height="14px"
              width="14px"
              name="expand"
              style={{
                transition: '.2s', textAlign: 'center', lineHeight: '50%', transform: open ? 'rotate(180deg)' : 'none'
              }}
            />
          </ArrowContainer>
        </ButtonContainer>
        {open
          ? items instanceof Array
            ? (
              <List items={items.length}>
                {
                  items.map((item, i) => <ListItem onClick={() => action(chooseSelect(item))} key={item + i}>{item}</ListItem>)
                }
              </List>
            )
            : (
              <List items={Object.keys(items).length}>
                {
                  Object.keys(items).map((item, i) => <ListItem onClick={() => action(chooseSelect(item))} key={item + i}>{items[item]}</ListItem>)
                }
              </List>
            )
          : ''}
      </ControlsContainer>
    </SelectContainer>
  )
}

Select.propTypes = {
  children: node,
  items: oneOfType([array, object]).isRequired,
  action: func.isRequired,
  selection: string,
  disabled: true
}
export default Select
