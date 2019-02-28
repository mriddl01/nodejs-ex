

<!-- toc -->

- [Node.js sample app on OpenShift!](#nodejs-sample-app-on-openshift)
  * [Creating new apps](#creating-new-apps)
    + [Create a new app from source code (method 1)](#create-a-new-app-from-source-code-method-1)
    + [Create a new app from a template (method 2)](#create-a-new-app-from-a-template-method-2)
    + [Build the app](#build-the-app)
    + [Deploy the app](#deploy-the-app)
    + [Configure routing](#configure-routing)
    + [Create a new app from an image (method 3)](#create-a-new-app-from-an-image-method-3)
    + [Setting environment variables](#setting-environment-variables)
    + [Success](#success)
    + [Pushing updates](#pushing-updates)
  * [Debugging](#debugging)
  * [Web UI](#web-ui)
  * [Looking for help](#looking-for-help)
  * [Compatibility](#compatibility)
  * [License](#license)

<!-- tocstop -->

## Node.js sample app on OpenShift!
-----------------

This example will serve a welcome page and the current hit count as stored in a database.


### Setup 

oc new-project nodejs-dev

oc new-project nodejs-stage

From Jenkins Project

oc policy add-role-to-user admin system:serviceaccount:cicd:jenkins -n nodejs-dev

oc policy add-role-to-user admin system:serviceaccount:cicd:jenkins -n nodejs-stage

oc process -f  https://raw.githubusercontent.com/mikes-org/nodejs-ex/master/openshift/templates/nodejs-mongo-cicd.yml -p DEV_PROJECT=nodejs-dev -p STAGE_PROJECT=nodejs-stage -o yaml | oc create -f-




#### Success

You should now have a Node.js User edit page.

#### Pushing updates

Assuming you used the URL of your own forked repository, we can easily push changes and simply repeat the steps above which will trigger the newly built image to be deployed.

