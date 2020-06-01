import routes from './includes/routes'
import tasks from './includes/tasks'
import * as middlewares from './includes/globals'

export default  {

    middleware: {

        ppublic:{

            addMiddleware: middlewares.ppublic
        },
        pprivate: {

            addMiddleware: middlewares.pprivate

        },
        all: {

            addMiddleware: middlewares.all
        }
        
    },
    router: routes,
    kronjo: tasks,
    mailer: '',
    logger: {level: 'info',trans:['file',{path: 'http://www.iiprodakts/logger'}]},
    cluster:{workers: 3,spawn: true,} ,
    server: 'server'



}