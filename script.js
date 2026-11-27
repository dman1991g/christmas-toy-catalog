// My Christmas Toy Catalog
// Edit the products array to add or change toy ideas. Prices and store names are intentionally
// not included in the child-facing catalog. Add parent shopping information in a separate
// private parent page if you later choose to build one.

const products = [
  { id:"ariel", category:"Princesses", name:"Ariel's Undersea Adventure", description:"Dive into a mermaid-sized make-believe adventure.", emoji:"🧜‍♀️" },
  { id:"elsa", category:"Princesses", name:"Elsa's Ice Palace", description:"Make up magical winter stories with Elsa.", emoji:"❄️" },
  { id:"anna", category:"Princesses", name:"Anna's Royal Adventure", description:"Go on a royal adventure with Anna.", emoji:"👑" },
  { id:"cinderella", category:"Princesses", name:"Cinderella's Royal Ball", description:"Get ready for a magical princess ball.", emoji:"👸" },
  { id:"belle", category:"Princesses", name:"Belle's Enchanted Story", description:"A lovely choice for story and pretend play.", emoji:"🌹" },
  { id:"rapunzel", category:"Princesses", name:"Rapunzel's Tower Adventure", description:"Let your imagination reach new heights.", emoji:"🌸" },
  { id:"moana", category:"Princesses", name:"Moana's Ocean Adventure", description:"Set sail on a pretend ocean journey.", emoji:"🌊" },
  { id:"tiana", category:"Princesses", name:"Tiana's Royal Kitchen", description:"Make-believe cooking fit for a princess.", emoji:"🍰" },
  { id:"barbie", category:"Barbie", name:"Barbie Fashion Fun", description:"Choose outfits and create new stories.", emoji:"👗" },
  { id:"dreamhouse", category:"Barbie", name:"Barbie Dreamhouse Playtime", description:"A pretend home with room for big ideas.", emoji:"🏠" },
  { id:"barbiecar", category:"Barbie", name:"Barbie's Little Car", description:"Take Barbie on a make-believe road trip.", emoji:"🚗" },
  { id:"baby", category:"Baby Dolls", name:"My Sweet Baby Doll", description:"A cuddly baby doll to care for.", emoji:"🍼" },
  { id:"stroller", category:"Baby Dolls", name:"Baby Doll Stroller", description:"Take baby along on a pretend walk.", emoji:"🚼" },
  { id:"nursery", category:"Baby Dolls", name:"Baby Doll Nursery", description:"Make a cozy little place for baby.", emoji:"🧸" },
  { id:"kitchen", category:"Pretend Play", name:"Little Chef Kitchen", description:"Pretend to cook up something delicious.", emoji:"🍳" },
  { id:"icecream", category:"Pretend Play", name:"Ice Cream Shop", description:"Serve pretend scoops to family and friends.", emoji:"🍦" },
  { id:"doctor", category:"Pretend Play", name:"Little Doctor Kit", description:"Help your toys feel better.", emoji:"🩺" },
  { id:"plush", category:"Stuffed Animals", name:"Cuddly Stuffed Friend", description:"A soft friend for hugs and adventures.", emoji:"🧸" },
  { id:"unicorn", category:"Stuffed Animals", name:"Magical Unicorn Plush", description:"A sparkly friend for pretend adventures.", emoji:"🦄" },
  { id:"craft", category:"Arts & Crafts", name:"Color & Create Art Set", description:"Make pictures, cards, and colorful creations.", emoji:"🎨" },
  { id:"beads", category:"Arts & Crafts", name:"Big Bead Craft Set", description:"Make colorful designs with grown-up help.", emoji:"🌈" },
  { id:"blocks", category:"Games & Learning", name:"Big Building Blocks", description:"Build towers, houses, and anything you imagine.", emoji:"🧱" },
  { id:"puzzle", category:"Games & Learning", name:"My First Picture Puzzle", description:"Put the pieces together to reveal a picture.", emoji:"🧩" },
  { id:"matching", category:"Games & Learning", name:"Picture Matching Game", description:"Find pictures that belong together.", emoji:"🃏" }
];

const categories = [
  { title:"Disney Princess Collection", key:"Princesses", intro:"A whole page of royal adventures!", icon:"👑" },
  { title:"Barbie's Dream World", key:"Barbie", intro:"Fashion, houses, cars, and make-believe fun!", icon:"🎀" },
  { title:"Baby Doll Love", key:"Baby Dolls", intro:"Little dolls and everything they need.", icon:"🍼" },
  { title:"Let's Pretend!", key:"Pretend Play", intro:"Play shop, cook, help, and imagine!", icon:"🧁" },
  { title:"Cuddly Friends", key:"Stuffed Animals", intro:"Find a new soft friend to hug.", icon:"🧸" },
  { title:"Make & Create", key:"Arts & Crafts", intro:"Colorful ideas for little creators.", icon:"🎨" },
  { title:"Games & Big Ideas", key:"Games & Learning", intro:"Puzzles, building, and playful learning.", icon:"🧩" }
];

const pages = [
  { type:"cover" },
  ...categories.map(c => ({ type:"products", ...c })),
  { type:"activity-color" },
  { type:"activity-match" },
  { type:"activity-hunt" },
  { type:"activity-draw" },
  { type:"wishlist" },
  { type:"goodbye" }
];

let currentPage = 0;
let wishList = JSON.parse(localStorage.getItem("christmasToyWishList") || "[]");
let soundOn = false;
let colorComplete = false;
let matchComplete = false;
let huntComplete = [];
let drawComplete = false;
let colorRound = 0;
let matchRound = 0;
let toastTimer;

const pageInner = document.getElementById("pageInner");
const pageNumber = document.getElementById("pageNumber");
const pageTotal = document.getElementById("pageTotal");
const wishCount = document.getElementById("wishCount");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");
const toast = document.getElementById("toast");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));
}
function saveWishList() {
  localStorage.setItem("christmasToyWishList", JSON.stringify(wishList));
  wishCount.textContent = wishList.length;
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1900);
}
function playSound() {
  if (!soundOn || !("AudioContext" in window || "webkitAudioContext" in window)) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioCtx();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.connect(gain); gain.connect(ctx.destination);
  oscillator.frequency.value = 660;
  gain.gain.setValueAtTime(0.07, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.13);
  oscillator.start(); oscillator.stop(ctx.currentTime + 0.14);
  oscillator.onended = () => ctx.close();
}
function toggleWish(id) {
  if (wishList.includes(id)) {
    wishList = wishList.filter(item => item !== id);
    showToast("Removed from your wish list");
  } else {
    wishList.push(id);
    showToast("Added to your Christmas wish list! 🎁");
  }
  saveWishList(); playSound(); renderPage();
}
function productCard(product) {
  const selected = wishList.includes(product.id);
  return `<article class="product-card">
    <div class="product-art" aria-hidden="true">${product.emoji}</div>
    <h3>${escapeHtml(product.name)}</h3>
    <p>${escapeHtml(product.description)}</p>
    <button class="wish-button ${selected ? "selected" : ""}" data-wish="${product.id}" type="button">
      ${selected ? "❤️ On my list!" : "🎁 I want this!"}
    </button>
  </article>`;
}
function renderCover() {
  return `<div class="cover page-content">
    <div class="ribbon">THE MAGICAL CHRISTMAS EDITION</div>
    <div class="cover-art">🎄🎁👑</div>
    <div class="eyebrow" style="color:#ffe5b5">A SPECIAL BOOK JUST FOR YOU</div>
    <h1>My Christmas<br>Toy Catalog</h1>
    <p>Turn the pages, discover wonderful toys, play little games, and make your Christmas wish list!</p>
    <div class="cover-art">🧸❄️🎀</div>
    <div class="ribbon">LET THE CHRISTMAS FUN BEGIN!</div>
  </div>`;
}
function renderProducts(page) {
  const items = products.filter(p => p.category === page.key);
  return `<div class="page-content">
    <div class="eyebrow">${page.icon} Christmas Toy Collection ${page.icon}</div>
    <h2 class="page-title">${escapeHtml(page.title)}</h2>
    <p class="subtitle">${escapeHtml(page.intro)}</p>
    <div class="product-grid">${items.map(productCard).join("")}</div>
    <p class="category-note">Tap the heart button on toys you'd love to add to your wish list! ❤️</p>
  </div>`;
}
function renderColor() {
  return `<div class="page-content">
    <div class="eyebrow">A little Christmas game</div><h2 class="page-title">🌈 Color Magic!</h2>
    <p class="subtitle">Can you find the BLUE snowflake?</p>
    <section class="activity-card">
      <div class="big-emoji">❄️</div>
      <h3>Find the blue one!</h3><p>Tap the blue circle below.</p>
      <div class="choice-row">
        <button class="choice-button" data-color="red" aria-label="Red circle">🔴</button>
        <button class="choice-button" data-color="blue" aria-label="Blue circle">🔵</button>
        <button class="choice-button" data-color="yellow" aria-label="Yellow circle">🟡</button>
        <button class="choice-button" data-color="green" aria-label="Green circle">🟢</button>
      </div>
      <p class="feedback" id="colorFeedback">${colorComplete ? "You did it! Great job! ⭐" : "You can do it!"}</p>
      <button class="action-button" id="colorAgain" type="button">Play Again</button>
    </section>
  </div>`;
}
function renderMatch() {
  return `<div class="page-content">
    <div class="eyebrow">A little Christmas game</div><h2 class="page-title">🎁 Picture Pairs</h2>
    <p class="subtitle">Can you find the two matching presents?</p>
    <section class="activity-card">
      <div class="big-emoji">🧠</div>
      <h3>Find the matching pictures!</h3>
      <div class="choice-row">
        <button class="choice-button" data-pair="tree" aria-label="Christmas tree">🎄</button>
        <button class="choice-button" data-pair="gift" aria-label="Present">🎁</button>
        <button class="choice-button" data-pair="tree" aria-label="Christmas tree">🎄</button>
        <button class="choice-button" data-pair="gift" aria-label="Present">🎁</button>
      </div>
      <p class="feedback" id="matchFeedback">${matchComplete ? "Hooray! You found the pairs! ⭐" : "Tap two pictures that are the same!"}</p>
      <button class="action-button" id="matchAgain" type="button">Mix Them Up</button>
    </section>
  </div>`;
}
function renderHunt() {
  const items = [{id:"tree",emoji:"🎄",label:"Find a Christmas tree"},{id:"star",emoji:"⭐",label:"Find a star"},{id:"gift",emoji:"🎁",label:"Find a present"},{id:"bear",emoji:"🧸",label:"Find a teddy bear"},{id:"snow",emoji:"❄️",label:"Find something snowy"}];
  return `<div class="page-content">
    <div class="eyebrow">An adventure with Santa</div><h2 class="page-title">🔎 Christmas Treasure Hunt</h2>
    <p class="subtitle">Ask a grown-up to help you find these things around your home!</p>
    <div class="hunt-list">${items.map(item => `<label class="hunt-item"><span style="font-size:1.8rem">${item.emoji}</span><span>${item.label}</span><input type="checkbox" data-hunt="${item.id}" ${huntComplete.includes(item.id) ? "checked" : ""}></label>`).join("")}</div>
    <p class="feedback" id="huntFeedback">${huntComplete.length === 5 ? "You found every treasure! Amazing! ⭐" : `${huntComplete.length} of 5 treasures found`}</p>
  </div>`;
}
function renderDraw() {
  return `<div class="page-content">
    <div class="eyebrow">Make something wonderful</div><h2 class="page-title">🎨 Little Artist Studio</h2>
    <p class="subtitle">Get your crayons and paper. Pick a picture to draw!</p>
    <div class="product-grid">
      <article class="activity-card"><div class="big-emoji">🎅</div><h3>Santa</h3><p>Draw Santa's happy face.</p></article>
      <article class="activity-card"><div class="big-emoji">🦌</div><h3>Reindeer</h3><p>Draw a reindeer with big antlers.</p></article>
      <article class="activity-card"><div class="big-emoji">🎄</div><h3>Christmas Tree</h3><p>Decorate a tree with ornaments.</p></article>
      <article class="activity-card"><div class="big-emoji">👸</div><h3>Princess</h3><p>Draw a princess and a crown.</p></article>
    </div>
    <p class="feedback">${drawComplete ? "You are a Christmas artist! ⭐" : "When your picture is finished, tap the button!"}</p>
    <div style="text-align:center"><button class="action-button" id="drawDone" type="button">${drawComplete ? "I made another picture!" : "I finished my picture!"}</button></div>
  </div>`;
}
function renderWishList() {
  const selected = products.filter(p => wishList.includes(p.id));
  return `<div class="page-content">
    <div class="eyebrow">A page just for you</div><h2 class="page-title">❤️ My Christmas Wish List</h2>
    <p class="subtitle">Here are the toys you picked!</p>
    ${selected.length ? `<div class="wish-list">${selected.map(p => `<div class="wish-row"><span class="wish-emoji">${p.emoji}</span><span>${escapeHtml(p.name)}</span><button class="wish-button selected" data-wish="${p.id}" type="button">Remove</button></div>`).join("")}</div>` : `<div class="empty-state"><div class="big-emoji">🎁</div>Your wish list is waiting for some Christmas magic!<br>Go back and pick some toys you love.</div>`}
  </div>`;
}
function renderGoodbye() {
  return `<div class="cover page-content">
    <div class="cover-art">🎅✨🎄</div>
    <div class="eyebrow" style="color:#ffe5b5">YOU MADE IT TO THE END!</div>
    <h1>Have a<br>Magical Christmas!</h1>
    <p>You explored the catalog, played games, and made a wish list. You are a Christmas superstar!</p>
    <div class="cover-art">❤️🎁🧸</div>
    <button class="action-button" id="startOver" type="button" style="background:#f4c95d;color:#53340a">Read the Catalog Again</button>
  </div>`;
}
function renderPage() {
  const page = pages[currentPage];
  let html = "";
  if (page.type === "cover") html = renderCover();
  if (page.type === "products") html = renderProducts(page);
  if (page.type === "activity-color") html = renderColor();
  if (page.type === "activity-match") html = renderMatch();
  if (page.type === "activity-hunt") html = renderHunt();
  if (page.type === "activity-draw") html = renderDraw();
  if (page.type === "wishlist") html = renderWishList();
  if (page.type === "goodbye") html = renderGoodbye();
  pageInner.innerHTML = html;
  pageInner.classList.remove("turning");
  void pageInner.offsetWidth;
  pageInner.classList.add("turning");
  pageNumber.textContent = currentPage + 1;
  pageTotal.textContent = pages.length;
  prevPage.disabled = currentPage === 0;
  nextPage.disabled = currentPage === pages.length - 1;
  wishCount.textContent = wishList.length;
}
function goToPage(index) {
  currentPage = Math.max(0, Math.min(pages.length - 1, index));
  renderPage();
  playSound();
}
function handlePageClick(event) {
  const wishButton = event.target.closest("[data-wish]");
  if (wishButton) { toggleWish(wishButton.dataset.wish); return; }

  if (event.target.closest("#colorAgain")) { colorComplete = false; renderPage(); return; }
  if (event.target.closest("#matchAgain")) { matchComplete = false; renderPage(); return; }
  if (event.target.closest("#drawDone")) { drawComplete = true; renderPage(); showToast("Wonderful artwork! 🎨"); return; }
  if (event.target.closest("#startOver")) { goToPage(0); return; }

  const colorButton = event.target.closest("[data-color]");
  if (colorButton) {
    const feedback = document.getElementById("colorFeedback");
    if (colorButton.dataset.color === "blue") {
      colorComplete = true; feedback.textContent = "You found blue! You are a color star! ⭐";
      showToast("Great job! ⭐"); playSound();
    } else feedback.textContent = "Good try! Look for the blue circle. 💙";
    return;
  }
  const pairButton = event.target.closest("[data-pair]");
  if (pairButton) {
    const buttons = [...pageInner.querySelectorAll("[data-pair]")];
    buttons.forEach(button => button.disabled = true);
    matchComplete = true;
    document.getElementById("matchFeedback").textContent = "You found the matching pictures! Great job! ⭐";
    showToast("You did it! 🎉"); playSound();
    return;
  }
  const huntInput = event.target.closest("[data-hunt]");
  if (huntInput) {
    const id = huntInput.dataset.hunt;
    huntComplete = huntInput.checked ? [...new Set([...huntComplete, id])] : huntComplete.filter(x => x !== id);
    const feedback = document.getElementById("huntFeedback");
    feedback.textContent = huntComplete.length === 5 ? "You found every treasure! Amazing! ⭐" : `${huntComplete.length} of 5 treasures found`;
    if (huntComplete.length === 5) { showToast("Santa's treasure hunt complete! 🎅"); playSound(); }
  }
}
pageInner.addEventListener("click", handlePageClick);
pageInner.addEventListener("change", handlePageClick);
prevPage.addEventListener("click", () => goToPage(currentPage - 1));
nextPage.addEventListener("click", () => goToPage(currentPage + 1));
document.getElementById("wishJump").addEventListener("click", () => goToPage(pages.findIndex(p => p.type === "wishlist")));
document.getElementById("soundToggle").addEventListener("click", event => {
  soundOn = !soundOn;
  event.currentTarget.textContent = soundOn ? "🔊" : "🔔";
  showToast(soundOn ? "Sounds on!" : "Sounds off");
});

// Touch swipe navigation, while allowing normal vertical scrolling.
let touchStartX = 0, touchStartY = 0;
const pageElement = document.getElementById("page");
pageElement.addEventListener("touchstart", event => {
  touchStartX = event.changedTouches[0].clientX;
  touchStartY = event.changedTouches[0].clientY;
}, { passive:true });
pageElement.addEventListener("touchend", event => {
  const dx = event.changedTouches[0].clientX - touchStartX;
  const dy = event.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.25) {
    goToPage(currentPage + (dx < 0 ? 1 : -1));
  }
}, { passive:true });

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") goToPage(currentPage + 1);
  if (event.key === "ArrowLeft") goToPage(currentPage - 1);
});

saveWishList();
renderPage();
