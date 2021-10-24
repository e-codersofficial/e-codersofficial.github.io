// File Removed. No Longer needed.
document.getElementById("btns").remove();

console.info("Contributors are:");
let contributors = ['','',''];

contributors[0] = {
    "Name": "Aasheesh",
    "Rank": "Owner",
    "Resources": "Code, Bug, Ideas, Design, Documenation, Project Management, Tool",
    "Things": ""
}

contributors[1] = {
    "Name": "Google",
    "Rank": "Curator",
    "Resources": "Code, Design",
    "Things": "Google Material Design Animated Box & Google Fonts"
}

contributors[2] = {
    "Name": "Tailwind Labs",
    "Rank": "Curator",
    "Resources": "Code, Design",
    "Things": "News Theme"
}

console.table(contributors[0]);
console.table(contributors[1]);
console.table(contributors[2]);