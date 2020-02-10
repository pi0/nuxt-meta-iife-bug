# Nuxt VueMeta IIFE SPA Bug

Steps to reproduce:

- Clone repo
- `yarn`
- `yarn dev`
- Opening browser and check console logs:

```
(index):4 Error: iife script
    at (index):4
    at (index):4

VM6651:1 Error: iife script
    at <anonymous>:1:26
    at <anonymous>:1:59
    at eval (vue-meta.esm.browser.js?2fd6:1204)
    at Array.forEach (<anonymous>)
    at updateTag (vue-meta.esm.browser.js?2fd6:1193)
    at updateClientMetaInfo (vue-meta.esm.browser.js?2fd6:1272)
    at refresh (vue-meta.esm.browser.js?2fd6:1434)
    at Object.refresh$1 [as refresh] (vue-meta.esm.browser.js?2fd6:1501)
    at Vue.eval (vue-meta.esm.browser.js?2fd6:430)
    at Array.eval (vue.runtime.esm.js?2b0e:1980)
```

Script will be invoked twice only with SPA mode
