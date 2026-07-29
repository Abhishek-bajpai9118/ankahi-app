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
/* NOTE: Firebase Storage is NOT used in this project — Google now
   requires the paid "Blaze" plan (with a card on file) just to
   enable a Storage bucket, even though usage stays within the free
   tier. Cover images and PDFs are uploaded to Cloudinary instead,
   which has a genuinely free tier with no card required.
   See CLOUDINARY_CLOUD_NAME / CLOUDINARY_UPLOAD_PRESET below. */

/* Any email listed here is automatically granted the "admin" role
   the first time they sign up / log in. Add your own email(s). */
const ADMIN_EMAILS = ["you@example.com"];

/* ============================================================
   CLOUDINARY CONFIG — free image/PDF hosting, no card required
   1. Sign up free at https://cloudinary.com/users/register/free
   2. Copy your "Cloud name" from the dashboard into CLOUDINARY_CLOUD_NAME
   3. Settings → Upload → Upload presets → Add upload preset
      → Signing Mode: "Unsigned" → give it a name → Save
      → paste that name into CLOUDINARY_UPLOAD_PRESET
   ============================================================ */
const CLOUDINARY_CLOUD_NAME = "YOUR_CLOUD_NAME";
const CLOUDINARY_UPLOAD_PRESET = "YOUR_UPLOAD_PRESET";
