# Projet 12 - SportSee 2022

*Code source du Projet 12 - Développez un tableau de bord d'analytics avec React du parcours Développeur d'application -JavaScript React d'OpenClassrooms*.

## Getting Started with Projet SportSee

**Prerequisites**.

- You need **NodeJS** (version 16.13.0)
- Use **npm**
- You need **Git** for clone this repository

## Installation

**Front-End**.

- Clone the front repository with git clone  [https://github.com/Kuznetsov-100-Rads-Bar/P12-SportSee-OCR](https://github.com/Kuznetsov-100-Rads-Bar/P12-SportSee-OCR)
- while in the front-end repo, open and launch a Terminal and installing the project dependencies: npm install
- Once ready launch the front-end on port **3000** with the command: **npm start**

**Back-End**.

- Clone the back repository with git clone  [https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
- while in the back-end repo, open and launch a Terminal and installing the project dependencies: **npm install**
- Port is changeable in app folder via index.js file => **const port=3030**  (~~const port=3000~~)
- Once ready launch the back-end on port **3030** [http://localhost:3030](http://localhost:3030) with the command: **npm start** => A message saying : "Magic happens on port 3030" should appear in the terminal to confirm successful launch

## WEB APP URL Currently only two users have been mocked. They have userId 12 and 18

- SportSee API only contains data for users with id 12 and 18.
- user 18 has an alternative version of the chart "Sessions average duration", more relevant than the one on *the Figma mock-up.*

**Example web application URL**
You can test the website
The front-end with rendering now on the URL
You can view your React application in web, you can go at  [http://localhost:3000](http://localhost:3000) to view it in your browser.

Example URL
You can test the website display using the id 12  [http://localhost:3000/user/12](http://localhost:3000/user/12)

## Note

### **Warning**

- To get started, first launch the front-end and you will have a **404** page and links below that will take you to  [localhost3000/user/12](localhost/user/12)=> Back to the page or [localhost3000/user/12](localhost3000/user/12) or [localhost3000/user/18](localhost3000/user/18) that you have the possibility to choose ! !

Please start and launch the Back-End  [P9-front-end-dashboard/](P9-front-end-dashboard/) with command **npm start**

- In the .env file you can use the mocked API or the real API, just change *"REACT_APP_IS_MOCK_ACTIVE"*

## LEARN MORE

You can read more

- [Recharts](https://recharts.org/en-US)
- [@use JSDoc](https://jsdoc.app/)
