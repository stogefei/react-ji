const CracoLessPlugin = require('craco-less');
const Color = require('./src/theme/default');
module.exports = {
    babel: {
        plugins: [
            ['import', { libraryName: 'antd', style: true }],
            ['@babel/plugin-proposal-decorators', { legacy: true }]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: Color,
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
