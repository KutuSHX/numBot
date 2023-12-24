import { Markup, Telegraf } from 'telegraf'

import { Command } from './commands.class'
import { IBotContext } from '../context/context.interface'

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot)
    }

    handle(): void {
        this.bot.start((context) => {
            context.replyWithHTML("<b>Нажми чтобы открыть приложение🔽</b>", Markup.inlineKeyboard([
                Markup.button.webApp(
                    'Открать приложение',
                    'https://youtube.com'
                )
            ]))
        })
    }
}