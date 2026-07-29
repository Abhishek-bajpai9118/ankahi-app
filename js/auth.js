/* ============================================================
   AUTH — signup / login / logout / current-user state
   ============================================================ */

let currentUser = null;   // firebase auth user
let currentProfile = null; // firestore users/{uid} doc

async function signUp(name, email, password) {
  const cred = await auth.createUserWithEmailAndPassword(email, password);
  const role = ADMIN_EMAILS.includes(email) ? "admin" : "user";
  await db.collection("users").doc(cred.user.uid).set({
    name, email, role,
    bio: "",
    photoURL: "",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
  await cred.user.updateProfile({ displayName: name });
  return cred.user;
}

async function logIn(email, password) {
  const cred = await auth.signInWithEmailAndPassword(email, password);
  // ensure a profile doc exists (covers users created before this schema)
  const ref = db.collection("users").doc(cred.user.uid);
  const snap = await ref.get();
  if (!snap.exists) {
    const role = ADMIN_EMAILS.includes(email) ? "admin" : "user";
    await ref.set({
      name: cred.user.displayName || email.split("@")[0],
      email, role, bio: "", photoURL: "",
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
  return cred.user;
}

function logOut() {
  return auth.signOut();
}

/* Keeps currentUser / currentProfile in sync app-wide.
   Call the callback whenever auth state changes. */
function watchAuth(callback) {
  auth.onAuthStateChanged(async (user) => {
    currentUser = user;
    if (user) {
      const snap = await db.collection("users").doc(user.uid).get();
      currentProfile = snap.exists ? snap.data() : null;
    } else {
      currentProfile = null;
    }
    callback(currentUser, currentProfile);
  });
}

function isAdmin() {
  return !!currentProfile && currentProfile.role === "admin";
}
