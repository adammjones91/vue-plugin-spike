const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var commonConfig = {
    output:{
        path: path.resolve(__dirname + '/dist/')
    },
    module:{
        loaders: []
    },
    externals:{},
    plugins:{}
}

module.exports=[

    // for the browser based implementation
    merge(commonConfig,{

    }),

    // for the node based implementation
    merge(commonConfig, {

    })
]