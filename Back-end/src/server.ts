/*Esse arquivo está convertendo um arquivo escrito em ts para js*/

//Para importação utilizando module é necessário que o nome do arquivo seja .mjs
import express, { request, response } from 'express'
import cors from 'cors'

import {PrismaClient} from '@prisma/client' // Para acessar o banco
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes'
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string'



const app = express()

app.use(express.json())
app.use(cors()) //para restringir para somente um front-end fazer requisições {'http:rocketseat.com.br'} dentro de cors()

const prisma = new PrismaClient() // faz a conexão com o banco


app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count:{
                select:{
                    ads: true,
                }
            }
        }
    }) //passar instruções do Mysql

    return response.json(games);
});


app.post('/games/:id/ads', async (request, response) => {

    const gameId = request.params.id;
    const body: any = request.body;

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart:  convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    })

    return response.status(201).json(ad);
})


app.get('/games/:id/ads', async (request, response) => { //request recebe uma informação, responde devolve

    const gameId = request.params.id

    const ads = await prisma.ad.findMany({
        select:{
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc',
        }
    })
    
    return response.json(ads.map (ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hoursStart: convertMinutesToHourString(ad.hourStart),
            hoursEnd: convertMinutesToHourString(ad.hourEnd),
        }
    }))
})


app.get('/ads/:id/discord', async (request, response) => {

    const adId = request.params.id;
    
    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        }
    })

    return response.json({
        discord: ad.discord,
    })
})


app.listen(3333)