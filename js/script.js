//console.log('Script for Tip Calculator');
/* 
 Program Algorithm:

 1(a) Sub-total bill calculation: Amount got from Bill input field * Number of person got from person input field

 (b) Convert sub-total to float(fixed 2 point)

 2(a) Tip Calculation: Tip = Sub-total * 15% Tip
 (b) PerPersonTip = Tip / Person;
 (c) Convert it to float (fixed 2 point)
 (d) Show it to Tip BDT Text

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
    console.log(subTotalBill);

    /* ======= PerPerson Tip Calculation ========*/

})