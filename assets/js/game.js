
/**
 * 
 */
/*
 * 1 - atach key event handlers
 * 2 - difine plane movement
 * 3 - make it shoot
 * 4 - make target that moves
 * 5 - deteckt  when target i shit
 */

const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_SHOOT = 32;

const BULLET_SPEED = 10;
const BULLET_SIZE =5;
const PLANE_TOP = 120;
const BULLET_POOL_LEN = 10;



var bullets =  [];
var counter = 100;
var lastTimeShot;
var points = 0;
var gameOn = true;

var plane  = {
	x: 0,
	width: 78,
	moveLeft: false,
	moveRight: false,
	shooting: false,
	speed: 6,
	dom: document.getElementById('plane')
		
};
var enemy = {
		height:50,
		y:0,
		nextY:0,
		x: 0,
		nextX: 0,
		width:50,
		shooting: false,
		speed: 2.5,
		dom: document.getElementById('enemy')
};

function  movePlane () {
	var  windowWidth = window.innerWidth;
	if(plane.moveLeft && plane.x > 0){
		plane.x -= plane.speed;
	}
	
	if(plane.moveRight && plane.x < windowWidth - plane.width){
		plane.x += plane.speed;
	}
	
	plane.dom.style.left = plane.x  + 'px';
}

function shoot () {
	if(!plane.shooting) {
		return;
	}
	
	var currentTime = Date.now();
	if (lastTimeShot && currentTime - lastTimeShot < 500) {
		return;
	}
	/**
	 * 1) get first bullet from the pool which is not shot
	 * 2) attach it to bod infrond of the plane
	 * 3) move the bullet
	 */
	var bullet = getFirstFreeBullet();
	if(!bullet){
		return;
	}

	var top = window.innerHeight - PLANE_TOP;
	bullet.dom.style.top = top +"px";
	bullet.y = top;
			
	bullet.dom.style.top = PLANE_TOP + 'px';
	bullet.x = bullet.dom.style.left = (plane.x +  (plane.width /2 - BULLET_SIZE / 2)); 
	bullet.dom.style.left = (plane.x +  (plane.width /2 - BULLET_SIZE / 2)) + 'px'; 
	bullet.dom.style.display = 'block';
	bullet.isShot = true;
	
	lastTimeShot = currentTime;
	
	if (counter == 0 ) {
		plane.shooting = false;
		return;
	}
	--counter;
	document.getElementById("shots").innerHTML = counter;
		
}
function getFirstFreeBullet() {
	for(var i = 0; i < bullets.length; i++){
		if(!bullets[i].isShot) {
			return bullets[i];
		}
	}
}


function attachKeyEvents () {
	document.addEventListener('keydown', function (event) {
		onKeyEvent(event.keyCode, true);
		
	}, false)
	document.addEventListener('keyup', function (event) {
		onKeyEvent(event.keyCode, false);	
			
	}, false)
	
}

function createBullets() {
	for (var i = 0; i < BULLET_POOL_LEN; i++) {
		var dom = document.createElement('div');
		dom.className = 'bullet';
		dom.style.display = 'none';
		document.body.appendChild(dom);
		var b = {
			dom: dom,
			isShot: false,
			y: 0,
		}
		bullets.push(b);
	}
}

function moveBullets () {
	for(var i = 0; i < bullets.length; i++){
	var b = bullets[i];
	if(b.y <= 0  && b.isShot){
			
		b.isShot = false;
		b.dom.style.display = 'none';
		continue;
	}
	
	if(!b.isShot){
		continue;
	}
	
	if (b.y < enemy.y + enemy.height && b.y > enemy.y && b.x + BULLET_SIZE > enemy.x && b.x < enemy.x + enemy.width) {
		//b.dom.background-image = location.reload();
		points++;
		document.getElementById("points").innerHTML = points;
		b.isShot = false;
		b.dom.style.display = 'none';
	}
	if(points >= 70){
		var  cont = confirm("Congratulations! You win\nWould you like to play again?");
		gameOn = false;
	}
	if(points < 70 && counter == 0){
		var  cont = confirm(" You lose! \nWould you like to play again?");
		gameOn = false;
	}
	if(cont){
		location.reload();
	}
	
	
	b.y -= BULLET_SPEED;
	b.dom.style.top = b.y + 'px';
	}
}



function onKeyEvent (keyCode , state) {
	
	if (keyCode == KEY_LEFT) {
		plane.moveLeft = state;
	}
	if (keyCode == KEY_RIGHT) {
		plane.moveRight = state;
	}
	
	if (keyCode == KEY_SHOOT) {
		plane.shooting = state;

		
	}
}
function randomMovement () {
	if (enemy.nextX < enemy.x + enemy.speed && enemy.nextX > enemy.x - enemy.speed) {
		enemy.nextX = Math.floor(Math.random() *( window.innerWidth - enemy.width));
		
	}
	if (enemy.nextY < enemy.y + enemy.speed && enemy.nextY > enemy.y - enemy.speed) {
		enemy.nextY = Math.floor(Math.random() * window.innerHeight / 2);
		
	}
	if(enemy.y > enemy.nextY){
		enemy.y -= enemy.speed;
	}
	if (enemy.y < enemy.nextY) {
		enemy.y += enemy.speed;
	}
	if (enemy.x > enemy.nextX) {
		enemy.x -= enemy.speed;
	}
	if (enemy.x < enemy.nextX) {
		enemy.x += enemy.speed;
	}
	enemy.dom.style.left = enemy.x + 'px';
	enemy.dom.style.top = enemy.y + 'px';
}

function gameLoop () {
	randomMovement();
	movePlane();
	shoot();
	moveBullets();
	if(gameOn){
		requestAnimationFrame(gameLoop);
	}
}

attachKeyEvents();
createBullets();
requestAnimationFrame(gameLoop)	
