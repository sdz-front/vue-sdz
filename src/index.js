import * as SComponents from './components/index.js'

const install = Vue => {
  Object
    .values(SComponents)
    .forEach(component => Vue.use(component))
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default install

// Register components individually
export { default as SButton } from './components/SButton/Index.vue'
export { default as SCard } from './components/SCard/Index.vue'
export { default as SCheckbox } from './components/SCheckbox/Index.vue'
export { default as SCarousel } from './components/SCarousel/Index.vue'
export { default as SCollapsible } from './components/SCollapsible/Index.vue'
export { default as SFeedbacks } from './components/SFeedbacks/Index.vue'
export { default as SIcon } from './components/SIcon/Index.vue'
export { default as SInput } from './components/SInput/Index.vue'
export { default as SInputContainer } from './components/SInputContainer/Index.vue'
export { default as SLink } from './components/SLink/Index.vue'
export { default as SLoader } from './components/SLoader/Index.vue'
export { default as SModal } from './components/SModal/Index.vue'
export { default as SOverlay } from './components/SOverlay/Index.vue'
export { default as SSelect } from './components/SSelect/Index.vue'
export { default as SShadowed } from './components/SShadowed/Index.vue'
export { default as SSidebar } from './components/SSidebar/Index.vue'
export { default as STable } from './components/STable/Index.vue'


// Register layouts individually
// export { default as SRow } from './layouts/SRow/index'
// export { default as SCol } from './layouts/SCol/index'
