var imageFromPath = function(path) {
	var img = new Image()  
	img.src = "./img/" + path  

	return img
}
var loadLevel = function(n){
	var blocks = []
	var level = levels[n]
	for(var i = 0; i < level.length; i++){
		var p = level[i]
		var b = Block(p)
		blocks.push(b)	}
	return blocks
}
