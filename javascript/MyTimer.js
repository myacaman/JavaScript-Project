
var timeoutLength = 10000;

var dialogDiv = buildDialogDiv();

function buildDialogDiv(){
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
    myP.innerText = 'You have been in this website for 10 seconds. Click Continue to keep browsing our site; otherwise click Cancel and go to Google.';
    myDiv1.appendChild(myP);


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


    //Bind Done Button onclick listener
    doneButton.onclick = doneClicked;

    //Bind Cancel Button onclick listener
    cancelButton.onclick = cancelClicked;

    return myDiv;
}


function cancelClicked()
{
    window.location = "http://www.google.com/";
}

function doneClicked()
{
    removeElementsByClass('dialog');
    startTimer();
}

function startTimer ()
{
    //HTML generated for the pop up
    setTimeout(function()
    {
        document.body.appendChild(dialogDiv);

    }, timeoutLength)
}

//Function to stay in the current webpage if continue button is clicked
function removeElementsByClass(className) {
	elements = document.getElementsByClassName(className);

	while (elements.length > 0) {
		elements[0].parentNode.removeChild(elements[0]);
	}
}

//start the first timer of the page
startTimer();