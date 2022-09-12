/*Esse arquivo está convertendo um arquivo escrito em ts para js*/
//Para importação utilizando module é necessário que o nome do arquivo seja .mjs
import express from 'express';
const app = express();
/*www.minhaapi.com/ads
qual função irá executar quando o usuário acessar a rota ads*/
app.get('/ads', (request, response) => {
    /*console.log('Acessou Ads!')*/
    return response.json([
        { id: 1, nome: 'Anúncio 1' },
        { id: 2, nome: 'Anúncio 2' },
        { id: 3, nome: 'Anúncio 3' },
    ]);
});
//em desenvolvimento cada aplicação irá roda em uma porta 'localhost:3333' ex
app.listen(3333);
