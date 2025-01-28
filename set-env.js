const {writeFile} = require('fs');
const dotenv = require('dotenv')

dotenv.config()

const devEnvPath = './src/environments/environment.ts';
const prodEnvPath = './src/environments/environment.prod.ts';

const baseFirebaseConfig = `firebase: {
   apiKey: '${process.env.FIREBASE_API_KEY}',
   authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
   projectId: '${process.env.FIREBASE_PROJECT_ID}',
   storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
   messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
   appId: '${process.env.FIREBASE_APP_ID}',
   measurementId: '${process.env.FIREBASE_MEASUREMENT_ID}'
},`

const envConfigFile = (prod = false) => `
   export const environment = {
     production: ${prod ? 'true' : 'false'},
     ${baseFirebaseConfig}
   };
`;

writeFile(devEnvPath, envConfigFile(), (err) => {
  if (err) {
    console.error(err);
  }
});

writeFile(prodEnvPath, envConfigFile(true), (err) => {
  if (err) {
    console.error(err);
  }
});
