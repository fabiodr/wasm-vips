// Load an image from a preloaded file
// Image source: https://www.flickr.com/photos/jasonidzerda/3987784466
let im = vips.Image.newFromFile('owl.jpg');

// Sharpen of the L channel in the LAB colour space
im = im.sharpen({
  sigma: 5.0
});

// Finally, write the result to a blob
const t0 = performance.now();
const outBuffer = new Uint8Array(im.writeToBuffer('.jpg'));
const t1 = performance.now();

console.log(`Call to writeToBuffer took ${t1 - t0} milliseconds.`);

const blob = new Blob([outBuffer], { type: 'image/jpeg' });
const blobURL = URL.createObjectURL(blob);
const img = document.createElement('img');
img.src = blobURL;
document.getElementById('output').appendChild(img);
