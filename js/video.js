var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	document.getElementById("player1").autoplay = false;
	document.getElementById("player1").loop = false;
	document.getElementById("player1").load();
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	var vid = document.getElementById("player1");
	document.getElementById('volume').innerHTML = document.getElementById("slider").value + "%";
	vid.play();
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	var vid = document.getElementById("player1");
	vid.pause();
});


document.querySelector("#slower").addEventListener("click", function() {
	document.getElementById("player1").playbackRate = document.getElementById("player1").playbackRate * 0.95;
	console.log("New speed is " + document.getElementById("player1").playbackRate);

});


document.querySelector("#faster").addEventListener("click", function() {
	document.getElementById("player1").playbackRate = document.getElementById("player1").playbackRate * 1.05;
	console.log("New speed is " + document.getElementById("player1").playbackRate);
});


document.querySelector("#skip").addEventListener("click", function() {
	var vid = document.getElementById("player1");
	if (vid.currentTime + 15 > vid.duration) {
		console.log("Original location is " + vid.currentTime + 15);
		console.log("Going back to beginning");
		vid.currentTime = 0;
	}
	else {
		vid.currentTime = vid.currentTime + 15;
	}
	console.log("New location is " + vid.currentTime);
});


document.querySelector("#slider").addEventListener("click", function() {
	var vid = document.getElementById("player1");
	document.getElementById('volume').innerHTML = document.getElementById("slider").value + "%";
	vid.volume = document.getElementById("slider").value / 100;
	console.log(vid.volume);
});


document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Selected");
	if (document.getElementById("player1").muted) {
		document.getElementById("player1").muted = false;
		document.getElementById('mute').innerHTML = 'Mute';
	}
	else {
		document.getElementById("player1").muted = true;
		document.getElementById('mute').innerHTML = 'Unmute';
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.getElementById("player1").classList.add("oldSchool");
	
});

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById("player1").classList.remove("oldSchool");
	
});
