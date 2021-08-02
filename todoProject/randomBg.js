const imgs = ["img0", "img1", "img2"];
const randomBg = imgs[Math.floor(Math.random() * imgs.length)];

document.body.classList.add(`${randomBg}`);
