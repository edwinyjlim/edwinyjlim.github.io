---
author: Me
title: Stytch SDK Customization
date: 2021-03-16
description: Blog Sample of a Stytch SDK How-To
ignore: true
tags:
---


### <span class="text-p-color">The Stytch SDKs</span>: Build Login forms In Minutes

Stytch is designed to let you build passswordless authentication quickly, securely, and seamlessly. And now with <b class="text-p-color">Stytch SDKs</b>, you can build login forms in just a few minutes. 

We'll show you how. 

<img style="width: 50%; margin: 2% 10%;" src="{{'/static/other/stytch-sdk-gif.gif' | url}}">

<div class="spacer-2"></div>

### Your development time is precious 

Tech teams spend thousands of hours planning, building, and maintaining their own authentication codebase. And in spite of all that effort, everything can still go wrong. [Security threats are always popping up](https://stytch.com/blog/password-reuse-is-a-cybersecurity-threat/). [Session and user management grow in scale and complexity](https://gupta-bless.medium.com/session-management-issues-and-their-testing-5cb910016bb0). [Password-based logins are becoming a painful and outdated experience for users to deal with](https://stytch.com/blog/building-the-future-of-authentication/). The list of problems keeps growing and your development time limited.

Let Stytch handle authentication, so you can get back to what matters -- building your application. The Stytch platform will improve security, streamline infrastructure, and create friction-free user experiences.

The <b class="text-p-color">Stytch SDKs</b> can save you thousands of hours of development.

<div class="spacer-2"></div>


### How do they save time?

The <b class="text-p-color">Stytch SDKs</b> contain methods and configuration tools that primarily help you do the following actions:

- Communicate directly with the Stytch API
- Configure and customize pre-built login forms
- Manage users and sessions
- Implement any authentication flow from Stytch's suite of 
passwordless products
  - Email Magic Links
  - One-time passcodes
  - OAuth
  - WebAuthn
  - TOTPs
  - Crypto Wallets

**Write less server-side and back-end code.** With direct access to the Stytch API, the <b class="text-p-color">Stytch SDKs</b> can invoke requests and handle responses. No more complex back-end code to handle authentication flows. Handle everything, even user and session management, on the client-side.

**Forget building login user interfaces from scratch.** The <b class="text-p-color">Stytch SDKs</b> will generate a fully working login interface right out-of-the-box for you. It can be customized to change the colors, fonts, and logo, so you can easily match the style of your brand.

**Configure your changes instantly.** If you need to add a new authentication type or change the user interface style, just configure the SDK to see the updates. You can set up quickly and update flexibly. 

**We have security and scale covered.** This is arguably the best part. Here at Stytch, we have a whole team dedicated to authentication secuirty and server scaling so you don't have to worry. If one user logs in or 100,000 users log in, you'll be good to go.

The Stytch SDKs come in a few different flavors. 

  - Vanilla Javascript
  - React.js  
  - React Native
  - Swift iOS

<div class="spacer-2"></div>


### Who should use them?

You're a developer who is building an application from the ground up that also needs standard user authorization flows. You don't want to reinvent the wheel. The <b class="text-p-color">Stytch SDKs</b> will get your authentication set up in just a few lines of code. Start building your projects and applications without a second to lose.

You're a part of a tech team who needs to refactor their login flows into something simple, efficient, and secure. Your authentication code is unwieldy. It's riddled with convoluted password user interfaces, bloated JWT and cookie sessions, and old architecture with potential security vulnerabilities that keep you awake at night. But you don't have the time to rebuild it all -- who does. The <b class="text-p-color">Stytch SDKs</b> will reduce all that technical overhead into just a few method calls and configuration. Take control of your development time and get back to building your product.

The <b class="text-p-color">Stytch SDKs</b> are a flexible toolset that can be tailored to your specific needs. If you need full control and complete customization, You can always integrate directly with the Stytch API.

<div class="spacer-2"></div>


### Get started

We'll show you how to build a Stytch login form in vanilla Javascript and HTML.

<div class="spacer-2"></div>

#### Step 1: Build with 4 Lines of Code

The <b class="text-p-color">Stytch SDKs</b> can render a  stylized login form in just 4 lines of code; specifically, with 2 lines of HTML and 2 lines of Javascript. 

  - Line #1: Load the <b class="text-p-color">Stytch SDK</b> into the HTML page
  - Line #2: Create a DOM element for Stytch login
  - Line #3: Initialize the <b class="text-p-color">Stytch SDK</b> and input a Stytch public token
  - Line #4: Mount the Stytch login form onto the DOM element from line #2

<div class="spacer-2"></div>


```html
<!DOCTYPE html>
<html lang="en">
  <body>
    
    <!-- line #1 -->
    <!-- Load the Stytch SDK into the HTML page. -->
    <script id="js-stytch" src="https://js.stytch.com/stytch.js"></script>

  </body>
</html>
```

<div class="spacer-2"></div>

```html
<!DOCTYPE html>
<html lang="en">
  <body>

    <!-- line #1 -->
    <script id="js-stytch" src="https://js.stytch.com/stytch.js"></script>
    
    <!-- line #2 -->
    <!-- Create a DOM element for Stytch login. -->
    <div id="stytch-magic-link"></div>

  </body>
</html>
```

<div class="spacer-2"></div>

```html
<!DOCTYPE html>
<html lang="en">
  <body>

    <!-- line #1 -->
    <script id="js-stytch" src="https://js.stytch.com/stytch.js"></script>
    
    <!-- line #2 -->
    <div id="stytch-magic-link"></div>

    <script>
      /** line #3 **/
      /** Initialize the Stytch SDK and input a Stytch public token. **/
      /** You can leave it as 'YOUR_STYTCH_PUBLIC_TOKEN' for now. **/
      var stytch = Stytch('YOUR_STYTCH_PUBLIC_TOKEN');

    </script>

  </body>
</html>
```

<div class="spacer-2"></div>

```html
<!DOCTYPE html>
<html lang="en">
  <body>

    <!-- line #1 -->
    <script id="js-stytch" src="https://js.stytch.com/stytch.js"></script>
    
    <!-- line #2 -->
    <div id="stytch-magic-link"></div>

    <script>
      /** line #3 **/
      var stytch = Stytch('YOUR_STYTCH_PUBLIC_TOKEN');

      /** line #4 **/
      /** Mount the Stytch login form onto the DOM element from line #2. **/
      /** Remember the style and loginOrSignupView **/
      stytch.mount({elementId: "#stytch-magic-link", style: {}, loginOrSignupView: {}});

    </script>

  </body>
</html>
```

<div class="spacer-3"></div>

<script src="https://js.stytch.com/stytch.js"></script>


<div id="sticky-section"></div>

<div class="stytch-container">

  <div class="stytch-block stytch-instruction">
    Ta-Daa! You just created a Stytch login form in <b class="text-p-color">minutes</b> with the <b class="text-p-color">Stytch SDK</b> and 4 lines of code!
  </div>
  <div id="stytch-magic-link" class="stytch-block"></div>

</div>

<div class="spacer-3"></div>

#### Step 2: Customize the Look & Feel

<div class="stytch-container">

  <div class="stytch-block">
    Start customizing the look and feel of your Stytch login form right away. Configure the <b class="text-p-color">style</b> object to update the login forms appearance. Deploy slick and on brand login user interfaces without the boierplate code.
  </div>
  <div class="stytch-block"></div>

</div> 

<div class="spacer-3"></div>


<div id="magic-change1"></div>

```javascript
/** Change the font and text color!**/
var style = {

  fontFamily: '"Helvetica New", Helvetica, sans-serif',
  primaryTextColor: 'blue',
  primaryColor: 'blue'

}
```

<div class="spacer-5"></div>

<div id="magic-change2"></div>

```javascript
/** Change the font and text color!**/
var style = {

  fontFamily: '"Comic Sans MS", "Comic Sans", cursive;',
  primaryTextColor: 'red',
  primaryColor: 'red'

}
```

<div class="spacer-5"></div>

<div id="magic-change3"></div>

```javascript
/** Change the font and text color!**/
var style = {

  fontFamily: '"Times New Roman", Times, serif',
  primaryTextColor: 'green',
  primaryColor: 'green',
  secondaryTextColor: 'darkgreen',
  width: '450px'

}
```

<div class="spacer-5"></div>

#### Step 3: Give your users options

<div class="stytch-container">

  <div class="stytch-block">
    Do your users prefer to log in with oAuth? Or with SMS passwords? Or all of the above? Email magic links? Configure the <b class="text-p-color">loginOrSignupView</b> object to implement any Stytch authentication product. Give your users multiple options for seamless login with just a few keystrokes. 
  </div>

  <div class="stytch-block"></div>

</div> 

<div class="spacer-3"></div>

<div id="magic-change4"></div>

```javascript
/** Add Stytch more auth flows to your login form **/
var loginOrSignupView = {

  products: ['emailMagicLinks', 'oauth'],
  oauthOptions: {
    providers: [
      { type: "google"},
      { type: 'microsoft'},
      { type: 'github'}
    ]
  }

};
```
<div id="magic-change5"></div>

<div class="spacer-5"></div>


### Now start building!

It only takes a few minutes. Authentcation doesn't have to be a blackhole of problems and time. Not anymore. With the <b class="text-p-color">Stytch SDKs</b>, you can build and deploy multiple authentication flows with minimal effort. Let us build the infrastructure, so you can focus on your product.


Jump into the [Stytch Docs](https://stytch.com/docs/sdks/javascript-sdk) for implementation guides and examples applications.




### 


  <script>

    function getOffset(el) {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
      };
    }


    document.querySelectorAll('pre.language-javascript').forEach(function(v) {
        v.style.width = '50%'; 
    })

    var ogOffset = getOffset(document.getElementById('stytch-magic-link'));
    var stickyOffset = getOffset(document.getElementById('sticky-section'));
    var changeOffset1 = getOffset(document.getElementById('magic-change1'));
    var changeOffset2 = getOffset(document.getElementById('magic-change2'));
    var changeOffset3 = getOffset(document.getElementById('magic-change3'));
    var changeOffset4 = getOffset(document.getElementById('magic-change4'));
    var changeOffset5 = getOffset(document.getElementById('magic-change5'));




    window.addEventListener("scroll", (event) => {
        let scrollY = this.scrollY;
        let scrollX = this.scrollX;
        let scrollYBuffer = scrollY + 180; 

        if (scrollY < stickyOffset.top) {
          //console.log('scroll Y', scrollY, 'scroll X', scrollX);
          //console.log('offsetLeft', elOffset.left, 'offsetTop', elOffset.top);
          document.getElementById('stytch-magic-link').classList.remove('sticky');

        } else {
          let stytchEl = document.getElementById('stytch-magic-link');

          console.log(scrollYBuffer, changeOffset5.top)

          let stytchElOffset = getOffset(stytchEl);

          if (scrollY + 420 < changeOffset5.top) {
            stytchEl.classList.add('sticky');
            stytchEl.style.left = ogOffset.left + 'px';
            stytchEl.style.top = scrollY + 100 + 'px';
          }

        }

        if ( scrollYBuffer < changeOffset1.top) {
            mountStytch()
        } else if (scrollYBuffer > changeOffset1.top && scrollYBuffer < changeOffset2.top) {
            console.log('~~~~~~~~~~~~CHANGE 1~~~~~~~~~~~~~~~~~~~~~~~~~~~');
            mountStytch({
              primaryColor: 'blue', 
              primaryTextColor: 'blue'
            })
        } else if (scrollYBuffer > changeOffset1.top && scrollYBuffer > changeOffset2.top && scrollYBuffer < changeOffset3.top) {
            console.log('~~~~~~~~~~~~CHANGE 2~~~~~~~~~~~~~~~~~~~~~~~~~~~');
            mountStytch({
              fontFamily: '"Comic Sans MS", "Comic Sans", cursive;',
              primaryColor: 'red', 
              primaryTextColor: 'red'
            })
        } else if (scrollYBuffer > changeOffset1.top && scrollYBuffer > changeOffset2.top && scrollYBuffer > changeOffset3.top && scrollYBuffer < changeOffset4.top) {
            console.log('~~~~~~~~~~~~CHANGE 3~~~~~~~~~~~~~~~~~~~~~~~~~~~');
            mountStytch({
              fontFamily: '"Times New Roman", Times, serif',
              primaryTextColor: 'green',
              primaryColor: 'green',
              secondaryTextColor: 'darkgreen',
              width: '450px'
            })
        } else if (scrollYBuffer > changeOffset1.top && scrollYBuffer > changeOffset2.top && scrollYBuffer > changeOffset3.top  && scrollYBuffer > changeOffset4.top) {

            console.log('~~~~~~~~~~~~CHANGE 4~~~~~~~~~~~~~~~~~~~~~~~~~~~');

          var newLoginConfig = {
            products: ['oauth', 'otp'],
            emailMagicLinksOptions: {
              loginRedirectURL: "http://localhost:9000/authenticate",
              loginExpirationMinutes: 30,
              signupRedirectURL: "http://localhost:9000/authenticate",
              signupExpirationMinutes: 30,
            },
            oauthOptions: {
              loginRedirectURL: 'https://example.com/ authenticate',
              signupRedirectURL: 'https://example.com/authenticate',
              providers: [
                { type: 'google'},
                { type: 'microsoft'},
                { type: 'github'}
              ]
            }
          };

            mountStytch({
              fontFamily: '"Helvetica New", Helvetica, sans-serif',
              primaryColor: '#000000',
              primaryTextColor: 'blue',
              hideHeaderText: false,
             secondaryTextColor: 'blue',
             lightGrey: 'purple',
             darkGrey:'green'
            }, 
            newLoginConfig)
        }

    });


    // Initialize Stytch.js with your public token. You can find this in your Stytch dashboard under API Keys.
    var STYTCH_PUBLIC_TOKEN = "public-token-test-0a1653b4-a0ad-4f0d-b146-ef146309556f";

    var stytch = Stytch(STYTCH_PUBLIC_TOKEN);
    
    var mountStytch = function(configStyle, configLogin) {
      document.getElementById("stytch-magic-link").innerHTML = '';
      
      var x = configStyle ? configStyle : {};
      var y = configLogin ? configLogin : null;

      //console.log('configStyle', x);
      // console.log('configLogin', y);

      stytch.mount({
        elementId: '#stytch-magic-link', 
        style: x, 
        loginOrSignupView: y
      });
      
    };
    
    mountStytch();

  </script>

