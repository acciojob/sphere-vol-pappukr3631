function volume_sphere() {
    //Write your code here
	let r = document.getElementById("radius").value;
	let v = document.getElementById("volume");
	// r.value = "Rad";
	let vol = (4/3)*(22/7)*(r**3);

	v.value = vol;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
