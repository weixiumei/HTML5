var can1;
var can2;

var ctx1;
var ctx2;

//鼠标坐标
var mx;
var my;

var babyTail = [];

var canvasWidth;
var canvasHeight;

//上一帧被执行的时间
var lastTime;
//两帧间隔的时间差
var deltaTime;

//定义个背景图片
var bgPic = new Image();
//海葵
var ane;
//果实
var fruit;

//启动加载
document.body.onload = game;
function game(){
	//初始化
	init();
	lastTime = Date.now();
	deltaTime = 0;
	//循环设定
	gameloop();
}

function init()
{
	//东西多，两个canvas
	//获取canvas context 
	//canvas 的坐标x向右正方向，y向下正方向
	can1 = document.getElementById("canvas1"); //fishes,dust,UI,circle
	ctx1 = can1.getContext("2d");
	can2 = document.getElementById("canvas2"); //background,ane,fruits
	ctx2 = can2.getContext("2d");

	//获取鼠标事件
	can1.addEventListener('mousemove', onMouseMove, false);

	//背景图片
	bgPic.src = "./src/background.jpg";

	//canvas的长宽
	canWidth = can1.width;
	canHeight = can1.height;

	//海葵
	ane = new aneObj();
	ane.init();
	//果实
	fruit = new fruitObj();
	fruit.init();
	//大鱼
	mom = new momObj();
	mom.init();
	//鼠标坐标
	mx = canWidth * 0.5;
	my = canHeight * 0.5;
	//babyObj
	baby = new babyObj();
	baby.init();

	for(var i = 0; i < 8; i++)
	{
		babyTail[i] = new Image();
		babyTail[i].src = "./src/babyTail" + i +".png";
	}
}

function gameloop()
{
	//当前绘制完成之后，根据机器性能来确定间隔多长时间绘制下一帧
	//智能计算的过程,但会带来一个问题frame per second,帧与帧之间间隔的时间是动态的。
	//setInterval, setTimeout()会定死一个时间
	window.requestAnimFrame(gameloop);
	//Date.now() ：从1970年到现在时间消逝的毫秒数
	var now = Date.now();
	//每两帧之间的时间间隔，是过程变得平滑。
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime > 40) deltaTime = 40;

	//background 背景（如果海葵不动，就不需要循环了）
	drawbackground();
	//绘制海葵
	ane.draw();
	//出果实（限制果实数量）
	fruitMonitor();
	fruit.draw();

	//画大鱼（清除前帧内容）
	ctx1.clearRect(0,0,canWidth, canHeight);
	mom.draw();

	//吃果实
	momFruitsCollision();

	baby.draw();
}
function onMouseMove(e)
{
	//offSetX layerX 相对当前坐标系的border左上角开始的坐标(不同的浏览器)
	if(e.offSetX || e.layerX)
	{
		mx = e.offSetX == undefined ? e.layerX : e.layerX;
		my = e.offSetY == undefined ? e.layerY : e.layerY;
	}
}
