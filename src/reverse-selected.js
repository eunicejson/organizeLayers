const sketch = require('sketch')
const document = sketch.getSelectedDocument();
const selectedLayers = document.selectedLayers;

// for (var i = 0; i < selectedLayers.length; i++) {
//     const layer = sketch.fromNative(selectedLayers[i]);
//     console.log(layer.index);
// }

selectedLayers.forEach((nativelayer) => {
    const layer = sketch.fromNative(nativelayer);
    for (var i = selectedLayers.length - 1; i > 0; i--) {
        layer.moveForward();
    }
});

// for (var i = 0; i < selectedLayers.length; i++) {
//     var layer = sketch.fromNative(selectedLayers[i]);
//     var oldLayer = sketch.fromNative(selectedLayers[selectedLayers.length - 1 - i]);
//     layer.index = oldLayer.index;
// }
