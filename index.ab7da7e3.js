var e=document.querySelectorAll(".population"),r=0,t=!0,n=!1,l=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var i=o.value;r+=+i.innerHTML.replaceAll(",","")}}catch(e){n=!0,l=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw l}}var u=r/e.length;document.querySelector(".total-population").innerHTML=r.toLocaleString("en-US"),document.querySelector(".average-population").innerHTML=u.toLocaleString("en-US");
//# sourceMappingURL=index.ab7da7e3.js.map
