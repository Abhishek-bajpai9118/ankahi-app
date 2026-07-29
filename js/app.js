/* ============================================================
   MAIN APP — index.html
   ============================================================ */

const STR = {
  en: {
    subtitle: "Untold Stories",
    navAbout: "About", navStories: "Stories",
    heroEyebrow: "Hidden thoughts, spoken at last",
    heroSub: "How does one go on living, waiting for someone?",
    btnWrite: "Write your story", btnReadNav: "Read stories",
    aboutRole: "Software Engineer, TCS · BCA & MCA (AI & ML)",
    aboutText: "Abhishek Bajpai works as a Software Engineer at TCS. He completed his BCA and MCA with a specialization in AI & ML. He created Ankahi to give shape to the thoughts we usually keep hidden — the ones about waiting, longing, and everything left unsaid.",
    storiesEyebrow: "A wall of open journals",
    storiesTitle: "Stories from the heart",
    storiesEmpty: "No stories yet. Be the first to write one.",
    fabWrite: "Write a story",
    searchPh: "Search stories...",
    catAll: "All categories",
    addStoryTitle: "Write your story",
    fieldTitle: "Title", fieldCategory: "Category", fieldCover: "Cover image",
    fieldCoverHint: "Click to choose a cover image",
    fieldContent: "Your story",
    fieldContentPh: "Once, there was a wait that never really ended...",
    fieldPdf: "Attach PDF (optional)",
    fieldPdfHint: "Click to attach a PDF",
    pdfSizeHint: "Max size ~4 MB",
    btnCancel: "Cancel", btnPublish: "Publish story",
    btnDownloadPdf: "Download PDF",
    footerText: "Ankahi — a space for the things we never said.",
    errTitle: "Please add a title.", errCover: "Please choose a cover image.",
    errContent: "Please write your story.", errPdfSize: "PDF is too large (max ~4 MB).",
    errLoginNeeded: "Please log in to do that.",
    confirmDelete: "Delete this story? This cannot be undone.",
    byLine: "Published", reads: "reads", likesLbl: "likes", commentsLbl: "comments",
    loginTitle: "Log in", signupTitle: "Create account",
    tabLogin: "Log in", tabSignup: "Sign up",
    fieldName: "Name", fieldEmail: "Email", fieldPassword: "Password",
    btnLogin: "Log in", btnSignup: "Sign up",
    profileTitle: "Your profile", btnLogout: "Log out", yourStories: "Your stories",
    commentPh: "Add a comment...", replyPh: "Write a reply...",
    btnReply: "Reply", btnSend: "Send",
    aiGenerate: "✨ Generate with AI", aiTopicPh: "Topic (e.g. waiting at a train station)",
    aiMoodPh: "Mood (e.g. bittersweet)", aiNoKey: "Add your Anthropic API key first (saved only in this browser).",
    aiKeyLabel: "Anthropic API key (stored locally in your browser only)",
    aiGenerating: "Generating...", aiInsert: "Use this text",
    needFirebase: "Firebase isn't configured yet — add your project keys in js/firebase-config.js"
  },
  hi: {
    subtitle: "अनकही कहानियाँ",
    navAbout: "लेखक परिचय", navStories: "कहानियाँ",
    heroEyebrow: "अनकहे विचार, आख़िरकार शब्दों में",
    heroSub: "किसी के इंतज़ार में कैसे जिया जाता है?",
    btnWrite: "अपनी कहानी लिखें", btnReadNav: "कहानियाँ पढ़ें",
    aboutRole: "सॉफ्टवेयर इंजीनियर, TCS · BCA और MCA (AI & ML)",
    aboutText: "अभिषेक बाजपेई वर्तमान में TCS में सॉफ्टवेयर इंजीनियर के रूप में कार्यरत हैं। उन्होंने BCA और MCA (AI & ML में विशेषज्ञता) की पढ़ाई पूरी की है। उन्होंने 'अनकही' की शुरुआत उन छुपे हुए विचारों को आवाज़ देने के लिए की, जिन्हें हम अक्सर दिल में ही रख लेते हैं।",
    storiesEyebrow: "खुली डायरियों की एक दीवार",
    storiesTitle: "दिल से निकली कहानियाँ",
    storiesEmpty: "अभी कोई कहानी नहीं है। सबसे पहले आप लिखें।",
    fabWrite: "कहानी लिखें",
    searchPh: "कहानियाँ खोजें...",
    catAll: "सभी श्रेणियाँ",
    addStoryTitle: "अपनी कहानी लिखें",
    fieldTitle: "शीर्षक", fieldCategory: "श्रेणी", fieldCover: "कवर तस्वीर",
    fieldCoverHint: "कवर तस्वीर चुनने के लिए क्लिक करें",
    fieldContent: "आपकी कहानी",
    fieldContentPh: "एक बार, एक इंतज़ार था जो कभी खत्म नहीं हुआ...",
    fieldPdf: "पीडीएफ जोड़ें (वैकल्पिक)",
    fieldPdfHint: "पीडीएफ जोड़ने के लिए क्लिक करें",
    pdfSizeHint: "अधिकतम आकार ~4 MB",
    btnCancel: "रद्द करें", btnPublish: "कहानी प्रकाशित करें",
    btnDownloadPdf: "पीडीएफ डाउनलोड करें",
    footerText: "अनकही — उन बातों के लिए जो हमने कभी कही नहीं।",
    errTitle: "कृपया एक शीर्षक जोड़ें।", errCover: "कृपया एक कवर तस्वीर चुनें।",
    errContent: "कृपया अपनी कहानी लिखें।", errPdfSize: "पीडीएफ बहुत बड़ी है (अधिकतम ~4 MB)।",
    errLoginNeeded: "कृपया पहले लॉगिन करें।",
    confirmDelete: "इस कहानी को हटाएं? यह वापस नहीं होगा।",
    byLine: "प्रकाशित", reads: "बार पढ़ी गई", likesLbl: "पसंद", commentsLbl: "टिप्पणियाँ",
    loginTitle: "लॉगिन करें", signupTitle: "खाता बनाएं",
    tabLogin: "लॉगिन", tabSignup: "साइन अप",
    fieldName: "नाम", fieldEmail: "ईमेल", fieldPassword: "पासवर्ड",
    btnLogin: "लॉगिन करें", btnSignup: "साइन अप करें",
    profileTitle: "आपकी प्रोफ़ाइल", btnLogout: "लॉगआउट", yourStories: "आपकी कहानियाँ",
    commentPh: "टिप्पणी जोड़ें...", replyPh: "जवाब लिखें...",
    btnReply: "जवाब दें", btnSend: "भेजें",
    aiGenerate: "✨ AI से बनाएं", aiTopicPh: "विषय (जैसे: स्टेशन पर इंतज़ार)",
    aiMoodPh: "मूड (जैसे: भावुक)", aiNoKey: "पहले अपनी Anthropic API key जोड़ें (सिर्फ़ इस ब्राउज़र में सेव होगी)।",
    aiKeyLabel: "Anthropic API key (सिर्फ़ आपके ब्राउज़र में सेव होगी)",
    aiGenerating: "बनाया जा रहा है...", aiInsert: "यह टेक्स्ट उपयोग करें",
    needFirebase: "Firebase अभी सेट नहीं है — js/firebase-config.js में अपने प्रोजेक्ट keys जोड़ें"
  }
};

const CATEGORIES = ["Love", "Loss", "Hope", "Friendship", "Family", "Nostalgia", "Other"];

let currentLang = "hi";
let allStories = {};
let activeCategory = "";
let activeSearch = "";
let coverBase64File = null; // {file}
let pdfFile = null;
let currentReadStoryId = null;

/* ---------- i18n ---------- */
function t(key){ return STR[currentLang][key] || key; }

function setLang(lang){
  currentLang = lang;
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(STR[lang][key] !== undefined) el.innerHTML = STR[lang][key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const key = el.getAttribute("data-i18n-ph");
    if(STR[lang][key] !== undefined) el.setAttribute("placeholder", STR[lang][key]);
  });
  document.getElementById("btn-lang-hi").classList.toggle("active", lang==="hi");
  document.getElementById("btn-lang-en").classList.toggle("active", lang==="en");
  localStorage.setItem("ankahi-lang", lang);
  populateCategoryFilter();
  renderStories();
}

function initLang(){
  const saved = localStorage.getItem("ankahi-lang");
  const preferred = saved || (navigator.language && navigator.language.toLowerCase().startsWith("hi") ? "hi" : "en");
  setLang(preferred);
}

/* ---------- theme ---------- */
function setTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("ankahi-theme", theme);
  document.getElementById("theme-icon").textContent = theme === "dark" ? "🌙" : "☀️";
}
function toggleTheme(){
  const cur = document.documentElement.getAttribute("data-theme");
  setTheme(cur === "dark" ? "light" : "dark");
}
function initTheme(){
  setTheme(localStorage.getItem("ankahi-theme") || "dark");
}

/* ---------- Cloudinary upload (free, no card, replaces Firebase Storage) ---------- */
async function uploadToCloudinary(file, resourceType){
  // resourceType: "image" for covers, "raw" for PDFs
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  const res = await fetch(url, { method: "POST", body: formData });
  if(!res.ok){
    const errText = await res.text();
    throw new Error("Cloudinary upload failed: " + errText);
  }
  const data = await res.json();
  return data.secure_url;
}

/* ---------- categories ---------- */
function populateCategoryFilter(){
  const sel = document.getElementById("cat-filter");
  sel.innerHTML = `<option value="">${t("catAll")}</option>` +
    CATEGORIES.map(c=>`<option value="${c}">${c}</option>`).join("");
  sel.value = activeCategory;
}

/* ---------- story loading (Firestore realtime) ---------- */
function initStoriesListener(){
  try{
    db.collection("stories").orderBy("createdAt", "desc")
      .onSnapshot(snap=>{
        allStories = {};
        snap.forEach(doc=> allStories[doc.id] = { id: doc.id, ...doc.data() });
        renderStories();
      }, err=>{
        showFirebaseWarning();
      });
  }catch(e){
    showFirebaseWarning();
  }
}

function showFirebaseWarning(){
  const grid = document.getElementById("stories-grid");
  grid.innerHTML = `<div class="empty-state">${t("needFirebase")}</div>`;
}

function renderStories(){
  const grid = document.getElementById("stories-grid");
  let list = Object.values(allStories);
  if(activeCategory) list = list.filter(s=> s.category === activeCategory);
  if(activeSearch){
    const q = activeSearch.toLowerCase();
    list = list.filter(s=>
      (s.title||"").toLowerCase().includes(q) ||
      (s.content||"").toLowerCase().includes(q) ||
      (s.category||"").toLowerCase().includes(q)
    );
  }
  if(list.length === 0){
    grid.innerHTML = `<div class="empty-state">${t("storiesEmpty")}</div>`;
    return;
  }
  grid.innerHTML = "";
  list.forEach(story=>{
    const card = document.createElement("div");
    card.className = "story-card";
    const dateStr = story.createdAt && story.createdAt.toDate
      ? story.createdAt.toDate().toLocaleDateString(currentLang==="hi"?"hi-IN":"en-IN", {day:"numeric", month:"short", year:"numeric"})
      : "";
    const excerpt = (story.content||"").slice(0,110) + ((story.content||"").length>110 ? "…" : "");
    card.innerHTML = `
      ${story.coverURL ? `<img class="story-cover" src="${story.coverURL}">` : `<div class="story-cover placeholder">अनकही</div>`}
      <div class="story-body">
        <div class="story-badges">
          ${story.category ? `<span class="badge">${escapeHtml(story.category)}</span>` : ""}
          ${story.pdfURL ? `<span class="badge badge-pdf">PDF</span>` : ""}
        </div>
        <div class="story-title">${escapeHtml(story.title)}</div>
        <div class="story-excerpt">${escapeHtml(excerpt)}</div>
        <div class="story-stats">
          <span>❤️ ${story.likesCount||0}</span>
          <span>💬 ${story.commentsCount||0}</span>
          <span>👁 ${story.readCount||0}</span>
        </div>
        <div class="story-footer">
          <span>${story.authorName ? escapeHtml(story.authorName)+" · " : ""}${dateStr}</span>
          ${(currentUser && story.authorId===currentUser.uid) || isAdmin() ?
            `<button class="icon-btn" title="Delete" onclick="event.stopPropagation(); deleteStory('${story.id}')">🗑</button>` : ""}
        </div>
      </div>
    `;
    card.addEventListener("click", ()=> openReadModal(story.id));
    grid.appendChild(card);
  });
}

function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = str || "";
  return div.innerHTML;
}

document.addEventListener("input", (e)=>{
  if(e.target && e.target.id === "search-input"){
    activeSearch = e.target.value;
    renderStories();
  }
});
document.addEventListener("change", (e)=>{
  if(e.target && e.target.id === "cat-filter"){
    activeCategory = e.target.value;
    renderStories();
  }
});

/* ---------- write modal ---------- */
function openWriteModal(){
  if(!currentUser){ openLoginModal(); return; }
  document.getElementById("write-overlay").classList.add("open");
  document.getElementById("input-title").value = "";
  document.getElementById("input-content").value = "";
  document.getElementById("cover-preview").style.display = "none";
  document.getElementById("cover-drop").classList.remove("has-file");
  document.getElementById("cover-drop-text").textContent = t("fieldCoverHint");
  document.getElementById("pdf-drop").classList.remove("has-file");
  document.getElementById("pdf-drop-text").textContent = t("fieldPdfHint");
  document.getElementById("form-error").style.display = "none";
  const catSel = document.getElementById("input-category");
  catSel.innerHTML = CATEGORIES.map(c=>`<option value="${c}">${c}</option>`).join("");
  coverBase64File = null; pdfFile = null;
}
function closeWriteModal(){ document.getElementById("write-overlay").classList.remove("open"); }

function handleCoverSelect(evt){
  const file = evt.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e){
    coverBase64File = { file, dataUrl: e.target.result };
    const prev = document.getElementById("cover-preview");
    prev.src = e.target.result;
    prev.style.display = "block";
    document.getElementById("cover-drop").classList.add("has-file");
    document.getElementById("cover-drop-text").textContent = file.name;
  };
  reader.readAsDataURL(file);
}

function handlePdfSelect(evt){
  const file = evt.target.files[0];
  if(!file) return;
  if(file.size > 4*1024*1024){
    showFormError(t("errPdfSize"));
    evt.target.value = "";
    return;
  }
  pdfFile = file;
  document.getElementById("pdf-drop").classList.add("has-file");
  document.getElementById("pdf-drop-text").textContent = file.name;
}

function showFormError(msg){
  const el = document.getElementById("form-error");
  el.textContent = msg;
  el.style.display = "block";
}

async function publishStory(){
  const title = document.getElementById("input-title").value.trim();
  const content = document.getElementById("input-content").value.trim();
  const category = document.getElementById("input-category").value;
  document.getElementById("form-error").style.display = "none";

  if(!title){ showFormError(t("errTitle")); return; }
  if(!coverBase64File){ showFormError(t("errCover")); return; }
  if(!content){ showFormError(t("errContent")); return; }

  if(CLOUDINARY_CLOUD_NAME === "YOUR_CLOUD_NAME"){
    showFormError("Cloudinary isn't configured yet — add your cloud name & upload preset in js/firebase-config.js");
    return;
  }

  const btn = document.getElementById("btn-publish");
  btn.disabled = true;
  try{
    const storyRef = db.collection("stories").doc();
    const id = storyRef.id;

    const coverURL = await uploadToCloudinary(coverBase64File.file, "image");

    let pdfURL = null, pdfName = null;
    if(pdfFile){
      pdfURL = await uploadToCloudinary(pdfFile, "raw");
      pdfName = pdfFile.name;
    }

    await storyRef.set({
      title, content, category,
      coverURL, pdfURL, pdfName,
      authorId: currentUser.uid,
      authorName: currentProfile ? currentProfile.name : currentUser.email,
      lang: currentLang,
      likesCount: 0, commentsCount: 0, readCount: 0,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    closeWriteModal();
  }catch(e){
    showFormError("Error: " + e.message);
  }finally{
    btn.disabled = false;
  }
}

async function deleteStory(id){
  if(!confirm(t("confirmDelete"))) return;
  try{
    await db.collection("stories").doc(id).delete();
  }catch(e){
    alert("Could not delete: " + e.message);
  }
}

/* ---------- AI generator ---------- */
function openAiPanel(){
  const key = getStoredApiKey();
  const panel = document.getElementById("ai-panel");
  panel.style.display = panel.style.display === "block" ? "none" : "block";
  document.getElementById("ai-key-row").style.display = key ? "none" : "block";
}
async function runAiGenerate(){
  const keyInput = document.getElementById("ai-key-input").value.trim();
  if(keyInput) setStoredApiKey(keyInput);
  const topic = document.getElementById("ai-topic").value.trim();
  const mood = document.getElementById("ai-mood").value.trim();
  const statusEl = document.getElementById("ai-status");
  if(!getStoredApiKey()){ statusEl.textContent = t("aiNoKey"); return; }
  statusEl.textContent = t("aiGenerating");
  try{
    const text = await generateStoryWithAI(topic, mood, currentLang);
    document.getElementById("input-content").value = text;
    statusEl.textContent = "";
    document.getElementById("ai-panel").style.display = "none";
  }catch(e){
    statusEl.textContent = "Error: " + e.message;
  }
}

/* ---------- read modal (detail + likes + comments) ---------- */
async function openReadModal(id){
  const story = allStories[id];
  if(!story) return;
  currentReadStoryId = id;

  const coverEl = document.getElementById("read-cover");
  if(story.coverURL){ coverEl.src = story.coverURL; coverEl.style.display = "block"; }
  else coverEl.style.display = "none";

  document.getElementById("read-title").textContent = story.title;
  const dateStr = story.createdAt && story.createdAt.toDate
    ? story.createdAt.toDate().toLocaleDateString(currentLang==="hi"?"hi-IN":"en-IN", {day:"numeric", month:"long", year:"numeric"})
    : "";
  document.getElementById("read-meta").innerHTML =
    `<span>${t("byLine")} · ${story.authorName||""} · ${dateStr}</span><span>👁 ${story.readCount||0} ${t("reads")}</span>`;
  document.getElementById("read-content").textContent = story.content;

  const pdfLink = document.getElementById("read-pdf-link");
  if(story.pdfURL){
    pdfLink.href = story.pdfURL; pdfLink.style.display = "inline-flex";
  } else pdfLink.style.display = "none";

  // like button state
  await refreshLikeButton(id);

  // comments
  loadComments(id);

  document.getElementById("read-overlay").classList.add("open");

  // read count: once per session per story
  const seenKey = "ankahi-seen-" + id;
  if(!sessionStorage.getItem(seenKey)){
    sessionStorage.setItem(seenKey, "1");
    db.collection("stories").doc(id).update({
      readCount: firebase.firestore.FieldValue.increment(1)
    }).catch(()=>{});
  }
}
function closeReadModal(){ document.getElementById("read-overlay").classList.remove("open"); }

async function refreshLikeButton(storyId){
  const btn = document.getElementById("like-btn");
  const story = allStories[storyId];
  btn.querySelector(".like-count").textContent = story ? (story.likesCount||0) : 0;
  if(!currentUser){ btn.classList.remove("liked"); return; }
  const likeDoc = await db.collection("stories").doc(storyId).collection("likes").doc(currentUser.uid).get();
  btn.classList.toggle("liked", likeDoc.exists);
}

async function toggleLike(){
  if(!currentUser){ openLoginModal(); return; }
  const storyId = currentReadStoryId;
  const likeRef = db.collection("stories").doc(storyId).collection("likes").doc(currentUser.uid);
  const storyRef = db.collection("stories").doc(storyId);
  const existing = await likeRef.get();
  if(existing.exists){
    await likeRef.delete();
    await storyRef.update({ likesCount: firebase.firestore.FieldValue.increment(-1) });
  } else {
    await likeRef.set({ createdAt: firebase.firestore.FieldValue.serverTimestamp() });
    await storyRef.update({ likesCount: firebase.firestore.FieldValue.increment(1) });
  }
  await refreshLikeButton(storyId);
}

/* ---------- comments + replies ---------- */
function loadComments(storyId){
  const wrap = document.getElementById("comments-list");
  wrap.innerHTML = "";
  db.collection("stories").doc(storyId).collection("comments")
    .orderBy("createdAt", "asc")
    .onSnapshot(snap=>{
      const all = [];
      snap.forEach(doc=> all.push({ id: doc.id, ...doc.data() }));
      renderComments(all);
    });
}

function renderComments(all){
  const wrap = document.getElementById("comments-list");
  wrap.innerHTML = "";
  const topLevel = all.filter(c=> !c.parentId);
  topLevel.forEach(c=>{
    const replies = all.filter(r=> r.parentId === c.id);
    wrap.appendChild(buildCommentEl(c, replies));
  });
}

function buildCommentEl(c, replies){
  const div = document.createElement("div");
  div.className = "comment";
  const initials = (c.authorName||"?").slice(0,1).toUpperCase();
  const timeStr = c.createdAt && c.createdAt.toDate ? c.createdAt.toDate().toLocaleDateString() : "";
  div.innerHTML = `
    <div class="comment-head">
      <div class="comment-avatar">${initials}</div>
      <div class="comment-name">${escapeHtml(c.authorName||"")}</div>
      <div class="comment-time">${timeStr}</div>
    </div>
    <div class="comment-text">${escapeHtml(c.text)}</div>
    <div class="comment-actions">
      <button onclick="toggleReplyForm('${c.id}')">${t("btnReply")}</button>
      ${(currentUser && (c.authorId===currentUser.uid)) || isAdmin() ? `<button onclick="deleteComment('${c.id}')">🗑</button>` : ""}
    </div>
    <div class="reply-form" id="reply-form-${c.id}">
      <input type="text" id="reply-input-${c.id}" placeholder="${t('replyPh')}">
      <button class="btn btn-primary btn-sm" onclick="submitReply('${c.id}')">${t("btnSend")}</button>
    </div>
    <div class="replies" id="replies-${c.id}"></div>
  `;
  const repliesWrap = div.querySelector(`#replies-${c.id}`);
  replies.forEach(r=>{
    const rEl = document.createElement("div");
    rEl.className = "comment";
    const rInit = (r.authorName||"?").slice(0,1).toUpperCase();
    const rTime = r.createdAt && r.createdAt.toDate ? r.createdAt.toDate().toLocaleDateString() : "";
    rEl.innerHTML = `
      <div class="comment-head">
        <div class="comment-avatar">${rInit}</div>
        <div class="comment-name">${escapeHtml(r.authorName||"")}</div>
        <div class="comment-time">${rTime}</div>
      </div>
      <div class="comment-text">${escapeHtml(r.text)}</div>
      ${(currentUser && (r.authorId===currentUser.uid)) || isAdmin() ?
        `<div class="comment-actions"><button onclick="deleteComment('${r.id}')">🗑</button></div>` : ""}
    `;
    repliesWrap.appendChild(rEl);
  });
  return div;
}

function toggleReplyForm(commentId){
  const form = document.getElementById(`reply-form-${commentId}`);
  form.classList.toggle("open");
}

async function submitComment(){
  if(!currentUser){ openLoginModal(); return; }
  const input = document.getElementById("comment-input");
  const text = input.value.trim();
  if(!text) return;
  const storyId = currentReadStoryId;
  await db.collection("stories").doc(storyId).collection("comments").add({
    text, parentId: null,
    authorId: currentUser.uid,
    authorName: currentProfile ? currentProfile.name : currentUser.email,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
  await db.collection("stories").doc(storyId).update({ commentsCount: firebase.firestore.FieldValue.increment(1) });
  input.value = "";
}

async function submitReply(parentId){
  if(!currentUser){ openLoginModal(); return; }
  const input = document.getElementById(`reply-input-${parentId}`);
  const text = input.value.trim();
  if(!text) return;
  const storyId = currentReadStoryId;
  await db.collection("stories").doc(storyId).collection("comments").add({
    text, parentId,
    authorId: currentUser.uid,
    authorName: currentProfile ? currentProfile.name : currentUser.email,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
  await db.collection("stories").doc(storyId).update({ commentsCount: firebase.firestore.FieldValue.increment(1) });
  input.value = "";
  document.getElementById(`reply-form-${parentId}`).classList.remove("open");
}

async function deleteComment(commentId){
  if(!confirm(t("confirmDelete"))) return;
  const storyId = currentReadStoryId;
  await db.collection("stories").doc(storyId).collection("comments").doc(commentId).delete();
  await db.collection("stories").doc(storyId).update({ commentsCount: firebase.firestore.FieldValue.increment(-1) });
}

/* ---------- login / signup ---------- */
function openLoginModal(){
  document.getElementById("login-overlay").classList.add("open");
  showAuthTab("login");
}
function closeLoginModal(){ document.getElementById("login-overlay").classList.remove("open"); }
function showAuthTab(tab){
  document.getElementById("tab-login").classList.toggle("active", tab==="login");
  document.getElementById("tab-signup").classList.toggle("active", tab==="signup");
  document.getElementById("login-form").style.display = tab==="login" ? "block" : "none";
  document.getElementById("signup-form").style.display = tab==="signup" ? "block" : "none";
  document.getElementById("auth-error").style.display = "none";
}
async function doLogin(){
  const email = document.getElementById("login-email").value.trim();
  const pass = document.getElementById("login-password").value;
  try{
    await logIn(email, pass);
    closeLoginModal();
  }catch(e){ showAuthError(e.message); }
}
async function doSignup(){
  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const pass = document.getElementById("signup-password").value;
  try{
    await signUp(name, email, pass);
    closeLoginModal();
  }catch(e){ showAuthError(e.message); }
}
function showAuthError(msg){
  const el = document.getElementById("auth-error");
  el.textContent = msg; el.style.display = "block";
}
async function doLogout(){
  await logOut();
  closeProfileModal();
}

/* ---------- profile ---------- */
function openProfileModal(){
  if(!currentUser){ openLoginModal(); return; }
  document.getElementById("profile-overlay").classList.add("open");
  document.getElementById("profile-name").textContent = currentProfile ? currentProfile.name : currentUser.email;
  document.getElementById("profile-email").textContent = currentUser.email;
  document.getElementById("profile-avatar").textContent = (currentProfile ? currentProfile.name : currentUser.email).slice(0,1).toUpperCase();
  document.getElementById("profile-role").textContent = isAdmin() ? "Admin" : "User";

  const mine = Object.values(allStories).filter(s=> s.authorId === currentUser.uid);
  const list = document.getElementById("profile-stories");
  list.innerHTML = mine.length ? "" : `<div class="hint">No stories yet.</div>`;
  mine.forEach(s=>{
    const row = document.createElement("div");
    row.style.padding = "8px 0";
    row.style.borderBottom = "1px solid var(--border)";
    row.innerHTML = `<strong>${escapeHtml(s.title)}</strong> — ❤️ ${s.likesCount||0} · 👁 ${s.readCount||0}`;
    list.appendChild(row);
  });
}
function closeProfileModal(){ document.getElementById("profile-overlay").classList.remove("open"); }

/* ---------- auth UI sync ---------- */
function updateAuthUI(user, profile){
  const avatarBtn = document.getElementById("avatar-btn");
  const loginBtn = document.getElementById("login-nav-btn");
  const adminLink = document.getElementById("admin-link");
  if(user){
    loginBtn.style.display = "none";
    avatarBtn.style.display = "flex";
    avatarBtn.textContent = (profile ? profile.name : user.email).slice(0,1).toUpperCase();
    adminLink.style.display = isAdmin() ? "flex" : "none";
  } else {
    loginBtn.style.display = "flex";
    avatarBtn.style.display = "none";
    adminLink.style.display = "none";
  }
  renderStories();
}

/* ---------- PWA ---------- */
function registerSW(){
  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  }
}

/* ---------- init ---------- */
document.querySelectorAll(".overlay").forEach(ov=>{
  ov.addEventListener("click", (e)=>{ if(e.target === ov) ov.classList.remove("open"); });
});
document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape") document.querySelectorAll(".overlay.open").forEach(ov=> ov.classList.remove("open"));
});

initTheme();
initLang();
watchAuth(updateAuthUI);
initStoriesListener();
registerSW();
