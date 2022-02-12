


function getInputVlue() {
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    const depositConvert = parseFloat(depositText);

    //clear text
    depositInput.value = '';
    return depositConvert;
}


//deposit button
const depositButton = document.getElementById('deposit-button').addEventListener('click', function () {

    //get deposit input

    const depositConvert = getInputVlue();

    //get deposit previous value
    const previousDepositValue = document.getElementById('deposit-total');
    const previusText = previousDepositValue.innerText;
    const convertPreviusText = parseFloat(previusText);
    const depositValue = depositConvert + convertPreviusText;
    previousDepositValue.innerText = depositValue;

    //adding to balance
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
    previusWithdrawValue.innerText = withdrawValue;

    //withdraw from balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const convertBalance = parseFloat(balanceText);
    const setWithdrawBalance = convertBalance - convertWithdraw;
    balanceTotal.innerText = setWithdrawBalance;

    //clear text
    withdrawInput.value = '';
})

