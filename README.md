## ABOUT

This is my boilerplate for a Gatsby hybrid app. I have added in simple-auth with firebase for admin access, Auth0 for members access, added in Formik for forms, set up Redux and added in image optimizations into the starter Gatsby-SemanticUI template. I have not deployed it yet so there might be some more issues to iron out before can put into production. I will continuously add in features to this boilerplate. If there is any way to improve my codes, please feel free to reach out to me so that I can make this code better. Thank you

## CREDITS

- Gatsby Semantic-UI starter https://github.com/pretzelhands/gatsby-starter-semantic-ui
- Gatsby JS & Firebase (Tom Phillips) Udemy Course https://www.udemy.com/share/1024WWA0MZcV9VQnw=/
- Gatsby Tutorial & Projects Course (Smilga) https://www.udemy.com/share/101XUAA0MZcV9VQnw=/
- Jeremy Albright for helping me so much on Spectrum to make this repo possible

## GETTING STARTED

1. git clone <Directory>

2. yarn install

3. You will need to add following files with your own configuration details

**In root, .env.development & .env.production**

```
# AUTH0 SETUP
GATSBY_AUTH0_DOMAIN=???.auth0.com
GATSBY_AUTH0_CLIENTID=
GATSBY_AUTH0_CALLBACK=http://localhost:8000/callback

# CONTENTFUL SETUP
CONTENTFUL_ID=
CONTENTFUL_ACCESS_TOKEN=

# FIREBASE SETUP
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY_ID=
FIREBASE_PRIVATE_KEY=""
FIREBASE_CLIENT_EMAIL=
FIREBASE_CLIENT_ID=
FIREBASE_AUTH_URI=
FIREBASE_TOKEN_URI=
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=
FIREBASE_CLIENT_X509_CERT_URL=
```

**In gatsby-config**

```
        credential: {
          type: process.env.FIREBASE_TYPE,
          project_id: process.env.FIREBASE_PROJECT_ID,
          private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
          private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          client_email: process.env.FIREBASE_CLIENT_EMAIL,
          client_id: process.env.FIREBASE_CLIENT_ID,
          auth_uri: process.env.FIREBASE_AUTH_URI,
          token_uri: process.env.FIREBASE_TOKEN_URI,
          auth_provider_x509_cert_url:
            process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
          client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
        }

```

**In src/services/Firebase/config.js**

```
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
}

export default firebaseConfig
```

4. yarn start

## TODO

- Firebase OAuth
- Apollo Graphql Subscriptions
- Formik Image Upload
- Strapi
- Snipcart
- PWA
- Blockchain
- Passport

## KIV

- Typescript

## DONE

- Apollo Graphql Mutations
- SEO
- Contentful Pagination
- Deployment
- Firebase CRUD
- Firestore Register
- Styled Component & CSS (Design - Industrial)
- Contentful
- Image Layout
- Organize
- Port to Semantic-UI-React
- Email & Password Auth
- Redux
- Formik
- OAuth
- Admin
- Auth
