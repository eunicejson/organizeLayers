const sketch = require('sketch')
const document = sketch.getSelectedDocument();
const selectedPage = document.selectedPage;

const nativeLayers = selectedPage.sketchObject.children();
nativeLayers.forEach(nativelayer => {
    const layer = sketch.fromNative(nativelayer);

    if (layer.selected == true) {
        layer.moveBackward()
    }
});

