import { shallowMount } from '@vue/test-utils'
import SCard from './Index.vue'

describe('SCard', () => {
  it('test example', async () => {
    const wrapper = shallowMount (SCard)
    console.log('dasdasdasddadsdasdasdasddasddasddasddasddasdasdasddasddasddasd')

    expect(wrapper.html()).toContain('card')
  })
})
