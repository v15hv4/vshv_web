var slideCounter = 0;

function carPrev() {
	switch(slideCounter) {
		case 0:
			document.getElementById('carousel_bs').style.display = "none";
			document.getElementById('carousel_px').style.display = "none";
			document.getElementById('carousel_web').style.display = "block";
			break;
		case 1:
			document.getElementById('carousel_bs').style.display = "block";
			document.getElementById('carousel_px').style.display = "none";
			document.getElementById('carousel_web').style.display = "none";
			break;
		case 2:
			document.getElementById('carousel_bs').style.display = "none";
			document.getElementById('carousel_px').style.display = "block";
			document.getElementById('carousel_web').style.display = "none";
			break;
	}
	if(slideCounter == 0)
		slideCounter = 2;
	else
		slideCounter--;
}

function carNext() {
	switch (slideCounter) {
		case 0:
			document.getElementById('carousel_bs').style.display = "none";
			document.getElementById('carousel_px').style.display = "block";
			document.getElementById('carousel_web').style.display = "none";
			break;
		case 1:
			document.getElementById('carousel_bs').style.display = "none";
			document.getElementById('carousel_px').style.display = "none";
			document.getElementById('carousel_web').style.display = "block";
			break;
		case 2:
			document.getElementById('carousel_bs').style.display = "block";
			document.getElementById('carousel_px').style.display = "none";
			document.getElementById('carousel_web').style.display = "none";
			break;
	}
	if(slideCounter == 2)
		slideCounter = 0;
	else
		slideCounter++;
}