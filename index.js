const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const { message } = require('telegraf/filters')
const text1 = require('./const')
const text2 = require('./const')
const text3 = require('./const')
const text4 = require('./const')
const commands = require('./const')
const answer1 = require('./const')
const answer2 = require('./const')
const answer3o = require('./const')
const answer4w = require('./const')
const answer5y = require('./const')
const answer6n = require('./const')
const answer7one = require('./const')
const answert8wo = require('./const')
const bot = new Telegraf(process.env.BOT_TOKEN)
const axios = require('axios');

bot.start((ctx) => ctx.reply('Привет, чтобы пройти тест напиши /quiz, а если хочешь посмеяться напиши /anecdote'));
bot.hears('/joke',(ctx) => ctx.reply('Отправь мне стикер, потому что жесть я крут'))
bot.on(message('sticker'), (ctx) => ctx.reply('😏 Да я супер крут, я же говорил'))
bot.hears('привет', (ctx) => ctx.reply('Здарова бро 😎 '))
bot.hears('как дела', (ctx) => ctx.reply('Да знаешь, потихоньку, у тебя как?'))
bot.hears('нормально', (ctx) => ctx.reply('Оу, я смотрю и у тебя так же, здорово, здорово😋'))
bot.help((ctx) => ctx.reply(commands.commands))
bot.command('anecdote', async (ctx) => {
try {
    await ctx.replyWithHTML ('<b>Старые добрые Анекдоты</b>', Markup.inlineKeyboard(
    [
       [Markup.button.callback('1 Анекдот', 'btn_1'), Markup.button.callback('2 Анекдот', 'btn_2'),Markup.button.callback('3 Анекдот', 'btn_3')],
       [Markup.button.callback('4 Анекдот', 'btn_4')] 
    ]
 ))
} catch(e) {
    console.error(e)
}
})
function addActionBot(name,src,text,){
bot.action(name, async (ctx) => {
    try {
        await ctx.answerCbQuery()
        if (src !== false){
            await ctx.replyWithPhoto({
                source:src
            })
        }
        await ctx.replyWithHTML(text, {
            disable_web_page_preview:true
        })
    } catch (e) {
        console.error(e)
    }
})
}
bot.command('quiz', async (ctx) => {
    try {
        await ctx.replyWithHTML ('<b>1</b>', Markup.inlineKeyboard(
        [
           [Markup.button.callback('Да', 'btn_yes')],
           [Markup.button.callback('Нет', 'btn_no')] 
        ]
     ))
    } catch(e) {
        console.error(e)
    }
    })
    function addAnswerBot(name,src,text,){
        bot.action(name, async (ctx) => {
            try {
                await ctx.answerCbQuery()
                if (src !== false){
                    await ctx.replyWithPhoto({
                        source:src
                    })
                }
                await ctx.replyWithHTML(text, {
                    disable_web_page_preview:true
                })
            } catch (e) {
                console.error(e)
            }
        })
    }
    bot.hears('хочу', (ctx) => ctx.replyWithHTML ('<b>вайпер дала стенку на сайт, ваши действия</b>', Markup.inlineKeyboard(
        [
           [Markup.button.callback('выйти под абилки', 'btn_o')],
           [Markup.button.callback('дождаться падения стены', 'btn_w')] 
        ])))
        function addNextBot(name,src,text,){
            bot.action(name, async (ctx) => {
                try {
                    await ctx.answerCbQuery()
                    if (src !== false){
                        await ctx.replyWithPhoto({
                            source:src
                        })
                    }
                    await ctx.replyWithHTML(text, {
                        disable_web_page_preview:true
                    })
                } catch (e) {
                    console.error(e)
                }
            })
        }


bot.hears('давай', (ctx) => ctx.replyWithHTML ('<b>?</b>', Markup.inlineKeyboard(
            [
               [Markup.button.callback('12', 'btn_yeah')],
               [Markup.button.callback('21', 'btn_none')] 
])))
function addOneBot(name,src,text,){
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery()
            if (src !== false){
                await ctx.replyWithPhoto({
                    source:src
                })
            }
            await ctx.replyWithHTML(text, {
                disable_web_page_preview:true
            })
        } catch (e) {
            console.error(e)
        }
    })
}

bot.hears('лего', (ctx) => ctx.replyWithHTML ('<b>?</b>', Markup.inlineKeyboard(
    [
       [Markup.button.callback('22', 'btn_one')],
       [Markup.button.callback('11', 'btn_two')] 
])))
function addQuizBot(name,src,text,){
bot.action(name, async (ctx) => {
try {
    await ctx.answerCbQuery()
    if (src !== false){
        await ctx.replyWithPhoto({
            source:src
        })
    }
    await ctx.replyWithHTML(text, {
        disable_web_page_preview:true
    })
} catch (e) {
    console.error(e)
}
})
}



bot.on('message', async(ctx)=>{
    if (ctx.message.location){
        console.log(ctx.message.location);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ctx.message.location.latitude}&lon=${ctx.message.location.longitude}&appid=08af5c3a452ce13042b5857fc48a3c1e`
        const weather = await axios.get(url);
        console.log(weather);
        ctx.reply(`${weather.data.name}: ${weather.data.main.temp} К`)
    }
    
})





addOneBot ('btn_one', false, answer7one.answer7one)
addOneBot ('btn_two', false, answert8wo.answer8two)
addOneBot ('btn_yeah', false, answer5y.answer5y )
addOneBot ('btn_none', false, answer6n.answer6n)
addNextBot ('btn_o',false, answer3o.answer3o)
addNextBot ('btn_w',false, answer4w.answer4w)
addAnswerBot('btn_yes', false, answer1.answer1)
addAnswerBot('btn_no', false, answer2.answer2)    
addActionBot('btn_1', './123.jpeg', text1.text1)
addActionBot('btn_2', './321.jpg', text2.text2)
addActionBot('btn_3', './132.jpg', text3.text3)
addActionBot('btn_4', './213.jpg', text4.text4)




bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))