# The Backend

This is where the magic happens.

## How to run

First of all, install all of the required modules for this app by running `npm install` or, simply, `yarn`.

About the database, this app has only been tested on postgres so I highly suggest that for running this app. Create a database named
meetapp or change the config on the `.env` file to one of your liking.
Input your port, host and password on the `.env` file then run `yarn sequelize db:migrate`, check if the tables and their relations were
created on your database.

I use MailTrap to test the email function of the server, modify the `.env` file to match your user, pass, port and host
on the mailtrap section.

Run the server with `yarn dev`. The default port for the server is `3434`.

There's an `Insomnia.json` file on the root of this directory that contains all of the routes for
testing. Just import it on Insomnia and you're good to go.

Everything should be working on the backend by now. To be honest there's not a lot that can go wrong here.

#### Notes to self

Add more schema validations, queue for sent emails and more documentation on the code.
