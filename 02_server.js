
//----- (01) - (Servers)


// Servers :-

/*
What is a server
cloud computing
VPS
Operating system
SSH     */

// server(definations) :-

/*
A server is a computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network. In theory, whenever computers share resources with client machines they are considered servers.     */


// Basic node server :-

/*
Make a file called simpleServer.js
Create a basic server using Node.js
running on port 3000        */


/*
const http = require("http");
const fs = require('fs');
const PORT = 3000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html'});
    fs.createReadStream('index.html').pipe(res);
});
server.listen(PORT);
console.log(`Server started on port ${PORT}`);

// create a html file in Vim
// save it as index.html       */


//----- (02) - (Server management)

// Cloud computing

/*
virtualization => dividing a servers resource into virtual computers
virtual machine => digital version of a physical computer
VPS => virtual private server       */


//----- (03) - (Buying a VPS)

// www.DigitalOcean.com