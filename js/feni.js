document.getElementById('feni-donate')
.addEventListener('click', function (event) {
    event.preventDefault();


    const addMoney2 = getInputFieldValueById('feni-input');
    console.log('add money with parameter', addMoney2);




    if(isNumber = Number){
    const balance2 = getTextFieldValueById('feni-amound',);
    const newbalance2 = balance2 + addMoney2;
    console.log(balance2)

    document.getElementById('feni-amound').innerText = newbalance2

    const totalBalance2 = getTextFieldValueById('total-amound');
    const totalNewbalance2 = totalBalance2 - newbalance2;
    console.log(totalBalance2)

    document.getElementById('total-amound').innerText = totalNewbalance2






    // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Donate for feni: ${addMoney2} TK. ` ;
        console.log(p);

        document.getElementById('transaction-container').appendChild(p);

   }  
   else{

   }



});









     

