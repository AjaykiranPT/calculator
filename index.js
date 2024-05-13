function buttonClicked(elem){
    dis=document.getElementById("displayValue");
    dis.value=dis.value+elem
}
function clearClicked(){
    dis=document.getElementById("displayValue");
    dis.value='';
}
function calculate(){
    dis=document.getElementById("displayValue");
    try{
        dis.value= eval(dis.value);
    }
    catch(err){
        alert('Invalid')
    }
}
function deleteClicked(){
    dis=document.getElementById("displayValue");
    dis.value=dis.value.slice(0,-1);
}