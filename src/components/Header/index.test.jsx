import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Header from './index'

configure({ adapter: new Adapter() })

describe('app', () => {
  it('renders <Header> components', () => {
    const component = shallow(<Header />)
    expect(component).toMatchSnapshot()
  })
  it(' Renders Server and About Links', () => {
    const component = shallow(<Header />)
    expect(component.find('Link')).toHaveLength(3)
  })
})
