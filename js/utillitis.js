
//input-value
function getInputFieldValueById(id){
    const input = document.getElementById(id).value;
    const inputNumbaral = parseFloat(input);
    return inputNumbaral;
}


//text-value
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumbaral = parseFloat(textValue);
    return textNumbaral;
}


//features section
function showSectionId(id){
    document.getElementById('add-money-from').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}




