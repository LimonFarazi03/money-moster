  const incomeOutput = document.getElementById('income-output');
  const foodOutput = document.getElementById('food-output');
  const rentOutput = document.getElementById('rent-output');
  const clothOutput = document.getElementById('cloth-output');
  const totalExpeOutput = document.getElementById('total-expeOutput');
  const balanceOutput = document.getElementById('balance-output');

document.getElementById('calculate-btn').addEventListener('click',function(){
  const tootalCost = parseFloat(foodOutput.value) + parseFloat(rentOutput.value) + parseFloat(clothOutput.value);
  if(incomeOutput.value == ''){
    alert('Your income please')
  }
  if(foodOutput.value == '' || rentOutput.value == '' ||clothOutput.value == ''){
    return alert('Sorry Please fill up')
  }
  const totalExp = (totalExpeOutput.innerText = tootalCost);
  const haveMoney = incomeOutput.value - totalExp;
  balanceOutput.innerText = haveMoney;
});
