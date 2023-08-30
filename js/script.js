//console.log('Script for Tip Calculator');
/* 
 Programme Algorithm:

 1(a) Sub-total bill calculation: Amount got from Bill input field * Number of person got from person input field

 (b) Convert sub-total to float(fixed 2 point)

 2(a) Tip Calculation from Field: convert to parseFloat the input taken from tip input and fixed it upto 2 point
 (b) Tip Calculation: Tip = Sub-total * Tip Percentage
 (c) PerPersonTip = Tip / Person;
 (d) Convert it to float (fixed 2 point)
 (e) Show it to Tip BDT Text

 3(a) Total Bill = Sub-total Bill + Tip
 (b) PerPersonBill = Total Bil / Person;
 (c) Show total on Total BDT Text
*/

document.getElementById('calculate-btn').addEventListener('click', () => {
    //console.log('Click Calculate Button');

    /* ======= Bill Input ========*/
    const billAmountField = document.getElementById('bill');
    const billAmountString = billAmountField.value;
    //console.log(typeof billAmountString);
    const billAmount = parseFloat(billAmountString);
    //console.log(billAmount);
    billAmountField.value = '';

    /* ======= Person Input ========*/
    const personField = document.getElementById('person');
    const personFieldString = personField.value;
    const person = parseInt(personFieldString);
    personField.value = '';


    /* ======= Sub-total Bill Calculation ========*/
    const subTotalBill = billAmount * person;
    //console.log(subTotalBill);

    /* ======= PerPerson Tip Calculation & Showing ========*/
    const tipField = document.getElementById('tip');
    const tipFieldString = tipField.value;
    const tipPercentage = parseInt(tipFieldString);
    //console.log(tipPercentage);
    const tipPercentageDecimal = parseFloat((tipPercentage / 100));
    //console.log(tipPercentageDecimal);
    tipField.value = '';

    const totalTip = billAmount * tipPercentageDecimal;
    //console.log(totalTip);
    const perPersonTip = parseFloat((totalTip / person).toFixed(2));
    //console.log(perPersonTip);

    const tipAmountText = document.getElementById('tip-amount');
    //console.log(typeof tipAmountText);
    tipAmountText.innerText = perPersonTip;

    /* ======= PerPerson Bill Calculation & Showing ========*/
    const totalAmountText = document.getElementById('total-amount');

    const totalBill = billAmount + totalTip;
    //console.log(totalBill);
    const perPersonBill = parseFloat((totalBill / person).toFixed(2));

    totalAmountText.innerText = perPersonBill;
})