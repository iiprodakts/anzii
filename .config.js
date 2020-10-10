// import routes from './includes/routes'
// import tasks from './includes/tasks'
// import * as middlewares from './includes/globals'

module.exports = {

    // domain: [{name: 'view engine',set: 'pug'},{name:'views',set: 'resources/views'},{name: 'static',set: 'public'}],
    // middleware: {

    //     ppublic:{

    //         addMiddleware: middlewares.ppublic
    //     },
    //     pprivate: {

    //         addMiddleware: middlewares.pprivate

    //     },
    //     all: {

    //         addMiddleware: middlewares.all
    //     }
        
    // },
    router: [{
        path: '/greeting/:name/:surname',
        alias: 'hello',
        method: 'GET',
        type: 'public'
    },],
    // kronjo: tasks,
    logger: {level: 'info'},
    cluster:{workers: 3,spawn: true,} ,
    server: 'server'



}