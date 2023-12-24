import { Telegraf } from 'telegraf'
import LocalSession from 'telegraf-session-local'

import { IContextService } from './config/config.interface'
import { ConfigService } from './config/context.service'
import { IBotContext } from './context/context.interface'
import { Command } from './commands/commands.class'
import { StartCommand } from './commands/start.command'

const session = new LocalSession({ database: 'session.json' }).middleware()

class Bot {
    bot: Telegraf<IBotContext>
    commands: Command[] = [] 

    constructor(private readonly configService: IContextService) {
        this.bot = new Telegraf<IBotContext>(this.configService.get('TOKEN'))
        
        this.bot.use(session)
    }

    init() {
        this.commands = [new StartCommand(this.bot)]

        for (const command of this.commands) {
            command.handle()
        }

        this.bot.launch()
    }
}

const bot = new Bot(new ConfigService())

bot.init()