import { shallowMount, createLocalVue } from '@vue/test-utils'
import UelloHistory from '@/components/UelloHistory.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('UelloHistory.vue', () => {
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

  it('check if UelloHistory is a vue component ', () => {
    const wrapper = shallowMount(UelloHistory, { store, localVue })
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('check if UelloHistory has a title', () => {
    const wrapper = shallowMount(UelloHistory, { store, localVue })
    expect(wrapper.find('.historyTitle').exists()).toBeTruthy()
  })
})
