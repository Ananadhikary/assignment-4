
function cashOut( money ) {
    if(typeof money !== "number"){
        return 'invalid';
    }
    else if(money < 0){
        return 'Invalid';
    }
    else{
        const charge = money*1.75/100;
        return charge;
    }
}