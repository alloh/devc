
const { loadImage } = require('./images')
const createCanvas = () => {
  const canvas = document.createElement('canvas');

  canvas.setAttribute('width', '600');
  canvas.setAttribute('height', '600');

  const context = canvas.getContext('2d');

  loadImage('images/background.png').then(img => {
      context.drawImage(img, 25, 125, 128, 128)
  })

  return canvas;
}

document.body.appendChild(createCanvas())