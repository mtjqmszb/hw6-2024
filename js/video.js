var video;

window.addEventListener("load", function () {
  console.log("Page loaded");

  // Get the video element
  video = document.querySelector("video");

  // Ensure the video element is found
  if (video) {
    console.log("Video element found:", video);

    // Add event listener for the "Old School" button
    const oldSchoolButton = document.querySelector("#vintage");
    oldSchoolButton.addEventListener("click", function () {
      	video.classList.add("oldSchool");
      	console.log("Applied 'oldSchool' class to the video element");
    });

    // Add event listener for the "Original" button
    const originalButton = document.querySelector("#orig");
    originalButton.addEventListener("click", function () {
      	video.classList.remove("oldSchool");
      	console.log("Removed 'oldSchool' class from the video element");
    });

    // Play Button functionality
    document.querySelector("#play").addEventListener("click", function () {
      	console.log("Play Video");
      	video.play();
    });

    // Pause Button functionality
    document.querySelector("#pause").addEventListener("click", function () {
      	console.log("Pause Video");
      	video.pause();
    });

    // Slow Down Button functionality
    document.querySelector("#slower").addEventListener("click", function () {
      	console.log("Slow Down Video");
      	video.playbackRate -= 0.1;
      	if (video.playbackRate < 0.1) {
        	video.playbackRate = 0.1;
      	}
      	console.log("New playback speed:", video.playbackRate);
    });

    // Speed Up Button functionality
    document.querySelector("#faster").addEventListener("click", function () {
      	console.log("Speed Up Video");
      	video.playbackRate += 0.1;
      	if (video.playbackRate > 5) {
        	video.playbackRate = 5;
      	}
      	console.log("New playback speed:", video.playbackRate);
    });

    // Skip Ahead Button functionality
    document.querySelector("#skip").addEventListener("click", function () {
      	console.log("Skip Ahead");
      	video.currentTime += 10;
      	if (video.currentTime >= video.duration) {
        	video.currentTime = 0;
        	console.log("Reached end of video, restarting from the beginning.");
      	}
      	console.log("Current time:", video.currentTime);
    });

    // Mute/Unmute Button functionality
    const muteButton = document.querySelector("#mute");
    muteButton.addEventListener("click", function () {
      	if (video.muted) {
        	video.muted = false;
        	muteButton.textContent = "Mute";
        	console.log("Unmuted video");
      	} else {
        	video.muted = true;
        	muteButton.textContent = "Unmute";
        	console.log("Muted video");
      	}
    });

    // Volume Slider functionality
    const volumeSlider = document.querySelector("#slider");
    const volumeDisplay = document.querySelector("#volume");

    volumeSlider.addEventListener("input", function () {
      	video.volume = volumeSlider.value / 100;
      	if (volumeDisplay) {
        	volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
      	}
      	console.log("Volume set to:", video.volume);
    });
  	} else {
    	console.error("Video element not found!");
  	}
	
	document.querySelector("#play").addEventListener("click", function () {
		console.log("Play Video");
		video.play();
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	});
	
});
