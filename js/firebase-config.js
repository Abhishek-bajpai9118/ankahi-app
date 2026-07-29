/* ============================================================
   FIREBASE CONFIG — REPLACE WITH YOUR OWN PROJECT VALUES
   Get these from: Firebase Console → Project Settings → General
   ============================================================ */
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

/* Any email listed here is automatically granted the "admin" role
   the first time they sign up / log in. Add your own email(s). */
const ADMIN_EMAILS = ["you@example.com"];
