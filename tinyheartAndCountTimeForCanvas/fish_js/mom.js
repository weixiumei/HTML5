var momObj = function()
{
	this.x;
	this.y;
	//大鱼和鼠标角度
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
}
momObj.prototype.init = function()
{
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
	this.bigEye.src = "./src/bigEye0.png";
	this.bigBody.src = "./src/bigSwim0.png";
	this.bigTail.src = "./src/bigTail0.png";
}
momObj.prototype.draw = function()
{
	//lerp, x, y
	this.x = lerpDistance(mx, this.x, 0.96);
	this.y = lerpDistance(my, this.y, 0.96);

	//极坐标向右为正
	//delta angle
	//Math.atan2(y,x)
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI//-PI, PI

	//lerp angle
	this.angle = lerpAngle(beta, this.angle, 0.6);

	ctx1.save();
	//大鱼处设为原点
	ctx1.translate(this.x, this.y);
	//旋转作用于大鱼
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5);
	ctx1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
	ctx1.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5);
	// ctx1.drawImage(this.bigEye, this.x+13, this.y+20);
	// ctx1.drawImage(this.bigBody, this.x, this.y);
	// ctx1.drawImage(this.bigTail, this.x+39, this.y+4);

	ctx1.restore();
}