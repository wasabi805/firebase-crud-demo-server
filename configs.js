// see: https://firebase.google.com/docs/firestore/quickstart#node.js_1
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, } = require('firebase-admin/firestore');
const { privateKey } = JSON.parse(process.env.private_key)

const configs = {
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    privateKey,
    "client_email": process.env.client_email,
    "client_id": process.env.client_id,
    "auth_uri": process.env.auth_uri,
    "token_uri": process.env.token_uri,
    "auth_provider_x509_cert_url": process.env.auth_provider_x509_cert_url,
    "client_x509_cert_url": process.env.client_x509_cert_url,
    "universe_domain": process.env.universe_domain,
}

// Initialize Firebase
initializeApp({
    credential : cert(configs)
});

const db = getFirestore();


module.exports = {db};