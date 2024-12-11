import 'dotenv/config'
import { get } from 'env-var';

export const envs = {

    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
    MYSQL_URL: get('URL_DATABASE').default('public').asString(),
    
}