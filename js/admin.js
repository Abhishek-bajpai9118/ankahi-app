/* ============================================================
   ADMIN DASHBOARD — admin.html
   ============================================================ */

document.documentElement.setAttribute("data-theme", localStorage.getItem("ankahi-theme") || "dark");

watchAuth(async (user, profile) => {
  const gate = document.getElementById("gate");
  const content = document.getElementById("admin-content");
  if (!user) {
    gate.innerHTML = `
      <div>
        <h2 style="font-family:var(--font-display-hi); margin-bottom:12px;">Please log in</h2>
        <p class="hint">You need an admin account to view this page.</p>
        <button class="btn btn-primary" style="margin-top:16px;" onclick="window.location.href='index.html'">Back to site</button>
      </div>`;
    gate.style.display = "flex";
    content.style.display = "none";
    return;
  }
  if (!isAdmin()) {
    gate.innerHTML = `
      <div>
        <h2 style="font-family:var(--font-display-hi); margin-bottom:12px;">Access denied</h2>
        <p class="hint">Your account (${user.email}) does not have admin access.<br>Add your email to ADMIN_EMAILS in js/firebase-config.js.</p>
        <button class="btn btn-primary" style="margin-top:16px;" onclick="window.location.href='index.html'">Back to site</button>
      </div>`;
    gate.style.display = "flex";
    content.style.display = "none";
    return;
  }
  gate.style.display = "none";
  content.style.display = "block";
  loadDashboard();
});

async function loadDashboard() {
  const storiesSnap = await db.collection("stories").orderBy("createdAt", "desc").get();
  const usersSnap = await db.collection("users").get();

  let totalLikes = 0, totalComments = 0, totalReads = 0;
  const storiesTable = document.getElementById("stories-table");
  storiesTable.innerHTML = "";

  storiesSnap.forEach(doc => {
    const s = doc.data();
    totalLikes += s.likesCount || 0;
    totalComments += s.commentsCount || 0;
    totalReads += s.readCount || 0;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtmlAdmin(s.title)}</td>
      <td>${escapeHtmlAdmin(s.authorName || "")}</td>
      <td>${escapeHtmlAdmin(s.category || "")}</td>
      <td>${s.likesCount || 0}</td>
      <td>${s.readCount || 0}</td>
      <td>${s.commentsCount || 0}</td>
      <td><button class="btn btn-danger btn-sm" onclick="adminDeleteStory('${doc.id}')">Delete</button></td>
    `;
    storiesTable.appendChild(tr);
  });

  document.getElementById("stat-stories").textContent = storiesSnap.size;
  document.getElementById("stat-users").textContent = usersSnap.size;
  document.getElementById("stat-likes").textContent = totalLikes;
  document.getElementById("stat-comments").textContent = totalComments;
  document.getElementById("stat-reads").textContent = totalReads;

  const usersTable = document.getElementById("users-table");
  usersTable.innerHTML = "";
  usersSnap.forEach(doc => {
    const u = doc.data();
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtmlAdmin(u.name || "")}</td>
      <td>${escapeHtmlAdmin(u.email || "")}</td>
      <td><span class="role-pill ${u.role === "admin" ? "admin" : ""}">${u.role}</span></td>
      <td><button class="btn btn-ghost btn-sm" onclick="adminToggleRole('${doc.id}','${u.role}')">
        ${u.role === "admin" ? "Demote" : "Promote"}
      </button></td>
    `;
    usersTable.appendChild(tr);
  });

  loadRecentComments(storiesSnap);
}

async function loadRecentComments(storiesSnap) {
  const commentsTable = document.getElementById("comments-table");
  commentsTable.innerHTML = "";
  const rows = [];
  for (const doc of storiesSnap.docs) {
    const commentsSnap = await doc.ref.collection("comments").orderBy("createdAt", "desc").limit(5).get();
    commentsSnap.forEach(cDoc => {
      const c = cDoc.data();
      rows.push({ storyId: doc.id, storyTitle: doc.data().title, commentId: cDoc.id, ...c });
    });
  }
  rows.slice(0, 30).forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtmlAdmin((c.text || "").slice(0, 60))}</td>
      <td>${escapeHtmlAdmin(c.authorName || "")}</td>
      <td>${escapeHtmlAdmin(c.storyTitle || "")}</td>
      <td><button class="btn btn-danger btn-sm" onclick="adminDeleteComment('${c.storyId}','${c.commentId}')">Delete</button></td>
    `;
    commentsTable.appendChild(tr);
  });
}

async function adminDeleteStory(id) {
  if (!confirm("Delete this story permanently?")) return;
  await db.collection("stories").doc(id).delete();
  loadDashboard();
}

async function adminToggleRole(uid, currentRole) {
  const newRole = currentRole === "admin" ? "user" : "admin";
  if (!confirm(`Change role to "${newRole}"?`)) return;
  await db.collection("users").doc(uid).update({ role: newRole });
  loadDashboard();
}

async function adminDeleteComment(storyId, commentId) {
  if (!confirm("Delete this comment?")) return;
  await db.collection("stories").doc(storyId).collection("comments").doc(commentId).delete();
  await db.collection("stories").doc(storyId).update({ commentsCount: firebase.firestore.FieldValue.increment(-1) });
  loadDashboard();
}

function escapeHtmlAdmin(str) {
  const div = document.createElement("div");
  div.textContent = str || "";
  return div.innerHTML;
}
