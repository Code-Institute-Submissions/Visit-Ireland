# Visit-Ireland

### Introduction
This Website was built for the fictional client Visit-Ireland. The purpose of this website was to help promote the country of Ireland and help to guide tourists on places to see.
The goal was to make a  website where visitors can see popular tourists sites to visit, help tourists to find places to stay, eat and drink at ease.
Also to contact the website for more info by email or social media links. You can view the full site here hosted on [Github](https://waynecrawley.github.io/Visit-Ireland/).

## UX
The website was built with a mobile first approach. The client wanted a single page website that was interactive and easy to navigate.
### User Stories

**As a** New Visitor  
**I want** the website to be easy to navigate   
**So that** It’s easy to find Social Media Links  

**As a** New Visitor   
**I want**  to see some images of tourist sites to visit  
**So that** i can see if i'd be interested in visiting the site  

**As a** New Visitor    
**I want**  to search for a place to eat,sleep and drink  
**So that**  it's easy for me to decide on a venue.  

**As a** Returning Visitor  
**I want** to be able to contact the company easily   
**So that** If i have any queries i can do so without searching through the website  

### Strategy
 + This project is for the creation of a website for Visit Ireland to help promote the country of ireland, that is visually pleasing and has an ease of use.

### Scope
+ The website should be responsive, contain interactive elements, work on all devices and browsers. The website must consist of tourist sites to visit, help to find places to stay, eat and sleep, a contact form and social media links.
### Structure
+ The overall structure of the website was that of a single page website, with three main sections. places to discover, search places to stay, eat and sleep and a contact us section. 
### Skeleton

#### Wireframes
+ [index.html Wireframes for Mobile](https://github.com/waynecrawley/Visit-Ireland/blob/master/wireframes/MobileWireframe.png)
+ [index.html Wireframes for Tablet](https://github.com/waynecrawley/Visit-Ireland/blob/master/wireframes/tabletWireframe.png)
+ [index.html Wireframes for Desktop](https://github.com/waynecrawley/Visit-Ireland/blob/master/wireframes/desktopWireframe.png)

### Surface

+ A Mostly black and white colour theme was used for this website, which showcases the classic professional look. A pop of colour was added through the use of colour images and touch of green on link backgrounds.


# FEATURES
### Existing Features
+ **Navbar** - A Navbar is available with links that smooth scrolls to all the important sections on the website.
  * On Mobile these links are hidden in a dropdown menu for better functionality.
+ **Javascript Carousel** - A Carousel that cycles through information,images of tourist hotspots with the uses of next and previous button. 
+ **Search Feature** - A Google Maps places Api that helps the user search for places to eat, sleep and drink in  location chosen by them.
+ **Contact Us** - A form for the customer to contact the client with any questions they may have.
+ **Social Media Links** - Social media links are available in the footer section of the website. This is an alternative method for Visitor to contact the client.
### Features Left to Implement
+ In the future the client would like me to Implement a section to hire a car.
+ In the furture the client would like me to Implement a store to sell merchandise.
+ In the future the client would like me to implemnt the purchasing of tickets for tourist sites.
## Technologies Used
+ **Gitpod** - [Gitpod](https://www.gitpod.io/) was the only IDE I used throughout development.
+ **HTML** - This is the Markup Language used to create the main structure of the website.
+ **CSS** - I used CSS to style the visual look of the webpage.
+ **Bootstrap** - [Bootstrap](https://getbootstrap.com/) was used to help make the webpage responsive over different screen sizes.
+ **jQuery** - I used [jQuery](https://jquery.com/) to collapse the Navbar and show active buttons on google api search 
+ **Fontawesome** - All icons are taking from [Fontawesome.](https://fontawesome.com/)
+ **Popper.js** - [Popper.js](https://popper.js.org/) is the Javascript required for Navbar      
+ **Git** -  [Git](https://git-scm.com/) was used for version control.
+ **GitHub** - [Github](https://github.com/) was used to host the repository for this project.
+ **Javascript** -   [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) This the language used to code the interactive parts of the website.
+ **Googlemaps Api** [GooglemapsApi](https://cloud.google.com/maps-platform/maps/) This is the Api used to help the user seach for different places to sleep,eat and drink.
+ **EmailJS** - [EmailJs](https://www.emailjs.com/) was used get my contact form fully functional.

## Testing
+ The first thing I did was , worked through my user stories to make sure my website reached all the requirements of my user stories, before moving on to the more technical testing.
+ I ran the HTML for all pages through [W3C HTML Markup Validation](https://validator.w3.org/) by direct input. - **Working as intended**
+ I ran the CSS through [W3C CSS Validation Service](http://www.css-validator.org/) by direct input. - **Working as intended**
+ i used [JSHint](https://jshint.com/) to test my javascript for errors.
+ All links tested manually - **Working as intended**
+ All buttons tested manually - **Working as intended**
+ Tested different screen sizes using Google Developer Tools.
  * Pixel 2 - **Working as intended**
  * iPhone 6 - **Working as intended**
  * iPhone 7 - **Working as intended**
  * iPhone 8 - **Working as intended**
  * iPhone X - **Working as intended**
  * iPad - **Working as intended**
  * iPad Pro  - **Working as intended**
  * Laptop with HiDPI screen - **See Known Bugs**

+ I got friends to test out the live site on Github and give me Feedback on any issues. - **See Known Bugs**
+ I used my Huwawei P20 Android Phone to test website - **Working as intended**
+ I posted my webpage for peer review and made changes based on feedback
  * Added background colour change on active buttons in search places for google maps.
  * Added smoothscroll to the links in Navbar.
+ The website was tested on different browsers such as Google Chrome, Safari, Internet Explorer and Mozilla Firefox.

### Issues fixed 
+ **JavaScript Carousel** Skips 0 index in array, so we were missing a image on page load, but we loaded that image up on index.html
+ **GooglemapsApi** I had an issue on page load, when the user clicked one of  search button Icons it loaded all the place types. This was fixed setting the variable type to restraunt on page laod and setting the button to show its active.
+ **EmailJS** I had an issue of the form not clearing after submission. This is eventually fixed by finding the reset Method on W3 Schools.
### Known Bugs
+ On Desktop view, theirs to much whitespace between the Shamrock image and the div below.
+ Googlemaps only loads 80% of the time when page loads for the first time.

## Deployment
+ This Website was developed using [Gitpod](https://www.gitpod.io/). I commited to Git and Pushed to [Github](https://github.com/)
using the built in functions available in [Gitpod](https://www.gitpod.io/).
### How to Deploy
1. Login into [Github](https://github.com/)
2. Select [waynecrawley/Visit-Ireland](https://github.com/waynecrawley/Visit-Ireland) from the list of Repositories.
3. From the list just below the top of the screen, select [Settings ](https://github.com/waynecrawley/Visit-Ireland/settings)
4. Scroll down to the GitHub Pages Section.
5. Underneath **Source** click the downarrow beside  **None**  in the Dropdown menu.
6. Click on the **Masterbranch**
7. The webiste is now deployed and can be found [here](https://waynecrawley.github.io/Visit-Ireland/).
### How to Deploy Locally
1. Login into [Github](https://github.com/)
2. Select [waynecrawley/Visit-Ireland](https://github.com/waynecrawley/Visit-Ireland) from the list of Repositories.
3. Under the Repository name, click Clone or Download.
4. Copy the Clone URL.
5. Open your Terminal.
6. Change the current working directory to the location where you want the cloned directory to be made.
7. Type git clone, and then paste the URL you copied in Step 4.
8. Press Enter. Your local clone will be created.
## Credits
### Content
+ The code to my form was taking from here [Mdbootstrap.com](https://mdbootstrap.com/docs/jquery/forms/basic/) and modified to suit my needs.
+ Code for displaying Active Buttons was not written by me and modified slightly to fit my needs, it was found here [stackoverflow.com](https://stackoverflow.com/questions/41476916/jquery-make-pressed-button-active-and-all-other-buttons-inactive)
+ Text on the images for Cliffs of Moher and Star Wars was extracted from Wiki.
+ Google maps places Api modified to work the way i require.
### Media
+ Star wars and cliffs of Moher image was found on [Upslash.com](https://unsplash.com/)
+ Aillwee Caves Image was proivided for use to me on my website by Aillwee Caves
+ Shamrock Png was designed by a friend for my use without credit required.
### Acknowledgements

+ I would like to thank my Mentor who has been a fantastic guidence for me.
+ Tutor support when ever i reached out were fantastic.
+ I would just like to thank all my fellow Code Institute students on Slack, who have been a great
help along the way.
