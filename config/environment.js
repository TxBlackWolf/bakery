/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bakery',
    environment: environment,
    contentSecurityPolicy: { 'connect-src': "'self' wss://*.firebaseio.com wss://s-dal5-nss-33.firebaseio.com/.ws?v=5&ns=bakerypdx maps.googleapis.com maps.gstatic.com" },
    firebase: 'https://bakerypdx.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' *.googleapis.com maps.gstatic.com https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css",
      'font-src': "'self' maxcdn.bootstrapcdn.com fonts.gstatic.com",
      'connect-src': "'self' https://bakerypdx.firebaseio.com/ wss://s-dal5-nss-33.firebaseio.com/.ws?v=5&ns=bakerypdx maps.googleapis.com maps.gstatic.com/*",
      'img-src': "'self' maps.googleapis.com *.gstatic.com *.googleapis.com",
      'style-src': "'self' 'unsafe-inline' https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css http://fonts.googleapis.com/css?family=Roboto:300,400,500,700",
      'frame-src': "'none'"
    }
  };

ENV['torii'] = {
  providers: {
    'google-oauth2': {
      apiKey: '3598541402-l9kkoktchd4or6gdvplfkmagm20vanuo.apps.googleusercontent.com',
      scope: 'profile',
      redirectUri: 'http://localhost:4200'
    }
  }
};
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
