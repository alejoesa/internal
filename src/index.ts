import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/saludo', (c) =>{
  return c.json({message: 'Te saludo terricola'})
})


app.post('/nombre', async (c) =>{
 const {Nombre, Apellido} = await c.req.json()
  return c.json(`Hola, ${Nombre} ${Apellido}`)
})

export default app
