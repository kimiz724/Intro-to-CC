function setup() {
	createCanvas(windowWidth, windowHeight);
	background(200,200,0)//배경 색상
frameRate(50); //1초에 몇 프레임이 이용되는지. 숫자가 낮을수록 천천히 원이 찍힌다.
}
function draw() {
	if (mouseIsPressed) {
		var size = random(10, 100);
		ellipse(mouseX, mouseY, size, size); } //mouseX,Y는 센터의 위치. 마우스를 클릭하면 그 위치를 중심으로 원 생성.
}