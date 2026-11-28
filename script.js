
// My Christmas Toy Catalog
// Real retail product pictures added to all 24 toy listings.

const products = [
  { id:"ariel", category:"Princesses", name:"Ariel's Undersea Adventure", description:"Dive into a mermaid-sized make-believe adventure.", emoji:"🧜‍♀️", image:"https://images.mattel.net/image/upload/w_650%2Cf_auto%2Cc_scale/shop-us-prod/files/32387e8842aed31f5eade04789bcc0c265e784a4.jpg", retailMatch:"Disney Princess Ariel Sea Spa Shop playset" },
  { id:"elsa", category:"Princesses", name:"Elsa's Ice Palace", description:"Make up magical winter stories with Elsa.", emoji:"❄️", image:"https://cdn-ssl.s7.shopdisney.com/is/image/DisneyShopping/6001040901694?fmt=jpeg&hei=608&qlt=90&wid=608", retailMatch:"Disney Store Elsa Classic Doll" },
  { id:"anna", category:"Princesses", name:"Anna's Royal Adventure", description:"Go on a royal adventure with Anna.", emoji:"👑", image:"https://cdn-ssl.s7.shopdisney.com/is/image/DisneyShopping/6001040901695-3?fmt=jpeg&hei=608&qlt=90&wid=608", retailMatch:"Disney Store Anna Classic Doll" },
  { id:"cinderella", category:"Princesses", name:"Cinderella's Royal Ball", description:"Get ready for a magical princess ball.", emoji:"👸", image:"https://toyandsurprise.com/cdn/shop/files/1612040900194-4.webp?v=1767882829&width=1200", retailMatch:"Disney Princess Cinderella Classic Doll" },
  { id:"belle", category:"Princesses", name:"Belle's Enchanted Story", description:"A lovely choice for story and pretend play.", emoji:"🌹", image:"https://cdn-ssl.s7.shopdisney.com/is/image/DisneyShopping/6001040901698-3?fmt=jpeg&hei=608&qlt=90&wid=608", retailMatch:"Disney Store Belle Classic Doll" },
  { id:"rapunzel", category:"Princesses", name:"Rapunzel's Tower Adventure", description:"Let your imagination reach new heights.", emoji:"🌸", image:"https://r2-media.wdwnt.com/2026/04/rapunzel-classic-doll-ds.webp", retailMatch:"Disney Princess Rapunzel Classic Doll" },
  { id:"moana", category:"Princesses", name:"Moana's Ocean Adventure", description:"Set sail on a pretend ocean journey.", emoji:"🌊", image:"https://media.zid.store/8b542948-d209-4ad6-acb6-2a000b67632b/a337785f-f30f-4d97-99a0-8b2eacb03931.jpg", retailMatch:"Disney Moana Classic Doll" },
  { id:"tiana", category:"Princesses", name:"Tiana's Royal Kitchen", description:"Make-believe cooking fit for a princess.", emoji:"🍰", image:"https://storage.googleapis.com/dollect-img/2024/04/Disney-Classic-Dolls-2019-Tiana-Restaurant-2.png", retailMatch:"Disney Tiana Restaurant playset" },
  { id:"barbie", category:"Barbie", name:"Barbie Fashion Fun", description:"Choose outfits and create new stories.", emoji:"👗", image:"https://en.barbiepedia.com/img/barbie/800/FXL59_5.jpg", retailMatch:"Barbie Fashionistas Doll #126" },
  { id:"dreamhouse", category:"Barbie", name:"Barbie Dreamhouse Playtime", description:"A pretend home with room for big ideas.", emoji:"🏠", image:"https://ciatoy.vtexassets.com/arquivos/ids/211816/MATHMX10_1.jpg?v=639076261500730000", retailMatch:"Mattel Barbie Dreamhouse playset" },
  { id:"barbiecar", category:"Barbie", name:"Barbie's Little Car", description:"Take Barbie on a make-believe road trip.", emoji:"🚗", image:"https://kmartau.mo.cloudinary.net/733f2447-4ead-4bec-bf5c-dd3f4f5dc30d.jpg?tx=w_3840%2Ch_3840", retailMatch:"Barbie pink convertible toy car" },
  { id:"baby", category:"Baby Dolls", name:"My Sweet Baby Doll", description:"A cuddly baby doll to care for.", emoji:"🍼", image:"https://cdn.shopify.com/s/files/1/0272/0202/7618/files/918919-My-First-Baby-Doll-Annabell2.jpg?v=1698172636", retailMatch:"BABY born My First Baby Doll Annabell" },
  { id:"stroller", category:"Baby Dolls", name:"Baby Doll Stroller", description:"Take baby along on a pretend walk.", emoji:"🚼", image:"https://digitalcontent.api.tesco.com/v2/media/ghs/4843b983-424a-4202-9fe3-162f2e04d69a/ede6a314-8adc-4ead-8181-eab04e9ad1f0_1557698781.jpeg?h=960&w=960", retailMatch:"Pink baby doll stroller and accessory set" },
  { id:"nursery", category:"Baby Dolls", name:"Baby Doll Nursery", description:"Make a cozy little place for baby.", emoji:"🧸", image:"https://i5.walmartimages.com/seo/Olivia-s-Little-World-Baby-Doll-3pc-Nursery-Set-Crib-Highchair-Doll-Stroller-Sets-Blue-White_b8e40e85-1afb-4ad0-b07c-a9034644f0bf.d49c8f0d3ffed442bb746410e5d16341.png?odnBg=FFFFFF&odnHeight=768&odnWidth=768", retailMatch:"Olivia's Little World 3-piece doll nursery set" },
  { id:"kitchen", category:"Pretend Play", name:"Little Chef Kitchen", description:"Pretend to cook up something delicious.", emoji:"🍳", image:"https://stemtoy.com.hk/cdn/shop/products/kidrise-engineering-toy-kitchen-cooking-set-01.jpg?format=webp&v=1771489215&width=1000", retailMatch:"Kidrise pretend kitchen playset" },
  { id:"icecream", category:"Pretend Play", name:"Ice Cream Shop", description:"Serve pretend scoops to family and friends.", emoji:"🍦", image:"https://www.bigw.com.au/medias/sys_master/images/images/hd2/h17/154220403228702.jpg", retailMatch:"Barbie Club Chelsea Ice Cream Shop playset" },
  { id:"doctor", category:"Pretend Play", name:"Little Doctor Kit", description:"Help your toys feel better.", emoji:"🩺", image:"https://www.babyandmore.co.uk/cdn/shop/files/learning-resources-pretend-play-doctor-set-6545705.webp?v=1768054660", retailMatch:"Learning Resources Pretend & Play Doctor Set" },
  { id:"plush", category:"Stuffed Animals", name:"Cuddly Stuffed Friend", description:"A soft friend for hugs and adventures.", emoji:"🧸", image:"https://i5.walmartimages.com/seo/Made-Aliens-Plush-Teddy-Bear-Stuffed-Animal-Soft-Cuddly-Huggable-Plush-toy-kids-adults-8-Inch-Perfect-Gift-Birthday-Graduation-Valentine-Holidays-Max_0b42806c-2a5b-47d8-bdd8-d77476a90867.908b6cf118e460b649d31aa5d1f7d40f.jpeg", retailMatch:"Maxi the Furry Bear plush" },
  { id:"unicorn", category:"Stuffed Animals", name:"Magical Unicorn Plush", description:"A sparkly friend for pretend adventures.", emoji:"🦄", image:"https://bukowskibears.com/cdn/shop/files/ZiggyUnicorn.jpg?v=1737936167", retailMatch:"Bukowski Bears Ziggy Unicorn plush" },
  { id:"craft", category:"Arts & Crafts", name:"Color & Create Art Set", description:"Make pictures, cards, and colorful creations.", emoji:"🎨", image:"https://assets.kmart.com.au/transform/fd72e384-636e-4524-bb4b-397449dbecd3/88324395-1?io=transform%3Afit%2Cwidth%3A3840%2Cheight%3A4800&quality=90", retailMatch:"Crayola Imagination Art Case Set" },
  { id:"beads", category:"Arts & Crafts", name:"Big Bead Craft Set", description:"Make colorful designs with grown-up help.", emoji:"🌈", image:"https://cdn.crayolakidsart.com/cdn/10003/2026/01/05/Fashion-Angels-Crayola-Creations-Color-Theory-Bead-Kit-Multicolored-2000-Bead-Set-ampamp-Wheel-DIY-Jewelry-Kit-for-Kids-Teen-Girls-ampamp-Boys-1029312-2754.jpg", retailMatch:"Crayola Creations Color Theory Bead Kit" },
  { id:"blocks", category:"Games & Learning", name:"Big Building Blocks", description:"Build towers, houses, and anything you imagine.", emoji:"🧱", image:"https://www.polesie.de/images/product_images/original_images/41999_2_01_01.jpg", retailMatch:"Polesie XXL 72-piece building bricks" },
  { id:"puzzle", category:"Games & Learning", name:"My First Picture Puzzle", description:"Put the pieces together to reveal a picture.", emoji:"🧩", image:"https://cdn.myikas.com/images/290b887f-2e96-490c-b9ea-f8f3ceae932a/5d171616-3e6a-4d7c-a897-2169b5fe3a98/image_3840.webp", retailMatch:"Circle My First Picture Puzzle" },
  { id:"matching", category:"Games & Learning", name:"Picture Matching Game", description:"Find pictures that belong together.", emoji:"🃏", image:"https://i5.walmartimages.com/seo/Mentari-Toys-Memory-Game-Fun-Learning-Toy-with-Illustrated-Tiles-and-Fabric-Bag-Improve-Concentration-and-Recognition-Age-3_9a70ab27-6d3a-4909-b631-02e23b133667.98cfe2765f04a2f73d5c49723ac2dd26.jpeg", retailMatch:"Mentari Toys Wooden Memory Game" }
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
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.frequency.value = 660;
  gain.gain.setValueAtTime(0.07, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.13);
  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.14);
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
  saveWishList();
  playSound();
  renderPage();
}

function productCard(product) {
  const selected = wishList.includes(product.id);
  return `<article class="product-card">
    <div class="product-art" aria-hidden="true">
      <img src="${escapeHtml(product.image)}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
      <span class="image-fallback" style="display:none">${product.emoji}</span>
    </div>
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
  const items = [
    {id:"tree",emoji:"🎄",label:"Find a Christmas tree"},
    {id:"star",emoji:"⭐",label:"Find a star"},
    {id:"gift",emoji:"🎁",label:"Find a present"},
    {id:"bear",emoji:"🧸",label:"Find a teddy bear"},
    {id:"snow",emoji:"❄️",label:"Find something snowy"}
  ];
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
    ${selected.length ? `<div class="wish-list">${selected.map(p => `<div class="wish-row"><span class="wish-image" style="width:64px;height:64px;flex:0 0 64px;display:grid;place-items:center;overflow:hidden;border-radius:10px;background:#fff5f8"><img src="${escapeHtml(p.image)}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:contain" onerror="this.style.display='none';this.parentElement.textContent='${p.emoji}';this.parentElement.style.fontSize='2rem'"></span><span>${escapeHtml(p.name)}</span><button class="wish-button selected" data-wish="${p.id}" type="button">Remove</button></div>`).join("")}</div>` : `<div class="empty-state"><div class="big-emoji">🎁</div>Your wish list is waiting for some Christmas magic!<br>Go back and pick some toys you love.</div>`}
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
  if (wishButton) {
    toggleWish(wishButton.dataset.wish);
    return;
  }

  if (event.target.closest("#colorAgain")) {
    colorComplete = false;
    renderPage();
    return;
  }

  if (event.target.closest("#matchAgain")) {
    matchComplete = false;
    renderPage();
    return;
  }

  if (event.target.closest("#drawDone")) {
    drawComplete = true;
    renderPage();
    showToast("Wonderful artwork! 🎨");
    return;
  }

  if (event.target.closest("#startOver")) {
    goToPage(0);
    return;
  }

  const colorButton = event.target.closest("[data-color]");
  if (colorButton) {
    const feedback = document.getElementById("colorFeedback");
    if (colorButton.dataset.color === "blue") {
      colorComplete = true;
      feedback.textContent = "You found blue! You are a color star! ⭐";
      showToast("Great job! ⭐");
      playSound();
    } else {
      feedback.textContent = "Good try! Look for the blue circle. 💙";
    }
    return;
  }

  const pairButton = event.target.closest("[data-pair]");
  if (pairButton) {
    const buttons = [...pageInner.querySelectorAll("[data-pair]")];
    buttons.forEach(button => button.disabled = true);
    matchComplete = true;
    document.getElementById("matchFeedback").textContent = "You found the matching pictures! Great job! ⭐";
    showToast("You did it! 🎉");
    playSound();
    return;
  }

  const huntInput = event.target.closest("[data-hunt]");
  if (huntInput) {
    const id = huntInput.dataset.hunt;
    huntComplete = huntInput.checked
      ? [...new Set([...huntComplete, id])]
      : huntComplete.filter(x => x !== id);

    const feedback = document.getElementById("huntFeedback");
    feedback.textContent = huntComplete.length === 5
      ? "You found every treasure! Amazing! ⭐"
      : `${huntComplete.length} of 5 treasures found`;

    if (huntComplete.length === 5) {
      showToast("Santa's treasure hunt complete! 🎅");
      playSound();
    }
  }
}

pageInner.addEventListener("click", handlePageClick);
pageInner.addEventListener("change", handlePageClick);

prevPage.addEventListener("click", () => goToPage(currentPage - 1));
nextPage.addEventListener("click", () => goToPage(currentPage + 1));

document.getElementById("wishJump").addEventListener("click", () =>
  goToPage(pages.findIndex(p => p.type === "wishlist"))
);

document.getElementById("soundToggle").addEventListener("click", event => {
  soundOn = !soundOn;
  event.currentTarget.textContent = soundOn ? "🔊" : "🔔";
  showToast(soundOn ? "Sounds on!" : "Sounds off");
});

// Touch swipe navigation, while allowing normal vertical scrolling.
let touchStartX = 0;
let touchStartY = 0;
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
