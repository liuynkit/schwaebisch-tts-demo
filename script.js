const data = {
    germanText: "Die meisten mögen wohl nach Westen blicken, um sich an dem lichten Grün der Marschen und darüberhin an der Silberflut des Meeres zu ergötzen, auf welcher das Schattenspiel der langgestreckten Insel schwimmt. Meine Augen wenden unwillkürlich sich nach Norden, wo kaum eine Meile fern der graue Spitzkirchturm aus dem höher belegenen, aber öden Küstenlande aufsteigt, denn dort liegt eine von den Stätten meiner Jugend.",
    groundTruthAudio: "audio/hochdeutsch_ground_truth.wav",
    baselineAudio: "audio/baseline_schwaebisch_output.wav",
    ourAudio: "audio/our_schwaebisch_output.wav"
};

document.getElementById("german-text").textContent = data.germanText;

document.getElementById("ground-truth-audio").src = data.groundTruthAudio;
document.getElementById("baseline-audio").src = data.baselineAudio;
document.getElementById("our-audio").src = data.ourAudio;

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