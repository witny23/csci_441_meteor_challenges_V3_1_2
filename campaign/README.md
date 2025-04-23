vid[s] 03b-05a: Authentication and useNavigate() challenge - start



Authentication and useNavigate() challenge 

INSTALL PROCESS
    In the terminal:
        meteor add accounts-password
            - accounts-password is being added to meteor vs specifically to your project


GOALS

    Understand the utilization and implementation of:

    accounts-password
        - Passwords Docs: https://docs.meteor.com/api/passwords.html
            -  The accounts-password package contains a full system for 
                password-based authentication. In addition to the basic username and password-based sign-in process, it also supports email-based sign-in including address verification and password recovery emails.
        - Accounts.createUser: https://docs.meteor.com/api/passwords.html#Accounts-createUser  
        - Accounts: https://docs.meteor.com/api/accounts.html


    In imports/ui/Signup.js:
        create new user accounts
        - have meteor do the hard work of creating accounts b/c of its built in capabilities
            in submitForm we call one meteor method and meteor does the rest
            - hash password, communicate with server, manage auth tokens

        Using the useState Hook and Working with Forms in React.js:
        - https://dev.to/jleewebdev/using-the-usestate-hook-and-working-with-forms-in-react-js-m6b


    - Login.jsx
        - learn about Meteor.loginWithPassword(user: Object | string, password: string, [callback])
        - Docs: https://docs.meteor.com/api/accounts.html#Meteor-loginWithPassword




INSTRUCTIONS

    Found on main.html when program is running or in imports/ui/Instructions.js



Stop runaway node or mongo on windows

taskkill /f /im mongod.exe
taskkill /f /im node.exe