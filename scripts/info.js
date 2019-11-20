var flag=true;
var flag2=true;
var flag3=true;
var flag4=true;
function displayAnswer1(){
    
    if(flag){
    document.getElementById('one').style.display="block";
        flag=false;
    } else {
        document.getElementById('one').style.display="none";
        flag=true;
    }
}

function displayAnswer2(){
    
    if(flag2){
    document.getElementById('two').style.display="block";
        flag2=false;
    } else {
        document.getElementById('two').style.display="none";
        flag2=true;
    }
}

function displayAnswer3(){
    
    if(flag3){
    document.getElementById('three').style.display="block";
        flag3=false;
    } else {
        document.getElementById('three').style.display="none";
        flag3=true;
    }
}

function displayAnswer4(){
    
    if(flag4){
    document.getElementById('four').style.display="block";
        flag4=false;
    } else {
        document.getElementById('four').style.display="none";
        flag4=true;
    }
}

function dispinfo(){
    document.getElementById('moreinfo').style.display='block';
    document.getElementById('infolink').style.display="none";
}