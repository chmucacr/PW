let radio = document.getElementById('nacionalidad');
                    let re = "[0 - 9]{2}-[0 - 9]{4}-[0-9]{4}";

                    radio.addEventListener(function (event) {
                        // Cada vez que el usuario selecione se revisa
                        if (radio.validity.valid) {
                            // En caso que haya un selecionado CR
                            //document.getElementById("dni")
                            let OK = re.exec(nacionalidad.value);
    if (OK === "CR")
        window.alert(RegExp.input + "No es un formato de Cedula nacional!");
    //else
    //window.alert("Gracias, su número de teléfono es" + OK[0]);
}
}, false);