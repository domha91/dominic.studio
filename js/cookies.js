// https://www.section.io/engineering-education/what-are-cookies-nodejs/
// https://www.section.io/engineering-education/express/

// TODO: Use cookies to trigger nightMode function to toggle it for
// the duration of the session on all pages
// https://www.w3schools.com/js/js_cookies.asp
// https://www.cookieconsent.com/


const express = require('express')
const cookieParser = require('cookie-parser')

//setup express app
const app = express()

// let’s you use the cookieParser in your application
app.use(cookieParser());

//set a simple for homepage route
app.get('/', (req, res) => {
    res.send('welcome to a simple HTTP cookie server');
});

//server listening to port 8000
app.listen(8000, () => console.log('The server is running port 8000...'));

module.exports = cookies;