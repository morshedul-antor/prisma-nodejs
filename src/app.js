import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ message: 'Nodejs!' })
})

import { routerV1 } from './routers/router.js'
app.use('/api/v1', routerV1)

export default app
