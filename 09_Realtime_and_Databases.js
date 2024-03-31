
/*
Q. what is websocket ?

ans -> A communication protocol that enables real-time, two-way
	communication between a client and a server over a presistent connection.


Exercise : websocket 

    1. updating nginx configuration
    2. create a new node.js server
    3. Enable websockets


 Adding default server

    ---> location / {
        proxy_set_header Upgrade #http_upgrade;
        proxy_set_header Connection "upgrade";

        proxy_pass https://127.0.0.1:3000;
    }


    // Createing a new server using node.js,express.

    =====> 
        const express = require('express');
        const server = require('htpp').createServer();
        const app = express();

        app.get('/',function(req,res){
            res.sendFile('index.html',{root:'public'});
        });


        server.on('request', app);
        server.listen(3000,function (){console.log("listening on 3000")})

    */   