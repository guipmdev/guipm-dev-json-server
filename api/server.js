import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
  readOnly: true,
})

server.use(middlewares)

server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))

server.use(router)
server.listen(3004, () => {
  console.log('JSON Server is running')
})

export { server }