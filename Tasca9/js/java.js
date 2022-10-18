let days =  [31,28,31,30,31,30,31,30,31,30,31,30];
let mouth = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
let mouthEN =['January', 'February','March','April','May','June','July','August','September','October','November','December'];
let year = 2022;
var dates = new Array(5)
var sortRam = []

function randomDates(){
  
    //para obtener el código de la tabla selección 
    var CurrentLenguage = document.getElementById('dropdown');
    var code = CurrentLenguage.value;
   

    //Ordenamos la posiciones de los meses
    for (var i=0;i <= 4;i++){
        var ram = Math.round(Math.random()*11);
        sortRam[i] = ram;
     
    
        sortRam.sort(function(a, b) {
            return a - b;
          });
    }
    //de pendiendo del code Language que sea se traducira 
    for( var k=0;k<=4;k++){
        
        if(code == "es"){
        var mouthindex = mouth[sortRam[k]];
        } else {
        mouthindex = mouthEN[sortRam[k]];

        }
        var daysN = days[sortRam[k]];
       
        var daysRam = Math.floor(Math.random()*(daysN-1)+1)
    
        dates[k] = [parseInt(daysRam)+" de "+mouthindex+" "+year]//imprimimos
    }
    
    //Mostramos por el index el resultado
    for (var j=0;j<=dates.length-1;j++){
        document.getElementById("date").innerHTML += dates[j]+" "+"\n";
       
    }
  
   
          
}