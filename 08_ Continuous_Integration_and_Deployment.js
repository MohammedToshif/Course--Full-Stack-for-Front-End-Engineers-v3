
//----- (01) - (Continuous Integration & Deployment)


// Diving into the server pt 2

/*
    => CI/CD
    => Shell scripting
    => Cron
*/


/*
    continuous integration :- COde changes are validated and merged back into main branch as often as posibble.

    Continuous delivery :- Code changes are automatically built and ready for production.

    Continuous deployment :- Builds are automatically deployed to production enviornment.
*/


/*
    // CI/CD

    // continuous integration

    // continuous delivery :-

    * means automatic
    # means manual 

    *BUILDS----*TEST-----*ACCEPTANCE-----*DEPLOY TO |   #DEPLOY TO ---> *SMOKE TESTS
                            TEST            STAGING     PRODUCTION


    // continuous deployment :-

    *BUILDS----*TEST-----*ACCEPTANCE-----*DEPLOY TO-----*DEPLOY TO ---> *SMOKE TESTS
                            TEST            STAGING     PRODUCTION 


    // website :- SPINNAKER => spin up 500 clusters, with a button and they are all configured correctly exactly the same, there's a load balancer setup. it does so much work for us,
    NETFLIX runs on Spinnaker.
    its for create personal project.
*/                                



//----- (02) - (Cron for CI)


// cron - executes commands on  a schedule

// cron
/*
    0 10 * * 1-5 sh ./myscript.sh

    "Run ./myscript.sh at 10:00 on every day-of-week fro throught friday."
*/

// shell scripting
/*
    #! /user/bin/bash

    now=$(date + "%r")
    read -p "what is your name? " name
    echo "The time is $now. Have a wonderful day $name"

    Wha is you name? toshif
    The time is 05:30:09 AM. Have a wonderful day toshif.
*/    


// CI/CD

/*
    1.) Create a bash script that git pulls from main branch
    2.) create a cron job to execute script every 2 minutes


    #! <location of bash>
    <commands to run>

    1.) Shows location of bash shell
    // which bash


    // terminal
    cd /var/www/app
    vi test.sh
    which bash      /usr/bin/bash
    vi test.sh      // enter your name

    rm test.sh
    vi github.sh
    chmod 777 github.sh
    ./github.sh
*/


// cron


/*
=> cron job it's just a timer and the thing to execute on whatever cadence you want.

    minute              day  
       |       day     (week)
       |     (month)      |
       *   *    *     *   *    sh /path/to/script
           |    |               |
           |  month             |
           |                   use
          hour                 bash

          1.) SHows cronjobs
        //   crontab -e


visit website => crontab.guru :-

“At every 10th minute on Tuesday in April.”
 at 2024-04-02 00:00:00

//   10 * * 4 2  */      


// terminal

/*
    crontab -e
    press 2 and enter
    inside
    * * * * *   :wq
    sudo cat /var/log/syslog

    // generally syslog is captures most of what you're doing.
    sudo tail -f /var/log/syslog

    pwsd
    pwd
    clear

    vi github.sh
    crontab -e
    sudo tail -f /var/log/syslog
*/


//----- (03) - (Logging, Streams, & Redirection)

// Diving into your terminal

/*
    => Logs and how to read them
    => standard streams
    => Redirection
    => Finding things
*/

// /var/log/
/*
    1.) syslog
    2.) auth.log
    3.) nginx/access.log

    tail => output the last part of a file
    head => output the first part of a file
    less => output one page at time
    cat => output entire file

    1.) follow the output of a file
    // tail -f
*/

// standard streams
/*
    standard output
     stdout

    standard input
     stdin
     
    standard error
     stderr
*/

// Redirection

/*
    |
    read from stdout

    >
    write stdout to file

    >>
    append stdout to file

    <
    ead from stdin

    2>&1
    redirect both stderr and stdout

    // terminal

    echo hello > foo
    cat foo     // hello
    echo hole > foo
    cat foo     // hole
    echo hola > foo
    cat foo     // hola
    echo hello >> foo
    cat foo     // hola hello
*/    



//----- (04) - (find & grep)

// find things
/*
    find            find - search file names

    grep            grep - search file contents
*/


/*
    // find

    $ find  /bar  -name  foo.txt

    find = find
    /bar = directory
    -name = option
    foo.txt = file/folder

    => find all log files in /var/log/
    => find all directiries with the name log

    1.) find all log files in /var/log
    // find /var/log -type f -name "*.log"

    2.) find all directories with the name log
    // find / -type d -name log

    // terminal
    1.) => ....
    sudo !!     // (shorthand)

    find / -type d log
    find / -type d -name log
    sudo !!
*/    


// Grep :- is looking inside, find will jus give you the files, bt grep looks inside the file.

/*
    $ grep -i 'jem' /var/www

    grep => grep
    -i => options
    'jem' => search expresssin
    /var/www => directory

    // $ zgrep FILE    search inside gzip file


    1.) Find running node processes
    //  ps aux | grep node
*/



//----- (05) - (Nginx Redirection & Gzip)

// Nginx
/*
    => Nginx redirection
    => Gzip
    => Subdomains
*/    

// Redirect
/*
    location /help {
        return 301 https://developer.mozilla.org/en-US/;
    }
*/


// Gzip :- Gzip is a compression algorithm that is run on Nginx, that compresses things.

/*
    ##
    # Gzip Settings
    ##

    gzip on;

    # gzip_vary on;
    # gzip_promixed any;
    # gzip_comp_level 6;
    # gzip_buffers 16 8k;
    # gzip_http_versio 1.1;

    //  /etc/nginx/nginx.conf


    00001110100000
    
    4 = 0
    3 = 1
    1 = 0
    1 = 1
    5 = 0

    compression always has a fixed output, and it's going to be a small as possible.

    hashing we don't actually care about the size as much.

    spotify and youtube all on the compression work
    MP3 is what a compression of WAV file.
*/    



//----- (06) - (Subdomains)

// subdomain :- it's a subset of main domain, but it's much easier to work with.

/*
    1.) Create a subdomain called "blog"
        a) Create an A record
        b) Create a server
    
    2.) Update nginx.conf
    3.) Restart nginx        
*/

// SUbdomain

/*
    server {
        listen 80;
        listen [::]:80;
        server_name blog.<your_domain>;

        location / {
            proxy_pass http://localhost:3000
        }
    }
    

    // terminal

    sudo vi /etc/nginx/sites-enabled/blog.fsfe
    sudo vi /etc/nginx/nginx.conf
    sudo service nginx restart
    sudo nginx -t
    on browser (blog.jemstack.lol)  error show ho rhi h (out painding)
*/    