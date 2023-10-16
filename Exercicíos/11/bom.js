var agora = new Date()   // Pegando a hora e a data atual 
var data = new Date()
var hr = agora.getHours()  //  hora       
var dt = data.getDate   //data

if(hora < 12){
    console.log('bom dia')
} 
else if(hora >12.9){
    console.log('Boa tarde')
}
else if(hora > 19){      
    console.log('Boa noite')
}