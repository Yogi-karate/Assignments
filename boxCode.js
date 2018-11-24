var numList = [];

function removeBox() {
    numList.pop();
	var myNode = document.getElementById("boxContainer");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
	document.getElementById('boxContainer').appendChild(makeUL(numList));
	if(numList.length == 0)
	{
	document.getElementsByClassName("msg")[0].style.display = "block";
	}
	else
	{
	document.getElementsByClassName("msg")[0].style.display = "none";
	}
}
function addBox() {
    var x = numList.length + 1;
    numList.push(x);
	var myNode = document.getElementById("boxContainer");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
	document.getElementById('boxContainer').appendChild(makeUL(numList));
	if(numList.length == 0)
	{
	document.getElementsByClassName("msg")[0].style.display = "block";
	}
	else
	{
	document.getElementsByClassName("msg")[0].style.display = "none";
	}
}

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('div');
    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('p');
        // Set its contents:
		item.style.marginTop = "5px";
        item.appendChild(document.createTextNode(array[i]));
		if(i%2==0)
		{
        item.classList.add("even");
		
		}
		else
		{
		item.classList.add("odd");
		}
		var j = i-4;
		if(j%5==0)
		{
		item.classList.add("fifth");
		}
        // Add it to the list:
        list.appendChild(item);
    }
	if(numList.length!=0)
	{
	var no = document.createElement('h1');
   no.appendChild(document.createTextNode(array[array.length-1]));
   no.style.marginTop = "-4px";
   no.style.marginLeft = "10%";
    var ex = 20;
    var en = array[array.length-1] * 5;
    no.style.fontSize = ex + en + "px";
   list.appendChild(no);
   }
    // Finally, return the constructed list:
    return list;
}
document.getElementById('boxContainer').appendChild(makeUL(numList));
