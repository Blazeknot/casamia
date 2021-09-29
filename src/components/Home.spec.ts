import { shallowMount, VueWrapper, RouterLinkStub } from '@vue/test-utils'
import Home from './Home.vue'

describe('Home', () => {
  let wrapper: VueWrapper<any> // eslint-disable-line @typescript-eslint/no-explicit-any

  beforeEach(() => {
    wrapper = shallowMount(Home, { global: { stubs: { routerLink: RouterLinkStub } } })
  })

  it('Should display header text', () => {
    expect(wrapper.find('h1').text()).toEqual('Home sweet home')
  })

  it('Should be able to increment count', () => {
    expect(wrapper.vm.count).toEqual(0)

    wrapper.find('button').trigger('click')

    expect(wrapper.vm.count).toEqual(1)
  })

  it('Should contain a link to about page', () => {
    expect(wrapper.getComponent(RouterLinkStub).props('to')).toEqual('/about')
  })
})
