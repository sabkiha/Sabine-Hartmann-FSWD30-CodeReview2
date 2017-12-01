function london() {
				var values = [2500, 1500, 1000, 900];
				var sum = values.reduce((previous, current) => current += previous);
				var avgL = sum / values.length;
				var avgLNum = Number(avgL);
				document.getElementById("lon").innerHTML = avgLNum
			}
			london();
