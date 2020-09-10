!function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=async e=>{let t=null;try{let n=await fetch("http://api.openweathermap.org/data/2.5/weather?q="+e+"&APPID=1dc18bf7d91aa570304ed5ac156dcf0e",{mode:"cors"}),a=await n.json();t={cityName:a.name,latitude:a.coord.lat,longitude:a.coord.lon,weather:a.weather[0].main,description:a.weather[0].description,temp_min:{celcius:(a.main.temp_min-273.15).toFixed(1),farenheit:(9*(a.main.temp_min-273.15)/5+32).toFixed(1)},feels_like:{celcius:(a.main.feels_like-273.15).toFixed(1),farenheit:(9*(a.main.feels_like-273.15)/5+32).toFixed(1)},temp_max:{celcius:(a.main.temp_max-273.15).toFixed(1),farenheit:(9*(a.main.temp_max-273.15)/5+32).toFixed(1)}}}catch(e){console.log(e)}return console.log(t),t};var l=()=>{let e=document.createElement("form");e.id="search-form";let t=document.createElement("input");t.type="search",t.name="city",t.id="city",t.placeholder="Enter a city name",e.appendChild(t);let n=document.createElement("input");return n.type="button",n.value="Go",n.id="search",e.appendChild(n),e};const i=e=>{let t=document.createElement("div");t.className="left-side",t.appendChild(l());let n=document.createElement("div");n.className="weather-info";let a=document.createElement("h2");a.innerText=e.cityName,n.appendChild(a);let i=document.createElement("div");i.className="position";let r=document.createElement("div"),d=document.createElement("h3");d.innerText="Latitude",r.appendChild(d);let c=document.createElement("span");c.innerText=e.latitude,r.appendChild(c),i.appendChild(r);let o=document.createElement("div"),m=document.createElement("h3");m.innerText="Longitude",o.appendChild(m);let p=document.createElement("span");p.innerText=e.longitude,o.appendChild(p),i.appendChild(o),n.appendChild(i);let u=document.createElement("div");u.className="weather";let s=document.createElement("h3");s.innerText=e.weather,u.appendChild(s);let h=document.createElement("q");h.innerText=e.description,u.appendChild(h),n.appendChild(u);let f=document.createElement("div");f.className="temperatures";let y=document.createElement("div"),C=document.createElement("h3");C.innerText="Minimum",y.appendChild(C);let E=document.createElement("span");E.innerHTML=e.temp_min.celcius+" °C <br> "+e.temp_min.farenheit+" °F",y.appendChild(E),f.appendChild(y);let g=document.createElement("div"),v=document.createElement("h3");v.innerText="Feels like",g.appendChild(v);let x=document.createElement("span");x.innerHTML=e.feels_like.celcius+" °C <br> "+e.feels_like.farenheit+" °F",g.appendChild(x),f.appendChild(g);let b=document.createElement("div"),_=document.createElement("h3");_.innerText="Maximum",b.appendChild(_);let w=document.createElement("span");return w.innerHTML=e.temp_max.celcius+" °C <br> "+e.temp_max.farenheit+" °F",b.appendChild(w),f.appendChild(b),n.appendChild(f),t.appendChild(n),t},r=(e=null)=>{let t=document.createElement("div");if(t.className="rigth-side",e)t.style.backgroundImage=`url(${e})`,t.style.backgroundPosition="center",t.style.backgroundSize="cover",t.style.backgroundRepeat="no-repeat";else{let e=document.createElement("div"),n=document.createElement("h1");n.innerText="Welcome to Weather Now!!",e.appendChild(n);let a=document.createElement("h3");a.innerText="Search any city and get informed about the weather at the moment",e.appendChild(a),t.appendChild(e);let l=document.createElement("img");l.src="./images/logo.gif",l.alt="logo",t.appendChild(l)}return t},d=document.querySelector(".container"),c=async e=>{try{let t=await a(e);d.innerHTML="";let n=i(t);d.appendChild(n);let l=await(async e=>{let t=null;try{let n=await fetch("https://api.giphy.com/v1/gifs/translate?api_key=3vVmlUrr6kcOBbF0qohKSFxsdIBCv2KQ&s="+e,{mode:"cors"});t=(await n.json()).data.images.downsized_large.url}catch(e){console.log(e)}return t})(t.description),c=r(l);d.appendChild(c),o()}catch(e){alert(e)}},o=()=>{document.getElementById("search").addEventListener("click",()=>{let e=(e=>{let t=document.getElementById(e);return t.elements.namedItem("city").value?t.elements.namedItem("city").value:null})("search-form");e?c(e):alert("please provide a location")})};(async()=>{try{let e=await a("Douala"),t=i(e);d.appendChild(t);let n=r();d.appendChild(n),o()}catch(e){alert(e)}})()}]);