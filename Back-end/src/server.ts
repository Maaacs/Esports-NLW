/*Esse arquivo está convertendo um arquivo escrito em ts para js*/

//Para importação utilizando module é necessário que o nome do arquivo seja .mjs
import express from 'express'

const app = express()

/*www.minhaapi.com/ads
qual função irá executar quando o usuário acessar a rota ads*/
app.get('/ads', (request, response) => { //request recebe uma informação, responde devolve
    /*console.log('Acessou Ads!')*/
    return response.json([ //Aqui podemos retornar qualquer tipo primitivo para o java (ex: array,obj,string)
        {id: 1, nome: 'Anúncio 1'},
        {id: 2, nome: 'Anúncio 2'},
        {id: 3, nome: 'Anúncio 3'},
        {id: 4, nome: 'Anúncio 4'},
        {id: 5, nome: 'Anúncio 5'},

    ])
} )
//em desenvolvimento cada aplicação irá roda em uma porta 'localhost:3333' ex
app.listen(3333)