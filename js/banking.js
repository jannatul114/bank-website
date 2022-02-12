

// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }

function getInputVlue(inputId) {
    const InputFiled = document.getElementById(inputId);
    const InputText = InputFiled.value;
    const InputConvert = parseFloat(InputText);
    //clear text
    InputFiled.value = '';
    return InputConvert;
}


function updateTotalFiled(totalFriendId, depositConvert) {
    const totalElement = document.getElementById(totalFriendId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = depositConvert + previousTotal;
}

function getCurrentBalance() {
    const totalBalance = document.getElementById('balance-total');
    const totalBalenceText = totalBalance.innerText;
    const convertbalence = parseFloat(totalBalenceText);
    return convertbalence;
}

function updateBalance(depositConvert, isAddision) {
    const totalBalance = document.getElementById('balance-total');
    // const totalBalenceText = totalBalance.innerText;
    // const convertbalence = parseFloat(totalBalenceText);
    const convertbalence = getCurrentBalance();
    if (isAddision == true) {
        totalBalance.innerText = convertbalence + depositConvert;
    }

    else if (isAddision == false) {
        totalBalance.innerText = convertbalence - depositConvert;

    }
}



//deposit button
const depositButton = document.getElementById('deposit-button').addEventListener('click', function () {

    //get deposit input

    const depositConvert = getInputVlue('deposit-input');
    if (depositConvert > 0) {
        updateTotalFiled('deposit-total', depositConvert)
        updateBalance(depositConvert, true);
    }
    /*   // get and update deposit total
      const previousDepositValue = document.getElementById('deposit-total');
      const previusText = previousDepositValue.innerText;
      const convertPreviusText = parseFloat(previusText);
      const depositValue = depositConvert + convertPreviusText;
      previousDepositValue.innerText = depositValue; */



    //update balance
    // const totalBalance = document.getElementById('balance-total');
    // const totalBalenceText = totalBalance.innerText;
    // const convertbalence = parseFloat(totalBalenceText);
    // totalBalance.innerText = depositConvert + convertbalence;


})


//withdraw button
const withdrawButton = document.getElementById('withdraw-button').addEventListener('click', function () {

    //get withdraw input
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const convertWithdraw = parseFloat(withdrawInputText);

    const convertWithdraw = getInputVlue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (convertWithdraw > 0 && convertWithdraw < currentBalance) {
        updateTotalFiled('withdraw-total', convertWithdraw)
        updateBalance(convertWithdraw, false);
    }

    if (convertWithdraw > currentBalance) {
        console.log('you can not withdraw more then that tou saved')
    }

    /* //get withdraw previus value
    const previusWithdrawValue = document.getElementById('withdraw-total');
    const withdrawText = previusWithdrawValue.innerText;
    const convertPreviusWithdraw = parseFloat(withdrawText);
    // set withdraw
    const withdrawValue = convertWithdraw + convertPreviusWithdraw;
      previusWithdrawValue.innerText = convertWithdraw;
 */




    //withdraw from balance
    /*     const balanceTotal = document.getElementById('balance-total');
        const balanceText = balanceTotal.innerText;
        const convertBalance = parseFloat(balanceText);
        const setWithdrawBalance = convertBalance - convertWithdraw;
        balanceTotal.innerText = setWithdrawBalance; */



})

