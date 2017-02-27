//判断大鱼和果实的拒了，小鱼某值算吃掉
function momFruitsCollision()
{
	for(var i = 0; i < fruit.num; i++)
	{
		if(fruit.alive[i])
		{
			// calculate length 果实和大鱼距离的平方
			var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			if(l < 900)
			{
				//fruit eaten
				fruit.dead(i);
			}
		}
	}
}

//mom baby collision
function momBabyCollision()
{
	var l = calLength2(mom.x, mom.y, baby.x, baby.);
	
}