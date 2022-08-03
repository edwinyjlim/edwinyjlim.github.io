---
author: Me
title: Testing
date: 2021-03-16
description: Testing
ignore: true
tags:
sidebar:
  - {name: 'On this page', link: '#nyc-311'}
  - {name: 'SDK', link: '#api-overview'}
  - {name: 'API Limits', link: '#api-limits', sublevel: 1}

---



<div class="spacer-3"></div>

<script src="https://js.stytch.com/stytch.js"></script>

<div id="stytch-magic-link" class="stytch-block"></div>


  <script>

    
    // Initialize Stytch.js with your public token. You can find this in your Stytch dashboard under API Keys.
    var STYTCH_PUBLIC_TOKEN = "public-token-test-0a1653b4-a0ad-4f0d-b146-ef146309556f";

    var stytch = Stytch(STYTCH_PUBLIC_TOKEN);
    
    var style = {
      fontFamily: '"Helvetica New", Helvetica, sans-serif',
      width: '521px',
      primaryColor: 'red',
      primaryTextColor: 'blue',
      hideHeaderText: false,
      secondaryTextColor: 'blue',
      lightGrey: 'purple',
      darkGrey:'green'
    };
    

    var loginOrSignupView = {
      products: ['oauth', 'otp'],
      emailMagicLinksOptions: {
        loginRedirectURL: "http://localhost:9000/authenticate",
        loginExpirationMinutes: 30,
        signupRedirectURL: "http://localhost:9000/authenticate",
        signupExpirationMinutes: 30,
      },
      oauthOptions: {
        loginRedirectURL: 'https://example.com/authenticate',
        signupRedirectURL: 'https://example.com/authenticate',
        providers: [
          { type: 'google'},
          { type: 'microsoft'},
          { type: 'github'}
        ]
      }
    };
    


    var mountStytch = function(configStyle, configLogin) {
      document.getElementById("stytch-magic-link").innerHTML = '';
      
      stytch.mount({
      elementId: '#stytch-magic-link', 
        style: style, 
        loginOrSignupView: loginOrSignupView
      });
      
    };
    
    mountStytch();

  </script>

