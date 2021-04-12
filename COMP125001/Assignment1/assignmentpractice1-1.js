//Imperial

var gender = null;
var age = null;

var feet = null;
var inches = null;

var stones = null;
var pounds = null;

var imperialActicity = null;

var imperialResults = null;
var imperialEnergy = null;

$("#btnCalculate").submit(function (e) {
    e.preventDefault();
});


function calculateImperial() {
    getImperial();
    imperialResults = getImperialResults();
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

function imperialResults() {

    var results = null;

    poundsCalculate = convertStonesToPounds();
    weight = poundsCalculate + pounds;

    inchesCalculate = convertFeetToInches();
    height = inchesCalculate + feet;

    if (gender === "Male") {
        results = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);

        return results;
    }
    if (gender === "Female") {
        results = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
        return results;
    }
}

function convertStonesToPounds() {
    return stones * 14;
}

function convertFeetToInches() {
    return feet * 12;
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
    $("#SelectGender").val('Male');
    $("#numAge").val('0');

    $("#numFeet").val('0');
    $("#numInches").val('0');

    $("#numStones").val('0');
    $("#numPounds").val('0');

    $(".radioActivityLevel").prop('checked', false);

    gender = null;
    age = null;

    feet = null;
    inches = null;

    stones = null;
    pounds = null;

    imperialActicity = null;

    imperialResults = null;
    imperialEnergy = null;
}
