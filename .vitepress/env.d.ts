/// <reference types="vite/client" />
/// <reference types="vitepress/client" />

declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, unknown>

  export default component
}
