/* ============================================================
   FIREBASE CONFIG
   ============================================================ */
const firebaseConfig = {
  apiKey: "AIzaSyDCFFuqdMr4G1z21-KQdv0kBUh5LVaaNgE",
  authDomain: "ankahi-app-83258.firebaseapp.com",
  projectId: "ankahi-app-83258",
  storageBucket: "ankahi-app-83258.firebasestorage.app",
  messagingSenderId: "585479210824",
  appId: "1:585479210824:web:f16a3c33a855a17915557d"
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
   the first time they sign up / log in.
   *** REPLACE THIS with the email you'll sign up with on the site *** */
const ADMIN_EMAILS = ["ab895707@gmail.com"];

/* ============================================================
   CLOUDINARY CONFIG — free image/PDF hosting, no card required
   *** REPLACE CLOUDINARY_CLOUD_NAME below ***
   Find it on your Cloudinary dashboard Home page (top of screen,
   labeled "Cloud name") — it is NOT the long ID in your browser's
   URL bar. It usually looks like a short word, e.g. "dxyz123ab".
   ============================================================ */
const CLOUDINARY_CLOUD_NAME = "h9jlfe2k";
const CLOUDINARY_UPLOAD_PRESET = "ankahi_uploads";
