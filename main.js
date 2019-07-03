
let counter =0;
function task(val)
{   if (document.getElementById(val).innerHTML !="?")
{
    return false;
}

    if(document.getElementById(val).innerHTML=="?"){
        if(counter%2==0)
        {
            document.getElementById(val).innerHTML="X"
            counter++
        }
        else if(counter%2 !=0)
        {
            document.getElementById(val).innerHTML="0"
            counter++
        }

    }
    won()

}

function restart(){
    var ids = ["1","2","3","4","5","6","7","8","9"];
    ids.map((data,i)=>{
        document.getElementById(data).innerHTML="?"
    })
}


function won(){
    if((document.getElementById("1").innerHTML == "X" &&
    document.getElementById("2").innerHTML == "X" &&
    document.getElementById("3").innerHTML == "X")||(document.getElementById("4").innerHTML == "X" &&
    document.getElementById("5").innerHTML == "X" &&
    document.getElementById("6").innerHTML == "X")||(document.getElementById("7").innerHTML == "X" &&
    document.getElementById("8").innerHTML == "X" &&
    document.getElementById("9").innerHTML == "X")||(document.getElementById("1").innerHTML == "X" &&
    document.getElementById("4").innerHTML == "X" &&
    document.getElementById("7").innerHTML == "X")||(document.getElementById("2").innerHTML == "X" &&
    document.getElementById("5").innerHTML == "X" &&
    document.getElementById("8").innerHTML == "X")||(document.getElementById("3").innerHTML == "X" &&
    document.getElementById("6").innerHTML == "X" &&
    document.getElementById("9").innerHTML == "X")||(document.getElementById("1").innerHTML == "X" &&
    document.getElementById("5").innerHTML == "X" &&
    document.getElementById("9").innerHTML == "X")||(document.getElementById("3").innerHTML == "X" &&
    document.getElementById("5").innerHTML == "X" &&
    document.getElementById("7").innerHTML == "X")){
        alert("X won")
        restart();
    }

    else if((document.getElementById("1").innerHTML == "X" &&
    document.getElementById("2").innerHTML == "0" &&
    document.getElementById("3").innerHTML == "0")||(document.getElementById("4").innerHTML == "0" &&
    document.getElementById("5").innerHTML == "0" &&
    document.getElementById("6").innerHTML == "0")||(document.getElementById("7").innerHTML == "0" &&
    document.getElementById("8").innerHTML == "0" &&
    document.getElementById("9").innerHTML == "0")||(document.getElementById("1").innerHTML == "0" &&
    document.getElementById("4").innerHTML == "0" &&
    document.getElementById("7").innerHTML == "0")||(document.getElementById("2").innerHTML == "0" &&
    document.getElementById("5").innerHTML == "0" &&
    document.getElementById("8").innerHTML == "0")||(document.getElementById("3").innerHTML == "0" &&
    document.getElementById("6").innerHTML == "0" &&
    document.getElementById("9").innerHTML == "0")||(document.getElementById("1").innerHTML == "0" &&
    document.getElementById("5").innerHTML == "0" &&
    document.getElementById("9").innerHTML == "0")||(document.getElementById("3").innerHTML == "0" &&
    document.getElementById("5").innerHTML == "0" &&
    document.getElementById("7").innerHTML == "0")){
        alert("0 won")
        restart();
    }
}