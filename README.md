# Assignment 2 - Vue app - Automated development process.

Name: Lu Sun

Student No.:  w20082256

## Overview.

This assessment is about a Cargo Delivery System, \
including two models: cargo and provider;\

With 6 of my components: `login`,`home-page`,`cargoes`,`addCargo`,`aboutUs`,`contactUs` \
to by fully-auto-tested

Fully CRUD function in the Vue Client side

published test results on Travis CI and my Github 

Successfully deployed on Surge

Successfully Bundling by Webpack

##`Extra:`

With Authentication using `Firebase` email to Login    \
(Only those whose email is in my `Firebase database` can login in\

## E2E Testing.

. . . A listing of the output generated locally from running ONE of your spec test files (choose the best one). 

     $ ====================================================================================================
       
         (Run Starting)
       
         ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
         │ Cypress:    3.1.3                                                                              │
         │ Browser:    Electron 59 (headless)                                                             │
         │ Specs:      1 found (addCargo.spec.js)                                                         │
         │ Searched:   cypress\integration\addCargo.spec.js                                               │
         └────────────────────────────────────────────────────────────────────────────────────────────────┘
       
       
       ────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                             
         Running: addCargo.spec.js...                                                             (1 of 1)
       
       
         add Cargo page
           √ shows correct message in name (2916ms)
           √ shows correct message in price (664ms)
           √ shows correct message in amount (297ms)
           √ shows correct message in providerID (297ms)
           √ shows correct message in providerName (339ms)
           √ shows correct message in providerType (270ms)
           √ allows a valid cargo to be submitted (2188ms)
           √ shows error messages for incomplete form fields (1432ms)
           Navigation bar
             √ Shows the required links (347ms)
       
       
         9 passing (9s)
       
       
         (Results)
       
         ┌────────────────────────────────┐
         │ Tests:        9                │
         │ Passing:      9                │
         │ Failing:      0                │
         │ Pending:      0                │
         │ Skipped:      0                │
         │ Screenshots:  0                │
         │ Video:        true             │
         │ Duration:     8 seconds        │
         │ Spec Ran:     addCargo.spec.js │
         └────────────────────────────────┘
       
       
         (Video)
       
         - Started processing:   Compressing to 32 CRF
         - Finished processing:  G:\agDevelopment\assessment-1\Assisment\assissment2_\cypress\videos\addCargo.spec.js.mp4 (1 second)
       
       
       ====================================================================================================
       
         (Run Finished)
       
       
             Spec                                                Tests  Passing  Failing  Pending  Skipped
         ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
         │ √ addCargo.spec.js                          00:08        9        9        -        -        - │
         └────────────────────────────────────────────────────────────────────────────────────────────────┘
           All specs passed!                           00:08        9        9        -        -        -

## Continuous Integration.

https://travis-ci.org/sunlu1996100818/clientTravisCI

## Automated Deployment.

http://dispensable-basin.surge.sh

## Extra features.

Authentication Login and logout by using my own `Firebase` database, \

see link: `https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiWucCbmZbfAhWHtO0KHSnlBCkYABAAGgJkZw&ohost=www.google.com&cid=CAESEeD27ckcSimiD0j786G1ic-g&sig=AOD64_2TwbHljMmYFjkCc7AywL_nmO_qSA&q=&ved=2ahUKEwjblLqbmZbfAhWNRBUIHZQRA3UQ0Qx6BAgEEAE&adurl=`

and my screen shot of my firebase database is in my picture in the base folder

only those whose email are in my firebase database can login and see different pages


Some background image and gif images, different CSS style created by myself 

## Appendix.

. . . .  A listing of the output generated from running locally all of your spec test files. The command to produce this is:

     $ ====================================================================================================
       
         (Run Starting)
       
         ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
         │ Cypress:    3.1.3                                                                              │
         │ Browser:    Electron 59 (headless)                                                             │
         │ Specs:      6 found (aboutUs.spec.js, addCargo.spec.js, cargoes.spec.js, contactUs.spec.js, h… │
         └────────────────────────────────────────────────────────────────────────────────────────────────┘
       
       
       ────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                             
         Running: aboutUs.spec.js...                                                              (1 of 6)
       
       
         Home page
           √ Shows a header (2503ms)
           √ Shows a header (737ms)
           √ Shows a header (289ms)
           √ Shows a header (333ms)
           Navigation bar
             √ Shows the required links (324ms)
             √ Redirects when links are clicked (399ms)
       
       
         6 passing (5s)
       
       
         (Results)
       
         ┌───────────────────────────────┐
         │ Tests:        6               │
         │ Passing:      6               │
         │ Failing:      0               │
         │ Pending:      0               │
         │ Skipped:      0               │
         │ Screenshots:  0               │
         │ Video:        true            │
         │ Duration:     4 seconds       │
         │ Spec Ran:     aboutUs.spec.js │
         └───────────────────────────────┘
       
       
         (Video)
       
         - Started processing:   Compressing to 32 CRF
         - Finished processing:  G:\agDevelopment\assessment-1\Assisment\assissment2_\cypress\videos\aboutUs.spec.js.mp4 (0 seconds)
       
       
       ────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                             
         Running: addCargo.spec.js...                                                             (2 of 6)
       
       
         add Cargo page
           √ shows correct message in name (1690ms)
           √ shows correct message in price (729ms)
           √ shows correct message in amount (265ms)
           √ shows correct message in providerID (377ms)
           √ shows correct message in providerName (266ms)
           √ shows correct message in providerType (270ms)
           √ allows a valid cargo to be submitted (2153ms)
           √ shows error messages for incomplete form fields (1338ms)
           Navigation bar
             √ Shows the required links (253ms)
       
       
         9 passing (7s)
       
       
         (Results)
       
         ┌────────────────────────────────┐
         │ Tests:        9                │
         │ Passing:      9                │
         │ Failing:      0                │
         │ Pending:      0                │
         │ Skipped:      0                │
         │ Screenshots:  0                │
         │ Video:        true             │
         │ Duration:     7 seconds        │
         │ Spec Ran:     addCargo.spec.js │
         └────────────────────────────────┘
       
       
         (Video)
       
         - Started processing:   Compressing to 32 CRF
         - Finished processing:  G:\agDevelopment\assessment-1\Assisment\assissment2_\cypress\videos\addCargo.spec.js.mp4 (1 second)
       
       
       ────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                             
         Running: cargoes.spec.js...                                                              (3 of 6)
       
       
         Manage cargoes page
           √ allows a donation to be deleted (3287ms)
           Navigation bar
             √ Shows the required links (1554ms)
             √ Redirects when links are clicked (1663ms)
       
       
         3 passing (7s)
       
       
         (Results)
       
         ┌───────────────────────────────┐
         │ Tests:        3               │
         │ Passing:      3               │
         │ Failing:      0               │
         │ Pending:      0               │
         │ Skipped:      0               │
         │ Screenshots:  0               │
         │ Video:        true            │
         │ Duration:     6 seconds       │
         │ Spec Ran:     cargoes.spec.js │
         └───────────────────────────────┘
       
       
         (Video)
       
         - Started processing:   Compressing to 32 CRF
         - Finished processing:  G:\agDevelopment\assessment-1\Assisment\assissment2_\cypress\videos\cargoes.spec.js.mp4 (1 second)
       
       
       ────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                             
         Running: contactUs.spec.js...                                                            (4 of 6)
       
       
         Home page
           √ Shows a header (1595ms)
           Navigation bar
             √ Shows the required links (859ms)
             √ Redirects when links are clicked (348ms)
       
       
         3 passing (3s)
       
       
         (Results)
       
         ┌─────────────────────────────────┐
         │ Tests:        3                 │
         │ Passing:      3                 │
         │ Failing:      0                 │
         │ Pending:      0                 │
         │ Skipped:      0                 │
         │ Screenshots:  0                 │
         │ Video:        true              │
         │ Duration:     2 seconds         │
         │ Spec Ran:     contactUs.spec.js │
         └─────────────────────────────────┘
       
       
         (Video)
       
         - Started processing:   Compressing to 32 CRF
         - Finished processing:  G:\agDevelopment\assessment-1\Assisment\assissment2_\cypress\videos\contactUs.spec.js.mp4 (0 seconds)
       
       
       ────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                             
         Running: home-page.spec.js...                                                            (5 of 6)
       
       
         Home page
           √ Shows a header (1862ms)
           √ Shows a correct lead (650ms)
           √ Shows a clickable button (385ms)
           √ Shows a correct content words (231ms)
           √ Shows a correct lead (310ms)
           Navigation bar
             √ Shows the required links (311ms)
             √ Redirects when links are clicked (696ms)
       
       
         7 passing (5s)
       
       
         (Results)
       
         ┌─────────────────────────────────┐
         │ Tests:        7                 │
         │ Passing:      7                 │
         │ Failing:      0                 │
         │ Pending:      0                 │
         │ Skipped:      0                 │
         │ Screenshots:  0                 │
         │ Video:        true              │
         │ Duration:     4 seconds         │
         │ Spec Ran:     home-page.spec.js │
         └─────────────────────────────────┘
       
       
         (Video)
       
         - Started processing:   Compressing to 32 CRF
         - Finished processing:  G:\agDevelopment\assessment-1\Assisment\assissment2_\cypress\videos\home-page.spec.js.mp4 (0 seconds)
       
       
       ────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                             
         Running: login.spec.js...                                                                (6 of 6)
       
       
         login page
           √ Shows a header (1453ms)
           √ Shows a sub-header (722ms)
           √ Shows a href (271ms)
           √ Shows the input form (1070ms)
       
       
         4 passing (4s)
       
       
         (Results)
       
         ┌─────────────────────────────┐
         │ Tests:        4             │
         │ Passing:      4             │
         │ Failing:      0             │
         │ Pending:      0             │
         │ Skipped:      0             │
         │ Screenshots:  0             │
         │ Video:        true          │
         │ Duration:     3 seconds     │
         │ Spec Ran:     login.spec.js │
         └─────────────────────────────┘
       
       
         (Video)
       
         - Started processing:   Compressing to 32 CRF
         - Finished processing:  G:\agDevelopment\assessment-1\Assisment\assissment2_\cypress\videos\login.spec.js.mp4 (0 seconds)
       
       
       ====================================================================================================
       
         (Run Finished)
       
       
             Spec                                                Tests  Passing  Failing  Pending  Skipped
         ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
         │ √ aboutUs.spec.js                           00:04        6        6        -        -        - │
         ├────────────────────────────────────────────────────────────────────────────────────────────────┤
         │ √ addCargo.spec.js                          00:07        9        9        -        -        - │
         ├────────────────────────────────────────────────────────────────────────────────────────────────┤
         │ √ cargoes.spec.js                           00:06        3        3        -        -        - │
         ├────────────────────────────────────────────────────────────────────────────────────────────────┤
         │ √ contactUs.spec.js                         00:02        3        3        -        -        - │
         ├────────────────────────────────────────────────────────────────────────────────────────────────┤
         │ √ home-page.spec.js                         00:04        7        7        -        -        - │
         ├────────────────────────────────────────────────────────────────────────────────────────────────┤
         │ √ login.spec.js                             00:03        4        4        -        -        - │
         └────────────────────────────────────────────────────────────────────────────────────────────────┘
           All specs passed!                           00:29       32       32        -        -        -


