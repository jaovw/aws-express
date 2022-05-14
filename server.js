const express = require('express')
const axios = require('axios')
const app = express()

const port = 3333


app.get('/', async (req, res) => {

    let resultadosGetDados = await getDadosApi('2022-05-13')
    // console.log(resultadosGetDados)
    // res.send('hello world')
    res.render('index',{api:resultadosGetDados})
})

async function getDadosApi(diaAtual) {

    const resultado = await axios(`https://epg-api.video.globo.com/programmes/1337?date=${diaAtual}`).catch(e => console.log(e))
    return resultado.data.programme.entries
}


app.set('view engine', 'ejs');
app.listen(port)