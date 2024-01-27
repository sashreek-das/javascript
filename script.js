const accessKey="yFYl4FcEt7KFmKMrTdFwpg0VSp64BSN_W0ppTla0O_U"

const formEl=document.querySelector("form")
const inputEl=document.getElementById("search-input")
const searchResults=document.querySelector(".search-results")
const showMore=document.getElementById("show-more")

let inputData=""
let page=1;
 async function searchImage(){
    inputData=inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
 }