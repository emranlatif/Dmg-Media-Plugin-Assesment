const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@wordpress/babel-preset-default'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    externals: {
        '@wordpress/blocks': ['wp', 'blocks'],
        '@wordpress/element': ['wp', 'element'],
        '@wordpress/i18n': ['wp', 'i18n'],
        '@wordpress/block-editor': ['wp', 'blockEditor'],
        '@wordpress/components': ['wp', 'components'],
        '@wordpress/data': ['wp', 'data']
    }
};
