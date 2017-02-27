var babyObj = function()
{
	this.x;
	this.y;
	//小鱼和鱼妈妈角度
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();

	this.babyTailTimer = 0;
	this.babyTailCount = 0;
}
babyObj.prototype.init = function()
{
	this.x = canWidth * 0.5 - 50;
	this.y = canHeight * 0.5 + 50;
	this.angle = 0;
	this.babyEye.src = "./src/babyEye0.png";
	this.babyBody.src = "./src/babyFade0.png";
	this.babyTail.src = "./src/babyTail0.png";
}
babyObj.prototype.draw = function()
{
	//lerp x, y
	this.x = lerpDistance(mom.x, this.x, 0.96);
	this.y = lerpDistance(mom.y, this.y, 0.96);

	//极坐标向右为正
	//delta angle
	//Math.atan2(y,x)
	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI//-PI, PI

	//lerp angle
	this.angle = lerpAngle(beta, this.angle, 0.6);

	//ctx1
	ctx1.save();
	//小鱼坐标处设为原点
	ctx1.translate(this.x, this.y);
	//旋转作用于大鱼
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.babyTail, -this.babyTail.width * 0.5 + 23, -this.babyTail.height * 0.5);
	ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
	ctx1.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5);

	ctx1.restore();
}