import{S as e,i as s,s as t,e as a,b as o,d as r,g as c,k as n,v as i,l,m as u,w as d,o as h,x as g,u as p,c as m,j as f,n as v,p as b,q as x,r as _,a as y,h as j,y as D,z as $,A as k,B as w,C as A,D as I}from"./client.9b4d20a4.js";var T={jawg:{acccess_token:"4cKtE4Rze1HrvxWa9a7mdolSk10lVThTFC8zadQYMIMxTjkpTeIDJAAmhReDGnCH"},mapbox:{apikey:"pk.eyJ1IjoiZnBhc3Nhbml0aSIsImEiOiIxNTg3MGRlZWQyNjVkZjExMGVlNWVjNDFjOWQyNzNiMiJ9.pYKDlO4v-SNiDz08G9ZZoQ",init:{zoom:12,center:[2.347457,48.857627]},style:"https://api.jawg.io/styles/jawg-light.json?access-token=4cKtE4Rze1HrvxWa9a7mdolSk10lVThTFC8zadQYMIMxTjkpTeIDJAAmhReDGnCH",geocoder:{searchbbox:[2.108065,50.896051,2.608629,51.132778],placeholder:"Chercher une adresse"}},store:{unique_ids:["nom_de_la_societe","adresse_du_point_de_vente"]},data:{baseurl:"https://fpassaniti.opendatasoft.com/api/v2/catalog/datasets/les-arbres/exports/geojson",query:"?select=*&where=%22PARIS+12E+ARRDT%22&rows=49999",clustering:!1,categories:{default:{slug:"default",color:"#f5f5f5"},"Traiteur - restauration à emporter":{slug:"traiteur",color:"#FDD98B"},"Primeur - fruits et légumes":{slug:"primeur",color:"#1EA81A"},Poissonnerie:{slug:"poissonnerie",color:"#86B1FC"},Livraisons:{slug:"truck",color:"#364852"},"Boucherie - charcuterie":{slug:"boucherie_charcuterie",color:"#CB3019"},"Crèmerie - fromagerie":{slug:"fromagerie",color:"#FDDB00"},"Vins - bières - spiritueux":{slug:"vin",color:"#F90126"},"Boulangerie - pâtisserie":{slug:"boulangerie_patisserie",color:"#E2A76F"},Drive:{slug:"truck",color:"#364852"},"Épicerie":{slug:"epicerie",color:"#FDD98B"},"Alimentation générale":{slug:"alimentation_generale",color:"#E06000"},"Supermarché ou hypermarché":{slug:"supermarche",color:"#364852"}}}};function E(e){let s,t,g,p,m;return{c(){s=a("button"),t=a("img"),this.h()},l(e){s=o(e,"BUTTON",{class:!0});var a=r(s);t=o(a,"IMG",{src:!0,class:!0}),a.forEach(c),this.h()},h(){t.src!==(g="/location.svg")&&n(t,"src","/location.svg"),n(t,"class","svelte-19mn625"),n(s,"class","button is-dark svelte-19mn625"),i(s,"spin",e[2])},m(a,o){l(a,s,o),u(s,t),e[3](s),p||(m=d(s,"click",e[0]),p=!0)},p(e,[t]){4&t&&i(s,"spin",e[2])},i:h,o:h,d(t){t&&c(s),e[3](null),p=!1,m()}}}let C=/([+-]?\d+[.]?\d{0,6})\d*/;function N(e,s,t){let a,o=!1;const r=e=>{t(2,o=!1);const s=new URL(window.location);let a=C.exec(e.coords.latitude)[1],r=C.exec(e.coords.longitude)[1];s.searchParams.set("coords",r+","+a),p(s)},c={enableHighAccuracy:!0,timeout:1e4,maximumAge:1/0};return[()=>{navigator&&navigator.geolocation&&(t(2,o=!0),navigator.geolocation.getCurrentPosition(r,console.error,c))},a,o,function(e){g[e?"unshift":"push"]((()=>{a=e,t(1,a)}))}]}class R extends e{constructor(e){super(),s(this,e,N,E,t,{getPosition:0})}get getPosition(){return this.$$.ctx[0]}}function S(e){let s,t,i;return t=new R({}),{c(){s=a("div"),m(t.$$.fragment),this.h()},l(e){s=o(e,"DIV",{class:!0});var a=r(s);f(t.$$.fragment,a),a.forEach(c),this.h()},h(){n(s,"class","control")},m(e,a){l(e,s,a),v(t,s,null),i=!0},i(e){i||(b(t.$$.fragment,e),i=!0)},o(e){x(t.$$.fragment,e),i=!1},d(e){e&&c(s),_(t)}}}function F(e){let s,t,h,g,p,m,f,v,_=e[0]&&S();return{c(){s=a("div"),t=a("div"),h=a("input"),g=y(),_&&_.c(),this.h()},l(e){s=o(e,"DIV",{id:!0,class:!0});var a=r(s);t=o(a,"DIV",{class:!0});var n=r(t);h=o(n,"INPUT",{id:!0,class:!0,type:!0,autocomplete:!0,name:!0}),n.forEach(c),g=j(a),_&&_.l(a),a.forEach(c),this.h()},h(){n(h,"id",e[1]),n(h,"class","input"),n(h,"type","text"),n(h,"autocomplete","off"),n(h,"name","coords"),n(t,"class","control is-expanded"),n(s,"id",p="search-container-"+e[1]),n(s,"class","field jawg-geocoder"),i(s,"has-addons",e[0])},m(a,o){l(a,s,o),u(s,t),u(t,h),D(h,e[2]),u(s,g),_&&_.m(s,null),m=!0,f||(v=[d(h,"focus",e[3]),d(h,"input",e[6])],f=!0)},p(e,[t]){(!m||2&t)&&n(h,"id",e[1]),4&t&&h.value!==e[2]&&D(h,e[2]),e[0]?_?1&t&&b(_,1):(_=S(),_.c(),b(_,1),_.m(s,null)):_&&($(),x(_,1,1,(()=>{_=null})),k()),(!m||2&t&&p!==(p="search-container-"+e[1]))&&n(s,"id",p),1&t&&i(s,"has-addons",e[0])},i(e){m||(b(_),m=!0)},o(e){x(_),m=!1},d(e){e&&c(s),_&&_.d(),f=!1,w(v)}}}function P(e,s,t){const a=A();let o,{geolocator:r=!1}=s,{id:c="searchbox"}=s,{placeholder:n="Search a place"}=s,{center:i={lat:48.866667,lng:2.333333}}=s;return I((async()=>{const e=new(0,(await Promise.all([import("./autoComplete.min.86378da8.js"),]).then((function(e){return e[0]})).then((function(e){return e.a}))).default)({data:{src:async()=>{const{lat:e,lng:s}=i,t=T.jawg.acccess_token,a=o,r=await fetch(`https://api.jawg.io/places/v1/autocomplete?size=10&text=${a}&focus.point.lat=${e}&focus.point.lon=${s}&boundary.country=FR&access-token=${t}`);return(await r.json()).features.reduce(((e,s)=>(s.properties.geometry=s.geometry,[...e,s.properties])),[])},key:["label"],cache:!1},placeHolder:n,selector:"#"+c,threshold:2,debounce:200,trigger:["input","focus"],searchEngine:(e,s)=>s,sort:(e,s)=>e.value.distance<s.value.distance?-1:e.value.distance>s.value.distance?1:0,resultsList:{render:!0,destination:`#search-container-${c}`,position:"beforeend",element:"ul"},maxResults:10,highlight:!0,resultItem:{content:(e,s)=>{s.innerHTML=e.label},element:"li"},noResults:(s,t)=>{t(e,s,s.results);const a=document.createElement("li");a.setAttribute("class","no_result"),a.setAttribute("tabindex","1"),a.innerHTML=`<span>Found No Results for "${s.query}"</span>`,document.querySelector(`#${e.resultsList.idName}`).appendChild(a)},onSelection:e=>{const s=e.selection.value.geometry.coordinates;t(2,o=e.selection.value.label),a("geocode",{coords:s})}})})),e.$$set=e=>{"geolocator"in e&&t(0,r=e.geolocator),"id"in e&&t(1,c=e.id),"placeholder"in e&&t(4,n=e.placeholder),"center"in e&&t(5,i=e.center)},[r,c,o,()=>{o&&document.execCommand("selectAll")},n,i,function(){o=this.value,t(2,o)}]}class B extends e{constructor(e){super(),s(this,e,P,F,t,{geolocator:0,id:1,placeholder:4,center:5})}}export{B as G,R as a,T as c};