'use strict'
// lv 0

const dev = {
    app : {
        port : process.env.DEV_APP_PORT || 5555 
    },
    db : {
        host : process.env.DEV_DB_HOST || "mongodb+srv",
        port : process.env.DEV_DB_PORT || "Ngiad:Ngiad001@cluster0.2ts8aja.mongodb.net",
        name : process.env.DEV_DB_NAME || ""
    }
}

const pro = {
    app  : {
        port : process.env.PRO_APP_PORT || 5555
    },
    db : {
        host : process.env.PRO_DB_HOST || "localhost",
        port : process.env.PRO_DB_PORT || 27017,
        name : process.env.PRO_DB_NAME || "devdb"
    }
} 

const config = {dev,pro}
const env = process.env.NODE_ENV || "dev"


module.exports = config[env]