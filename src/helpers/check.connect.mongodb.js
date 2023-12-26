"use strict";
const { default: mongoose } = require("mongoose");
const os = require("os");

const process = require("process");
const _SECONDS = 5000;

// check số lượt đang kết nối vs db
const countConnectMongodb = () => {
  return mongoose.connections.length;
};

// check overload
// cách phát hiện quá tải connect
const checkOverLoad = () => {
  setInterval(() => {
    const countConnect = mongoose.connections.length;
    const numCores = os.cpus.length;
    const memoryUsage = process.memoryUsage().rss;

    const maxConnections = numCores * 5; // ví dụ 1 core được 5 kết nối

    console.log(`Active connections : ${countConnect}`)
    console.log(`Memory usage : ${memoryUsage/1024/1024} MB`)
    if (maxConnections > countConnect) console.warn("Connect Overload detected");
    
    mongoose.connection.on('error', mongoose.disconnect()); // sẩy ra lỗi thì đóng kết nối
  }, _SECONDS);
};

module.exports = {
  countConnectMongodb,
  checkOverLoad,
};
