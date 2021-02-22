import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Table from './index'

configure({ adapter: new Adapter() })

describe('Table', () => {
  it('renders Table Header', () => {
    const component = shallow(<Table data={{ columns: ['A', 'B'], data: [{ C: 'C', D: 'D' }] }} />)
    expect(component.find('th')).toHaveLength(2)
    expect(component.find('th').first().text()).toContain('A')
  })
  it('render Table Data', () => {
    const component = shallow(<Table data={{ columns: ['A', 'B'], data: [{ C: 'C', D: 'D' }] }} />)
    expect(component.find('tbody tr')).toHaveLength(1)
    expect(component.find('tbody tr td')).toHaveLength(2)
    expect(component.find('tbody tr td').first().text()).toContain('C')
  })
})
