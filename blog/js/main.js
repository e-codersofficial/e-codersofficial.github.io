egg = document.querySelector(".easter-egg");
egg.style.display = "none";
document.onkeydown = (e) => {
    if(e.key === 'Tab') {
        egg.style.display = "block";
        console.clear();
    }
    else{
    	egg.remove()
    	console.clear();
    }
    document.onclick = (e) => {
    	egg.remove();
    	console.clear();
    }
}