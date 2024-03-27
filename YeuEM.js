const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");

const subTile = document.querySelector(".sub-title");
const iconHide = document.querySelector(".icon-hide");

const gif = document.querySelector(".gif");
const emImg = document.querySelector(".em-img");

const yes100Btn = document.querySelector(".yes-100-btn");
const yes200Btn = document.querySelector(".yes-200-btn");
const no100Btn = document.querySelector(".no-100-btn");
const no200Btn = document.querySelector(".no-200-btn");

const additionalMessage = document.querySelector(".additional-message");


yes100Btn.addEventListener("click", () => {
    // iconHide.classList.remove("hide");
    question.innerHTML = "Ewww, bạn đúng là người biết thưởng thức cái đẹpppp";
    iconHide.innerHTML = "😍😍😘😘";
    gif.src ="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM25qMms1OWpnY29rcnY2a25nNmRuOG53cHZmMDVvMDN0OXJnMXpucyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l41lIS7C1N83n2HjW/giphy.gif";

    subTile.style.display = "none";
    yes100Btn.style.display = "none";
    yes200Btn.style.display = "none";
    no100Btn.style.display = "none";
    no200Btn.style.display = "none";
    emImg.style.display = "none";
    gif.style.width = "100%";
});

yes200Btn.addEventListener("click", () => {
    question.innerHTML = "Chội ôi, xinhh sau bé Khánh chính là bạn đóoooooo... Piw Piw";
    iconHide.innerHTML = "💕💞♥️💖❤️";
    gif.src ="https://media.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy.gif?cid=790b7611bvvxatdfbo46lhyxtaw0xpodjvlzpoe21qmb0te2&ep=v1_gifs_trending&rid=giphy.gif&ct=g";

    subTile.style.display = "none";
    yes100Btn.style.display = "none";
    yes200Btn.style.display = "none";
    no100Btn.style.display = "none";
    no200Btn.style.display = "none";
});


no100Btn.addEventListener("click", () => {
    question.innerHTML = "À thì ra bạn chọn cái chớttttt";
    emImg.src = "https://media.giphy.com/media/3oEduSLalG3rotykI8/giphy.gif?cid=ecf05e476bvyi46bpllx8etb1wjs6leqwqgtsda1h28ob23e&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    gif.src ="https://media.giphy.com/media/OgmbF5ibV01vflyU2n/giphy.gif";

    subTile.style.display = "none";
    yes100Btn.style.display = "none";
    yes200Btn.style.display = "none";
    no100Btn.style.display = "none";
    no200Btn.style.display = "none";
});

no200Btn.addEventListener("click", () => {
    question.innerHTML = "Phải xử lý bạn thôi";
    iconHide.innerHTML = "👉👈";
    emImg.src = "https://media.giphy.com/media/3o85xy4f9QOzAKNqx2/giphy.gif?cid=ecf05e47h4c4mstsjnd86e4fwkfezpo8rmyasxngdcrx0wmg&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    gif.src ="https://media.giphy.com/media/U1gI8F6VMe4HmHBlwS/giphy.gif";

    subTile.style.display = "none";
    yes100Btn.style.display = "none";
    yes200Btn.style.display = "none";
    no100Btn.style.display = "none";
    no200Btn.style.display = "none";
});

