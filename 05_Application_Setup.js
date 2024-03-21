
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