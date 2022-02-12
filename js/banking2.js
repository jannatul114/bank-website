

// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }

// function getInputVlue(inputId) {
//     const InputFiled = document.getElementById(inputId);
//     const InputText = InputFiled.value;
//     const InputConvert = parseFloat(InputText);
//     //clear text
//     InputFiled.value = '';
//     return InputConvert;
// }


// function updateTotalFiled(totalFriendId, depositConvert) {
//     const totalElement = document.getElementById(totalFriendId);
//     const totalText = totalElement.innerText;
//     const previousTotal = parseFloat(totalText);
//     totalElement.innerText = depositConvert + previousTotal;
// }



//deposit button
const depositButton = document.getElementById('deposit-button').addEventListener('click', function () {

    //get deposit input

    // const depositConvert = getInputVlue('deposit-input');

    // get and update deposit total
    const previousDepositValue = document.getElementById('deposit-total');
    const previusText = previousDepositValue.innerText;
    const convertPreviusText = parseFloat(previusText);
    const depositValue = depositConvert + convertPreviusText;
    previousDepositValue.innerText = depositValue;

    updateTotalFiled('deposit-total', depositConvert)


    //update balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalenceText = totalBalance.innerText;
    const convertbalence = parseFloat(totalBalenceText);
    totalBalance.innerText = depositConvert + convertbalence;


})


//withdraw button
const withdrawButton = document.getElementById('withdraw-button').addEventListener('click', function () {

    //get withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const convertWithdraw = parseFloat(withdrawInputText);



    //get withdraw previus value
    const previusWithdrawValue = document.getElementById('withdraw-total');
    const withdrawText = previusWithdrawValue.innerText;
    const convertPreviusWithdraw = parseFloat(withdrawText);
    // set withdraw
    const withdrawValue = convertWithdraw + convertPreviusWithdraw;
    previusWithdrawValue.innerText = convertWithdraw;

    updateTotalFiled('withdraw-total', convertWithdraw)



    //withdraw from balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const convertBalance = parseFloat(balanceText);
    const setWithdrawBalance = convertBalance - convertWithdraw;
    balanceTotal.innerText = setWithdrawBalance;


})

