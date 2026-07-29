# अनकही · Ankahi — Setup & Deployment Guide

## What's in this project
```
index.html          Main site (stories, search, categories, login, comments, likes, AI generator)
admin.html           Admin dashboard (stats, manage stories/users/comments)
css/style.css         All styling, incl. dark/light theme
js/firebase-config.js Firebase project keys (YOU fill this in)
js/auth.js            Login/signup/logout, role handling
js/app.js              Main site logic
js/admin.js            Admin dashboard logic
js/ai-generator.js     AI story generator (client-side, bring-your-own key)
manifest.json, sw.js    PWA support (installable, offline app shell)
icons/                Placeholder app icons — swap for your own logo
firestore.rules        Security rules for Firestore (paste into Firebase console)
storage.rules          Security rules for Storage (paste into Firebase console)
netlify/functions/     Optional secure server-side AI proxy for Netlify
```

## 1. Create your Firebase project (free)
1. Go to https://console.firebase.google.com → **Add project** → follow the wizard.
2. In your project, go to **Build → Authentication → Get started → Email/Password → Enable**.
3. Go to **Build → Firestore Database → Create database** → start in **production mode**.
4. Go to **Build → Storage → Get started** → start in production mode.
5. Go to **Project settings (gear icon) → General → Your apps → Add app → Web (</>)**.
   Copy the `firebaseConfig` object shown.

## 2. Configure this project
1. Open `js/firebase-config.js` and paste your `firebaseConfig` values in.
2. In the same file, set `ADMIN_EMAILS` to your own email address(es) — whoever
   signs up with one of these emails automatically becomes an admin and can
   see the 📊 admin link in the header and access `admin.html`.

## 3. Apply the security rules
1. Firebase console → **Firestore Database → Rules** tab → paste the contents
   of `firestore.rules` → **Publish**.
2. Firebase console → **Storage → Rules** tab → paste the contents of
   `storage.rules` → **Publish**.

Without this step, story/comment writes will be rejected by Firebase.

## 4. Try it locally
You can't just double-click `index.html` (browsers block some features on
`file://`). Instead, from inside the project folder run any simple local
server, for example:
```
python3 -m http.server 8080
```
then open `http://localhost:8080` in your browser.

## 5. Deploy

### Option A — Netlify (recommended, supports the secure AI proxy)
1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import from Git** → pick the repo.
3. Build command: leave blank. Publish directory: `/` (root).
4. Deploy. Netlify gives you a live URL immediately.
5. *(Optional, for the AI generator)* Site settings → Environment variables →
   add `ANTHROPIC_API_KEY`. The function in `netlify/functions/generate-story.js`
   will then be live at `/.netlify/functions/generate-story` — you can wire
   `js/ai-generator.js` to call that instead of asking users for a key.

### Option B — GitHub Pages (simplest, static only)
1. Push this folder to a GitHub repo.
2. Repo → **Settings → Pages → Source: Deploy from branch → main → / (root)**.
3. Your site will be live at `https://<username>.github.io/<repo>/`.
4. Note: the Netlify Function proxy won't run here — the AI generator will
   only work in "bring your own key" mode (see below).

## 6. About the AI Story Generator
By default, clicking **✨ Generate with AI** asks the writer to paste their
own Anthropic API key, which is saved only in that browser's `localStorage`
and sent directly from the browser to Anthropic's API. This is fine for your
own personal/demo use, but:
- Anyone with access to that browser's devtools can see the key.
- It is **not** safe to hard-code a real production key into the public
  source code of a GitHub Pages / Netlify site — bots will find and abuse it.

If you deploy on Netlify and want it safer, follow the note inside
`js/ai-generator.js` and `netlify/functions/generate-story.js` to switch to
the server-side proxy — the key then lives only in Netlify's environment
variables, never in the browser.

## 7. Notes on scale
- Read counts, like counts, and comment counts are stored as counters on each
  story document and updated with atomic increments — fine for a personal or
  small community site. For very high traffic you may eventually want
  Cloud Functions to keep these in sync more robustly, but it's not needed
  to get started.
- The admin dashboard currently loads all stories/users/comments client-side
  to compute stats. Totally fine for hundreds of stories; if this grows into
  the thousands, consider paginating the admin tables.

## 8. Editing the writer bio
Open `js/app.js`, find `STR.en.aboutText` and `STR.hi.aboutText`, and edit
the text directly.
