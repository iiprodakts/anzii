export const domain = [{ name: 'static', set: 'public' }];
export const router = [{
        path: '/greeting/:name/:surname',
        alias: 'hello',
        method: 'GET',
        type: 'public'
    },];
export const logger = { level: 'info' };
export const cluster = { workers: 1, spawn: false, };
export const server = 'server';
export default {
    domain,
    router,
    logger,
    cluster,
    server
};
