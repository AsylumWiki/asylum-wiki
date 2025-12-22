---
layout: home
---

<script setup>
import { useData, withBase } from 'vitepress'

const { site } = useData()

const localeLink = site.value.locales?.root?.link || '/'

const target = withBase(localeLink)

if (typeof window !== 'undefined') {
  window.location.replace(target)
}
</script>
