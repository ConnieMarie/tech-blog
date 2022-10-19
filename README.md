# Techie Talk

  [![License: ISC](https://img.shields.io/badge/license-ISC-blue.svg)](#license)

  ## Description
  This application was built using the MVC structure, Handlebars as the template language, Sequelize as the ORM, and the express-session npm package for authentication. 

  Techie Talk is a CMS style blog site where developers can publish articles, blog posts as well as their thoughts and opinions. Upon visiting the site for the first time, the user is presented with the homepage which includes existing blog posts; navigation links for the homepage and the dashboard; and the option to log in. When the user clicks the homepage, they are taken to the homepage. When the user clicks any other navigation links, they are taken to the login page where they can choose to sign up or log in. To sign up, the user is asked to create a username, provide an email address, and create a password. Once the first time user has signed up, their credentials are saved and they are logged in to the site. When the user revisits the site, they can log in with their username and password. While logged in, the user can see navigation links for the homepage, dashboard, and the option to logout. When the user clicks the homepage, they are taken to the homepage and presented with existing blog posts that include the post title and the date created. When the user clicks an existing post, they are presented with the post title, contents, creator's username, and date created as well as the option to leave a comment. When the user enters a comment and clicks the submit button while signed in, the comment is saved and the post is updated to display comment, the comment creator's username, and the date created. When the user clicks the dashboard link, they are taken to the dashboard and presented with any blog posts they have already created and the option to create a new blog post where they are asked to enter both a title and contents for their blog post. When the user clicks the create button, the title and contents are saved and their dashboard is updated with the new blog post. When the user clicks the "Edit Post" button under any of their existing posts in the dashboard they are presented with the option to update, delete, or add comments to that post. When the user clicks the logout option, they are signed out of the site. When the user is idle for more than one minute they are able to view comments, but will have to log back in to add, update, or delete comments.

  Heroku deployed site:
  https://morning-spire-98359.herokuapp.com/


  ![techietalkss1](https://user-images.githubusercontent.com/105762638/196807379-3e4b90d5-e49e-4fdf-a81c-68746cd458a6.png)

  ![techietalkss2](https://user-images.githubusercontent.com/105762638/196807385-6dc2be3b-5ab8-45f7-85ba-57de7c3dee9c.png)

  ![techietalkss3](https://user-images.githubusercontent.com/105762638/196807389-9eadaae5-cc94-42dc-a613-02d7a72b9798.png)

  ![techietalkss4](https://user-images.githubusercontent.com/105762638/196807390-a9b01483-e6ef-4fab-8767-21d83c992a09.png)

  ![techietalkss5](https://user-images.githubusercontent.com/105762638/196807391-60faecdd-e481-4c86-8e7a-2825315125b5.png)
  

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Projects](#projects)
  

  ## Installation
  To install necessary dependencies, run command:

    npm i

  ## Usage
  Instructions for use Techie Talk:

  Navigate to the login page to sign up. Then explore, comment, and post to your heart's content.

  ## License
    This application is covered under ISC. To read view documentation about this license, please visit the link below.
  https://opensource.org/licenses/ISC

  ## Contributing
  Guidelines to contribute to this project:

  Clone the repository, create a sandbox branch, and submit pull request for review.

  ## Tests
  Instructions to run tests on this application:

    In the command line, run command node seeds. Then sign up or use test username: username and password: password123 to login and view and test seeded site.

  ## Projects

  To view my other work, please visit my GitHub profile at [ConnieMarie](https://www.github.com/ConnieMarie). 
