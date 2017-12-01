/*	amsterdam = [1500, 500, 1800, 700] Average 1125
	london = [2500, 1500, 1000, 900] Average 1475

	calculate the average price for each city and 
	display it above the "average price" texts. Next, 
	based on the average price per city calculate the 
	difference between them and display it within the 
	blue rounded rectangle.*/

		function difference() {
				var values1 = [1500, 500, 1800, 700];
				var sum = values1.reduce((previous, current) => current += previous);
				var avgA = sum / values1.length;
				var avgANum = Number(avgA);

				var values2 = [2500, 1500, 1000, 900];
				var sum = values2.reduce((previous, current) => current += previous);
				var avgL = sum / values2.length;
				var avgLNum = Number(avgL);

		return avgLNum - avgANum;

	
	}
		document.getElementById("priceDifference").innerHTML = (difference() + " €");





