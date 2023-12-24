
# Introduction

This documentation provides step-by-step instructions for setting up, running, and deploying a Node.js-based blogging website. This application allows authenticated users to create, read, update, and delete their blog posts. Implemented  secured authentication using jwt token.




# Prerequisites
- Node.js 
- npm (Node Package Manager)
- MongoDB 
- Git






# Setup

## Clone the Repository
git clone https://github.com/stuti-09/Levitation-assignment.git

##Install Dependencies
npm install

## Environment Variables
Create a .env file in the root directory and add the following variables:
- CONNECTION_URL=mongodb+srv://stuti:khushi0909@cluster0.wsgvg.mongodb.net/assignmentdatabase?retryWritesecret=this-is-secrets=true&w=majority
- secret=this-is-secret

## Run the Application
npm run dev
## Deploy the Application
Deploy the application on cyclic.


# Usage

## Accessing the Website
https://jittery-pink-fatigues.cyclic.app/
## User authentication-
### Register- 
To register visit ‘/auth’
### Login-
To login visit ‘/auth/login’
### To access user profile-
‘/user/:id’

## Blog Posts-
### To see all posts and create a post -
Visit ‘/’
### To get ,delete and update a post -
Visit ‘/:id’


Blog Posts-
To see all posts and create a post -
Visit ‘/’
To get ,delete and update a post -
Visit ‘/:id’
