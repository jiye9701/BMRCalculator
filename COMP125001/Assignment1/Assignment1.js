var gender = 0;
var age = 0;


var centimetres = 0;
var kilograms = 0;

var metricActicity = 0;

var metricResults = 0;
var metricEnergy = 0;

$("#btnCalculate").click(function (e) {
    e.preventDefault();
});

function calculateMetric() {
    getMetric();
    metricResults = getResults();
    metricEnergy = getEnergyExpend();
    console.log(metricResults);
    console.log(metricEnergy);
    outputMetric();
    totalMetric();
}

function getMetric() {
    gender = $("#SelectGender").val();
    age = $("#numAge").val();

    centimetres = $("#numCentimetres").val();
    kilograms = $("#numKilograms").val();

    metricActicity = $('input[name="radioActivityLevel"]:checked').val();
}

function getResults() {
    var results;

    if (gender === "M") {
        return results = 66.5 + (13.75 * kilograms) + (5.003 * centimetres) - (6.755 * age);
    }

    if (gender === "F") {
        return results = 655 + (9.563 * kilograms) + (1.850 * centimetres) - (4.676 * age);
    }
}

function getEnergyExpend() {
    if (metricActicity === "SedentaryLightAct") {
        return metricResults * 1.53;
    }

    if (metricActicity === "ModAct") {
        return metricResults * 1.76;
    }

    if (metricActicity === "VigAct") {
        return metricResults * 2.25;
    }
}

function outputMetric() {
    $("#numTotal").val(metricResults);
    $("#numEnergy").val(metricEnergy);
}

function totalMetric() {
    $("#SelectGender").val('');
    $("#numAge").val('');

    $("#numCentimetres").val('');
    $("#numKilograms").val('');



    $("input[name='radioActivityLevel']").prop("checked", false);

    centimetres = 0;
    kilograms = 0;
    metricActicity = 0;
    metricResults = 0;
    metricEnergy = 0;
}

//Imperial


var feet = 0;
var inches = 0;

var stones = 0;
var pounds = 0;

var imperialActicity = 0;

var imperialResults = 0;
var imperialEnergy = 0;

$("#btnCalculate").submit(function (e) {
    e.preventDefault();
});


function calculateImperial() {
    getImperial();
    imperialResults = getResults2();
    imperialEnergy = getImperialEnergyExpend();
    outputImperial();
    totalImperial();
}

function getImperial() {
    gender = $("#SelectGender").val();
    age = $("#numAge").val();

    feet = $("#numFeet").val();
    inches = $("#numInches").val();

    stones = $("#numStones").val()
    pounds = $("#numPounds").val()

    imperialActicity = $('input[name="radioActivityLevel"]:checked').val();
}

function convertStonesToPounds() {
    return stones * 14;
}

function convertFeetToInches() {
    return feet * 12;
}

function getResults2() {

    var results2=0;

var poundsCalculate = convertStonesToPounds()

var weight = poundsCalculate + pounds;

var inchesCalculate = convertFeetToInches();
var height = inchesCalculate + feet;

    if (gender === "M") {

        results2 = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);

        return results2;
    }
    if (gender === "F")
    {
        results2 = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
        return results2;
    }
}



function outputImperial() {
    $("#numTotal").val(imperialResults);
    $("#numEnergy").val(imperialEnergy);
}

function getImperialEnergyExpend() {
    if (imperialActicity === "SedentaryLightAct") {
        return imperialResults * 1.53;
    }

    if (imperialActicity === "ModAct") {
        return imperialResults * 1.76;
    }

    if (imperialActicity === "VigAct") {
        return imperialResults * 2.25;
    }
}

function totalImperial() {
    $("#SelectGender").val('');
    $("#numAge").val('');

    $("#numFeet").val('');
    $("#numInches").val('');

    $("#numStones").val('');
    $("#numPounds").val('');

    $("input[name='radioActivityLevel']").prop("checked", false);


    feet = 0;
    inches = 0;
    stones = 0;
    pounds = 0;
    imperialActicity = 0;
    imperialResults = 0;
    imperialEnergy = 0;
}



