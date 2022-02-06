const textList = ["Learn about the topics that affect you", "Meet your Reps and make your voice heard", "Stay up to date about the events in your area", "Create a change"];
const cycle = document.querySelector("#cycle");
let i = 0;
const cycleText = () => {
    cycle.innerHTML = textList[i];
    i = ++i % textList.length;
};
cycleText();
setInterval(cycleText, 3000);