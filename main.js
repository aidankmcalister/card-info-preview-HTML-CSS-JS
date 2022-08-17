const confirmScreen =  document.getElementsByClassName('confirm-container')
const infoScreen =  document.getElementsByClassName('form-items')

function switchVisible() {
  if (document.getElementById('form')) {

      if (document.getElementById('form').style.display == 'none') {
          document.getElementById('form').style.display = 'grid';
          document.getElementById('confirm').style.display = 'none';
      }
      else {
          document.getElementById('form').style.display = 'none';
          document.getElementById('confirm').style.display = 'flex';
      }
  }
}

document.getElementById("confirm-button-main").addEventListener("click", function() {
  var month = document.getElementById('card-month').value
  var year = document.getElementById('card-year').value
  var cardNum = document.getElementById('card-number-input').value= document.getElementById('card-number-input').value.replace(/\W/gi, ' ').replace(/(.{4})/g, '$1 ');
  var holderName = document.getElementById('card-holder-name-input').value
  var cvc = document.getElementById('card-cvc').value

  document.getElementById('holder-name-display').innerHTML = holderName
  document.getElementById('cvc-display').innerHTML = cvc
  document.getElementById('exp-display').innerHTML = month + '/' + year
  document.getElementById('card-number-display').innerHTML = cardNum

  switchVisible();

})

document.getElementById('continue-button-main').addEventListener("click", function() {
  switchVisible();

  document.getElementById('card-month').value = '';
  document.getElementById('card-year').value = '';
  document.getElementById('card-number-input').value = '';
  document.getElementById('card-holder-name-input').value = '';
  document.getElementById('card-cvc').value = '';

  document.getElementById('holder-name-display').innerHTML = 'JANE APPLESEED';
  document.getElementById('cvc-display').innerHTML = '000';
  document.getElementById('exp-display').innerHTML = '00/00';
  document.getElementById('card-number-display').innerHTML = '0000&nbsp;0000&nbsp;0000&nbsp;0000';

})