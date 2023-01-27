let div = 0;
for( let index = 2; index <= 150; index +=1){
    if( index % 3 === 0){
        div+=1;

    } else if( div === 50){
        console.log('Mensagem secreta')
    }
}
