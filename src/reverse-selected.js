const sketch = require('sketch')
const document = sketch.getSelectedDocument();
const selectedLayers = document.selectedLayers;

function reverseLayers(nativeLayers) {
    for (var i = 0; i < nativeLayers.length; i++) {
        var layer = sketch.fromNative(nativeLayers[i]);
        var oldLayer = sketch.fromNative(nativeLayers[nativeLayers.length - 1 - i]);
        layer.index = oldLayer.index;
    }

    return nativeLayers;
}

var nativeLayers = selectedLayers;

nativeLayers = reverseLayers(nativeLayers);

console.log(nativeLayers);
