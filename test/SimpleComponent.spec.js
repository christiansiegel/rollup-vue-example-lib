// @vue/test-utils exports have to be explicitly specified
// as unresolvable named exports in karma.conf.js
import { mount } from '@vue/test-utils'

import SimpleComponent from '../src/components/SimpleComponent.vue'

describe('SimpleComponent', () => {
  it('is defined', () => {
    expect(SimpleComponent).to.be.an('object')
  })
  it('renders a h1', () => {
    const wrapper = mount(SimpleComponent)
    expect(wrapper.contains('h1')).to.be.true
  })
})
