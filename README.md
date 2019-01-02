#### View the live app: https://grocery-now.herokuapp.com/

#### Technical Requirements
>The architecture must be split between a back-end and a web front-end, for instance, providing an in/out RESTful API in JSON. Feel free to use any other technologies, provided that the general client/service architecture is respected.

#### Functional Requirements
>1. Save, Update, and Delete items to/from a database of your choosing
>2. Authenticate users - allowing the same user to be signed in from multiple devices
>3. Allow add, edit, delete, “mark as purchased”, and “unmark as purchased” on each item
>4. Keep the list synced in real time from each device
>5. Accompany your code with a full test suite
>6. Deploy your site to a web host

#### Front-end
> We recommend using frameworks such as Rails, React or Angular, however, you're welcome to use any technology you're familiar with. Make sure to mention in your README how much experience you have with the framework you choose, which will be taken into account when reviewing your submission.
>##### Take this opportunity to demonstrate your CSS3 or HTML5 knowledge.

#### Back-end
>You are free to use any web framework. If you choose to use a framework that results in boilerplate code in the repository, please explain in your README which code was written by you (as opposed to generated code). 

>##### That said, here are some technologies we recommend: JavaScript/Node.js, Ruby on Rails, MongoDB, PostgreSQL

## Solution

>I decided to make my take-home project with the NERD tech stack (Node.js, Express.js, React/Redux.js, MongoDB).

>This included the traditional layout of the server and the client with their respective dependencies. For the client side I used create react app which created it’s own README and instructions for running locally. 

>At first I didn’t think I would do much more than what was being asked of me in the tech and functional requirements, but after finishing basically all the functional requirements I decided to incorporate more of an e-commerce-style aspect to the web app. I ended up creating many many different components which together create a fully functioning e-commerce app. 

### Client-side minimum requirements met

>save, update and delete items to from mlab MongoDB in production 

>authenticate users (same user can sign into different devices) 

>live shopping cart to allow add, edit and delete (for multiple user functionality) 

>items checked into their cart receive real time updates so multiple users can stay focused on what needs to be bought in this digital grocery store

>Enzyme and Jest testing (currently in progress)

>deployed to Heroku for production

### Client-side bonus features met

>home screen promotions like “best selling products” and “new arrivals”

>basic shop page with a live list of items and a filtering component to sort 

>product info components to investigate into products further than at shop page

>a history component to show what’s already been bought

>admin database product creation to allow admin to create new products and add them to the digital marketplace 

>user information editing (update email or name)

>Paypal payments 

>Cloudinary media management for admins to store media connected to grocery products 

>Grocery Category admin creation functionality (add new categories i.e. snacks, meals, beverages etc.)

### Reason for NERD stack and middleware

>Lorem epsum ...

### Trade-offs made or things left to do 

>include a forgot password component 

>incorporate Nodemailer or another third party app for sending signup email confirmations etc.

>to make the app ready for real-world application, a given business owner needs to be able to update the header/footer info; so continue to create a component which lets us edit the site's current info 

