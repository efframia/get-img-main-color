const getAreaPixels = require('./getAreaPixels');
const getColor = require('./getColor');

module.exports = async function(url, imgArea = {}) {
    const pixels = await getAreaPixels(url, imgArea);
    const res = getColor(pixels);
    return res;
};
