## City Explorer


Number and name of feature: User Acceptance Tests

Estimate of time needed to complete: 5

Start time: 9 am

Finish time: 1:50 pm

Actual time needed to complete: 3 hours 50 minutes


# lab-06-back-end**Author**: Susanna Lakey
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->
* This app is intended to create the back-end for a website that will take in a users search for a city.  It will then output the following for the selected city:
* A google map of the city
* Results from the Dark Sky API
* Results from the Yelp API
* Results from the Eventbrite API
* Results from The Movie DB API
* Results from the Hiking Project API


## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
* Create your repository and clone it into the file you would like it to reside in
* Add .eslintrc.json and .gitignore files
* Type npm init to create a package.json
* Install express, cors, and dotenv (for example: npm install express)
* Require all in your javascript file
* Create a port and store it in your .env file
* Create a route for each of your API's data
* Create a constructor function for each API.
* Create variables for where each item is stored in the API's data.  Then plug those variables into your constructor to create an instance of that object.
* Send your data

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
* This application was designed with JavaScript
* It makes use of express, dotenv, cors, and node.
* It gathers data from the following APIs:
  * Google
  * Dark Sky
  * Yelp
  * Eventbrite
  * The Movie DB
  * The Hiking Project


## Change Log

08-20-2019 9:15am - Put together file structure.

08-20-2019 10:00am - Created object literal to pull data from geo.json

08-20-2019 10:15am - Made object literal into a constructor function and created a new instance of the location data which is appearing and the route is responsding in the deployed static client.

08-20-2019 10:35am - Deployed Heroku.

08-20-2019 10:35am - Weather data time is now converted from milliseconds into a date.


## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
