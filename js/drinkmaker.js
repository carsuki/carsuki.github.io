// drinkmaker.js
// va11 hall-a drink maker clone
// carsuki '20

// button variables
var resetButton = document.querySelector('.reset');
var resetButtonText = document.querySelector('.reset-button p');
var mixButton = document.querySelector('.mix-button button');
var mixButtonText = document.querySelector('.mix-button p');

// ingredient adding
var adelhydeCan = document.querySelector('.drink-adelhyde img')
var bronsonCan = document.querySelector('.drink-bronson img')
var deltaCan = document.querySelector('.drink-delta img')
var flanergideCan = document.querySelector('.drink-flanergide img')
var karmotrineCan = document.querySelector('.drink-karmotrine img')

var adelhyde = 0;
var bronson = 0;
var delta = 0;
var flanergide = 0;
var karmotrine = 0;
let ice = false;
let age = false;
let blend = false;
var globalCounter = 0;
var shaker = 0;

if (globalCounter == 0) {
	mixButton.style.background = "url('img/drink-maker/sprite_button_red.png')";
	mixButton.disabled = true;
}

function addAdelhyde() {
	if (adelhyde < 10 && globalCounter < 20) {
		adelhyde++;
		var currentAdelhyde = '.adelhyde' + adelhyde;
		globalCounter++;
		shaker++;
		adelhydeCan.src = "img/drink-maker/sprite_adelhyde_active.png"
		document.querySelector(currentAdelhyde).style.opacity = "1.0";
		globalCounterIncrease();
	}
}

function addBronson() {
	if (bronson < 10 && globalCounter < 20) {
		bronson++;
		var currentBronson = '.bronson' + bronson;
		globalCounter++;
		shaker++;
		bronsonCan.src = "img/drink-maker/sprite_bronson_active.png"
		document.querySelector(currentBronson).style.opacity = "1.0";
		globalCounterIncrease();
	}
}

function addDelta() {
	if (delta < 10 && globalCounter < 20) {
		delta++;
		var currentDelta = '.delta' + delta;
		globalCounter++;
		shaker++;
		deltaCan.src = "img/drink-maker/sprite_delta_active.png"
		document.querySelector(currentDelta).style.opacity = "1.0";
		globalCounterIncrease();
	}
}

function addFlanergide() {
	if (flanergide < 10 && globalCounter < 20) {
		flanergide++;
		var currentFlanergide = '.flanergide' + flanergide;
		globalCounter++;
		shaker++;
		flanergideCan.src = "img/drink-maker/sprite_flanergide_active.png"
		document.querySelector(currentFlanergide).style.opacity = "1.0";
		globalCounterIncrease();
	}
}

function addKarmotrine() {
	if (karmotrine < 10 && globalCounter < 20) {
		karmotrine++;
		var currentKarmotrine = '.karmotrine' + karmotrine;
		globalCounter++;
		shaker++;
		karmotrineCan.src = "img/drink-maker/sprite_karmotrine_active.png"
		document.querySelector(currentKarmotrine).style.opacity = "1.0";
		globalCounterIncrease();
	}
}

function activateIce() {
	if (ice == false) {
		document.querySelector('.drink-ice img').style.opacity = "1.0";
		ice = true;
	}
	else {
		document.querySelector('.drink-ice img').style.opacity = "0.5";
		ice = false;
	}
}

function activateAge() {
	if (age == false) {
		document.querySelector('.drink-age img').style.opacity = "1.0";
		age = true;
	}
	else {
		document.querySelector('.drink-age img').style.opacity = "0.5";
		age = false;
	}
}

function globalCounterIncrease() {
	var currentGlobal = '.block' + globalCounter;
	mixButton.style.background = "url('img/drink-maker/sprite_button_green.png')";
	mixButton.disabled = false;
	if (globalCounter < 11) {
		document.querySelector(currentGlobal).style.opacity = "1.0"
	}
	if (globalCounter == 11) {
		shaker = 1;
	}
	if (globalCounter > 10) {
		var currentBlock = '.block' + shaker;
		document.querySelector(currentBlock).style.background = "#ffffff"
	}
}

// recipes
var shakerSprite = document.querySelector('.shaker');
var drinkSlot = document.querySelector('.drink-slot');
var drinkName = document.querySelector('.drink-name');

function triggerMix() {	
	if (mixButtonText.innerText == 'Mix') {
		mixButtonText.innerText = 'Stop';
		shakerSprite.style.animation = 'shake 0.7s infinite';
		timerToggle();
	}

	else {
		shakerSprite.style.animation = 'none';
		mixButtonText.innerText = 'Mix';
		timerToggle();
		finishDrink();
	}
}

function finishDrink() {
	shakerSprite.style.opacity = 0;
	drinkSlot.style.opacity = 1.0;
	document.querySelector('.nameplate').setAttribute('onclick','openRecipeBook();');
	
	var everyShaker = document.getElementsByClassName('shaker-grid-block');
	for (var i = 0; i < everyShaker.length; i++) {
	  everyShaker[i].style.background = 'transparent';
	  everyShaker[i].style.opacity = '0';
	}
	
	if (adelhyde == 0 && bronson == 2 && delta == 2 && flanergide == 2 && karmotrine == 4 && ice == true && age == false && blend == false) {
		drinkSlot.src = 'img/drink-maker/drinks/badtouch.png';
		drinkSlot.alt = 'Bad Touch'
		drinkName.innerText = 'Bad Touch';
		softReset();
	}
	else if (adelhyde == 0 && bronson == 1 && delta == 3 && flanergide == 3 && karmotrine == 0 && ice == false && age == false && blend == true) {
		drinkSlot.src = 'img/drink-maker/drinks/bleedingjane.png';
		drinkSlot.alt = 'Bleeding Jane'
		drinkName.innerText = 'Bld Jane';
		softReset();
	}
	else if (adelhyde == 0 && bronson == 3 && delta == 4 && flanergide == 0 && karmotrine == 1 && ice == false && age == true && blend == false) {
		drinkSlot.src = 'img/drink-maker/drinks/lowball.png';
		drinkSlot.alt = 'Lowball'
		drinkName.innerText = 'Lowball';
		softReset();
	}
	else if (adelhyde == 2 && bronson == 3 && delta == 5 && flanergide == 5 && karmotrine == 3 && ice == true && age == false && blend == false) {
		drinkSlot.src = 'img/drink-maker/drinks/pianoman.png';
		drinkSlot.alt = 'Piano Man'
		drinkName.innerText = 'Piano Man';
		softReset();
	}
	else {
		drinkSlot.src = 'img/drink-maker/drinks/failed.png';
		drinkSlot.alt = '??????'
		drinkName.innerText = '??????';

		softReset();
	}
}

// timer and shake
var totalSeconds = 0;
function setTime() {
	++totalSeconds;
	if (totalSeconds < 4) {
		blend = false;
	}
	if (totalSeconds > 3) {
		shakerSprite.style.animation = 'none';
		shakerSprite.style.animation = 'shake 0.2s infinite';
		shakerSprite.style.animationIterationCount = 'infinite';
		blend = true;
	}
}

var timerEnabled;

function timerToggle() {
	if (!timerEnabled) {
		timerEnabled = window.setInterval(setTime, 1000);
	} else {
		window.clearInterval(timerEnabled);
		timerEnabled = null;
	}
}

// when drink is finished
function softReset() {
	var iceElement = document.querySelector('.drink-ice');
	iceElement.style.pointerEvents = 'none';
	var ageElement = document.querySelector('.drink-age');
	ageElement.style.pointerEvents = 'none';
	
	if (globalCounter > 0) {
		adelhyde = 0;
		bronson = 0;
		delta = 0;
		flanergide = 0;
		karmotrine = 0;
		blend = false;
		globalCounter = 0;
		shaker = 0;
	
		mixButton.style.background = "url('img/drink-maker/sprite_button_red.png')";
		mixButton.disabled = true;
	
		if (globalCounter == 0) {
			mixButton.style.background = "url('img/drink-maker/sprite_button_red.png')";
			mixButton.disabled = true;	
		}
		
		document.querySelector('.drink-ice img').style.opacity = "0.5";
		document.querySelector('.drink-ice').style.pointerEvents = 'not-allowed';
		ice = false;
		document.querySelector('.drink-age img').style.opacity = "0.5";
		document.querySelector('.drink-age').style.pointerEvents = 'not-allowed';
		age = false;
		
		document.querySelector('.drink-adelhyde').style.pointerEvents = 'none';
		document.querySelector('.drink-adelhyde').style.cursor = 'not-allowed';
		document.querySelector('.drink-bronson').style.pointerEvents = 'none';
		document.querySelector('.drink-bronson').style.cursor = 'not-allowed';
		document.querySelector('.drink-delta').style.pointerEvents = 'none';
		document.querySelector('.drink-delta').style.cursor = 'not-allowed';
		document.querySelector('.drink-flanergide').style.pointerEvents = 'none';
		document.querySelector('.drink-flanergide').style.cursor = 'not-allowed';
		document.querySelector('.drink-karmotrine').style.pointerEvents = 'none';
		document.querySelector('.drink-karmotrine').style.cursor = 'not-allowed';
		
		adelhydeCan.src = "img/drink-maker/sprite_adelhyde.png";
		bronsonCan.src = "img/drink-maker/sprite_bronson.png";
		deltaCan.src = "img/drink-maker/sprite_delta.png";
		flanergideCan.src = "img/drink-maker/sprite_flanergide.png";
		karmotrineCan.src = "img/drink-maker/sprite_karmotrine.png";
	
		var everything = document.getElementsByClassName('column-block');
		for (var i = 0; i < everything.length; i++) {
		  everything[i].style.opacity = '0.5';
	  }	
		var everyShaker = document.getElementsByClassName('shaker-grid-block');
		for (var i = 0; i < everyShaker.length; i++) {
		  everyShaker[i].style.background = 'transparent';
		  everyShaker[i].style.opacity = '0';
	  }
	}
}

// when reset button is pressed
function resetAll() {
	if (globalCounter >= 0) {
		adelhyde = 0;
		bronson = 0;
		delta = 0;
		flanergide = 0;
		karmotrine = 0;
		blend = false;
		globalCounter = 0;
		shaker = 0;
	
		mixButton.style.background = "url('img/drink-maker/sprite_button_red.png')";
		mixButton.disabled = true;
	
		if (globalCounter == 0) {
			mixButton.style.background = "url('img/drink-maker/sprite_button_red.png')";
			mixButton.disabled = true;	
		}
	
		document.querySelector('.drink-ice img').style.opacity = "0.5";
		document.querySelector('.drink-ice').style.pointerEvents = 'initial';
		ice = false;
		document.querySelector('.drink-age img').style.opacity = "0.5";
		document.querySelector('.drink-age').style.pointerEvents = 'initial';
		age = false;
		
		document.querySelector('.drink-adelhyde').style.pointerEvents = 'initial';
		document.querySelector('.drink-bronson').style.pointerEvents = 'initial';
		document.querySelector('.drink-delta').style.pointerEvents = 'initial';
		document.querySelector('.drink-flanergide').style.pointerEvents = 'initial';
		document.querySelector('.drink-karmotrine').style.pointerEvents = 'initial';
		
		document.querySelector('.drink-adelhyde').style.cursor = 'pointer';
		document.querySelector('.drink-bronson').style.cursor = 'pointer';
		document.querySelector('.drink-delta').style.cursor = 'pointer';
		document.querySelector('.drink-flanergide').style.cursor = 'pointer';
		document.querySelector('.drink-karmotrine').style.cursor = 'pointer';
		
		drinkSlot.style.opacity = '0';
		drinkSlot.alt = 'no drink made!';
		drinkName.innerText = '';
		shakerSprite.style.opacity = 1.0;
		
		var everything = document.getElementsByClassName('column-block');
		for (var i = 0; i < everything.length; i++) {
	  	everything[i].style.opacity = '0.5';
	  }	
		var everyShaker = document.getElementsByClassName('shaker-grid-block');
		for (var i = 0; i < everyShaker.length; i++) {
	  	everyShaker[i].style.background = 'transparent';
	  	everyShaker[i].style.opacity = '0';
	  }
	}
}

function openRecipeBook() {
	var modal = document.getElementsByClassName('modal');
	var close = document.getElementsByClassName("close");
	
	modal[0].style.display = "flex";
	modal[0].style.position = "fixed";
	
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			modal.style.position = "absolute";
		}
	}
	
	// hide currently unneeded acknowledgements items
	document.querySelector('.modal h2').setAttribute("style", "font-family: RecipeBook; font-size: 26px; margin-top: 9px; text-align: left; margin-left: 4px;"); 
	document.querySelector('.modal-content').setAttribute("style", "width: 380px;");
	document.querySelector('.modal h3').setAttribute("style", "font-family: CALICOMP; font-size: 14px; font-style: normal; line-height: 1.6; margin-bottom: 29px; margin-left: 4px;");
	document.querySelectorAll('.modal h3')[1].style.display = 'none';
	document.querySelectorAll('.modal h3')[2].style.display = 'none';
	document.querySelectorAll('.modal h3')[3].style.display = 'none';
	document.querySelectorAll('.modal h3')[4].style.display = 'none';
	document.querySelectorAll('.modal h3')[5].style.display = 'none';
	document.querySelector('.modal ul').style.display = 'none';
	document.querySelector('.logos').style.display = 'none';
	document.querySelector('.fineprint').style.display = 'none';
	
	if (drinkName.innerText == 'Bad Touch') {
		document.querySelector('.modal h2').innerHTML = 'Bad Touch';
		document.querySelectorAll('.modal h3')[0].innerHTML = `
		A Bad Touch is <span class="bronson-text">2 Bronson Extract</span>, <span class="delta-text">2 Powdered Delta</span>, <span class="flanergide-text">2 Flanergide</span> and <span class="karmotrine-text">4 Karmotrine</span>. All on the rocks and mixed.
		<br>
		<br>
		"We're nothing but mammals after all."
		<br>
		<br>
		Sour, Classy, Vintage.
		`
	}
	
	if (drinkName.innerText == 'Bld Jane') {
		document.querySelector('.modal h2').innerHTML = 'Bleeding Jane';
		document.querySelectorAll('.modal h3')[0].innerHTML = `
		A Bleeding Jane is <span class="bronson-text">1 Bronson Extract</span>, <span class="delta-text">3 Powdered Delta</span> and <span class="flanergide-text">3 Flanergide</span>. All blended.
		<br>
		<br>
		"Say the name of this drink three times in front of a mirror and you'll look like a fool."
		<br>
		<br>
		Spicy, Classic, Sobering.
		`
	}
	
	if (drinkName.innerText == 'Lowball') {
		document.querySelector('.modal h2').innerHTML = 'Lowball';
		document.querySelectorAll('.modal h3')[0].innerHTML = `
		A Lowball is <span class="bronson-text">3 Bronson Extract</span>, <span class="delta-text">4 Powdered Delta</span> and <span class="karmotrine-text">1 Karmotrine</span>. All aged and mixed.
		<br>
		<br>
		"Black as the backwash sitting in the flask."
		<br>
		<br>
		Burning, Manly, Strong.
		`
	}
	
	if (drinkName.innerText == 'Piano Man') {
		document.querySelector('.modal h2').innerHTML = 'Piano Man';
		document.querySelectorAll('.modal h3')[0].innerHTML = `
		A Piano Man is <span class="adelhyde-text">2 Adelhyde</span>, <span class="bronson-text">3 Bronson Extract</span>, <span class="delta-text">5 Powdered Delta</span>, <span class="flanergide-text">5 Flanergide</span> and <span class="karmotrine-text">3 Karmotrine</span>. All on the rocks and mixed.
		<br>
		<br>
		"This drink does not represent the opinions of the Bar Pianists Union or its associates."
		<br>
		<br>
		Sour, Promo, Strong.
		`
	}
	
	// bring everything back
	close[0].onclick = function() {
		document.querySelector('.modal h2').innerHTML = 'acknowledgements';
		document.querySelector('.modal h2').removeAttribute("style"); 
		document.querySelector('.modal-content').removeAttribute("style");
		document.querySelector('.modal h3').removeAttribute("style");
		
		document.querySelectorAll('.modal h3')[0].innerHTML = `javascript help from:`
		
		document.querySelectorAll('.modal h3')[1].style.display = 'block';
		document.querySelectorAll('.modal h3')[2].style.display = 'block';
		document.querySelectorAll('.modal h3')[3].style.display = 'block';
		document.querySelectorAll('.modal h3')[4].style.display = 'block';
		document.querySelectorAll('.modal h3')[5].style.display = 'block';
		
		document.querySelector('.modal ul').style.display = 'block';
		document.querySelector('.logos').style.display = 'flex';
		document.querySelector('.fineprint').style.display = 'block';
		
		modal[0].style.display = "none";
		modal[0].style.position = "absolute";
	}
}

// some button styling
function resetTextShift() {
	resetButtonText.style.top = "15px";
}

function resetTextShift2() {
	resetButtonText.style.top = "14px";
}

function mixTextShift() {
	mixButtonText.style.top = "15px";
}

function mixTextShift2() {
	mixButtonText.style.top = "14px";
}

// draggable drink
var drink = document.querySelector('.drink-slot'),
initX, initY, firstX, firstY;

drink.addEventListener('mousedown', function(e) {

	e.preventDefault();
	initX = this.offsetLeft;
	initY = this.offsetTop;
	firstX = e.pageX;
	firstY = e.pageY;

	this.addEventListener('mousemove', dragIt, false);

	window.addEventListener('mouseup', function() {
		drink.removeEventListener('mousemove', dragIt, false);
	}, false);

}, false);

drink.addEventListener('touchstart', function(e) {

	e.preventDefault();
	initX = this.offsetLeft;
	initY = this.offsetTop;
	var touch = e.touches;
	firstX = touch[0].pageX;
	firstY = touch[0].pageY;

	this.addEventListener('touchmove', swipeIt, false);

	window.addEventListener('touchend', function(e) {
		e.preventDefault();
		drink.removeEventListener('touchmove', swipeIt, false);
	}, false);

}, false);

function dragIt(e) {
	this.style.left = initX+e.pageX-firstX + 'px';
	this.style.top = initY+e.pageY-firstY + 'px';
}

function swipeIt(e) {
	var contact = e.touches;
	this.style.left = initX+contact[0].pageX-firstX + 'px';
	this.style.top = initY+contact[0].pageY-firstY + 'px';
}