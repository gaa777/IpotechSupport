const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.help((ctx) => ctx.reply(text.commands))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

bot.command('start', async (ctx) => {
    try {
        await ctx.replyWithHTML(`Hello, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'friend'}! Ниже приведенны часто задаваемые вопросы.`,      
        Markup.inlineKeyboard(
            [
                [Markup.button.callback('Как зарегистрироваться на Binance', 'btn_1')], 
                [Markup.button.callback('Двухфакторная аутентификация', 'btn_2')],                
                [Markup.button.callback('Как купить USDT', 'btn_3')], 

                [
                Markup.button.callback('Ключи API', 'btn_4'), 
                Markup.button.callback('Binance Pay', 'btn_5')
                ]
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

bot.command('menu', async (ctx) => {
    try {
        await ctx.replyWithHTML(`Ниже приведенны часто задаваемые вопросы.`,      
        Markup.inlineKeyboard(
            [
                [Markup.button.callback('Как зарегистрироваться на Binance', 'btn_1')], 
                [Markup.button.callback('Двухфакторная аунтентификация', 'btn_2')],                
                [Markup.button.callback('Как купить USDT', 'btn_3')], 

                [
                Markup.button.callback('Ключи API', 'btn_4'), 
                Markup.button.callback('Binance Pay', 'btn_5')
                ]
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

function addActionBot(name, src, text) {
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery()
            if (src !== false) {
                await ctx.replyWithPhoto({
                    source: src
                })
            }
            await ctx.replyWithHTML(text, {
                disable_web_page_preview: true
            })
        } catch(e){
            console.error(e)
        }
    })
}

addActionBot('btn_1', false, text.text1) 
//addActionBot('btn_2', './img/2.jpg', text.text2) //пример с изображением
addActionBot('btn_2', false, text.text2)
addActionBot('btn_3', false, text.text3)
addActionBot('btn_4', false, text.text4)
addActionBot('btn_5', false, text.text5)

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))