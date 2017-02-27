var aneObj = function()
{
	this.x = [];
	this.len = [];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function()
{
	for(var i = 0; i < this.num; i++)
	{
		this.x[i] = i * 16 + Math.random() * 20;//[0,1)
		this.len[i] = 200 + Math.random() * 50;
	}
}
//绘制海葵
aneObj.prototype.draw = function()
{
	//样式开始(出了这个范围，下面这段就不再起作用了)
	ctx2.save();
	//透明度（一下只需定义一次的，不需要放循环里）
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";
	for(var i = 0; i < this.num; i++)
	{
		// beginPath, moveTo, lineTo,stroke, strokeStyle, lienWidth, lineCap, globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.x[i], canHeight);
		ctx2.lineTo(this.x[i], canHeight - this.len[i]);
		ctx2.stroke();
	}
	//样式结束
	ctx2.restore();
}
