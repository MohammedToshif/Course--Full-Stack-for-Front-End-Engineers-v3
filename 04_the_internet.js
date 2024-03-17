
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