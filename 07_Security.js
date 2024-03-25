
//----- (01) - (Security)

// I might need security

/*
    => Access control
    => securing appplications
    => firewalls
    => permissions
    => updating software
*/


/*
// terminal
    1.) Read auth log
    // sudo cat /var/log/auth.log
*/    


// security

/*
    => SSH
    => Firewalls
    => updates
    => Two factor authentication
    => VPN      // virtual private network
*/    



//----- (02) - (View Open Ports with nmap)

// Ports

/*
    port - communication endpoint that maps to specific process or network service

    1.) see well known ports
    // less /etc/services
*/


// nmap

/*
    1.) install nmap
    // sudo apt install nmap

    2.) Run nmap
    // nmap <your_server_ip>

    3.) Extra service/version information
    // nmap -sV <your_server_ip>


    // terminal

    sudo apt install nmap
    nmap 127.0.0.1

*/    


//----- (03) - (Firewall & ufw)

// firewall

/*
    "A network security device that monitors incoming and outgoing network traffic and decides whether to allows or block specific traffic based on  a defined set of security rules."

    // software
    ufw -> uncomplicated firewall


                    http
                    https
        $ ufw allow ssh                    
               deny
               reject
*/


// ufw

/*
    1.) check firewall status
    // sudo ufw status

    2.) Allow ssh
    // sudo ufw allow ssh

    3.) Allow http
    // sudo ufw allow http

    4.) Enable firewall
    // sudo ufw enable

    sudo ufw status
*/    



//----- (04) - (Permissions & chmod)

// permissions

/*
    owner   group   everyone else
    rwx     rwx         rwx

    rwx :- r = read, w = write, x = execute

    r   w   x
    4 + 2 + 1   = 7


    rw-     ---     ---
    4+2+0   0+0+0   0+0+0
     6       0        0


    read    4
    write   2
    execute 1

    // terminal

    ls -la


    // permissions

    /*

    rwx rwx rwx     chmod 777 filename              anybody can read, write,
                    chmod -R 777 dir                execute.

    rwx rwx r-x     chmod 775 filename              owner & group can read, write,
                    chmod -R 775 dir                execute. Everyone else can 
                                                    read, execute.
                    
    rwx rwx r-      chmod 774 filename              owner & group can read, write,
                    chmod -R 774 dir                execute. everyone else can
                                                    read.
                    
    rwx r-x r-x     chmod 755 filename              owner can read, write,
                    chmod -R 755 dir                execute. everyone else can
                                                    read, execute.

*/                                                    



//----- (05) - (Unattended Upgrades)

// Application updates

/*
    1.) install unattented upgrades
    // sudo apt install unattended-upgrades

    2.) Enable upgrades
    // sudo dpkg-reconfigure --priority=low
        unattended-upgrades

        no. 2 commnad in terminal
*/        

