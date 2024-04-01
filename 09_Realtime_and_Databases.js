
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




        //----- (04) - (Databases Overview)

        // Databases
        
        /*
        // Relational

        1.) SQL
        2.) Tables
        3.) Related data
        4.) Strict structure

        // relational database very structured, very strict,
        they have strong opinion about how and where you write and
        retrieve data.

        // non relational database

        1.) NoSQL
        2.) Data agnostic
        3.) Loose structure
        */        

        // databases
        /*
            users

            userID            name              location
                            (string)            (string)

                1            jem                california                            
                2            Marc               Minnesota

        name & location = fields
        1 & 2 = records                

        */


        /*
         // users = userID, name, location, email

        //  pets = petID, userID, name, type
        // food = foodID, userID, name, type, spicy

        // pets & food  connect with users

        SQL - structured query language

        SELECT * FROM users WHERE name = jem

        SELECT food.type, users.name
        FROM food
        LEFT JOIN users ON users.userID = food.userID
        Where food.name = ramen
        */



        //----- (05) - (SQLite)

        // SQLite
        /*
            1.) install sqlite3
            // npm install sqlite3

            2.) set up a database
             a.) create a atable named "visitors"
             b.) create a column named "count"
             c.) create a column named "time"

             3.) on connection, save current visitors count

            //  some work in index_ws.js file (begin database)
        */
       
             

        //----- (06) - (HTTPS Overview)