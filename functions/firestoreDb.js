// see: https://firebase.google.com/docs/firestore/quickstart#node.js_1
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, } from 'firebase-admin/firestore';
const { privateKey } = JSON.parse(process.env.PRIVATE_KEY)

const configs = {
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    privateKey,
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
    "auth_uri": process.env.AUTH_URI,
    "token_uri": process.env.TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL,
    "universe_domain": process.env.UNIVERSE_DOMAIN,
}

// Initialize Firebase
initializeApp({
    credential : cert(configs)
});

const db = getFirestore();

export default db


