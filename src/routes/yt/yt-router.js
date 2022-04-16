const express = require("express")
const ytService = require("./yt-service")
const ytRouter = express.Router()
const fs = require('fs')
const ytdl = require('ytdl-core')
const jsonParser = express.json()


ytRouter
    .route("/")
    .get((req, res, next) => {
        ytdl('https://www.youtube.com/watch?v=O5Oo3InIlfw')
            .pipe(fs.createWriteStream(`${process.env.FILE_SYSTEM_LOCATION}/foo.mp3`))

        res.send("hi")
    })


module.exports = ytRouter