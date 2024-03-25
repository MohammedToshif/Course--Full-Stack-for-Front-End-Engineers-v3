
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