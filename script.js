const data = {
    germanText:
    "Hier kommt der originale deutsche Text.",
    };
    
    document.getElementById("german-text").textContent =
    data.germanText;
    
    document.getElementById("ground-truth-audio").src =
    data.groundTruthAudio;
    
    document.getElementById("baseline-audio").src =
    data.baselineAudio;
    
    document.getElementById("our-audio").src =
    data.ourAudio;
    
    /* 自动暂停其它播放器 */
    
    const audioPlayers = document.querySelectorAll("audio");
    
    audioPlayers.forEach((audio) => {
    audio.addEventListener("play", () => {
    audioPlayers.forEach((otherAudio) => {
    if (otherAudio !== audio) {
    otherAudio.pause();
    otherAudio.currentTime = 0;
    }
    });
    });
    });
    