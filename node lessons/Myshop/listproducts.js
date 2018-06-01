var faker = require('faker')
function printpro(num){
    
    for(var i=0;i<num;i++){

    randno = faker.commerce.product()
    randpo = faker.commerce.price()
    
    console.log(randno + " - $"+ randpo);
    }
}

printpro(16);