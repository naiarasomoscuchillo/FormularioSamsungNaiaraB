var provinceCodes = new Map ([ [01, "alava"], [02,"albacete"], [03,"alicante"], [04,"almeria"], [05,"avila"], [06,"badajoz"], [07,"islas baleares"], [08,"barcelona"],  [09,"burgos"], [10,"caceres"], [11,"cadiz"], [12,"castellon"],  [13,"ciudad real"], [14,"cordoba"], [15,"a coruñna"], [16,"cuenca"],  [17,"gerona"], [18,"granada"], [19,"guadalajara"], [20,"guipuzcoa"],  [21,"huelva"], [22,"huesca"], [23,"jaen"], [24,"leon"],  [25,"lleida"], [26,"la rioja"], [27,"lugo"], [28,"madrid"], [29,"malaga"], [30,"murcia"], [31,"navarra"], [32,"orense"], [33,"asturias"], [34,"palencia"], [35,"las palmas"], [36,"pontevedra"],  [37,"salamanca"], [38,"santa cruz de tenerife"], [39,"cantabria"], [40,"segovia"], [41,"sevilla"], [42,"soria"], [43,"tarragona"], [44,"teruel"], [45,"toledo"], [46,"valencia"], [47,"valladolid"], [48,"vizcaya"], [49,"zamora"], [50,"zaragoza"], [51,"ceuta"], [52,"melilla"] ]);
var provinces = ["alava", "albacete", "alicante", "almeria", "avila", "badajoz","islas baleares", "barcelona", "burgos", "caceres", "cadiz", "castellon", "ciudad real", "cordoba", "a coruñna", "cuenca", "gerona", "granada", "guadalajara", "guipuzcoa", "huelva", "huesca", "jaen", "leon", "lleida", "la rioja", "lugo", "madrid", "malaga", "murcia", "navarra", "orense", "asturias", "palencia", "las palmas", "pontevedra" ,"salamanca", "santa cruz de tenerife", "cantabria", "segovia", "sevilla", "soria", "tarragona", "teruel", "toledo", "valencia", "valladolid", "vizcaya", "zamora", "zaragoza", "ceuta", "melilla"];
var week = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];

var province = document.getElementById("provincia");

function getDay(fecha) {
    var fecha = document.getElementById("fecha").value; 
    var dia = new Date(fecha).getDay(); 

    if (week[dia] === undefined) alert('Rellena la fecha');
    else alert(week[dia]);
}

function validate(target) {
    var valid = true;

    if (target.dataset.required !== undefined) {
        console.log(target.nextSibling);

        if (target.value === '') {
            valid = false;

            target.nextElementSibling.innerHTML = 'Este campo es obligatorio';
        } else {
            target.nextElementSibling.innerHTML = '';
        }
    }

    if (target.dataset.province !== undefined) {
        if (provinces.indexOf(target.value) < 0) {
            valid = false;
        }
    }

    if (target.dataset.postalCode !== undefined) {
        var code = target.value.substring(0, 2);

        console.log(code, provinceCodes.get(parseInt(code)));
        if (provinceCodes.get(parseInt(code)) !== province.value || target.value.length !== 5) {
            valid = false;
        }
    }

    // 
    if (target.dataset.number !== undefined) {

        if (target.value.match(/^[0-9]+$/) === null) {
            valid = false;
        }
    }
    // 
    
    if (valid) {
        target.classList.add('valid');
    } else {
        target.classList.add('error');
    }

    return valid;
}

function main() {
    var form = document.getElementById('form');
    var inputs = document.querySelectorAll('._validate');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var valid = false;

        for (var index = 0; index < inputs.length; index++) {
            if (validate(inputs[index]) == false) {
                valid = false;
            }
        }

        return valid;
        // if (!valid) {
        // }
    });
}

main();



/*

//esto para que no me deje escribir caracteres no numéricos
// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    });
  }
  
// Install input filters.
setInputFilter(document.getElementById("iban"), function(value) {
    return /^-?\d*$/.test(value); });
setInputFilter(document.getElementById("entidad"), function(value) {
    return /^-?\d*$/.test(value); });
setInputFilter(document.getElementById("sucursal"), function(value) {
    return /^-?\d*$/.test(value); });
setInputFilter(document.getElementById("dc"), function(value) {
    return /^-?\d*$/.test(value); });
setInputFilter(document.getElementById("cuenta"), function(value) {
    return /^-?\d*$/.test(value); });
*/