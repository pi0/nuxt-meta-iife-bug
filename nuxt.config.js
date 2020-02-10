export default {
  mode: 'spa',
  head: {
    script: [
      {
        id: 'test',
        hid: 'test',
        // innerHTML: 'console.log(new Error("script").stack)',
        innerHTML: '(function(){console.log(new Error("iife script").stack)})()',
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      test: ['innerHTML']
    }
  }
}
