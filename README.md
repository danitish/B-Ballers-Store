B-Ballers Jersey Store
============================

eCommerce project utilizing MERN stack and Redux.

Website
============================

https://b-ballers.herokuapp.com/

Features
============================

- User registration and login with validations on both ends.
- Reset password feature.
- Available users types: regular (by default) and admin.
- User profile, allowing to update user info and view orders.
- Product/s showcase with filtering functionality.
- Product review and rating.
- Product search feature.
- Fully functional cart with ability to add/remove, edit quantity and size.
- Realistic order experience - checkout steps including: shipping address, payment method and order placement.
- Embedded PayPal Sandbox method.
- Admin management and supervision on the users, products and orders.

Utilities
============================
.env file that contains essential variables for the project
```javascript
NODE_ENV = development/production
PORT = server port
MONGO_URI = mongodb uri
JWT_SECRET = signature string
PAYPAL_CLIENT_ID = paypal client id
USER = stores email address
PASS = password of that email
BASE_URL = stores domain
```
