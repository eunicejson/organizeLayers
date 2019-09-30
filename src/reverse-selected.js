const sketch = require('sketch')
const document = sketch.getSelectedDocument();
const selectedLayers = document.selectedLayers.layers;

var indexArray = new Array;
selectedLayers.forEach(nativeLayer => {
    var layer = sketch.fromNative(nativeLayer);
    indexArray.push(layer.index);
});

selectedLayers.forEach(nativeLayer => {
    var layer = sketch.fromNative(nativeLayer);
    layer.index = indexArray.pop();
});
