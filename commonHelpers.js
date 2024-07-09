import{S as p,i as l}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();function d(s,o){return fetch(`https://pixabay.com/api/?key=${s}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function f(s){return s.map(({webformatURL:o,largeImageURL:r,tags:n,likes:t,views:e,comments:i,downloads:u})=>`
     <li class="gallery-item">
        <a class="gallery-link" href=${r}>
          <img
            class="gallery-image"
            src=${o}
            data-source=${r}
            alt="${n}"
          />
        </a> 
        <div class=text-container>
          <p>Likes <span class="text-span">${t}</span></p>
          <p>Views <span class="text-span">${e}</span></</p>
          <p>Comments <span class="text-span">${i}</span></p>
          <p>Downloads <span class="text-span">${u}</span></p>
        </div>
     </li>
  `).join("")}const a={form:document.querySelector(".form_for_image"),inp:document.querySelector(".input"),button:document.querySelector(".button"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};a.loader.style.display="none";const m="44825095-5da981a8d37f63705e36ec7d1";let y=new p(".gallery a",{captionsData:"alt",captionDelay:250});a.form.addEventListener("submit",h);function h(s){s.preventDefault();let o=a.inp.value.trim().toLowerCase();o===""?l.error({title:"Error",message:"Please enter a search query!"}):(L(),d(m,o).then(r=>{if(c(),r.hits.length===0)l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"});else{const n=r.hits.map(e=>({webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads})),t=f(n);a.list.innerHTML=t,y.refresh()}}).catch(r=>{c(),g(r)}).finally(()=>a.form.reset()))}function g(s){console.error("Error fetching data:",s)}function L(){a.loader.style.display="block"}function c(){a.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
