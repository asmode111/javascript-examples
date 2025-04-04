const prices = {
  circle: { small: 1.5, medium: 2.0, large: 3.0 },
  square: { small: 1.4, medium: 1.9, large: 2.8 },
  custom: { base: 5.0 }
};

let selectedShape = 'circle';
let selectedSize = 'medium';

function updateSelection(shape, size = 'medium') {
  if (shape) {
    selectedShape = shape
  };
  
  if (selectedShape !== 'custom') {
    if (size) {
      selectedSize = size;
      if (!prices[selectedShape][selectedSize]) {
        selectedSize = 'medium';
      }
    }
  }

  return calculatePrice();
}

function calculatePrice() {
  if (selectedShape === 'custom') {
    return prices.custom.base;
  }

  return prices[selectedShape][selectedSize];
}

function renderPrice(price) {
  console.log('Price: ', price);
}

function onShapeChange(newShape, callback) {
  const price = updateSelection(newShape);
  callback(price);
}

function onSizeChange(newSize, callback) {
  const price = updateSelection(null, newSize);
  callback(price);
}


onShapeChange(selectedShape, renderPrice);
onSizeChange(selectedSize, renderPrice);