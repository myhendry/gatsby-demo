## ABOUT

This is my boilerplate for a Gatsby hybrid app. I have added in simple-auth with firebase for admin access, Auth0 for members access, added in Formik for forms, set up Redux and added in image optimizations into the starter Gatsby-SemanticUI template. I have not deployed it yet so there might be some more issues to iron out before can put into production. I will continuously add in features to this boilerplate. If there is any way to improve my codes, please feel free to reach out to me so that I can make this code better. Thank you

## CREDITS

Gatsby Semantic-UI starter https://github.com/pretzelhands/gatsby-starter-semantic-ui
Gatsby JS & Firebase (Tom Phillips) Udemy Course https://www.udemy.com/share/1024WWA0MZcV9VQnw=/
Gatsby Tutorial & Projects Course (Smilga) https://www.udemy.com/share/101XUAA0MZcV9VQnw=/

## GETTING STARTED

1. git clone <Directory>

2. yarn install

3. You will need to add following files with your own configuration details

**In root, .env.development**

```
# AUTH0 SETUP
AUTH0_DOMAIN=???.auth0.com
AUTH0_CLIENTID=???
AUTH0_CALLBACK=http://localhost:8000/callback

# CONTENTFUL SETUP
CONTENTFUL_ID==???
CONTENTFUL_ACCESS_TOKEN==???
```

**In root, firebase.json**

```
{
  "type": "",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": ""
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

- Strapi
- Firestore CRUD
- Stripe
- Deployment

## KIV

- Styled Component & CSS
- Typescript

## DONE

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
