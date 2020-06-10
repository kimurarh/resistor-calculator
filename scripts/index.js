function getIndex(formId, parameterId) {
    var form = document.getElementById(formId);
    return form.value;
    //return colorIndex = form.options[form.selectedIndex].text;
}

function calculateResistor() {
    var digit = (getIndex("colorOne", "parameter1") + getIndex("colorTwo", "parameter2") + getIndex("colorThree", "parameter3")) * (getIndex("colorFour", "parameter4"));

    var multi = "";

    if(digit > 1000000000) {
        digit = digit / 1000000000;
        multi = "G";
    } else if(digit > 1000000) {
        digit = digit / 1000000;
        multi = "M";
    } else if(digit > 1000) {
        digit = digit / 1000;
        multi = "k";
    }

    // round number to 2 decimal places
    digit = Math.round(digit * 100) / 100;

    var tolTemp = ", " + getIndex("colorFive", "parameter5") + ", " + getIndex("colorSix", "parameter6");

    document.getElementById("resistorValue").innerHTML = digit + multi + " Ohms" + tolTemp; 
}

function changeColorDigit(formId, parameterId) {
    var txtColor = "";
    switch (getIndex(formId, parameterId)) {
        case '0': 
            color = '#000000'; /* Black */
            break;
        case '1':
            color = '#a52c2c'; /* Brown */
            break;
        case '2':
            color = '#ff0000'; /* Red */
            break;
        case '3':
            color = '#ffa500'; /* Orange */
            txtColor = '#000000';
            break;
        case '4': 
            color = '#ffff00'; /* Yellow */
            txtColor = '#000000';
            break;
        case '5':
            color = '#00b250'; /* Green */
            txtColor = '#000000';
            break;
        case '6':
            color = '#0071c2'; /* Blue */
            break;
        case '7':
            color = '#ff00ff'; /* Violet */
            break;
        case '8':
            color = '#717171'; /* Grey */
            break;
        case '9':
            color = '#ffffff'; /* White */
            txtColor = '#000000';
            break;
        default:
            color = '#fff2ca';  /* resistor body color*/
    }
    document.getElementById(parameterId).style.backgroundColor = color;
    document.getElementById(formId).style.backgroundColor = color;
    if(txtColor != "") {
        document.getElementById(formId).style.color = txtColor;
    } else {
        document.getElementById(formId).style.color = '#ffffff';
    }
    calculateResistor();
}

    function changeColorMultiplier(formId, parameterId) {
    var txtColor = "";
    switch (getIndex(formId, parameterId)) {
        case '0.01': 
            color = '#dadada'; /* Silver */
            txtColor = '#000000';
            break;
        case '0.1':
            color = '#e2d600'; /* Gold */
            txtColor = '#000000';
            break;
        case '1': 
            color = '#000000'; /* Black */
            break;
        case '10':
            color = '#a52c2c'; /* Brown */
            break;
        case '100':
            color = '#ff0000'; /* Red */
            break;
        case '1000':
            color = '#ffa500'; /* Orange */
            txtColor = '#000000';
            break;
        case '10000': 
            color = '#ffff00'; /* Yellow */
            txtColor = '#000000';
            break;
        case '100000':
            color = '#00b250'; /* Green */
            txtColor = '#000000';
            break;
        case '1000000':
            color = '#0071c2'; /* Blue */
            break;
        case '10000000':
            color = '#ff00ff'; /* Violet */
            break;
        default:
            color = '#fff2ca'; /* resistor body color*/
    }
    document.getElementById(parameterId).style.backgroundColor = color;
    document.getElementById(formId).style.backgroundColor = color;
    if(txtColor != "") {
        document.getElementById(formId).style.color = txtColor;
    } else {
        document.getElementById(formId).style.color = '#ffffff';
    }
    calculateResistor();
}

function changeColorTolerance(formId, parameterId) {
    var txtColor = "";
    switch (getIndex(formId, parameterId)) {
        case '10%': 
            color = '#dadada'; /* Silver */
            txtColor = '#000000';
            break;
        case '5%':
            color = '#e2d600'; /* Gold */
            txtColor = '#000000';
            break;
        case '1%':
            color = '#a52c2c'; /* Brown */
            break;
        case '2%':
            color = '#ff0000'; /* Red */
            break;
        case '0.5%':
            color = '#00b250'; /* Green */
            txtColor = '#000000';
            break;
        case '0.25%':
            color = '#0071c2'; /* Blue */
            break;
        case '0.1%':
            color = '#ff00ff'; /* Violet */
            break;
        case '0.05%':
            color = '#717171'; /* Grey */
            break;
        default:
            color = '#fff2ca'; /* resistor body color*/
    }
    document.getElementById(parameterId).style.backgroundColor = color;
    document.getElementById(formId).style.backgroundColor = color;
    if(txtColor != "") {
        document.getElementById(formId).style.color = txtColor;
    } else {
        document.getElementById(formId).style.color = '#ffffff';
    }
    calculateResistor();
}

function changeColorTemperature(formId, parameterId) {
    var txtColor = ""
    switch (getIndex(formId, parameterId)) {
        case '100ppm':
            color = '#a52c2c'; /* Brown */
            break;
        case '50ppm':
            color = '#ff0000'; /* Red */
            break;
        case '15ppm':
            color = '#ffa500'; /* Orange */
            txtColor = '#000000';
            break;
        case '25ppm': 
            color = '#ffff00'; /* Yellow */
            txtColor = '#000000';
            break;
        default:
            color = '#fff2ca'; /* resistor body color*/
    }
    document.getElementById(parameterId).style.backgroundColor = color;
    document.getElementById(formId).style.backgroundColor = color;
    if(txtColor != "") {
        document.getElementById(formId).style.color = txtColor;
    } else {
        document.getElementById(formId).style.color = '#ffffff';
    }
    calculateResistor();
}

changeColorDigit("colorOne", "parameter1");
changeColorDigit("colorTwo", "parameter2");
changeColorDigit("colorThree", "parameter3");
changeColorMultiplier("colorFour", "parameter4");
changeColorTolerance("colorFive", "parameter5");
changeColorTemperature("colorSix", "parameter6");