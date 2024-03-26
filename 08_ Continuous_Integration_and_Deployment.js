
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
    vi test.sh