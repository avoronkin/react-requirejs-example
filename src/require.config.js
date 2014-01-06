require.config({
    deps: ['main'],

    paths: {
        react: '../lib/react',
        showdown: '../lib/showdown',
        jquery: '../lib/jquery'
    },

    shim: {
        showdown: {
            exports: 'Showdown'
        }
    }
});
