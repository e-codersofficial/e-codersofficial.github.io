f = document.querySelector("#ads");
c = f.innerHTML;
if(c.includes("<!--NO-->")){
	f.innerHTML = "<span class='red'>There are no posts, posted by the admin.";
}