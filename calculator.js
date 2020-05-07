//numbers
var one = document.querySelector("#one").value;
var two = document.querySelector("#two").value;
var three = document.querySelector("#three").value;
var four = document.querySelector("#four").value;
var five = document.querySelector("#five").value;
var six = document.querySelector("#six").value;
var seven = document.querySelector("#seven").value;
var eight = document.querySelector("#eight").value;
var nine = document.querySelector("#nine").value;
var zero = document.querySelector("#zero").value;
//opperator
var dot = document.querySelector("#dot").value;
var by = document.querySelector("#by").value;
var intu = document.querySelector("#intu").value;
var plus = document.querySelector("#plus").value;
var mines = document.querySelector("#mines").value;
//outputer
var equal = document.querySelector("#equal");
var clear = document.querySelector("#clear").value;

const Tpad = document.querySelector("#holder");
var calValu;
var c;
function putting( number ) {
    if ( number * 0 === 0 ) {
        Tpad.value = Tpad.value + number;
        c = Tpad.value;
    } else {
        Tpad.value = Tpad.value + number;
    }
}
function calculate() {
    c = eval(Tpad.value);
    Tpad.value = c;
}
function cleared() {
        Tpad.value = '';
    }
//gritting section;

var Name = document.querySelector("#gritting");
var Input = document.querySelector("#input");
var Wraper = document.querySelector("#wraper");
var Gritting = document.querySelector("#gritting");
var CalcSection = document.querySelector("#CalcSection");
var warning = document.querySelector("#warning");

function gritting(){

    if (Input.value !== "") {
        Name.innerHTML = `hi ${Input.value}!`;
        Wraper.style.visibility =  "hidden";
        Gritting.style.visibility =  "visible";
        CalcSection.style.visibility =  "visible";
    }else{
        warning.style.visibility =  "visible";
    }
}
