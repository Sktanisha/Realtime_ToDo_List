const express = require("express");
const { createServer } = require("http");
const { Server } = require('socket.io');
const app = express();

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})