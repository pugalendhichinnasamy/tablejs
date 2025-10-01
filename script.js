const editor = new EditorJS({
  holder: 'editorjs',
  tools: {
    header: {
      class: Header,
      inlineToolbar: true
    },
    list: {
      class: List,
      inlineToolbar: true
    }
  },
  placeholder: 'Start writing with Editor.js here...'
});
