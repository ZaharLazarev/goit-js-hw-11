import{i,S as p}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(a,s){return fetch(`https://pixabay.com/api/?key=${a}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function f(a){return a.map(({webformatURL:s,largeImageURL:r,tags:l,likes:e,views:t,comments:o,downloads:u})=>`
     <li class="gallery-item">
        <a class="gallery-link" href=${r}>
          <img
            class="gallery-image"
            src=${s}
            data-source=${r}
            alt="${l}"
          />
        </a> 
        <div class=text-container>
          <p>Likes <span class="text-span">${e}</span></p>
          <p>Views <span class="text-span">${t}</span></</p>
          <p>Comments <span class="text-span">${o}</span></p>
          <p>Downloads <span class="text-span">${u}</span></p>
        </div>
     </li>
  `).join("")}const n={form:document.querySelector(".form_for_image"),inp:document.querySelector(".input"),button:document.querySelector(".button"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.loader.style.display="none";const m="44825095-5da981a8d37f63705e36ec7d1";n.form.addEventListener("submit",y);function y(a){if(a.preventDefault(),n.inp.value==="")i.error({title:"Error",message:"Please enter a search query!"});else{let s=n.inp.value.toLowerCase();g(),d(m,s).then(r=>{if(c(),r.hits.length===0)i.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"});else{const l=r.hits.map(o=>({webformatURL:o.webformatURL,largeImageURL:o.largeImageURL,tags:o.tags,likes:o.likes,views:o.views,comments:o.comments,downloads:o.downloads})),e=f(l);n.list.innerHTML=e,new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}}).catch(r=>{c(),h(r)}).finally(()=>n.form.reset())}}function h(a){console.error("Error fetching data:",a)}function g(){n.loader.style.display="block"}function c(){n.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
