---
marp: true
author: Akash
size: 4:3
theme: gaia
---

# AUTHORIZER
- Authorizer is an open-source authentication and authorization solution for your applications.

## Steps :
1. Host Authorizer instance and get client id and Authorizer URL after logging in .

2. On opening the code , goto terminal and get to the src file. :  cd my-react-app
cd src.

---
3. Now first install via:
`npm i react`
`npm i react-router-dom`
`npm i --save @authorizerdev/authorizer-react`
`npm i react-toastify`
in terminal.

4. In **App.js** copy the code. This file is majorly for configuring provider for our instance whose url and client id we will get from loging to the Authorizer Dashboard.It will be parent to Root.js.

5. Then create **Root.js** which have logic of the
---
 login application which have routes to the different pages in  application.


6. Create a pages folder and then make Pages which will use components from Authorizer provider like **Login** , **Home** and **Dashboard** where we land up with user details .

7. In Login page we have Authorizer component that provides us Login ,forget password, signup and for social Logins we have to add credentials for them on Authorizer dashboard.
Similarly for FORGET PASSWORD AND RESET 
---

PASSWORD email, we need to set SMTP credential .

8. In Dashboard page we basically huse the **useAuthorizer** hook which provides us with loading , token , user attributes to be used and Logout button 
---
### Navigation Flow:

1.Start at index.js and render the App component.
2.App component renders the Root component.
3.Root component handles the routing and renders different pages based on the current route.
4.The initial route is the Login page.
User enters login credentials in the Login page and successfully logs in.
5.Root component updates the route to the Dashboard page.

---

6.Dashboard page is rendered, and the user can perform actions within the dashboard.
7.User decides to log out from the Dashboard page.
8.Root component updates the route back to the Login page.
9. User is redirected to the Login page and can log in again
