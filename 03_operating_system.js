
//----- (01) - (Operating System)

// Operating System

// OS (defination) => An operating system (OS) is the program that, after being initially loaded into the computer by a boot program, manages all of the other application programs in a computer.


/*
1.) User
2.) Shell
3.) Kernel
----------------
| 4.) hardware | 
----------------


//----- (02) - (Security & Hashing)

// Security

/*
1.) username / password
2.) biometric
3.) ssh key 

ssh key => SSH keys are authentication credentials. SSH (Secure Shell) is used for managing networks, operating systems, and configurations. It is also inside many file transfer tools and configuration management tools. Every major corporation uses it, in every data center.    */

// Dictionary attack

/*
123456, 123456789, qwerty, password, 12345, qwerty123, 1q2w3e, 12345678,
111111, 1234567890
X => p@ssword12
p_#s2!$DR   (right)     */


// Hashing => Hashing is the process of transforming any given key or a string of characters into another value.

// OpenSSL => is an open source cryptographic toolkit that facilitates secure communications between endpoints on a network. 


// terminal
/*
temp echo password >> foo
temp ls
temp cat foo        // password
temp man openssl

temp openssl md5 foo | awk
temp openssl md5 foo    // MD5(foo)= 286755fad04869ca523320acce0dc6a4       // (33 charecter)



//----- (03) - (Hashing with Salt)

/*
~ temp openssl md5 foo | awk
~ temp openssl md5 foo | awk -F'{print $2}'
~ temp openssl sha1 foo     // SHA1(foo)= c8fed00eb2e87f1cee8e90ebbe870c190ac3848c      // (41 character)
~ temp openssl sha256 foo   // SHA256(foo)= 6b3a55e0261b0304143f805a24924d0c1c44524821305f31d9277843b8a10f4e    // (65 charecter - pretty hard)
*/

// Hashing + salt

/*
INPUT + SALT + hash function = SALTED HASH

./foo + SALT + SHA1 = ??        */


/*
Bitcoin
SHA256
            -Ransomware
Ethereum
keccak-256

// ==>>     SHA256 more complex better than md5

What Is Ransomware :-

1.) Ransomware is a type of malicious software (malware) that threatens to publish or blocks access to data or a computer system, usually by encrypting it, until the victim pays a ransom fee to the attacker.

2.) Since hashing is one-way, Ransomware typically uses encryption algorithms which are two-way
*/



//----- (04) - (Setup SSH Keys for Login)

// SSH = public key encryption

/*

    SSH key pair :-
    a.) public key
    b.) private key

SSH = secure socket shell (it's just means how we connect to a server in a secure way.)

a.) public key = is used to encrypt any sort pf data, any sort of massage you want.     */



/*
    your computer                       server
  -----------------                  -------------

    prrivate key   <---------------    public key
     (secret)

                    encrypted message

     password      --------------->     Encrypted

*/



// SSH key (exercise - 1) :-

/*
    1.) Move into the ~/.ssh directory
    2.) Generate a key using ssh-keygen
    3.) Name your key "fsfe"
*/    


// (exercise - 2)
/*
    ~ temp cd ~/.ssh
    ~ .ssh ls
    ~ .ssh rm -rf fsfe*
    ~ .ssh ls
    ~ .ssh clear

    ~ .ssh ssh-keygen
    // generating public/private rsa key pair
    // Enter file in which to save the key (/User/toshif/.ssh/id_rsa): fsfe

    ~ .ssh cat fsfe.pub         // => show the public key

    ESC :- exit screen
*/



/*
    .ssh ls | grep fsfe
  fsfe <----------------  private key
  fsfe.pub <------------  public key
  
  1.) Copy the public key into Digital Ocean
  2.) Finish setting up the server
*/

// terminal 
    // ~ ssh ls | grep fsfe
    // ~ fsfe
    // ~ fsfe.pub
    // ~ .ssh cat fsfe.pub



// Login exercise :-
/*
    1.) ssh into your server
    // ssh root@<your_IP>

    2.) ssh into your server your private key
    // ssh -i ~/.ssh/fsfe root@<your-IP>

    3.) Exit your server
    // exit
*/



//----- (05) - (SSH key Recap)

// SSH key

/*
    1.) Move ito the ~/.ssh directory
    // cd ~/.ssh

    2.) Generate a key using ssh-keygen
    // ssh-keygen
*/


/*
    1.) Make sure keychain is active
    // vi ~/.ssh/config

    2.) Add private key to keychain
    // ssh-add --apple-use-keychian fsfe

    Host *
     AddKeysToAgent yes
     UseKeychain yes
*/     



