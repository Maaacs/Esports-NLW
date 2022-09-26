/*Esse arquivo está convertendo um arquivo escrito em ts para js*/

//Para importação utilizando module é necessário que o nome do arquivo seja .mjs
import express, { request, response } from 'express'

const app = express()


app.get('/games', (request, response) => {
    return response.json(['a']);
})


app.post('/ads', (request, response) => {
    return response.status(201).json(['b']);
})


app.get('/games/:id/ads', (request, response) => { //request recebe uma informação, responde devolve
    
    return response.json([ //Aqui podemos retornar qualquer tipo primitivo para o java (ex: array,obj,string)
        {id: 1, nome: 'Anúncio 1'},
        {id: 2, nome: 'Anúncio 2'},
        {id: 3, nome: 'Anúncio 3'},
        {id: 4, nome: 'Anúncio 4'},
        {id: 5, nome: 'Anúncio 5'},

    ])
})


app.get('/ads/:id/discord', (request, response) => {
    return response.json([])
})


app.listen(3333)