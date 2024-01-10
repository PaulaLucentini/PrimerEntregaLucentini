function saludar(){
    let nombre= prompt("Ingrese su nombre");
    let mensaje= `Hola ${nombre}`;
    alert (mensaje);
}


saludar();
let edad = Number (prompt("Ingrese du edad"));

if (edad>=18){
    for(let butaca=1; butaca<=5; butaca++){
        let dni = Number(prompt("Ingrese su DNI"));
        alert(`Butaca #${butaca} DNI ${dni}`);
        }
    alert("Entradas Agotadas");
}else{
    alert("Debe ser mayor de edad");
}