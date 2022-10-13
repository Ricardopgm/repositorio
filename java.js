function funcaoDeClicar(){
    var select = document.getElementById("selecao").value
    
    var texto1 = document.getElementById("inputTexto1").value

    if(select==='cesar'){
        criptografarCesar(texto1)
    }else{
        criptografarBase64(texto1)
    }   
} 
function criptografarBase64(texto){
 let codificado = window.btoa(texto);

 document.getElementById("inputTexto2").value = codificado

}
function criptografarCesar(texto)
    {
       
        texto = texto.toUpperCase();

              document.getElementById("inputTexto2").value = texto.replace(/[A-Z]/g, rot13);

        
        function rot13(corresp) {
        
            const charCode = corresp.charCodeAt();
        
            console.log(charCode)

        
            return String.fromCharCode(
                    ((charCode + 13) <= 90) ? charCode + 13
                                            : (charCode + 13) % 90 + 64
                );
            
        }
    }