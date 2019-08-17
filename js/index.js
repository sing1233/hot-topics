//HTML Partials
const container = document.querySelector(".container");
const errorContainer = document.querySelector(".error");
let url = "./partials/home.html";
const links = document.querySelectorAll("nav a");
//------------------------------------------------------------------------------------
//ask why it is not working

ajaxHandle(url);
// ask about the min width (why 35em <> 35rem <> 560 px)?

//------------------------------------------------------------------------------------
//change the active id according to the selected navigation button
function handleEvent(ev) {
    
    for (let i = 0; i < links.length; i++) {
        if (links[i].hasAttribute("id")) {
            links[i].removeAttribute("id");
            console.log(links[i]);
        }
    }

    let currentItem = ev.currentTarget;
    
    currentItem.setAttribute("id", "active");
}

for (let link of links) {
    link.addEventListener("click", handleEvent);
}
//----------------------------------------------------------------------------------------
//get which link was clicked in the navigation
function handleLinkClick (ev) {
    ev.preventDefault();
      
    //find out which link is clicked
    let currentLink = ev.target;
    let url = currentLink.href;
    //if (url == "./partials/home.html"){
        ajaxHandle(url);
//    } else if (url == "./partials/portfolio.html") {
//        handleAjax(url);
//    }
}

for (let link of links) {
    link.addEventListener("click", handleLinkClick);
}
// get data according to the selected link and pass it to index.html
function ajaxHandle(urlParam) {
  //if (url == "./partials/home.html"){
    fetch(urlParam)
       .then(function (response) {
          if (response.statusText === "OK") {
              return response.text();
          }

              throw new Error(response.statusText)
          })
       .then(function (data) {
           //use your partials
           container.innerHTML = data;
       })
       .catch(function (err) {
          errorContainer.textContent = `${err.name}: ${err.message}`;
       });
  } 
      