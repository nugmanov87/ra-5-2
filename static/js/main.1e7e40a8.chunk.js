(this["webpackJsonpra-5-2"]=this["webpackJsonpra-5-2"]||[]).push([[0],{11:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),i=(a(11),a(3)),m=a.n(i),s=function(e){return l.a.createElement("div",{className:"ui segment"},l.a.createElement("h3",null,e.title),e.children)},u=function(e){var t=e.weather,a=e.moment.hour()<6?t.night:t.day;return l.a.createElement(s,{title:"\u041f\u043e\u0433\u043e\u0434\u0430"},l.a.createElement("p",null,l.a.createElement("b",null,"+",a,"\xb0")),l.a.createElement("p",null,"\u0414\u0435\u043d\u044c: +",t.day),l.a.createElement("p",null,"\u041d\u043e\u0447\u044c: +",t.night))},o=a(1),E=a.n(o),d=function(e){var t=e.popular;return l.a.createElement(s,{title:"\u041f\u043e\u0441\u0435\u0449\u0430\u0435\u043c\u043e\u0435"},t.map((function(e){return l.a.createElement("p",{key:E.a.generate()},l.a.createElement("b",null,e.title)," ",e.subtitle)})))},p=function(){return l.a.createElement(s,{title:"\u041a\u0430\u0440\u0442\u0430 \u0420\u043e\u0441\u0441\u0438\u0438"},l.a.createElement("p",null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f"))},v=function(e){var t=e.podcasts;return l.a.createElement(s,{title:"\u042d\u0444\u0438\u0440"},t.map((function(e){return l.a.createElement("p",{key:E.a.generate()},l.a.createElement("b",null,e.title)," ",e.station)})))},h=function(e){var t=e.tv;return l.a.createElement(s,{title:"\u0422\u0435\u043b\u0435\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430"},t.map((function(e){return l.a.createElement("p",{key:E.a.generate()},l.a.createElement("b",null,e.time," ",e.title)," ",e.channel)})))},g=function(e){var t=e.links;return l.a.createElement("div",{className:"ui horizontal list"},t.map((function(e){return l.a.createElement("a",{href:"https://nugmanov87.github.io/ra-5-2/",className:"item",key:E.a.generate()},e)})))},f=function(e){var t=e.example;return l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("b",null,"\u041d\u0430\u0439\u0434\u0435\u0442\u0441\u044f \u0432\u0441\u0435, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440")," ",t))},N=function(e){var t=e.links,a=e.example;return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,{links:t}),l.a.createElement("div",{className:"ui fluid action input"},l.a.createElement("input",{type:"text",placeholder:"Search..."}),l.a.createElement("div",{className:"ui button"},"Search")),l.a.createElement(f,{example:a}))},w=function(e){var t=e.topics;return l.a.createElement("div",{className:"ui horizontal bulleted list"},t.map((function(e){return l.a.createElement("a",{href:"https://nugmanov87.github.io/ra-5-2/",className:"item",key:E.a.generate()},e)})))},b=function(e){var t=e.news;return l.a.createElement("div",{className:"ui list"},t.map((function(e){return l.a.createElement("p",{className:"item",key:E.a.generate()},l.a.createElement("i",{className:"".concat(e.sourceIcon," icon")})," ",e.text)})))},k=function(e){var t=e.rates;return l.a.createElement("div",{className:"ui horizontal list"},t.map((function(e){return l.a.createElement("p",{className:"item",key:E.a.generate()},l.a.createElement("b",null,e.title," ",e.rate)," ",e.growth)})))},x=function(){return l.a.createElement("div",{className:"ui large centered leaderboard test ad","data-text":"\u0422\u0435\u0440\u043c\u0438\u043d\u0430\u0442\u043e\u0440 6 - \u0432 \u043a\u0438\u043d\u043e \u0441 12 \u043e\u043a\u0442\u044f\u0431\u0440\u044f"})},y=(a(21),function(e){var t=e.date;return l.a.createElement("div",null,t.locale("ru").format("DD MMMM, dddd hh:mm"))}),I=function(e){var t=e.item;return l.a.createElement("div",{className:"ui fluid card"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:t.img,alt:""})),l.a.createElement("div",{className:"content"},l.a.createElement("p",{className:"header"},t.title),l.a.createElement("div",{className:"meta"},t.desc)))},M=[{title:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c",subtitle:"\u2014 \u0441\u0442\u0430\u0442\u044c \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u043e\u043c"},{title:"\u042f\u043d\u0434\u0435\u043a\u0441.\u0411\u0440\u0430\u0443\u0437\u0435\u0440",subtitle:"\u2014 \u0441 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u043e\u043c \u0441\u0442\u0440\u0430\u043d\u0438\u0446"},{title:"\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c",subtitle:"\u2014 \u0436\u0438\u043b\u044c\u0435 \u0441 \u0435\u0432\u0440\u043e\u0440\u0435\u043c\u043e\u043d\u0442\u043e\u043c"}],z=[{time:"10:55",title:"\u041f\u044f\u0442\u044b\u0439 \u043a\u0430\u043d\u0430\u043b",channel:"\u0423\u043b\u0438\u0446\u044b \u0440\u0430\u0437\u0431\u0438\u0442\u044b\u0445 \u0444\u043e\u043d\u0430\u0440\u0435\u0439. 2-\u044f \u0441\u0435\u0440\u0438\u044f"},{time:"11:20",title:"\u0420\u043e\u0441\u0441\u0438\u044f 24",channel:"\u0411\u0435\u0433\u0430\u0441\u043e\u043d TV"},{time:"12:45",title:"\u0420\u0415\u041d \u0422\u0412",channel:'\u041a\u0430\u0437\u0438\u043d\u043e "\u0420\u043e\u044f\u043b\u044c" '}],D=[{title:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u043a \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e",station:"\u0423\u0441\u043f\u0435\u0445"},{title:"\u041d\u043e\u0447\u044c. \u041c\u0438\u0440 \u0432 \u044d\u0442\u043e \u0432\u0440\u0435\u043c\u044f",station:"earthTV"},{title:"\u0410\u043d\u0434\u0440\u0435\u0439 \u0412\u043e\u0437\u043d...",station:"\u0421\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e \u0421\u0435\u043a\u0440\u0435\u0442\u043d\u043e"}],O=[{title:"USD MOEX",rate:"76,49",growth:"\u22120,76"},{title:"EUR MOEX",rate:"82,63",growth:"\u22121,23"},{title:"\u041d\u0415\u0424\u0422\u042c",rate:"35,03",growth:"+17,31%"}],S=["\u0421\u0435\u0439\u0447\u0430\u0441 \u0432 \u0421\u041c\u0418","\u0432 \u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0435","\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0435"],V=["\u0412\u0438\u0434\u0435\u043e","\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438","\u041d\u043e\u0432\u043e\u0441\u0442\u0438","\u041a\u0430\u0440\u0442\u044b","\u041c\u0430\u0440\u043a\u0435\u0442","\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a","\u042d\u0444\u0438\u0440"],B=[{text:"\u0426\u0411 \u0440\u0430\u0437\u044a\u044f\u0441\u043d\u0438\u043b \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043d\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432 \u0432 \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u044b\u0435 \u043a\u0430\u043d\u0438\u043a\u0443\u043b\u044b",sourceIcon:"pastafarianism"},{text:"\u0421\u043e\u0431\u044f\u043d\u0438\u043d: \u041c\u043e\u0441\u043a\u0432\u0430 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043a \u0441\u0430\u043c\u043e\u0439 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435 \u0440\u0438\u0441\u043a\u0430 \u043f\u043e \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u0443",sourceIcon:"pepper hot"},{text:"\u041f\u043e\u0434 \u0420\u044f\u0437\u0430\u043d\u044c\u044e \u043c\u0443\u0436\u0447\u0438\u043d\u0430 \u0437\u0430\u0441\u0442\u0440\u0435\u043b\u0438\u043b \u043f\u044f\u0442\u044c \u0447\u0435\u043b\u043e\u0432\u0435\u043a",sourceIcon:"rocket"},{text:"\u0413\u043b\u0430\u0432\u0432\u0440\u0430\u0447 \u0431\u043e\u043b\u044c\u043d\u0438\u0446\u044b \u0432 \u041a\u043e\u043c\u043c\u0443\u043d\u0430\u0440\u043a\u0435 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u043b \u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0435 \u0431\u043e\u043b\u044c\u043d\u044b\u0445 COVID-19",sourceIcon:"flag usa"},{text:"\u0412 \u0422\u0430\u0438\u043b\u0430\u043d\u0434\u0435 \u0443 \u0441\u0435\u043c\u0438 \u0433\u0440\u0430\u0436\u0434\u0430\u043d \u0420\u0424 \u0432\u044b\u044f\u0432\u043b\u0435\u043d \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441",sourceIcon:"pepper hot"}],J={title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u043d\u0430\u0434 \u043e\u0448\u0438\u0431\u043a\u0430\u043c\u0438",desc:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 \u042f\u043d\u0434\u0435\u043a\u0441\u0435 \u0438 \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0439\u0442\u0435",img:"https://www.equatorial.by/sites/default/files/banff-national-park001_2.jpg"},T={day:10,night:7},U=m()();var W=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"ui relaxed grid"},l.a.createElement("div",{className:"twelve wide column"},l.a.createElement("div",{className:"ui horizontal segments"},l.a.createElement("div",{className:"ui segment"},l.a.createElement(w,{topics:S})),l.a.createElement("div",{className:"ui segment"},l.a.createElement(y,{date:U}))),l.a.createElement("div",{className:"ui segment"},l.a.createElement(b,{news:B}),l.a.createElement(k,{rates:O}))),l.a.createElement("div",{className:"four wide column"},l.a.createElement(I,{item:J}))),l.a.createElement("div",{className:"ui segments"},l.a.createElement("div",{className:"ui segment"},l.a.createElement(N,{example:"\u0442\u0435\u043a\u0441\u0442 \u043f\u0435\u0441\u043d\u0438 \u0442\u0430\u0435\u0442 \u043b\u0435\u0434",links:V})),l.a.createElement("div",{className:"ui segment"},l.a.createElement(x,null)),l.a.createElement("div",{className:"ui horizontal segments"},l.a.createElement("div",{className:"ui segment"},l.a.createElement(u,{weather:T,moment:U}),l.a.createElement(d,{popular:M})),l.a.createElement("div",{className:"ui segment"},l.a.createElement(p,null),l.a.createElement(h,{tv:z})),l.a.createElement("div",{className:"ui segment"},l.a.createElement(v,{podcasts:D})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,a){e.exports=a(22)}},[[6,1,2]]]);
//# sourceMappingURL=main.1e7e40a8.chunk.js.map