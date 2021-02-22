import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Select from './index'
import { ButtonContainer, List, ListItem } from './styles'

configure({ adapter: new Adapter() })

describe('Select componeent', () => {
  it('should only render a menu if menu has been toggled open', () => {
    const wrapper = shallow(<Select items={['A', 'B']} />)
    expect(wrapper.find('List')).toHaveLength(0)
    wrapper.find(ButtonContainer).simulate('click', {})
    expect(wrapper.find(List)).toHaveLength(1)
  })
  it('onChange called after selecting', () => {
    const mockSaveFn = jest.fn()
    const wrapper = shallow(<Select items={['A', 'B']} action={mockSaveFn}/>)
    wrapper.find(ButtonContainer).simulate('click', {})

    wrapper.find(ListItem).first().simulate('click', {})
    expect(mockSaveFn).toHaveBeenCalled()
  })
})
