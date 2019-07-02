
let counter =0;
function task(val)
{   if (document.getElementById(val).innerHTML!="?")
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

}