var Block = function(position){
	// position [0, 0]
	var p = position
	var image = imageFromPath('block.png')
	var o = {
		image: image,
		x: p[0],
		y: p[1],
		width: 40,
		height: 20,
		alive: true,
	}
	o.kill = function() {
		o.alive = false
	}
	o.collide = function(ball) {
		var positionx = ball.x + 2
		var positiony = ball.y + 2
		if(positionx > o.x && positionx < o.x + 40 &&
			positiony < o.y + 20 && positiony > o.y && o.alive){
			o.alive = false
		}
	}

	return o
}
