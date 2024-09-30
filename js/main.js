document.getElementById('noakhali-donate')
.addEventListener('click', function (event) {
    event.preventDefault();


    const addMoney = getInputFieldValueById('noakhali-input');
    console.log('add money with parameter', addMoney);




    if(isNumber = Number){
    const balance = getTextFieldValueById('noakhali-amound');
    const newbalance = balance + addMoney;
    console.log(balance)

    document.getElementById('noakhali-amound').innerText = newbalance

    const totalBalance = getTextFieldValueById('total-amound');
    const totalNewbalance = totalBalance - newbalance;
    console.log(totalBalance)

    document.getElementById('total-amound').innerText = totalNewbalance






    // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Donete: ${addMoney} TK. ` ;
        console.log(p);

        document.getElementById('transaction-container').appendChild(p);

   }  
   else{

   }



});









     

