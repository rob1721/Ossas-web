// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL: 'http://localhost:16000/api',
  firebaseConfig : {
    apiKey: 'AIzaSyBtMiuDzLFZsstOYOUwhEcpz5RzPPMTWNE',
    authDomain: 'ossas-8d93e.firebaseapp.com',
    databaseURL: 'https://ossas-8d93e.firebaseio.com',
    projectId: 'ossas-8d93e',
    storageBucket: 'ossas-8d93e.appspot.com',
    messagingSenderId: '91554389798',
    appId: '1:91554389798:web:267aae5f43267ebb6b6be7'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
