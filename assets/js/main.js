
//****************************************************************************
// Debugging helpers
// Greeting from StackOverflow :-)
const varToString = varObj => Object.keys(varObj)[0];
function debugVar(expr) {
    console.log(varToString(expr) + ": ", eval(expr));
}

const kjFactor = 4.18684;


let palTable = [
    { activity: "Schlafen", activityDetail: "Schlafen", factor: 0.95 },
    { activity: "Nur sitzend oder liegend", activityDetail: "Nur Sitzen oder Liegen", factor: 1.2 },
    { activity: "Sitzend, kaum aktiv", activityDetail: "Ausschließlich sitzende Tätigkeit mit wenig oder keiner körperlichen Aktivität in der Freizeit, z.B. Büroarbeit", factor: 1.5 },
    { activity: "Sitzend, gehend und stehend", activityDetail: "Sitzende Tätigkeit mit zeitweilig gehender oder stehender Tätigkeit, z.B. Studierende, Fließbandarbeiter, Laboranten, Kraftfahrer", factor: 1.7 },
    { activity: "Vorwiegend stehend/gehend", activityDetail: "Überwiegend gehende oder stehende Tätigkeit, z.B. Verkäufer, Kellner, Handwerker, Mechaniker, Hausfrauen", factor: 1.9 },
    { activity: "Anstrengende Arbeit/Sport", activityDetail: "Körperlich anstrengende berufliche Arbeit", factor: 2.2 }
];

initialize();



function initialize() {
    palTable.forEach(entry => {
        document.getElementById("selectActivity").innerHTML +=
            `<option value="${entry.factor}">${entry.activity}</option>`;
    });
}


calculateCalories = () => {
    let height = document.getElementById("numHeight").value;
    let age = document.getElementById("numAge").value;
    let weight = document.getElementById("numWeight").value;
    let isFemale = document.getElementById("radioFemale").checked;
    let factor = document.getElementById("selectActivity").value;

    let base;

    if (isFemale) {
        base = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    } else {
        base = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
        // base = 66.5 + (13.75 * weight) + (5 * height) - (6.76 * age);
    }
    debugVar({ base });

    document.getElementById("baseKCal").innerHTML = Math.floor(base);
    document.getElementById("baseKJ").innerHTML = Math.floor(base * kjFactor);

    document.getElementById("totalKCal").innerHTML = Math.floor(base * factor);
    document.getElementById("totalKJ").innerHTML = Math.floor(base * kjFactor * factor);

}