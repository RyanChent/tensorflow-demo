const routes = require.context('.', true, /\.ts$/)

export default routes.keys().reduce((modules, path) => {
    const name = path.replace(/^\.\/(.*)\.ts$/, '$1')
    if (name !== 'route') {
       modules = modules.concat(routes(path).default || [])
    }
    return modules
}, [])