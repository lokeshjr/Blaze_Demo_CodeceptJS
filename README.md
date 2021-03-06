# Blaze Demo UI Automation
Build acceptance tests for Build Demo app using CodeceptJS

CodeceptJS is a modern end to end testing framework with a special BDD-style syntax. The tests are written as a linear scenario of the user's action on a site.

Please refer the site - https://codecept.io/

For the current project - I am using Webdriver helper as the backend. There are other helpers like puppetter, appium, nighmarejs, playwright etc.  

# Framework overview: 

* Implemented page objects for easy maintenance and covered the tests for all the cities. 
* Framework can be integrated with the clould platform tools like SauceLabs, Crossbrowser tesing, BrowserStack for achieving Cross browser as well as parallel testing. 
* Can be integrated with the CI tools like Drone CI, Jenkins
* RetryFailedStep plugin retries a failed step for 10 times. Using this hard wait can be eliminated.
* Chunks - CodeceptJS concept for running tests parallely
* Allure report for reporting purpose

    
# Running the tests locally - 

I have used gitbash command line tool to run my tests

First you would need to install the node packages/ dependencies in the package.json file.

`npm install`

Then, you need to start your selenium-standalone server

`npm run selenium-server`

Then, open a new gitbash shell and type in below commands to run the tests-

 # For single browser - 
 `npm run single`
 
 # For multiple and parallel browsers - 
 `npm run parallel`
 
 # For headless single browser - 
 `npm run headless`
 
 # For headless multiple and parallel browsers - 
 `npm run headless-multiple`
    
# For reporting purpose - 

I have used Allure reporting tool. http://allure.qatools.ru/

To serve the report. Please run the below command.

`npm run report`
