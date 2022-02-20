
function confirm_reset() {
    return confirm("¿Estás seguro de borrar todos los datos?");
}


function infoValoracion(){  
    var puntos = document.getElementById("statistics__bar").value; 
    alert('Has valorado con ' + puntos + ' puntos.');

}  

function cuentaBancaria(){  
    var pais = document.getElementById("pais").value; 
    var iban = document.getElementById("iban").value; 
    var entidad = document.getElementById("entidad").value; 
    var sucursal = document.getElementById("sucursal").value; 
    var dc = document.getElementById("dc").value; 
    var cuenta = document.getElementById("cuenta").value; 

    alert('Le informamos de que su cuenta bancaria es ' + pais + '-' + iban + '-' + entidad + '-' + sucursal + '-' + dc + '-' + cuenta );

}  


/*function dateName(){
    var fecha = document.getElementById("fecha").value; 
    let day = fecha.getDay()

    alert('Le informamos de que su cuenta bancaria es ' + day );
}*/

