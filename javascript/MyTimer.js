

var timeoutLength = 10000;

startTimer();

	function startTimer (){

		//HTML generated for the pop up
		var myTimer = setTimeout(function() {

		var myDiv = document.createElement('div');
		myDiv.className = 'dialog';

		var myDiv1 = document.createElement('div');
		myDiv1.className = 'dialog-container';
		myDiv.appendChild(myDiv1);

		var myDiv2 = document.createElement('div');
		myDiv2.className = 'dialog-label';
		myDiv2.innerText = 'Request Timeout';
		myDiv1.appendChild(myDiv2);

		var myP = document.createElement('p');
		myP.innerText = 'You have been in this website for 10 seconds. Click Continue to browse our website; otherwise click Cancel and go to Google.';
		myDiv1.appendChild(myP);

		document.body.appendChild(myDiv);

		//Modal - Done Button
		var doneButton = document.createElement('button');
		doneButton.className = 'done-dialog';
		doneButton.innerText = 'Continue';
		doneButton.id = 'doneButton';
		myDiv1.appendChild(doneButton);

		//Modal - Cancel Button
		var cancelButton = document.createElement('button');
		cancelButton.className = 'cancel-dialog';
		cancelButton.innerText = 'Cancel';
		cancelButton.id = 'cancelButton';
		myDiv1.appendChild(cancelButton);


		//Done Button onclick listener
		doneButton.onclick = function() {
			removeElementsByClass('dialog');
			clearTimeout(myTimer);
			startTimer();
		};

		//Cancel Button onclick listener
		cancelButton.addEventListener('click', function(){window.location = "http://www.google.com/";
		});
	}, timeoutLength)
}

//Function to stay in the current webpage if continue button is clicked
removeElementsByClass = function(className) {
	elements = document.getElementsByClassName(className);

	while (elements.length > 0) {
		elements[0].parentNode.removeChild(elements[0]);
	}
}


