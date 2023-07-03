// Validate phone number
var telefono = document.getElementById("telefono");
console.log(telefono);
validatePhoneNumber(telefono);

function validatePhoneNumber(telefono) {
  // Realizar la llamada a la API NumValidate con el número de teléfono y manejar la respuesta
  // set endpoint and your access key
    var access_key = 'f39f010fda8402bbaa61628d8aa9dfdc';
    var phone_number = telefono;

    // verify phone number via AJAX call
    $.ajax({
        url: 'http://apilayer.net/api/validate?access_key=' + access_key + '&number=' + phone_number,   
        dataType: 'jsonp',
        success: function(json) {

        // Access and use your preferred validation result objects
        console.log(json.valid);
        console.log(json.country_code);
        console.log(json.carrier);

        }
    });
}
