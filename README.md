# get-img-main-color
This package could get the main color of part or full of an image
获取一张图片部分区域/整个区域的主色值

# Install
```
npm install get-img-main-color-by-canvas
```

# Params
Input Parameters
| Params | Type | Description |
|--- |--- |--- |
| url | String | the url of the image |
| imgArea | Object | the description of the area. including: x, y, width, height |

Output Parameters
| Params | Type | Description |
|--- |--- |--- |
| color | String | the color using rgb format |

# How to use
Tip: use Promise/await
```
const getMainColor = require('get-img-main-color-by-canvas')

const color = await getMainColor('picture.png')                                             // default: get full of image's main color 缺省imgArea参数：获取整张图片的主色值
const color = await getMainColor('picture.png', {x: 100, y: 100, width: 100, height: 100})  // get part of image's main color 获取图片部分区域主色值
```
