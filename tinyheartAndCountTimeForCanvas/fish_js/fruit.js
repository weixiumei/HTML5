var fruitObj = function()
{
	this.alive = [];//bool
	this.x = [];
	this.y = [];
	//图片的长度
	this.l = [];
	//果实成长上升速度
	this.spd = [];
	//果实类型
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function()
{
	for(var i = 0; i < this.num; i++)
	{
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.spd[i] = Math.random() * 0.017 + 0.003;//[0.003,0.02)
		//this.born(i);
		this.fruitType[i] = "";
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
}
fruitObj.prototype.draw = function()
{
	for(var i = 0; i < this.num; i++)
	{
		//draw
		//find an ane, grow,fly up
		if(this.alive[i])
		{
			var pic;
			if(this.fruitType[i] == "blue")
			{
				 pic = this.blue;
			}
			else
			{
				 pic = this.orange;
			}
			if(this.l[i] <= 12)
			{
				this.l[i] += this.spd[i] * deltaTime;
			}else
			{
				this.y[i] -= this.spd[i] * 6 * deltaTime;
			}
			ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
			if(this.y[i] < 10)
			{
				this.alive[i] = false;
			}
		}
	}
}
fruitObj.prototype.born = function(i)
{
	var aneID = Math.floor(Math.random() * ane.num);
	this.x[i] = ane.x[aneID];
	this.y[i] = canHeight - ane.len[aneID]; 
	this.l[i] = 0;
	this.alive[i] = true;
	ran = Math.random();
	if(ran < 0.2)
	{
		this.fruitType[i] = "blue";
	}
	else
	{
		this.fruitType[i] = "orange";
	}
}
fruitObj.prototype.dead = function(i)
{
	this.alive[i] = false;
}
function fruitMonitor()
{
	var num = 0;
	for(var i = 0; i<fruit.num; i++)
	{
		if(fruit.alive[i]) num++;
	}
	if(num < 15)
	{
		//send fruit
		sendFruit();
		return;
	}
}
function sendFruit()
{
	for(var i = 0; i < fruit.num; i++)
	{
		if(!fruit.alive[i])
		{
			fruit.born(i);
			return;
		}
	}
}


