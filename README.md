# IRON MAIDEN

## GitHub Repositories ##
[GithHub Repo Front-End](https://github.com/TridKay99/Breezy-Front-End)\
[GitHub Repo Back-End](https://github.com/alexanderb444/Breezy-Back-End)

## Deployed ##
[Live App](https://compassionate-saha-819100.netlify.com/)\
[BackEnd Deploy](https://breezy-back-end.tridkay90.now.sh/)

## Contents
<!-- links  -->
**[=> Section 1: Description](#Section-1:-Description)**

**[Overview](#Overview)**\
**[Group Members](#Contributors)**\
**[About](#About-Iron-Maiden)**\
**[Background](#Project-background)**\
**[Tech Stack](#Tech-Stack)**\
**[Configuration](#Configuration-/-Installation-Instructions)**\
**[Sitemap](#Sitemap)**\
**[Features](#Features)**\
**[Screenshots](#Screenshots)**\
**[Our Inspiration & The Idea](#Inspiration-/-Ideas)**

**[=> Section 2: Planning](#Section-2:-Planning)**

**[Project Plan](#Project-Plan)**\
**[Wireframes](#Wireframes)**\
**[ERD](#ERD-/-Database-Relationships)**\
**[User Journey Diagram](#User-Journey-Diagram)**\
**[Team Communication](#Team-Communication)**\
**[Task Management](#Task-Management)**\
**[Version / Source-Control](#Version-/-Source-Control)**

**[=> Section 3: Short Answer Questions](#Section-3:-Short-Answer-Questions)**

**[=> Section 4: Reflection](#Section-4:-Reflection)**

**[Challenges](#Challenges)**\
**[Take-Aways](#Take-Aways)**\
**[Extending-Coding-Tutor](#Extending-Breezy)**

**[=> Section 4: Section 5: Appendix](#Section-5:-Appendix)**
**[Single Page Scrolling](#Single-Page-Scrolling)**\
**[Search & Filtering](#Search-&-Filtering)**


---
## __Section 1: Description__


### __Overview__ ###
Iron Maiden is a service that allows users to log in and make an order to have their laundry pickedup and dropped off two days later.

This application is built using javascript and the MERN stack (**M**ongoDB, **E**xpress, **R**eact and **N**ode.js) for our final assignment at Coder Academy.

---

### __Contributors__ ###
Suet Er Lee\
Alex Bishop\
Tristan Kay

---

### __About Iron Maiden__ ###

Iron Maiden is a business that works in favour with the trend of the lazy world. As we indulged in the constant service of UberEats and Airtasker, people like us look towards applications to take care of other issues that my laziness intends to repent. 

With the simplicity of Iron Maiden, your laundry will simply be picked up from your address in Prahan or Richmond and delivered back to you after two days.\
i.e Richmond, pickup Monday and dropoff Wednesday.

### __Project Background__  

The aim was to find a real world client to represent and present a web application for a final assessment. A minimum of MVP required us to build a working prototype of the client concept and print it to a working deployed URL. Front-end deployed through Netlify and back-end deployed through Ziet Now.

Essentially, we needed to find a find an issue with our client's service and find a solution. Considering it had not yet been given a website, our solution was to create the website from scratch. This implements a user login system that uses a boolean (true or false) to determin whether the user was an Admin or normal user. This led into a a user profile that allowed them to place orders for their laundry.


### __Tech Stack__    

- Front-end: HTML, React, CSS, Sass, Javascript
- Back-end: Node.js, Javascript, Mongoose, Axios
- Database: Mongodb Database with Mongoose
- Deployment: Netlify for front-end, Up for back-end.


### __Configuration / Installation Instructions__

1) Within your CLI, navigate the directory where you want to install the application files, and run 'git clone https://github.com/TridKay99/Breezy-Front-End' and https://github.com/alexanderb444/Breezy-Back-End.

2) Run 'npm install' to install the dependencies

3) Run 'npx create-react-app filename' to use React for front end.

4) Run npm start to run the server in development mode

5) In your browser, navigate to 'http://localhost:3000/' to view the website

6) Either login using the default Guest Account:
  - email: guest@guest.com
  - password: password

7) Or Sign Up to create a new account


### __Site Map__








### __Features__

- Secure Login, User Authentication and Authorization
- Personalized User Profiles
- Admin Dashboard where admin can view their customer's orders, location, and total price
- Clear, well-organised and innovative UI with slimmed down content and features
- User orders where users can view list of orders and make changes
- Order Cart section to select clothings. Auto calculation for total price and a checkout system
- Log in and Sign up modals (pop ups)
- Checkout / payment using Credit Card with Strip Integration
- Contact form via mailgun
- Map of the location (Leaflet)



### __Screenshots__

![Screenshot](./src/Home1.png)\
![Screenshot](./src/Home2.png)\
![Screenshot](./src/Home3.png)\
![Screenshot](./src/Home4.png)\
![Screenshot](./src/Orders.png)\
![Screenshot](./src/Profile.png)


### __Inspiration / Ideas__

We were inspired by the old webiste Breezy, http://www.breezy.com.au/

Other laundry websites :


### __Project Planning__





### __Wireframes__





### __ERD__

---

## User **Stories** && User **Journey** ##

`User Stories`

Using figma, we developed user stories to give an example of a certain situation in which our product would work. A back and forth idea between the admin and user can be invisioned after the story is told.
Ultimately, gathered out of this can be the way our software features are used to help each perspective.



### __User Journey__

  - Tom (admin) is in the need of an application that allows him to view information from the admins side. He needs access to address', orders and the users that placed them.

  - Fred, Tristan, Nick (users) are in need of an application that will allow them to place an order(within reason). They need to supply their address and name to allow pickup and prove legitimact at times.

<p align="center">
 <img width="" height="400" src=https://res.cloudinary.com/dqsacxogt/image/upload/v1563936492/UserStories_hnnzot.png></p>


`User Journey`

Using Figma, we created a user journey to show the flow of redirection when traveling through our application. Admin and user share different experiences.
<p align="center">
 <img width="" height="470" src=https://res.cloudinary.com/dqsacxogt/image/upload/v1563937313/WorkFlow_DIagram_ddy5za.png></p>


---

## Data Flow Diagram ##


With the largely used MERN stack (**M**ongoDB, **E**xpress, **R**eact and **N**ode.js) as well as packages provided and downloaded from npm like Mongoose Axios and React-router-dom, we created a user friendly MVP for Iron Maiden. The data flow diagram for this project is represented below.

<p align="center">
 <img width="" height="345" src=https://res.cloudinary.com/dqsacxogt/image/upload/v1563939241/DataFlow_akewrp.png></p>

---

## OO Design Documentation ##

The OO design thinks about the countless componets and their relationship with, what is exported from and imported into. During the creation of this we thought about the three directions the Home.js could go. One being the Admin.js direction which holds protecting for all its child components. The second being the Registration.js that allows the user to be created which then connects to its child component, ProfileReg.js which then prompts the new user to fill out more information about him/herself. The final third component is the Profile.js that represents the current user's information and holds the important link to the orders.js to create an order for the company, Iron Maiden.

Authetication is importantly held through the App.js as a state thats only changed upon log in. An account variable is looked at. Depending on the the state, the user will be directed to the user page and will not be allowed access to the admin page. Or the admin will be directed to his/her page.

<p align="center">
 <img width="" height="345" src=https://res.cloudinary.com/dqsacxogt/image/upload/v1563939241/OO_Design_Documentation_jr8uwh.png></p>


### __Team Communication__



### __Task Management__







## __Section 3: Short Answer Questions__


### 1) What are the most important aspects of quality software?
Based on what we've learnt in this course, and the hands on practical work in this assingment there are a few things that stand out. One is the constant amount of problem solving that is necessary in as a group of students chips away and a full working application.
Rather than taking on too much and creating a mess for us all to clean up. Limiting problem solving comes with limiting the amount of work you set yourself. As its always good to push yourself, taking on too much with a dead line can end in trouble. A huge aspect is setting a reasonable goal to everyones work ethic and skill.

When thinking about code thats being shared between developers, a large aspect to be thought about is the ability to write clean and well labeled code that is filled with logic. Having the skill to write clean, consice code for your peers to work with is something that should be harnest when thinking about getting a job and merging into the wide world. Working smoothly with the codebase also means working along side someone on a different computer and not overlapping and creating merge conflicts.


### 2) What libraries are being used in the app and why?

Many libraries are involved in the creation of this app including React, Node.js, axios, react-router-dom and mongoose.

`Frontend`

  - **React v16.8.6:** A JavaScript library for creating user interfaces
  - **React-router-dom v5.0.:** Collection of navigational components that compose declaratively with your application
    - link
    - BrowserRouter
    - Switch
    - Route
  - **axios v0.19.0:** Promise based HTTP client for the browser and node.js
  - **leaflet v1.5.1:** Open-source JavaScript library for interactive maps
  - **font-awesome v4.7.0:** Full suite of pictographic icons for easily scalble vector graphics.


`Backend`

  - **dotenv v8.0.0:** Zero-dependency module that loads environment variables from a .env file into process.env.
  - **mongoose v5.6.3:** MongoDB object modeling tool design to work in an asynchronous environment.
  - **express v4.17.1:** Fast, unopinionated, minimalist web framework for node.
  - **cors v2.8.5:** Provides a Connents/Express middleware that can be used to enable CORS with various options.
  - **jsonwebtoken v8.5.1:** An implementation of JSON web tokens.
  - **mailgun v0.5.0:** Simple Node.js module for Mailgun.


### 3)  A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?


### 4)  Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

Ans: project management skills


### 5)  Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?