/* global process */
export const ApiCfg = {
    baseUrl: 
        process.env.API_ENV == "dev" ? 'http://yapi.demo.qunar.com/mock/12814' : 
            process.env.API_ENV == "test" ? 'http://yapi.demo.qunar.com/mock/12814' : 
                'http://yapi.demo.qunar.com/mock/12814'
};