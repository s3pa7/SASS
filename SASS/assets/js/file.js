/**
 * 
 */
var data = [];
var i = 0;
var color;
document.addEventListener('DOMContentLoaded', function () {
	changePic(event);
	changeTermonials();
	getForm();
	FirstImg();
	SecondImg();
	ThirdImg();
	FourImg();
	FiveImg();
	Ajax.request("GET", "url.php", true, function (response) {
		data = JSON.parse(response);
		console.log(data);
	}, {})
	
}, false);

setInterval(function(){
	var ul = document.querySelector("#hide-show");
	var getButton = document.querySelector(".dropdowna");
	var innerWidth = window.innerWidth;
	  if(innerWidth <= 900){
		  getButton.removeAttribute("style");
		  ul.style.display = "none";
	  }else {
		  getButton.style.display = "none";
		  ul.removeAttribute("style");
	  }
}, 200);


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
setInterval(function(event){

    var firstImg = document.getElementById("oneOne");
    var secondImg = document.getElementById("twoTwo");
    var thirdImg = document.getElementById("threeThree");
    var h1 = document.getElementById("h1-change");
    var p = document.getElementById("p-change");
	if(data.length == 0){
		return;
	}
	if(data[i] == "Mad-Max.jpg") {
		firstImg.style.height = "180px";
		h1.innerHTML = "Mad-max";
		p.innerHTML = "Fury Road was in development hell for many years,with pre-production starting as early as 1997.";
		secondImg.style.height = "150px";
		thirdImg.style.height = "150px";
	}
	if(data[i] == "spongebob.jpg") {
		thirdImg.style.height = "180px";
		secondImg.style.height = "150px";
		firstImg.style.height = "150px";
		h1.innerHTML = "Spider-Man";
		p.innerHTML = "Spider-Man is a fictional superhero appearing in American comic books published by Marvel Comics existing in its shared universe.";
	}
	if(data[i] == "maxresdefault.jpg"){
		secondImg.style.height = "180px";
		thirdImg.style.height = "150px";
		firstImg.style.height = "150px";
		h1.innerHTML = "Ex-mashine";
		p.innerHTML = "Ex Machina (stylized as ex_machina or EX_MACHINA) is a 2015 science fiction psychological thriller film written and directed by Alex Garland in his directorial debut, and produced by Andrew Macdonald and Allon Reich.";
	}
	if(data[i] != 0) {
		 var color = "url" + "(" + "assets/" + "images/" + data[i] + ")";
		 i++;
		  console.log(color);
		  
		  document.querySelector('#exmashine').style.background = color;
	}
	if(i >= 3){
		i = 0;
	}

}, 10000);
function changePic (event){

	var firstImg = document.getElementById("oneOne");
    var secondImg = document.getElementById("twoTwo");
    var thirdImg = document.getElementById("threeThree");
    var h1 = document.getElementById("h1-change");
    var p = document.getElementById("p-change");
    var target = event.target;
    target.addEventListener('click', function (event) {

    	if(event.target.id == "oneOne"){
    		document.querySelector('#exmashine').style.background = "url('assets/images/Mad-Max.jpg')";
    		h1.innerHTML = "Mad-max";
    		p.innerHTML = "Fury Road was in development hell for many years,with pre-production starting as early as 1997.";
    		firstImg.style.backgroundImage = "no-repeat";
    		firstImg.style.height = "180px";
    		secondImg.style.height = "150px";
    		thirdImg.style.height = "150px";
    	}
    	if(event.target.id == "twoTwo"){
    		document.querySelector('#exmashine').style.background = "url('assets/images/maxresdefault.jpg')";
    		h1.innerHTML = "Ex-mashine";
    		p.innerHTML = "Ex Machina (stylized as ex_machina or EX_MACHINA) is a 2015 science fiction psychological thriller film written and directed by Alex Garland in his directorial debut, and produced by Andrew Macdonald and Allon Reich.";
    		secondImg.style.height = "180px";
    		thirdImg.style.height = "150px";
    		firstImg.style.height = "150px";
    	}
    	if(event.target.id == "threeThree"){
    		document.querySelector('#exmashine').style.background = "url('assets/images/spongebob.jpg')";
    		h1.innerHTML = "Spider-Man";
    		p.innerHTML = "Spider-Man is a fictional superhero appearing in American comic books published by Marvel Comics existing in its shared universe.";
    		thirdImg.style.height = "180px";
    		secondImg.style.height = "150px";
    		firstImg.style.height = "150px";
    	}
    })
}
function changeTermonials (){
   var getClass = document.querySelector(".text-center1 .img-text-james");
   var getImage = document.querySelector(".circle-img");
   var rightClick = document.querySelector(".rotate-arrow");
   var leftClick  = document.querySelector(".arrow");
   	rightClick.addEventListener("click", function(){

    	debugger;
    	if(getImage.style.visibility != "hidden"){
	    	getImage.style.visibility = "hidden";
	    	getClass.style.marginTop = "-11em"
    	}else {
    		getImage.style.visibility = "visible";
	    	getClass.style.marginTop = "1.1em"	
    	}
    }, false);
   	leftClick.addEventListener("click", function(){

    	debugger;
    	if(getImage.style.visibility != "hidden"){
	    	getImage.style.visibility = "hidden";
	    	getClass.style.marginTop = "-11em"
    	}else {
    		getImage.style.visibility = "visible";
	    	getClass.style.marginTop = "1.1em"	
    	}
    }, false)
    
  }
function getForm () {
	var form = document.querySelector(".mailform");
	var email = document.getElementById("Email");
	var input = document.querySelector("input");
	form.addEventListener('focus', focusInput, true);
	form.addEventListener('blur', blurInput, true);
	
}
function blurInput(event){
	var target = event.target;
	var email = document.getElementById("Email");
	var name = document.getElementById("Name");
	var message = document.getElementById("Message");
	var opasity  = document.querySelector(".mfPlaceHolder");
	if(event.target.name == "email" && event.target.value == ""){
		email.className = "mfPlaceHolder";
		email.style.opacity = 1;
		
	}
	if(event.target.name == "message" && event.target.value == ""){
		message.className = "mfPlaceHolder";
		message.style.opacity = 1;
	}
	if(event.target.name == "name" && event.target.value == ""){
		name.className = "mfPlaceHolder";
		name.style.opacity = 1;
	}
}
function focusInput (event) {
	debugger;
	var target = event.target;
	var email = document.getElementById("Email");
	var message = document.getElementById("Message");
	var name = document.getElementById("Name");
	if(event.target.name == "email"){
		email.className = "mfPlaceHolder change";
		email.style.opacity = 0;
		
	}
	if(event.target.name == "message"){
		message.className = "mfPlaceHolder change";
		message.style.opacity = 0;
	}
	if(event.target.name == "name"){
		name.className = "mfPlaceHolder change";
		name.style.opacity = 0;
	}

}
function  FirstImg(){
	debugger;
	var img1 = document.querySelector("#img1");
	var dates1 = document.querySelector("#dates1");
	var picks2 = document.querySelector("#picks1");
	var textCount1 = document.querySelector("#text-count1");
	var textDate1 = document.querySelector("#text-date1");
	var textCount2 = document.querySelector("#text-count2");
	
	img1.addEventListener("mouseover", function(){
		debugger;
		parseInt(textCount1.innerHTML ++)
	}, false);
	dates1.addEventListener("click", function(){
		textDate1.innerHTML = "01:27:45";
		
	},false);
	picks2.addEventListener("click", function(){
			parseInt(textCount2.innerHTML ++);
		
	}, false);
	
}
function SecondImg(){
	var img2 = document.querySelector("#img2");
	var dates2 = document.querySelector("#dates2");
	var picks2 = document.querySelector("#picks2");
	var textCount3 = document.querySelector("#text-count3");
	var textDate2 = document.querySelector("#text-date2");
	var textCount4 = document.querySelector("#text-count4");
	
	img2.addEventListener("mouseover", function(){
		parseInt(textCount3.innerHTML ++)
	}, false);
	
	dates2.addEventListener("click", function(){
		textDate2.innerHTML = "02:45:55";
		
	},false);
	picks2.addEventListener("click", function(){
			parseInt(textCount4.innerHTML ++);
		
	}, false);
	
}
function ThirdImg(){
	var img3 = document.querySelector("#img3");
	var dates3 = document.querySelector("#dates3");
	var picks3 = document.querySelector("#picks3");
	var textCount5 = document.querySelector("#text-count5");
	var textDate3 = document.querySelector("#text-date3");
	var textCount6 = document.querySelector("#text-count6");
	
	img3.addEventListener("mouseover", function(){
		parseInt(textCount5.innerHTML ++)
	}, false);
	
	dates3.addEventListener("click", function(){
		textDate3.innerHTML = "04:22:01";
		
	},false);
	picks3.addEventListener("click", function(){
			parseInt(textCount6.innerHTML ++);
		
	}, false);
	
}
function FourImg (){
	var img4 = document.querySelector("#img4");
	var dates4 = document.querySelector("#dates4");
	var picks4 = document.querySelector("#picks4");
	var textCount7 = document.querySelector("#text-count7");
	var textDate4 = document.querySelector("#text-date4");
	var textCount8 = document.querySelector("#text-count8");
	
	img4.addEventListener("mouseover", function(){
		parseInt(textCount7.innerHTML ++)
	}, false);
	
	dates4.addEventListener("click", function(){
		textDate4.innerHTML = "03:56:25";
		
	},false);
	
	picks4.addEventListener("click", function(){
			parseInt(textCount8.innerHTML ++);
		
	}, false);
	
}
function FiveImg (){
	var img5 = document.querySelector("#img5");
	var dates5 = document.querySelector("#dates5");
	var picks5 = document.querySelector("#picks5");
	var textCount9 = document.querySelector("#text-count9");
	var textDate5 = document.querySelector("#text-date5");
	var textCount10 = document.querySelector("#text-count10");
	
	img5.addEventListener("mouseover", function(){
		parseInt(textCount9.innerHTML ++)
	}, false);
	
	dates5.addEventListener("click", function(){
		textDate5.innerHTML = "03:56:25";
		
	},false);
	
	picks5.addEventListener("click", function(){
			parseInt(textCount10.innerHTML ++);
		
	}, false);
}
	
