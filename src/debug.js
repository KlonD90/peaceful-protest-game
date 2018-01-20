
export default class Debuger {
	
	constructor(game){
		
		setTimeout(() => {
	  		
	  		console.log("ADD DEBUGER!:", game);
			this.legasyDrawElements = game.renderer.gl.__proto__.drawElements;
			this.elements = 0;
			this.debug_text = document.querySelector("#debug");

			var _that = this;
			game.renderer.gl.__proto__.drawElements = function(mode, count, type, offset){
	  				_that.elements ++;
	  				_that.legasyDrawElements.call(game.renderer.gl, mode, count, type, offset);
	 		}

	 		console.log("Rebind drawElements!!");

	 		game.time.advancedTiming  = true;


	 		setInterval(() => {
	        	this.debug_text.innerHTML  = `FPS:${game.time.fps}<br> DCPF: ${this.elements}`;
	    	}, 500);

 		}, 500);
	}

	update() {
		this.elements = 0;
	}
}