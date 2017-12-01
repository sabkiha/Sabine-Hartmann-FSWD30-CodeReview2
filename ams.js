		function amsterdam() {
				var values = [1500, 500, 1800, 700];
				var sum = values.reduce((previous, current) => current += previous);
				var avgA = sum / values.length;
				var avgANum = Number(avgA);	
			document.getElementById("ams").innerHTML = avgANum			
			}	
			amsterdam();

