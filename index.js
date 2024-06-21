let animViewed = false;

const delay = ms => new Promise(res => setTimeout(res, ms));

const initSetup = async ()=>{
		if(localStorage.getItem("viewed")){
			let title = document.getElementById("init_title");
			let logo = document.getElementById("init_logo");
			title.classList.toggle("hidden");
			logo.classList.toggle("logoPlayAnim");

			await delay(2000);

			/*logo.classList.toggle("hidden");*/

			let otherpages = document.getElementById("other_pages");
			let page = document.getElementById("content_page_1");

			page.classList.toggle("hidden");
			otherpages.classList.toggle("hidden");

			document.getElementById("btn_login").classList.remove("show");

			for(let i=1;i<7;i++){
		    document.getElementById("refp"+i).classList.remove("show");
			}
	}
}

const iniciarSesion = ()=>{
	localStorage.setItem("viewed", true);
	alert("¡Gracias por registrarte!");
}



let options = {
  threshold: [0, 1],
};

const handleIntersect = entries => {
  entries.forEach((entry) => {
    if(entry.intersectionRatio >= 0.6){
    	let targetId = entry.target.id;
    	let backgroundNum = targetId[targetId.length-1];

    	document.getElementById("body").className="background"+backgroundNum;
    	document.getElementById("content_page_"+backgroundNum).classList.remove("show");
    	document.getElementById("refp"+backgroundNum).classList.remove("show");

    	if(backgroundNum == 6){
    		var all = document.getElementsByTagName("*");
				for (var i=0, max=all.length; i < max; i++) {
					if(all[i].tagName == "H1" || all[i].tagName == "A" || all[i].tagName == "I"){
						all[i].style.color = "black";
					}
				}

				document.getElementById("btn_login").classList.remove("show");
				document.getElementById("init_logo").src = "./assets/logo_c.png";
    	}else{
    		var all = document.getElementsByTagName("*");
				for (var i=0, max=all.length; i < max; i++) {
					if(all[i].tagName == "H1" || all[i].tagName == "A" || all[i].tagName == "I"){
						all[i].style.color = "white";
					}
				}
				document.getElementById("init_logo").src = "./assets/logo_w.png";

    	}
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);

for(let i=1;i<7;i++){
	observer.observe(document.getElementById("content_title_"+i));
}

const loadFirstPage = async ()=>{
	let otherpages = document.getElementById("other_pages");
	let page = document.getElementById("content_page_1");
	page.classList.toggle("hidden");
	otherpages.classList.toggle("hidden");
}

const triggerAnimationInit = ()=>{
	if(animViewed){
		return;
	}

	let title = document.getElementById("init_title");
	let logo = document.getElementById("init_logo");

	title.classList.toggle("playAnim");
	logo.onanimationend = loadFirstPage;
	logo.classList.toggle("logoPlayAnim");
	animViewed = true;
}

const clickMap = ()=>{
	alert("Trabajo en proceso, regresa mas tarde");
}
initSetup();

/*
<div class="loaderCard">
							<div class="loader"></div>
						</div>
*/
