var Paddle = function(){
	var image = imageFromPath('paddle.png')
	var o = {
		image: image,
		x: 150,
		y: 290,
		width: 80,
		height: 20,
		speed: 1,
		alive: true
	}
	o.moveLeft = function() {
		o.x -= o.speed
		if(o.x < 0){
			o.x = 0
		}
	}
	o.moveRight = function() {
		o.x += o.speed
		if(o.x > 320){
			o.x = 320
		}
	}
	return o
}

