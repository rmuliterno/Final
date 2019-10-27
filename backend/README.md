# The Backend

This is where the magic happens.

## How to run

First of all, install all of the required modules for this app by running `npm install` or, simply, `yarn`.

About the database, this app has only been tested on postgres so I highly suggest that for running this app. Create a database named
meetapp or change the config on the `.env.example` file to one of your liking then rename it to `.env`.

Input your port, host and password on the `.env` file then run `yarn sequelize db:migrate`, check if the tables and their relations were
created on your database.

### Suggested route

These are the docker commands I used to set this up:

`docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres` for the postgres image, change the credentials to any of your liking.

`docker run --name redismeet -p 6379:6379 -d -t redis:alpine` for the redis image.

Be sure to run these images before attempting to run the backend or it will not work properly.

I use MailTrap to test the email function of the server, modify the `.env` file to match your user, pass, port and host
on the mailtrap section.

Run the server with `yarn dev`. The default port for the server is `3434`.

There's an `Insomnia.json` file on the root of this directory that contains all of the routes for
testing. Just import it on Insomnia and you're good to go.

Everything should be working on the backend by now. To be honest there's not a lot that can go wrong here.

#### Notes to self

Add a nice dockerfile later for easier setup.


