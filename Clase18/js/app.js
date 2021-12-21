function sumar ()
{
    const forma = document.getElementById('forma');
    let numeroUno=forma['operandoA'];
    let numeroDos=forma['operandoB'];
    let resultado=parseInt(numeroUno.value)+parseInt(numeroDos.value);
    if(isNaN(resultado))
    {
        document.getElementById('resultado').innerHTML=`No se ingresó ningún número`;  
    } else
    {
        document.getElementById('resultado').innerHTML=`Resultado: ${resultado}`;
    }   
    
}
