window.onload=function(){
document.getElementById("boton").onclick=Bono;   
};

function Bono()
{
    var antiguedad = document.getElementById("antiguedad").value;
    var sueldo = document.getElementById("sueldo").value;
    

    if(antiguedad>=5)
    {
        alert( "Su bono es de: 30%")
    }
    else if(antiguedad>=2&&antiguedad<5)
    {
        alert( "Su bono es de: 20%")
    }
    else if(sueldo>=1000&&sueldo<=3500)
    {
       alert( "Su bono es de: 15%")
    }
    else if(sueldo >3500)
    {
        alert( "Su bono es de: 10%")
    }
    else 
    {
        alert( "Su bono es de: 25%")
    }


       
    
}