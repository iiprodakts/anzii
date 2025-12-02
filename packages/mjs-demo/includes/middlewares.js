export const list = [
    {
        type: 'function',
        value: function (req, res, next) {
            console.log(`This is the list middleware`);
            next();
        },
    },
    {
        type: 'function',
        value: function (req, res, next) {
            console.log('THE originalUrl:');
            console.log(req.originalUrl);
            next();
        }
    },
    {
        type: 'module',
        value: 'test'
    }
];
