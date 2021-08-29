const path = require('path');

module.exports = {
    entry: './src/js/chart.js',
    output: {
        path: path.resolve(__dirname, 'public/js/chartsjs'),
        filename: 'chart.js',
    },
};