document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("menu-icon"),e=document.getElementById("menu");t.addEventListener("click",(function(){e.classList.contains("hidden")?setTimeout((function(){e.style.transition="1s right, .3s opacity ease-out",e.classList.remove("hidden"),t.classList.add("active"),t.getElementsByTagName("img")[0].src="img/icon-menu-close.svg"}),50):setTimeout((function(){e.style.transition="1s right, .3s opacity ease-out",e.classList.add("hidden"),t.classList.remove("active"),t.getElementsByTagName("img")[0].src="img/icon-menu.svg"}),50)})),document.addEventListener("click",(function(s){const n=s.target;e.classList.contains("hidden")||n===e||e.contains(n)||n===t||setTimeout((function(){e.style.transition="1s right, .3s opacity ease-out",e.classList.add("hidden"),t.classList.remove("active"),t.getElementsByTagName("img")[0].src="img/icon-menu.svg"}),50)}))}));