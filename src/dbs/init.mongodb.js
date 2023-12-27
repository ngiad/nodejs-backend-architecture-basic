'use strict'
const {db : {host,port,name}} = require("../configs/congif.mongodb")
const mongoose = require("mongoose");
const { countConnectMongodb } = require("../helpers/check.connect.mongodb")

const connectString = `${host}://${port}/${name}`

class Database {
    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        if (process.env.NODE_ENV === "dev") {
            mongoose.set("debug", true);
            mongoose.set('debug', { color: 'true' })
        }

        mongoose
            .connect(connectString, {
                maxPoolSize: 50  // khi số lương pool vượt quá thì các lượt đó sẽ phải chờ có lượt kết nối rảnh
            })
            .then((_) => console.log("Connect mongodb Success!", countConnectMongodb()))
            .catch((err) => console.error("Connect Error ::: ", err));
    }


    static getInstance() {
        if (!Database.instance) Database.instance = new Database()

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb