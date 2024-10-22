function changeVideo(videoFile) {
    const video = document.getElementById('video');
    const source = document.getElementById('videoSource');
    source.src = videoFile;
    video.load();
    video.play();
}

