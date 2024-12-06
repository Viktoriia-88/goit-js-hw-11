import{i as a,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();function u(s){const o=`https://pixabay.com/api/?${new URLSearchParams({key:"47484582-92e080108706ddb17b6ec6a5b",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function h(s){const i=document.querySelector(".gallery"),o=s.map(e=>`<li class="li-item">
                    <a class="gallery-link" href="${e.largeImageURL}">
                    <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" width="360">
                    </a>
                <ul class="image-descr">
                    <li class>
                        <h2 class="title">Likes</h2>
                        <p>${e.likes}</p>
                    </li>
                    <li>
                        <h2 class="title">Views</h2>
                        <p>${e.views}</p>
                    </li>
                    <li>
                        <h2 class="title">Comments</h2>
                        <p>${e.comments}</p>
                    </li>
                    <li>
                        <h2 class="title">Downloads</h2>
                        <p>${e.downloads}</p>
                    </li>
                </ul>
                </li>`).join("");i.innerHTML=o}function m(){const s=document.querySelector(".gallery");s.innerHTML=""}const n=document.querySelector(".form"),c=document.querySelector(".loader");c.hidden=!0;n.addEventListener("submit",d);function d(s){s.preventDefault();const i=s.target.elements.search.value.trim();if(!i){a.warning({message:"Warning! The form is empty, please fill searching form.",position:"topRight"}),n.reset();return}m(),n.reset(),c.hidden=!1,u(i).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",titleColor:"#ffffff",maxWidth:"322px"});return}h(o.hits),new f(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>{a.error({message:"Error!",position:"topRight"}),console.error(o)}).finally(()=>{c.hidden=!0})}
//# sourceMappingURL=index.js.map
