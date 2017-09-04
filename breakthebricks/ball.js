var Ball = function(){
	var image = imageFromPath('ball.png')
	var o = {
		image: image,
		x: 150,
		y: 285,
		speedx: 1,
		speedy: 1,
		fired: false,
		alive: true,
		iscollide: false,
	}
	o.fire = function() {
		o.fired = true
	}
	o.kill = function() {
		o.alive = false
	}
	o.collide = function(Paddle) {
		var positionx = o.x + 2
		var positiony = o.y + 2
		if(positionx > Paddle.x && positionx < Paddle.x + Paddle.width &&
			positiony < Paddle.y + Paddle.height && positiony > Paddle.y
		        && Paddle.alive){
			o.iscollide = true
		}
	}
	o.move = function() {
		if(o.fired){
			if(o.x < 0 || o.x > 395){
				o.speedx *= -1
			}
			if(o.iscollide){
				o.speedy *= -1
				o.iscollide = false
			}
			if(o.y < 0){
				o.speedy *= -1
			}
			if(o.y > 300 && !o.iscollide){
				o.kill()
			}
			o.x += o.speedx
			o.y += o.speedy
		}
	}

	return o
}


