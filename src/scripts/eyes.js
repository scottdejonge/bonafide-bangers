// eye movement

var leftEye = document.getElementById('left_eye');
var rightEye = document.getElementById('right_eye');

var topTeeth = [];
var bottomTeeth = [];
for(var i=1; i<=6; i++) { topTeeth.push(document.getElementById('top_tooth'+i)) }
for(var i=1; i<=8; i++) { bottomTeeth.push(document.getElementById('bottom_tooth'+i)) }

console.log(topTeeth);
console.log(bottomTeeth);

var mouseX = 0;
var mouseY = 0;
var leftRec, rightRec, leftAngle, rightAngle;
var leftEyePos = {x: 0, y: 0};
var rightEyePos = {x: 0, y: 0};

document.addEventListener('mousemove', function(event) {
	mouseX = event.clientX;
	mouseY = event.clientY;
});

function animate() {

	leftRect = leftEye.getBoundingClientRect();
	leftEyePos.x = leftRect.left + leftRect.width/2;
	leftEyePos.y = leftRect.top + leftRect.height/2;

	rightRect = rightEye.getBoundingClientRect();
	rightEyePos.x = rightRect.right + rightRect.width/2;
	rightEyePos.y = rightRect.top + rightRect.height/2;

	leftAngle = Math.atan2(mouseY - leftEyePos.y, mouseX - leftEyePos.x) * 180 / Math.PI;
	rightAngle = Math.atan2(mouseY - rightEyePos.y, mouseX - rightEyePos.x) * 180 / Math.PI;
	
	leftEye.style.transform = leftEye.style['-webkit-transform'] = 'rotate('+Math.round(leftAngle)+'deg)';
	rightEye.style.transform = rightEye.style['-webkit-transform'] = 'rotate('+Math.round(rightAngle)+'deg)';

	for(var i=1; i<=6; i++) {
		var offset = Math.cos((mouseX - i*100)/200)*10 - 10;
		topTeeth[i-1].style.transform = topTeeth[i-1].style['-webkit-transform'] = 'translate(0px, '+offset+'px)';
	}

	for(var i=1; i<=8; i++) {
		var offset = Math.sin((mouseX - i*100)/200)*5 - 5;
		bottomTeeth[i-1].style.transform = bottomTeeth[i-1].style['-webkit-transform'] = 'translate(0px, '+offset+'px)';
	}

	window.requestAnimationFrame(animate);
}

animate();