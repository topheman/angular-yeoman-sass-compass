#angular-yeoman-sass-compas

The purpose of this project is to test AngularJS, with the other technologies I usually use, such as :

* git
* grunt
* sass

And some new ones (like following the yeoman workflow) :

* yeoman
* bower
* karma

To use it you'll need :

* node
* yeoman : `npm install -g yo`
* yeoman angular generator (optional since the site is already generated) : `npm install -g generator-angular`
* bower (shipped with yeoman)
* grunt (shipped with yeoman)
* sass + compass : `gem install compass` (if you have some troubles uninstall your current sass and compass and reinstall)
* karma : `npm install -g karma` (for tests)

To init the site, in the project root directory :

* npm install
* bower install

To run the site (more in the Gruntfile.js) : `grunt serve`