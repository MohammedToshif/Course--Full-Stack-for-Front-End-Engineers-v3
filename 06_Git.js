
//----- (01) - (Git Exercise)

// version control

/*
    version control - record changes to  a file system to preserve histroty

    => git

    => subversion

    => mercurial
*/


// Git

/*
    1.) create a git repository
    2.) create an SSH key called gh_key
    3.) Add the SSH key to Github
    4.) Add remote repo
    5.) Ensure new SSH key is used
    6.) push local repository to Github
*/



//----- (02) - (Version Control & Git)

/*
// terminal

cd /var/www/app/
cd ~/.ssh/
ssh-keygen
gh_key + ctrl + c
ls
cd /var/
cd /var/www/app/
git reote add origin => then paste link from repo. + ctrl + c
clear

vi ~/.ssh/config
git push origin main    // error

*/

// GIt
/*
    1.) Ensure git uses your new ssh key
    // vi ~/.ssh/config

    2.) Change permission of config to 600
    // chmod 600 ~/.ssh/config

    3.) Change permission of gh_key to 600
    // chmod 600 ~/.ssh/gh_key

    Host github.com
     Hostname github.com
     IdentityFile ~/.ssh/gh_key

    //  terminal

    ssh -Tv git@github.com
*/     

// in case you get stuck

/*
    1.) stop a running process
    // pkill <process>

    2.) Test your ssh connection
    // ssh -vT git@github.com

    3.) save a readonly file in vim
    // :w !sudo tee %

    4.) view permission as numbers
    // stat -c %a <file_name>
*/    
