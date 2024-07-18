<template>
  <DefaultTheme.Layout />
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { inBrowser, useData, useRoute, useRouter } from 'vitepress'
import { watchEffect, onBeforeMount } from 'vue'

onBeforeMount(() => {
  const path = useRoute().path
  const router = useRouter()

  if (path === '/') {
    let lang = 'en'
    if (localStorage.getItem('lang')) {
      lang = <string> localStorage.getItem('lang')
    } else {
      let langs = navigator.languages.map(e => e.toLowerCase())
      for (let i = 0; i< langs.length; ++i){
        let langSubs = langs[i].split('-')
        if (langSubs.indexOf('zh') !== -1) {
          if (langSubs.indexOf('hant') + langSubs.indexOf('hk') + langSubs.indexOf('mo') + langSubs.indexOf('tw') > -4) {
            lang ='zh-hant'
          } else {
            lang = 'zh-hans'
          }
          break
        }
        if(langSubs.indexOf('en') !== -1) {
        break
        }
      }
      localStorage.setItem('lang', lang)
    }
    router.go(`/${lang}/`)
  }
})

const lang = useData().lang
watchEffect(() => {
  if (inBrowser) {
    localStorage.setItem('lang', lang.value)
  }
})
</script>