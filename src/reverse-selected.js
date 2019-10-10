const sketch = require('sketch')
const document = sketch.getSelectedDocument();
const selectedLayers = document.selectedLayers.layers;

var indexArray = new Array;
selectedLayers.forEach(nativeLayer => {
    var layer = sketch.fromNative(nativeLayer);
    indexArray.push(layer.index);
});

for (var i = 1; i < indexArray.length; i++) {
    if (indexArray[i] !== indexArray[i-1]+1) {
        const message="Please select consecutive layers 🙅🏻";
        sketch.UI.message(message);
        throw new Error(message);
    }
}

selectedLayers.forEach(nativeLayer => {
    var layer = sketch.fromNative(nativeLayer);
    layer.index = indexArray.pop();
});

sketch.UI.message("You've successsfully reversed your layers 💁🏻")