# Seeds_React

The Seeds application can be found here: [https://seeds-app.herokuapp.com/](https://seeds-app.herokuapp.com/)

## Introduction

Seeds is designed to help people be more happy by teaching them to be mindful of what is causing negative patterns in their life in order to make positive changes, as well as training them to look for the good in even the worst of days.

Seeds wil organize and display everyday you sign-in in an easy to digest format to help identify positive and negative patterns in your life as well as show you previously entered gratitudes during your time using Seeds.

## Table of Contents
* [Description](#Description)
* [Usage](#Usage)
* [Contributors](#Contributors)

## Description

Seeds uses Passport, Bcrypt, and Express Sessions to authenticate the user for our application. This application was also built using MySQL, Express, React, and Node to display the page, and connect to the database.

## Usage

When the user visits the application, they will be shown an option to login or Sign up.

![Seeds main page.](https://github.com/falbuna/Seeds_React/blob/main/assets/01_Homepage.png)

For first time users, they will be required to enter their name, an email address for the Username, and a password to create a new account after clicking Sign up. If the user enters an email with a Gravatar account, the image on their Gravatar account will display.

![Sign-up page.](https://github.com/falbuna/Seeds_React/blob/main/assets/02_Signup.png)

If the user is a returning user, all they will need to do is enter their email address and password after clicking Log In.

![Log-in page.](https://github.com/falbuna/Seeds_React/blob/main/assets/03_Login.png)

Once logged in, the user can create a new post by clicking on the "+ New Post" button. If the user is a returning user, the page will display their previous metrics and the option to create a new post will be on the top right. (Note: There is a limit of 1 New Post per day. After a post has been submitted, the user will need to wait until the next day to submit a new post.)

![New Members page.](https://github.com/falbuna/Seeds_React/blob/main/assets/04_Newmember.png)

The user will then be asked if they had a good or bad day. Next they will be asked for the reason for their good or bad day. Lastly, the user will be asked to enter a gratitude for the day. Once they enter a gratitude, the user can click the submit button.

![Submit post.](https://github.com/falbuna/Seeds_React/blob/main/assets/05_Submitpost.png)

Once the user completes a post, they will be able to view their metrics on the members page.

![Members metrics page.](https://github.com/falbuna/Seeds_React/blob/main/assets/06_Membersmetricspage.png)

On the calendar, the user can see all of the previously entered posts from prior days. Clicking on a previously entered post on the calendar will open a modal for that post. Clicking on edit will allow the user to change the post.

![Calendar modal.](https://github.com/falbuna/Seeds_React/blob/main/assets/07_Calendar.png)

## Contributors
* Francis A.
* Ian S.
* Jeff C.
* Matt M.
* Zach B.
