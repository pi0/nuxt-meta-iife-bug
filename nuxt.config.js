export default {
  mode: 'spa',
  head: {
    script: [
      {
        id: 'test',
        hid: 'test',
        innerHTML: '(function(){console.log(new Error("iife script").stack)})()'
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      test: ['innerHTML']
    }
  }
}
