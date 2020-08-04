		window.setTimeout(function(){
			var num = 6;
			var colors = generateRandomColors(num);
			console.log(colors);
			var pickedColor = pickRandomColor();
			
			var squares =  document.querySelectorAll(".square");
			var colorDisp = document.getElementById("colorDisp");
			colorDisp.textContent = pickedColor;
			var messageDisp = document.querySelector("#message");
			var h1 = document.querySelector("h1");
			//buttons
			var resetButton = document.querySelector("#reset");
			var easyButton = document.querySelector("#easy");
			var hardButton = document.querySelector("#hard");
			
			//what do to if the resetbutton is clicked
			resetButton.addEventListener("click", function(){
			
				//generate new colors				
				colors = generateRandomColors(num);
				
				//new random color from the array				
				pickedColor = pickRandomColor();
				
				//change color display to match the new random color
				colorDisp.textContent = pickedColor;
				
				//change colors of squares
				squareColoring();
				messageDisp.textContent = " ";

			});
		
			//what to do if the EasyButton is clicked
			easyButton.addEventListener("click", function(){
				easyButton.classList.add("easyHard");
				hardButton.classList.remove("easyHard");
				num = 3;
				//new color to the colors arraybe
				colors = generateRandomColors(num);
				
				//new random colort 
				pickedColor = pickRandomColor();
				
				//olorDisplay is changed
				colorDisp.textContent = pickedColor;
				//new color to the squares
				squareColoring();
				
				for(var i = 3; i < squares.length; i++){
					squares[i].style.backgroundColor = "#232323"; 
				
				}
				
				
			});
			
			//what to do if the HardButton is clicked
			hardButton.addEventListener("click", function(){
			
				hardButton.classList.add("easyHard");
				easyButton.classList.remove("easyHard");
				num = 6;
				//reset the colors array
				colors = generateRandomColors(num);
				
				//new random color
				pickedColor = pickRandomColor();
				
				//displayed color is changed
				colorDisp.textContent = pickedColor;
				
				//squares get new color
				squareColoring();
			
			});
			
			//add initial colors to squares	
			squareColoring();
			
			for(var i = 0; i< squares.length; i++){
				
				//squares[i].style.backgroundColor = colors[i];
				
				//add click listeners to squares
				squares[i].addEventListener("click", function(){
				
				//grab color of clicked square
				var clickedColor = this.style.backgroundColor;
				//compare color to pickedColor
				if(clickedColor === pickedColor){
					
					changeColors(clickedColor);
					messageDisp.textContent = "Correct!";
					resetButton.textContent = "Play Again?";
					
					
				}else{
					this.style.backgroundColor = "#232323";
					messageDisp.textContent = "Try Again";
				}
				
				});
			}
		//inital setting
		function Init(){
		
		
		}
			
		//change all squares to the clicked color
		function changeColors(color){
			if(num === 6){
				//loop through all the squares
				for(var k = 0; k < squares.length; k++){
				//change each color
				squares[k].style.backgroundColor = color;
				}
				h1.style.backgroundColor = color;
			}else{
				//loop through all the squares
				for(var k = 0; k <=2; k++){
				//change each color
				squares[k].style.backgroundColor = color;
				}
				h1.style.backgroundColor = color;
			
			}
		}
		//picking one color from colors array
		function pickRandomColor(){
		
		//a colors length-et bc the number of colors are changeable
			var random = Math.floor(Math.random()* colors.length);
			console.log(colors[random]);
			return colors[random];
			
		}
		//putting colors to the colors array
		function generateRandomColors(num){
			//make and array
			var arr = [];
			//add x random colors to the array
			for(var i  = 0; i < num; i++){
				
				arr[i] = randomColor();
				
			}
			//return with the array

			return arr;
				
		}
		//generate the rgba itself
		function randomColor(){
			//pick the red
				var one = Math.floor(Math.random() * 256);
			//pick the green
				var two = Math.floor(Math.random() * 256);
			//pick the blue
				var three = Math.floor(Math.random() * 256);
				
			var result = "rgb(" + one + ", " + two + ", " + three +")";	
			
			return result;
		}
		//gives new colors to the squares
		function squareColoring(){
			for(var i = 0; i < squares.length; i++){
					
				squares[i].style.backgroundColor = colors[i];
			}
			h1.style.backgroundColor = "steelblue";
			resetButton.textContent = "New Colors";
		}
		
		
		
		
		},500);