/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-poc',
    environment: environment,
	//host:'http://localhost:8079',
    //baseURL: '/',
	rootURL: '/',
	location: 'history',
    apiEndpoint: '/api',
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

    i18n: {
      defaultLocale: 'en-us'
    }
  };

  if (environment === 'local') {
    ENV.apiEndpoint = '//web-dev.bridgestonehub.com/api';
	//ENV.apiEndpoint = '//localhost:8079/api';
	ENV.rootURL='/ember-poc/'
	ENV.location='hash'
    ENV.s3BucketName = 'bs-assets-dev';
    ENV.cognitoRoleArn = 'arn:aws:iam::313850355893:role/Cognito_hubAuth_Role';

    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline'",
      'font-src': "'self'",
      'connect-src': "'self' *",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' *",
      'media-src': "'self'"
    }
  }

  if (environment === 'dev') {
    ENV.s3BucketName = 'bs-assets-dev';
    ENV.cognitoRoleArn = 'arn:aws:iam::313850355893:role/Cognito_hubAuth_Role';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'qa') {
    ENV.s3BucketName = 'bs-assets-qa';
    ENV.cognitoRoleArn = 'arn:aws:iam::313850355893:role/Cognito_hubAuth_Role';
  }

  if (environment === 'test') {
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'prd') {
    ENV.s3BucketName = 'bs-assets-prod';
    ENV.cognitoRoleArn = 'arn:aws:iam::313850355893:role/Cognito_hubAuth_Role';
  }

  ENV['simple-auth-token'] = {
    serverTokenEndpoint: ENV.apiEndpoint + '/application/auth/login',
    tokenPropertyName: 'payload'
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:token',
    crossOriginWhitelist: [ENV.apiEndpoint]
  };

  return ENV;
};
