const express = require('express')
const { readFile } = require('fs')
const app = express()

app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if(err) {
            response.status(500).send('error blatt')
        }
        response.send(html)
    })
});

app.listen(process.env.PORT || 3000, () => console.log(`HERE IS THE SERVER http://localhost:3000`))