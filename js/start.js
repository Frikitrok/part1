
	function getRandomColor() {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  return color;
	}

	function drawCircle(position, top, left, color) {
		var circleblock = document.createElement('div');
		circleblock.setAttribute('class', 'randCircle');
		circleblock.style.backgroundColor = color;
		circleblock.style.position = position;
		circleblock.style.left = left + 'px';
		circleblock.style.top = top + 'px';

		document.body.appendChild(circleblock);
		return circleblock;
	}

	function animate(block) {
		let timer = setTimeout(function() {
			block.style.top = 10 + 'px';
	        block.style.left = 50 + '%';
	    }, 100);
	}

	
	function myFunc() {
		console.log('asd');
		let color = getRandomColor();
		let position = 'absolute';
		let top = 400;
		let windowSize = window.innerWidth - 100;
		let left = Math.random() * windowSize;
		let circleblock = drawCircle(position, top, left, color);
		animate(circleblock);
	}
	var kek = setInterval(myFunc, 200);

	
