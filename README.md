# eCommerceORM

## Object-Relational Mapping (ORM): E-Commerce Back End

This application creates the back end for an e-commerce website that uses the latest technologies in order to compete with other e-commerce companies.

## Mock-up

![IMAGE.](./images/IMAGE.jpg)

## Installation

This application requires installation of npm (incl. nodemon, dotenv, express, mysql2, sequelize), MySQL, and Insomnia. 

A walkthrough video can be viewed here: GOOGLE DRIVE LINK

All elements of the project can be examined here: https://github.com/matthewestes33/eCommerceORM 

## Credits

Referenced documentation and tutorials:

Associations | Sequelize: https://sequelize.org/docs/v6/core-concepts/assocs/

Note about allowNull implementation | Sequelize: https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/#note-about-allownull-implementation 

Use Insomnia for API Requests: https://apis.support.brightcove.com/general/use-insomnia-api-requests.html

Additional assistance:

Thank you to my instructional staff and AskBCS Learning Assistants!

## Features

When the user adds the database name, MySQL username, and MySQL password to an environment variable file, they connect to a database using Sequelize.

When the user enters schema and seed commands, a development database is created and is seeded with test data.

When the user starts the application in the command line, the server is started and the Sequelize models are synced to the MySQL database.

When the user opens API GET routes in Insomnia for categories, products, or tags, the data for each of these routes is displayed in a formatted JSON.

WHEN the user tests API POST, PUT, and DELETE routes in Insomnia, they are able to successfully create, update, and delete data in the database.
