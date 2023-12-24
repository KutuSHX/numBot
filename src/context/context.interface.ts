import { Context } from 'telegraf'

interface SessionData {}

export interface IBotContext extends Context {
    session: SessionData
}