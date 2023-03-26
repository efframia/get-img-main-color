if (process.env.NODE_ENV === 'production'){
    module.exports = require('./dist/getMainColor.min')
} else{
    module.exports = require('./dist/getMainColor')
}
