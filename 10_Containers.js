
//----- (01) - (Containers)

// COntainers

/*
    => Microservices
    => Containers
    => Orchestration
    => Load balancers
    => Deployments

    Microservices :- Software architecture of loosely connected services.

    Monolith :- Software architecture of tightly coupled services.
    // easy and only one language

    // VPS :- virtual private server.


    // containers
    |----------|                        ubuntu
    |----------|                        NodeJS
    |----------|                        MySQL
    |          |                        Nginx
    |     |    |                        Python
    |     .    |
    |          |
    ------------



    // containers
    |----------|                            ubuntu
    |----------|                        NodeJS  MySQL
    |----------|                        
    |          |                        Nginx   Python
    |     |    |   ------------->          
    |     .    |
    |          |                        // in one container
    ------------



        OSX                                 Fedora

    NodeJS  MySQL                       NodeJS  MySQL
    
    Nginx   Python                      Nginx   Python

    // multiple container



    // dockers :- Docker is a software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standardized units called containers that have everything the software needs to run including libraries, system tools, code, and runtime.

    1.) Amazon ECS
    2.) Apache
    3.) CoreOS rkt


    // containers :-

    => Lightweight
    => portable
    => easier for development
    => easier to manage
    => faster startup
    => Decouple application from infrastructure

*/    



//----- (02) - (Creating a Docker Container)

// Docker
/*
    1.) create a docker contaimer for our app
    // https://github.com/young/fullstack-for-frontend3/blob/main/apps/simpleServer/Dockerfile

    // terminal

    pwd
    cd /var/www/app/
    clear

    vi Dockerfile
    docker
    sudo apt install docker.io      // y
    docker
    clear

    docker build -t node-fsfe
    docker build -t node-fsfe .
    sudo !!

    search in browser node docker (19 alpine, 3.6)

    docker image
    docker image ls
    sudo !!
    sudo docker run -d -p 3000:3000 node-fsfe
    pm2 stop index_ws.js    // error
    sudo docker run -d -p 8080:8080 node-fsfe
    docker ps
    sudo !!



//----- (03) - (Orchestration & Load Balancing)

// Orchestration :- In system administration, orchestration is the automated configuring, coordinating, and managing of computer systems and software. Many tools exist to automate server configuration and management, including Kubernetes, Ansible, Puppet, Salt, Terraform, and AWS CloudFormation.

/*
    Kubernetes          => Docker Swarm
      "K8s"             => Amazon EKS
                        => Apache Mesos
                        => AKS



// load balancers :- Load balancing is the method of distributing network traffic equally across a pool of resources that support an application. Modern applications must process millions of users simultaneously and return the correct text, videos, images, and other data to each user in a fast and reliable manner.


---request--->                  server 90%
            Load balancer --->  server 15%


// Schedulling algorithms :-
    => Round Robin*
    => IP Hashing
    => Random Choice
    => Least Connections
    => Least Load
    

// top
    1.) Display running processes
    // htop
    
    
// Load balancers
/*
    upstream backend {
        server backend1.example.com;
        server backend2.example.com;
        server 192.0.0.1 backup;
    }    

    server {
        location / {
            proxy_pass http://backend;
        }
    }

    //...

    upstream backend {
        least_conn;
        server backend1.example.com;
        server backend2.example.com;
    } 

    // https://docs/nginx.xom/nginx/admin-guide/load-balancer/http-load-balancer/
*/



//----- (04) - (Adding a Load Balancer)

/*
// terminal
    in /var/www/app/

    sudo vi /etc/nginx/nginx.conf
    sudo vi /etc/nginx/sites-enabled/fsfe
    sudo nginx -t
    sudo service nginx restart
    sudo vi /etc/nginx/nginx.conf
    sudo vi /etc/nginx/sites-enabled/fsfe
    sudo nginx -t
    sudo service nginx restart
    sudo tail -f /var/log/nginx/access.log
*/    
                               
