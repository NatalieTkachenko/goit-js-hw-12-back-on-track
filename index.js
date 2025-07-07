import{a as L,S as q,i as d}from"./assets/vendor-Dy2ZTtfi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const S="30786866-3f5d93462a7f9cfec75d687d6",w="https://pixabay.com/api/",B=L.create({baseURL:w,params:{key:S,lang:"en",image_type:"photo",orientation:"horizontal",safesearch:!0,order:"popular",per_page:15}});async function y(r,e){try{return(await B({params:{q:r,page:e}})).data}catch(n){console.log(n)}}function m(r){const e=document.querySelector(".gallery");let n="";n=r.map(({webformatURL:i,tags:t,likes:o,views:s,comments:g,downloads:b,largeImageURL:v})=>`
        <li class="gallery-item">
        
        <a href="${v}"  >
       
        <img src="${i}" alt="${t}" title="${t}"/>
        </a>

       

        <div class="item-info">
        <div class="info-item">
                    <b>Likes</b>
                    ${o}
                </div>
                <div class="info-item">
                    <b>Views</b>
                    ${s}
                </div>
                <div class="info-item">
                    <b>Comments</b>
                    ${g}
                </div>
                <div class="info-item">
                    <b>Downloads</b>
                    ${b}
                </div>
        
        </div>
       </li>
        `).join(""),e.insertAdjacentHTML("beforeend",n),new q(".gallery a",{captionsData:"alt",captionDelay:250,spinner:!0})}function $(){document.querySelector(".gallery").innerHTML=""}function p(r){document.querySelector(".loader-box").style.display="flex"}function u(r){document.querySelector(".loader-box").style.display="none"}function x(){document.querySelector("#load-more-button").style.display="flex"}function h(){document.querySelector("#load-more-button").style.display="none"}console.log("Hello from main.js!");const M=document.querySelector("#search-button"),H=document.querySelector("#load-more-button"),f=document.querySelector("#search-field");let c=1,l="",a=0;M.addEventListener("click",async r=>{r.preventDefault(),$(),l=f.value.trim(),p();try{if(l===""){c=1,a=0,h(),d.info({message:"Please enter a search query.",position:"topRight"}),u();return}const e=await y(l,c);f.value="",d.destroy(),console.log(e.hits),a+=e.hits.length,m(e.hits),u(),x()}catch(e){console.dir(e)}});H.addEventListener("click",async r=>{r.preventDefault(),p(),c+=1;try{const e=await y(l,c);console.log(e),m(e.hits);const i=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:i.height*2,behavior:"smooth"}),a+=e.hits.length,console.log("завантажено: ",a+"з",e.totalHits),u(),a>=e.totalHits&&(h(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.dir(e)}});
//# sourceMappingURL=index.js.map
