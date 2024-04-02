
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

        // HTTP :- The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web, and is used to load webpages using hypertext links. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack.

        /*
            => HTTP
            => Headers
            => Status codes
            => HTTPS
            => Certificates
            => HTTP/*

            // HTTP - hypertext transport protocol

            request -------> response
                    <-------

        // request

        GET / HTTP/1.1
        Host: jemyoung.com
        User_agent: Mozilla/5.0 (Macintosh; Intel
        Mac OS X 10_14_5) AppleWebKit/537.36
        (KHTML, like Gecko) Chromme/76.0.3809.132
        safari/537.36
        Accept: text/html
        Accept_Encoding: gzip, br
        Accept_language: en,en-US                   

        // common headers :-
        
        user-agent => The requesting device type
        Accept => What the device will handle
        Accept-language => Browser languages
        Content-type => The type of media
        Set-cookie => Sets stateful information
        X-  => typically used for custom headers

        // response :-

        HTTP/1.1 200 OK
        Server: nginx/1.14.0 (ubuntu)
        Date: wed, 25 Sep 2019 02:13:13 GMT
        Content-Type: text/html; charset=utf-8
        Content-Length: 12

        // Status Codes (some Common)

        200  =>  OK
        301  =>  Moved permanently
        302  =>  Found (temprory redirect)
        401  =>  Not authorized
        500  =>  Internal server error

        status code :- indicates status of an http request

        1xx  =>  Information
        2xx  =>  Success
        3xx  =>  Redirect
        4xx  =>  Client error
        5xx  =>  Server errror

        Q.) What is the proper status code for a successful POST request?
        ans)=>  201 (created succesfully)


        // HTTPS :-

        1.) yourwebsite.com -------> visa 4235529596901600 -------> server
                                password 123455


                                    EVIL server
        2.) yourwebsite.com -------> visa 4235529596901600 -------> server                                



        2.) yourwebsite.com -------> *Ifkfi24fh243&&o9#$kD#!8b -------> server

       */
      
        

        //----- (07) - (Implementing HTTPS with Certbot)

        // HTTPS
        /*
        // Certbot is an easy-to-use client that fetches a certificate from Let's Encrypt—an open certificate authority launched by the EFF, Mozilla, and others—and deploys it to a web server.

            1.) INstall and use certbot
            2.) Open firewall

            // https://certbot.eff.org/instructions

            // terminal

            sudo snap install core; sudo snap refresh core
            sudo apt-get remove certbot
            sudo snap install --classic certbot     // error - work painding
            sudo ln -s 
            man ln
            sudo certbot --nginx    // enter email  Y, N
            sudo cat /etc/nginx/sites-enabled/fsfe
            sudo certbot renew --dry-run
            clear

            sudo ufw allow https
            sudo ufw status
        */



        //----- (08) - (Supporting HTTP/2)

        // HTTP/2
        /*
                            http/1.1
        
        main.js  ----TCP----->
                 <------------
                 
        index.html  ----TCP--->         SERVER
                <--------------
                
        dog.png  ----TCP------>
                 <-------------               
                 

                            http/2

        main.js
        
        index.html  -----TCP----->      SERVER
                    <-------------
        dog.png                   
        
        
        method      status      protocol        scheme
        GET         200           h2             https
        GET         200           h2             https


        1.) Update nginx server
        // sudo vi /etc/nginx/sites-enabled/fsfe
                                |
                               \|/
                  liisten 443 http2 ssl;


    sudo vi /etc/nginx/sites-enabled/fsfe   // some changes in file
    sudo nginx -t
    sudo service nginx restart

*/    


                        