//////////////////////////// DEFINIENDO CONSTANTES ////////////////////////////    
let ventana = document.querySelector(".alert");

const txtAreaiz = document.querySelector(".text-areaiz");
const zZz = document.querySelector(".zzz");
const ContentxtAreader = document.querySelector(".contenedor_textarea_derecha");
const txtAreader = document.querySelector(".text-areader");
const txtAreader2 = document.querySelector(".text-areader");
const cuadroMsg = document.querySelector(".txt-section-der");
const copiaMsg = document.querySelector(".copiar");
const fondoCopiar = document.querySelector(".fondo_copiar");
const resolucion = screen.width;
const borraAcentos = (str) => {      // Función para quitar las acentuaciones a las letras
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
    } 
  
/////////////////////////////// FUNCION RESPONSIVA ///////////////////////////////    
function txtAreaResolicion() {
    if (resolucion < 769){
        ContentxtAreader.style.height = "auto";
        txtAreader2.style.height = "auto";
    }
}

//////////////////////////// FUNCION PARA ENCRIPTAR //////////////////////////// 
function encripta(){

    msjencripta = document.getElementById("txtarea1").value;

    if (msjencripta != "") {

        txtdepurado = borraAcentos(msjencripta).toLowerCase();

        txtdepurado = txtdepurado.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        txtAreader.value = txtdepurado;
        txtAreaiz.value = "";
        txtAreader.style.backgroundImage = "none";
        cuadroMsg.style.display = "none";
        copiaMsg.style.display = "inline";
        zZz.style.display = "none";
        fondoCopiar.style.display = "block";

        txtAreaResolicion();

    } else {

        msgAlert();
    
    }


}

/////////////////////////// FUNCION PARA DESENCRIPTAR ///////////////////////////    
function desencripta() {
    
    msjencripta = document.getElementById("txtarea1").value;

    if (msjencripta != "") {

        txtdepurado = borraAcentos(msjencripta).toLowerCase();

        txtdepurado = txtdepurado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        txtAreader.value = txtdepurado;
        txtAreaiz.value = "";
        txtAreader.style.backgroundImage = "none";
        cuadroMsg.style.display = "none";
        copiaMsg.style.display = "inline";
        zZz.style.display = "none";
        fondoCopiar.style.display = "block";

        txtAreaResolicion();

    } else {

         msgAlert();
        
    }    

}

////////////////////////// FUNCION PARA CERRAR VENTANA //////////////////////////    
function msgAlert() {

    ventana.style.display = "inline";
    
}


////////////////////////// FUNCION PARA CERRAR VENTANA //////////////////////////    
function cierra() {

    ventana.style.display = "none";
    
}

/////////////////////////// FUNCION PARA COPIAR TEXTO ///////////////////////////    
function copiar() {

    var copiaTxt = document.getElementById("resultado");
  
    copiaTxt.select();
    copiaTxt.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copiaTxt.value);

  }