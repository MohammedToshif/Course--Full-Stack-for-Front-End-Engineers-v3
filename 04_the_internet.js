
//----- (01) - (How the internet works)

// understading the internet

/*
    How the intenet works
    Buying a domain
    putting it together
*/

// How requests works :-

// computer --> network card --> router --> ISP (internet service provider) --> Tier 1 ISP --> Tier 1 ISP --> Datacenter --> server cluster --> load balancer --> server


// Terminology :-

/*
    Internet = a network of networks
    Intranet = private network
    LAN = local area network
    WAN = wide are network

    IP = internet protocol
    IP Address = numeric lable assigned to an internet connected device

    IPv4 = 8.8.8.8
    IPv6 = 2001:4860:4860:8888
*/    



//----- (02) - (Networks Tools Exercise)

/*
    1.) Check status of a network host
    // ping google.com

    2.) Follow the path of your request
    // traceroute google.com

    3.) Show network status
    // netstat -lt | less
*/



//----- (03) - (Internet & Networking Terminology)

// Terminology

/*
    TCP => transmission control protocol
    UDP => user datagram protocol
    ICMP => internet control message protocol
    packet => unit of data transmitted over a network
*/

// TCP vs UDP Communication :-

// TCP HANDSHAKE :- much slower. 

/*
    [   ]   SYN------>    
    [   ]   <-------SYN ACK     [ \\\\\\ ]
    [   ]   ACK------>            
    sender                       Reciver
*/

// UDP :- Is a one way. usefull for streaming video. it is faster

/*
    [    ]      <-------REQUEST
    [    ]      RESPONSE------>     [ \\\\\\\ ]
    [    ]      RESPONSE------>
    sender      RESPONSE------>       Reciver
*/


// DDoS attacks :- Distributed Denial-of-Service attack



//----- (04) - (DNS & URLs)

// How the internet works :-

/*
    COMPUTER
   -----------  ----->TCP/IP-------> frontendmasters.com -------> server ??
    127.0.0.1
*/


// DNS :- domain name system

// domain name :- A Domain name is basically the name or address of the website that users type in URL to visit a website.

// Nameserver :- hold DNS records to translate domain names into IP address


// DNS records :-
/*
   1.) A record - maps name to IP address
   2.) CNAME - maps name to name
*/


// exercise DNS :-
/*
    Lookup the nameservers for an domain
    // nslookup frontendmasters.com

    Lookup the DNS records for a domain
    // dig frontendmasters.com

    View browser DNS cache
    // Chrome = chrome://net-internals/#dns
    // Firefox = about:networking#dns
*/


// Anatomy of a URL (diagram) :-

// URL => uniform resource locator


/*     subdomain           path
    ------------------- -------------
    |                 | |           |
    blog.yourdomain.com/en/fullstack?test=true
                    ----            |        |
         |          tld |           |        |
         |              |           ----------
         |              |             query
         ----------------           parameter
             domain


subdomain => blog.yourdomain.com
path => /en/fullstack?test=true
tld => .com
domain => yourdomain.com
query parameter => test=true

*/

// tld => top level domain (own by company)



//----- (05) - (Buying a Domain Name)

// Exercise

// www.namecheap.com (give you chepest domain name)

/*
    1.) Buy a domain with a registrar
    a.) update the nameserver to use Digital Ocean

    2.) on Digital Ocean, add two A records with your IP address
    =>  @
    =>  www
*/    



//----- (06) - (Update & Restart Server)

// server setup

/*
    1.) Server setup
    2.) Web servers
    3.) NodeJS
*/

// Brand new server

/*
    1.) update software
    2.) Restart your server
    3.) create a new user
    4.) make that user a *superuser*
    5.) enable login for new user
    6.) disable root login
*/


// updating and resatrting

/*
    1.) ssh into your server
    2.) update software
    // apt update
    // apt upgrade

    3.) Restart your server
    // shutdown now -r      // (-r = restart)
*/    



//----- (07) - (Create a User)

// sudo

/*
    #

    root - highest permission level.
    Allows unrestricted access to
    the OS

    sudo - super user do. Allows you
    to run commands and programs as
    root
*/    

// creating and updating users

/*
    1.) create a new user
    // adduser <your_username>

    2.) add user to "sudo" group
    // usermod -aG sudo <your_username>

    3.) switch user
    // su <your_username>

    4.) check sudo access
    // sudo cat /var/log/auth.log
*/    


// Enable login as new user

/*
    1.) Create authorized_keys file
    // ~/.ssh/authorized_keys

    2.) Paste your public key
    3.) Exit
    4.) Login with new user
    // ssh <your_username>@<your_IP>

    // terminal

    cd ~
    ls -la
    mkdir .ssha
    cd .ssha/
    touch authorized_keys
    ls      // authorized_keys
    exit

    .ssha cat fsfe.pub
    .ssha ssha root@165.22.128.44
    su jem
    cd ~
    vi ~/.ssha/authorized_keys  // vi me keys wala copy krna h
    exit 
    exit
    .ssha ssha jem@165.22.128.44
    clear
*/    


//----- (08) - (File Permissions)

// Security

/*
    1.) Change file permission
    // chmod 644 ~/.ssh/authorized_keys

    2.) Disable root login
    // sudo vi /etc/ssh/sshd_connfig

    3.) Resatrt ssh daemon
    // sudo service sshd restart

    // terminal

    sudo cat /var/log/auth.log      // enter password
    // auth.log = invalid user

    man chmod       // q (exit)
    clear

    ls -la
    cd .ssha/
    clear

    (in ssh) 
    ls -la
    chmod 644 ~/.ssh/authorized_keys
    ls -la
    clear


    sudo vi /etc/ssh/sshd_config
    sudo service sshd restart
    sudo -i
    exit
    exit
    ssh root@165.22.128.44
    clear
    
*/    