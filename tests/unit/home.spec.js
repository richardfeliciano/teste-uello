import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Home.vue', () => {
  let actions
  let store
  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn(),
    }
    store = new Vuex.Store({
      actions,
    })
  })

  it('check if home is a vue component ', () => {
    const wrapper = shallowMount(Home, { store, localVue })
    expect(wrapper.isVisible()).toBeTruthy()
  })
})
