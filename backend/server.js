const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
const AppRouter = require('./routes/appRouter')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!' })
})

app.use('/api', AppRouter)



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})