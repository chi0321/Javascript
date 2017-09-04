var BrickGame = function(fps) {
	var g = {
		actions: {},
		keydowns: {},
		iswin: false,
	}
	var canvas = document.querySelector("#id-canvas") 
	var context = canvas.getContext("2d")
	
	g.canvas = canvas
	g.context = context
	// draw
	g.drawImage = function(gameimg) {
		g.context.drawImage(gameimg.image, gameimg.x, gameimg.y,)
	
	}
	// clear
	g.clear = function() {
		g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
	}
	// events
	window.addEventListener('keydown', function(event){
		g.keydowns[event.key] = true
	})
	window.addEventListener('keyup', function(event){
		g.keydowns[event.key] = false
	})
	// regist action
	g.registerAction = function(key, callback) {
		g.actions[key] = callback
	}
	// game over
	g.over = function() {
		g.context.font = "30px Courier New"
		g.context.strokeStyle = "blue"
		g.context.strokeText("Game Over!", 100, 100)
	}
	// game to detect if it is win
	g.detect = function(Blocks) {
		var flag = false
		for (var i = 0; i< Blocks.length; i++){
			var block = Blocks[i]
			flag = flag || block.alive
		}
		if(!flag){
			g.iswin = true
		}
	}
	// game win
	g.win = function() {
		g.context.font = "30px Courier New"
		g.context.strokeStyle = "blue"
		g.context.strokeText("Game Win!", 100, 100)
	}
	
	// timer
	setInterval(function() {
		// events
		var actions = Object.keys(g.actions)
		for (var i = 0; i < actions.length; i++){
			var key = actions[i]
			if(g.keydowns[key]){
				g.actions[key]()
			}
		}
		// update
		g.update()
		// draw
		g.clear()	
		g.draw()
	},1000/fps)

	return g
}


