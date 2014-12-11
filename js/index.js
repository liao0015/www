
var myList = [];


//document.addEventListener("DOMContentLoaded", onDeviceReady, false);
document.addEventListener('deviceready', onDeviceReady, false);

	function onDeviceReady () {
	console.log("page loaded");
  	if(localStorage.getItem("grocery-liao0015")){
    	myList = JSON.parse(localStorage.getItem("grocery-liao0015"));
  	}
		showList();
		var btnAdd = document.querySelector("#btnAdd");
		btnAdd.addEventListener("click", btnAdd_click);    			
	}

	function btnAdd_click (ev) {
		ev.preventDefault();
    	var newItem = document.querySelector("#item").value;
		if(newItem.trim() != ""){
			myList.push( newItem );
			localStorage.setItem("grocery-liao0015", JSON.stringify(myList) );
		} else {
			alert("Nothing to add!");
		}
    		showList();
    		return false;
	}

	function removeItem(ev){
		var txt = ev.currentTarget.parentNode.firstChild.nodeValue;
		if (ev.currentTarget.previousSibling.firstChild.checked == true) {
			for(var i=0;i<myList.length;i++){
				if(myList[i] == txt){
				myList.splice(i, 1);
				} 
  			}
			localStorage.setItem("grocery-liao0015", JSON.stringify(myList) );
			showList();
		}else {
			alert ("You must select before you can delete");
		}
	}

	function showList(){
		var ul = document.querySelector("ul");
  		ul.innerHTML = "";
		
  		for(var i=0;i<myList.length;i++){
			//checkbox created
			var form = document.createElement("form");
			var checkBox = document.createElement("input");
			checkBox.setAttribute ("type","checkbox");
			checkBox.setAttribute ("class","mycheck");
			form.appendChild(checkBox);
			
			//delete button created
			var deleteBtn = document.createElement("button");
			deleteBtn.setAttribute ("class","delbtn");
			var del = document.createTextNode("Delete");
			deleteBtn.appendChild(del);
			
			//item from local storage
    		var li = document.createElement("li");
    		li.innerHTML = myList[i];
			li.appendChild(form);
			li.appendChild(deleteBtn);
			ul.appendChild(li);
			
			deleteBtn.addEventListener("click", removeItem);
  		}
   }




