(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(3),a=c.n(i),s=(c(8),c(9),c(0));var o=function(){var e=function(e){var t=e.name,c=e.weather[0],n=c.icon,r=c.description,i=e.main,a=i.temp,s=i.humidity,o=e.wind.speed;document.querySelector(".city").innerText="Weather in "+t,document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+n+".png",document.querySelector(".description").innerText=r,document.querySelector(".temp").innerText=a+"\xb0C",document.querySelector(".humidity").innerText="Humidity: "+s+"%",document.querySelector(".wind").innerText="Wind speed: "+o+"km/h",document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+t+"')"},t=function(){var t;t=document.querySelector(".search-bar").value,fetch("http://api.openweathermap.org/data/2.5/weather?q="+t+"&appid=b5a41e3bc293d21521d8aeea6b9a9a8f&units=metric").then((function(e){return e.json()})).then((function(t){return e(t)})),console.log(),document.querySelector(".search-bar").value=""};return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsxs)("div",{className:"search",children:[Object(s.jsx)("input",{onKeyDown:function(e){"Enter"===e.key&&t()},type:"text",className:"search-bar",placeholder:"Search"}),Object(s.jsx)("button",{onClick:t,children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24",fill:"#ffffff",children:Object(s.jsx)("path",{d:"M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"})})})]}),Object(s.jsxs)("div",{className:"weather loading",children:[Object(s.jsx)("h2",{className:"city"}),Object(s.jsx)("h1",{className:"temp"}),Object(s.jsxs)("div",{className:"flex",children:[Object(s.jsx)("img",{src:"",alt:"",className:"icon"}),Object(s.jsx)("div",{className:"description",children:"Search city"})]}),Object(s.jsx)("div",{className:"humidity"}),Object(s.jsx)("div",{className:"wind"})]})]})})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,12)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),i(e),a(e)}))};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(o,{})}),document.getElementById("root")),d()},8:function(e,t,c){},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.a67fdfb2.chunk.js.map