const sketch = require('sketch')
const document = sketch.getSelectedDocument();
const selectedPage = document.selectedPage;

const nativeLayers = selectedPage.sketchObject.children();

// const wrappedLayers = nativeLayers.forEach(nativelayer => {
//     return sketch.fromNative(nativelayer);
// });

document.showMessage('Length');