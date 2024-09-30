document.getElementById('Quata-donate')
.addEventListener('click', function (event) {
    event.preventDefault();


    const addMoney3 = getInputFieldValueById('Quata-input');
    console.log('add money with parameter', addMoney3);




    if(isNumber = Number){
    const balance3 = getTextFieldValueById('Quata-amound',);
    const newbalance3 = balance3 + addMoney3;
    console.log(balance3)

    document.getElementById('Quata-amound').innerText = newbalance3

    const totalBalance3 = getTextFieldValueById('total-amound');
    const totalNewbalance3 = totalBalance3 - newbalance3;
    console.log(totalBalance3)

    document.getElementById('total-amound').innerText = totalNewbalance3






    // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Donate for Quota Movement: ${addMoney3} TK. ` ;
        console.log(p);

        document.getElementById('transaction-container').appendChild(p);

   }  
   else{

   }



});









     

