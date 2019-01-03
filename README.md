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

I decided to make my take-home project with the NERD tech stack (Node.js, Express.js, React/Redux.js, MongoDB/Studio 3T).

This included the traditional layout of the server and the client with their respective dependencies. For the client side I used create react app which created it’s own README and instructions for running locally. 

At first I didn’t think I would do much more than what was being asked of me in the tech and functional requirements, but after finishing basically all the functional requirements I decided to incorporate more of an e-commerce-style aspect to the web app. I ended up creating many many different components which together create a fully functioning e-commerce app. 

### Client-side minimum requirements met

*1. save, update and delete items to from mlab MongoDB in production* 

*2. authenticate users (same user can sign into different devices)*

*3. live shopping cart to allow add, edit and delete (for multiple user functionality)* 

*4. items checked into their cart receive real time updates so multiple users can stay focused on what needs to be bought in this digital grocery store*

*5. enzyme and Jest testing (currently in progress: missing as of now due to the enormous undertaking of creating this app, I didn't leave myself very much time for testing in the given window of time I was offered. I prioritized making a very fun and interactive shop application that I could bolster my professional portfolio with, and wouldn't have had the time for testing in the beginning of it's creation. I am now working on unit testing each of the client components in enzyme/jest)*

*6. deployed to Heroku for production*

### Client-side bonus features met

1. home screen promotions like “best selling products” and “new arrivals”

2. basic shop page with a live list of items and a filtering component to sort 

3. product info components to investigate into products further than at shop page

4. a history component to show what’s already been bought

5. admin database product creation to allow admin to create new products and add them to the digital marketplace 

6. user information editing (update email or name)

7. Paypal payments 

8. Cloudinary media management for admins to store media connected to grocery products 

9. grocery category admin creation functionality (add new categories i.e. snacks, meals, beverages etc.)

### Reason for NERD stack and other technical choices

I chose React because working with the DOM API is difficult, and React gives us developers its Virtual DOM (React’s reconciliation algorithm) to work with making our lives easier, also I started learning React.js as my first framework and wanted to ensure my knowledge in it before moving onto learning another. 

Redux is the obvious go-to predictable state container for JS apps. My e-commerce app could grow to huge proportions if used in a real-world scenario, so I decided to use a state management tool as managing states shared across components becomes a chore otherwise. Redux also allows for components to internally manage their state without any need for an external library or tool.

Node is my choice of JS run time environment that executes my app's JS code outside of a browser. I have already implemented Node and Express together in previous apps and felt comfortable using these two again as they are hard to compete with. Express is actually a framework for Node, and has been the de facto server framework for Node as of recent, so this was an easy choice.

MongoDB was a great choice for this product, being that it is a cross-platform document-oriented database program and inherently stores your data in flexible JSON-like documents. This means fields can vary between documents and data structure can be changed over time. This was an obvious Yes for an e-commerce site which could change dramatically under new ownership etc. I also relied upon Heroku and mlab to get the database running in production. In the early stages I created my models with mongoose.

Cloudinary was a great SaaS which enabled me to manage my web media assets with their leading cloud service. This means I am able to give admin's on my app the ability to add their own products to the database and upload their own images for them too!

Middlewares include -> **react-dropzone**: easy drag and drop file uploading for admin tools, **react-paypal-express-checkout**: allowed me to connect PayPal to my account (unfortunately I had to upgrade my PayPal account to Business and this seemed kinda weird), but thankfully Paypal has amazing developer page with easy Sandbox integration and fake account etc.; **enzyme/Jest**: for testing in React, makes it easy to look at snapshots etc; **bcrypt**: encrypting passwords for secure user signup/login; **dotenv**: makes .env available in server.js, **axios**; a reliable promise-based HTTP client which provides a single API for dealing with XMLHttpRequests and Node's http interface and wraps the requests using a polyfill for ES6 new's promise syntax; **moment**: for parsing and displaying dates, **material ui**; a very popular React UI framework which made for quick and effective UI/UX given the time I had for this project; **postman**: for comprehensive API development, worked very well paired with MongoDB and my models created on server-side; **http-proxy-middleware**: for that pesky 404 error you get when your proxy settings are whack; **concurrently**: running multiple commands concurrently (ie. running both client-side and server-side together within commandline; **body-parser**: extract the entire body portion of an incoming request stream and exposes it on req.body; **cookie-parser**: allowed me to parse Cookie header etc.; **jsonwebtoken**: creating access tokens that assert some number of claims (like user is admin etc.); **multer**: image uploading; **react-images**: responsive lightbox component for displaying an array of images.

### Trade-offs made or things left to do 

>improve the UI/UX a bit with a possible Google Font change (sometimes appears a bit blurry on a given monitor); some slight padding in the shop/cart/admin components (a little too close to the top), some font sizes need changing

>include a forgot password component 

>incorporate Nodemailer or Sendgrid for emailed confirmations and responses for forgotten passwords etc.

>to make the app ready for real-world application, a given business owner needs to be able to update the header/footer info; so continue to create a component which lets us edit the site's current info

>get the cases feature to work (meaning how many products come in a case) currently debugging 

