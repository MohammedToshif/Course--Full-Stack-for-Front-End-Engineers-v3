
//----- (01) - (Setup Nginx Web Server)

// web server

// 1.) APACHE
// 2.) NGINX

// web server :- 
/*
    A web server is software and hardware that uses HTTP (Hypertext Transfer Protocol) and other protocols to respond to client requests made over the World Wide Web. 
*/

/*
    1.) web server
    2.) Reverse proxy                   Nginx
    3.) Forward proxy                 (engine-x)
*/

/*                 
                                                              server
                                                            |---------|
                                                            |         |
                                                            |---------|


                              server                        
        request             |---------|                     Application
    ---------------->>      |         |    
                            |---------|                     
                                                            daatabase
*/


/*                 
                                                              server
                                                            |---------|
                                                            |         |
                                                            |---------|


                            server                        
        request          |---------|                        Application
    ---------------->>   |         | ---->> nginx --->>    
                         |---------|                     
                                                            daatabase

nginx flow => server, application database                                                            
*/


// Nginx
/*
    1.) install nginx
    // sudo apt install nginx

    2.) Start nginx
    // sudo service nginx start

    3.) Nevigate to your server in the browser!
    then type ip address
    // 127.0.0.1
*/


/*
    // Nginx congiguration

     1.) View default nginx configuration
    //  less /etc/nginx/sites-available/default
*/


// Nginx configuration

/*
    root /var/www/html; <<--------- base directory for requests

    # Add index.php to the list if you are using PHP
    index index.html index.htm index.nginx_dibian.html;

    server_name _;

    location / {
        # first attempt to serve request as file, then
        # as directory, then fall back to displaying a 404.
        try_files $uri/ =404;
    }
    // try_files    => directive
*/

// Nginx configuration

/*
    1.) Create and edit default page
    // sudo vi /var/www/html/index.html

    // terminal

    cd /var/www/html/
    ls      // index.nginx-debian.html
    sudo vi index.html  // (type - anything)

    going to browser 127.0.0.1 and refresh
    show => Hello world
    
*/    


/*
    // Node.JS

    request ---->> server ----->> nginx ----->> Node.js
*/

// Node.js

/*
    1.) Link to newest node.js source
    // curl https://deb.nodesource.com/setup_19.x |
    sudo -E bash -

    2.) install node.js
    // sudo apt-get install nodejs

    3.) install git
    // sudo apt install git
*/    



//----- (02) - (Setup Proxy Pass)

/*

    curl https://deb.nodesource.com/setup_19.x | sudo -E bash -
    sudo apt-get install nodejs
    node --version      // v19.7.0
    git
*/


//  applcation setup

/* 
    1.) Establish application file system
    2.) Enable version control
    3.) Create a node.js server
*/

/*
    1.) Change ownership of /www
    // sudo chown -R $USER:$USER /var/www

    2.) Make an application directory
    // mkdir /var/www/app

    3.) initialize empty git repo in /app
    // git int


    // terminal

    pwd     // /var/www
    sudo chown -R $USER:$USER /var/www
    mkdir /var/www/app
    cd app
    git init
    touch app.js
    npm init        press enter enter enter .....
    ls      // app.js package.json
*/    

/*
    // Basic node serer

    const http = require("http");

    http.createServer(function (req, res) {
        res.write("On the way to beign a full stack engineer!");
        res.end();
    }).listen(3000);

    console.log("Server started on port 3000");


    // terminal

    vi app.js
    
*/    


// Proxy pass

/*
    location / {
        proxy_pass URL_TO_PROXY_TO;
    }


    1.) Create a new nginx server and proxy requests
    // sudo vi /etc/nginx/sites-enabled/fsfe


    // terminal

    sudo vi /etc/nginx/sites-enabled/fsfe
*/



//----- (03) - (Virtual Server & PM2)


// terminal

/*
    sudo vi /etc/nginx/sites-enabled/fsfe

    server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /var/www/html;

        index index.html;


server_name jemstack.lol;

location / {

        proxy_pass http://127.0.0.1:3000;
        }

    }
    
    
    // nginx -t
*/


/*
    // proxy pass

    1.) Point nginx to new server
    // sudo vi /etc/nginx/nginx.conf

    ##
    # vitual Host Configs
    ##

    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/fsfe;
    nginx -t
    sudo nginx -t
    sudo service nginx restart

    // then check on browser    // 127.0.0.1
    out ;- 502 Bad Gateway


    clear

    in directory (/var/www/app)

    node app.js     // server started on port 3000

    then go to browser and refresh
    output :- on the way to begin a full stack engineer!

*/    



// PM2

/*

// pm2 :- is gonna keep our node application up and running even if we close the shell, or even if we close the exit the terminal.

    1.) install PM2
    // sudo npm i pm2 -g

    2.) start PM2
    // pm2 start app.js -watch

    3.) setup auto restart
    // pm2 save
    // pm2 startup

    output => (2)

    _/\\\\\\\\\\\\\____/\\\\____________/\\\\____/\\\\\\\\\_____
 _\/\\\/////////\\\_\/\\\\\\________/\\\\\\__/\\\///////\\\___
  _\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\_\///______\//\\\__
   _\/\\\\\\\\\\\\\/__\/\\\\///\\\/\\\/_\/\\\___________/\\\/___
    _\/\\\/////////____\/\\\__\///\\\/___\/\\\________/\\\//_____
     _\/\\\_____________\/\\\____\///_____\/\\\_____/\\\//________
      _\/\\\_____________\/\\\_____________\/\\\___/\\\/___________
       _\/\\\_____________\/\\\_____________\/\\\__/\\\\\\\\\\\\\\\_
        _\///______________\///______________\///__\///////////////__


    
        pm2 list

        pm2 start app.js
        output :-

        PM2] Starting /var/www/app/app.js in fork_mode (1 instance)
[PM2] Done.
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ app                │ fork     │ 0    │ online    │ 0%       │ 40.6mb   


        pm2 list
        output :-

        toshif@toshif-Inspiron-15-3511:/var/www/app$ pm2 list
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ app                │ fork     │ 0    │ online    │ 0%       │ 50.6mb   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘


        pm2 save

        pm2 startup

        copy command of two lines and pase then enter
        complete :)
*/    