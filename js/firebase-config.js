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
const ADMIN_EMAILS = ["you@example.com"];

/* ============================================================
   CLOUDINARY CONFIG — free image/PDF hosting, no card required
   *** REPLACE CLOUDINARY_CLOUD_NAME below ***
   Find it on your Cloudinary dashboard Home page (top of screen,
   labeled "Cloud name") — it is NOT the long ID in your browser's
   URL bar. It usually looks like a short word, e.g. "dxyz123ab".
   ============================================================ */
const CLOUDINARY_CLOUD_NAME = "YOUR_CLOUD_NAME";
const CLOUDINARY_UPLOAD_PRESET = "ankahi_uploads";

/* ============================================================
   AI STORY GENERATOR — optional
   If you want the "Generate with AI" button to work without asking
   every visitor for their own key, paste your Anthropic API key
   below. Get one at https://console.anthropic.com/settings/keys

   ⚠️ IMPORTANT SECURITY WARNING:
   This file is public source code — anyone who opens your deployed
   site's dev tools (or views the GitHub repo, if public) can read
   this key and use it, and you would be billed for their usage.
   This is only reasonably safe if:
     - your GitHub repo is PRIVATE, and
     - you trust everyone who will use this site, or
     - you've set a low spending limit on this key in the
       Anthropic Console as a safety net.
   For a truly public site, leave this blank and use the safer
   Netlify Function proxy described in netlify/functions/generate-story.js
   and SETUP.md instead.

   Leave as "" to keep asking each visitor for their own key.
   ============================================================ */
const ANTHROPIC_API_KEY = "";
