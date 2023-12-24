import { config, DotenvParseOutput } from 'dotenv'
import { IContextService } from './config.interface'

export class ConfigService implements IContextService {
    private config: DotenvParseOutput
    
    constructor() {
        const { error, parsed } = config()

        if (error) {
            throw new Error('No .env file')
        }

        if (!parsed) {
            throw new Error('.env file if empty')
        }

        this.config = parsed
    }
    
    get(key: string): string {
        const res = this.config[key]

        if (!res) {
            throw new Error('There is no such key')
        }

        return res
    }
}