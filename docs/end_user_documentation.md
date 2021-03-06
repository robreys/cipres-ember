# Cipres JavaScript Example-User Documentation

Refer to this documenation for information regarding the use of this web application.

## Logging In
At the index page, enter your CIPRES REST API username and password in fields located 
in the upper right corner. Once you have logged on, you will be able to access 
the application's core features. 

`Note:` Credentials are not persisted and are stored in memory for the duration of the application. 
As a result, you will need to reenter your credentials each time you open the application.

## Logging Out
After logging in, you may log out by clicking the 'Logout' button located in the upper right corner.

## Listing Submitted Jobs
Navigate to the 'My Jobs' page using the navigation bar on the leftmost side of the application window.
You should now be able to see all of your submitted jobs listed by their selfUri titles. To view more information for a specific job, 
simply hover over its title and click. You should now be able to see the values for different job properties as well as view the URLs 
of output files once the job has completed. 

`Note:` Currently, the application does not support downloading of output files. More information can be found
in the [Cipres Ember Repository](https://github.com/robreys/cipres-ember.git) README.

## Creating A Job

Navigate to the 'New Job' page using the navigation bar on the leftmost side of the application window. You should now be able to see 
a form requesting information for job creation. Fields under Basic Information must be completed while fields under Optional Information 
are not required. Once the form has been completed, you may submit your job request by clicking the Submit button at the bottom of the page. 
Upon successful submission, a green box above the form will alert you of your job creation.