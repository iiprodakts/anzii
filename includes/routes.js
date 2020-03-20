
import * as middlewares from './middlewares'

export default  [

    {
        path: '/register',
        method: 'POST',
        type: 'public'
    },
    {
        path: '/test',
        method: 'POST',
        type: 'public'
    },
    {
        path: '/login',
        method: 'POST',
        type: 'public'
    },
    {
        path: '/job',
        method: 'POST',
        type: 'public'
    },
    {
        path: '/login/:username/:pass',
        method: 'post',
        type: 'public'
    },
    {
        path: '/user',
        method: 'GET',
        type: 'private'
    },
    {
        path: '/adash',
        method: 'POST',
        type: 'private'
    },
    {
        path: '/inalerts',
        method: 'POST',
        type: 'private'
    },
    {
        path: 'view/:profile',
        method: 'GET',
        type: 'public'
    },
    {
        path: '/list/:name',
        method: 'GET',
        middlewares: middlewares.list,
        type: 'private'
    },
    {
        path: '/upload/:name',
        method: 'POST',
        middlewares: [{type:'module',value: 'upload'}],
        type: 'private'
    },
    {
        path: '/pirlo/:name/:pass',
        method: 'GET',
        type: 'public'
    },
    {
        path: '/fetch',
        method: 'GET',
        type: 'public'
    },
]


