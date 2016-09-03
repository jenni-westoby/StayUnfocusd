# StayUnfocusd
My CS50 final project - a Chrome Extension called StayUnfocusd. This is the minimum viable product for an extension in which users enter websites they want to avoid. If they subsequently visit those websites, they are rickrolled.

The options.html file provides the html for the options form in which users enter the websites they would like to avoid.

The options.js file saves the user input and makes sure the form functions correctly, notifying the user when the input is saved.

The content.js file sends a message to background.js when a new webpage is loaded.

background.js hears the message and responds by finding the current url, taking the user input urls out of storage, converting both sets of urls into just the domains and comparing the domains. If the domains are the same, the user is redirected to Rick Atsley's music video.
