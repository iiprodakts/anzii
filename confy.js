import routes from './includes/routes'
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
    logger: {level: 'info',trans:['file',{path: 'http://www.iiprodakts/logger'}]},
   
    server: 'server'



}