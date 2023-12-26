'use strict'

const mongoose = require("mongoose");
const { countConnectMongodb } = require("../helpers/check.connect.mongodb")
const connectString = "mongodb+srv://Ngiad:Ngiad001@cluster0.2ts8aja.mongodb.net/";



class Database {
    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        if (process.env.PRODUCTION === "dev") {
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
        if (!Database.instance) Database.instance = new MongoDb()

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb