!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a="https://api.giphy.com/v1/gifs/translate?api_key=3vVmlUrr6kcOBbF0qohKSFxsdIBCv2KQ&s=",c=async e=>{let t=null;try{const n=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&APPID=1dc18bf7d91aa570304ed5ac156dcf0e",{mode:"cors"}),a=await n.json();t={cityName:a.name,latitude:a.coord.lat,longitude:a.coord.lon,weather:a.weather[0].main,description:a.weather[0].description,temp_min:{celcius:(a.main.temp_min-273.15).toFixed(1),farenheit:(9*(a.main.temp_min-273.15)/5+32).toFixed(1)},feels_like:{celcius:(a.main.feels_like-273.15).toFixed(1),farenheit:(9*(a.main.feels_like-273.15)/5+32).toFixed(1)},temp_max:{celcius:(a.main.temp_max-273.15).toFixed(1),farenheit:(9*(a.main.temp_max-273.15)/5+32).toFixed(1)}}}catch(n){t={cityName:`Sorry could not find "${e}"`,latitude:"...",longitude:"...",weather:"...",description:"...",temp_min:{celcius:"...",farenheit:"..."},feels_like:{celcius:"...",farenheit:"..."},temp_max:{celcius:"...",farenheit:"..."}}}return t};var i=()=>{const e=document.createElement("form");e.id="search-form";const t=document.createElement("input");t.type="search",t.name="city",t.id="city",t.placeholder="Enter a city name",e.appendChild(t);const n=document.createElement("input");return n.type="button",n.value="Go",n.id="search",e.appendChild(n),e};var d=e=>{const t=document.createElement("div");t.className="left-side",t.appendChild(i());const n=document.createElement("div");n.className="weather-info";const a=document.createElement("div");a.className="temp-button";const c=document.createElement("button");c.id="celcius",c.className="active",c.innerText="In Celcius",a.appendChild(c);const d=document.createElement("button");d.id="farenheit",d.innerText="In Farenheit",a.appendChild(d),n.appendChild(a);const r=document.createElement("h2");r.innerText=e.cityName,n.appendChild(r);const l=document.createElement("div");l.className="position";const o=document.createElement("div"),s=document.createElement("h3");s.innerText="Latitude",o.appendChild(s);const m=document.createElement("span");m.innerText=e.latitude,o.appendChild(m),l.appendChild(o);const p=document.createElement("div"),u=document.createElement("h3");u.innerText="Longitude",p.appendChild(u);const h=document.createElement("span");h.innerText=e.longitude,p.appendChild(h),l.appendChild(p),n.appendChild(l);const f=document.createElement("div");f.className="weather";const y=document.createElement("h3");y.innerText=e.weather,f.appendChild(y);const E=document.createElement("q");E.innerText=e.description,f.appendChild(E),n.appendChild(f);const C=document.createElement("div");C.className="temperatures";const v=document.createElement("div"),g=document.createElement("h3");g.innerText="Minimum",v.appendChild(g);const x=document.createElement("span");x.innerHTML=`<span id='celcius-temp'>${e.temp_min.celcius} °C</span>\n  <span id='farenheit-temp' class='hide'>${e.temp_min.farenheit} °F</span>`,v.appendChild(x),C.appendChild(v);const _=document.createElement("div"),w=document.createElement("h3");w.innerText="Feels like",_.appendChild(w);const b=document.createElement("span");b.innerHTML=`<span id='celcius-temp'>${e.feels_like.celcius} °C</span>\n  <span id='farenheit-temp' class='hide'>${e.feels_like.farenheit} °F</span>`,_.appendChild(b),C.appendChild(_);const N=document.createElement("div"),T=document.createElement("h3");T.innerText="Maximum",N.appendChild(T);const k=document.createElement("span");return k.innerHTML=`<span id='celcius-temp'>${e.temp_max.celcius} °C</span>\n  <span id='farenheit-temp' class='hide'>${e.temp_max.farenheit} °F</span>`,N.appendChild(k),C.appendChild(N),n.appendChild(C),t.appendChild(n),t};var r=(e=null)=>{const t=document.createElement("div");if(t.className="rigth-side",e)t.style.backgroundImage=`url(${e})`,t.style.backgroundPosition="center",t.style.backgroundSize="cover",t.style.backgroundRepeat="no-repeat";else{const e=document.createElement("div"),n=document.createElement("h1");n.innerText="Welcome to Weather Now!!",e.appendChild(n);const a=document.createElement("h3");a.innerText="Search any city and get informed about the weather at the moment",e.appendChild(a),t.appendChild(e);const c=document.createElement("img");c.src="./images/logo.gif",c.alt="logo",t.appendChild(c)}return t};var l=e=>{const t=document.getElementById(e);return t.elements.namedItem("city").value?t.elements.namedItem("city").value:null};const o=document.querySelector(".container"),s=async e=>{try{const t=await c(e);o.innerHTML="";const n=d(t);o.appendChild(n);const i=await(async e=>{let t=null;try{const n=await fetch(a+e,{mode:"cors"});t=(await n.json()).data.images.downsized_large.url}catch(e){const n=await fetch(a+"404 not found",{mode:"cors"});t=(await n.json()).data.images.downsized_large.url}return t})(t.description),l=r(i);o.appendChild(l),m(),p()}catch(e){alert("Sorry, we could not find this city")}},m=()=>{document.getElementById("search").addEventListener("click",()=>{const e=l("search-form");e?s(e):alert("please provide a location")})},p=()=>{const e=document.getElementById("celcius"),t=document.getElementById("farenheit");e.addEventListener("click",()=>{e.className="active",t.className="";document.querySelectorAll("#celcius-temp").forEach(e=>{e.className=""});document.querySelectorAll("#farenheit-temp").forEach(e=>{e.className="hide"})}),t.addEventListener("click",()=>{e.className="",t.className="active";document.querySelectorAll("#celcius-temp").forEach(e=>{e.className="hide"});document.querySelectorAll("#farenheit-temp").forEach(e=>{e.className=""})})};(async()=>{try{const e=await c("Douala"),t=d(e);o.appendChild(t);const n=r();o.appendChild(n),m(),p()}catch(e){alert("We could not load the app, check your network")}})()}]);