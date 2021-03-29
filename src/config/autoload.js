import Vue from 'vue'
import { upperFirst, camelCase } from 'lodash'

const requireComponent = require.context('../components', false, /[\w-]+\.vue$/)

requireComponent.keys().forEach((component) => {
  const componentConfig = requireComponent(component)
  const componentName = upperFirst(
    camelCase(component.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})
