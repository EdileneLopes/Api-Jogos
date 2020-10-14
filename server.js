const app = require('./src/app')

const PORT = 5007

app.listen(PORT, () => {
    console.log(`Servidor games rodando no http://localhost:${PORT}`)
})

