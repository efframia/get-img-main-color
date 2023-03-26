function getColor(pixels) {
    let i = -4;
    let blockSize = 5;
    let count = 0;
    let rgb = {
        r: 0,
        g: 0,
        b: 0,
    };

    while ((i += blockSize * 4) < pixels.length) {
        ++count;
        rgb.r += pixels[i];
        rgb.g += pixels[i + 1];
        rgb.b += pixels[i + 2];
    }
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
}

module.exports = getColor;
