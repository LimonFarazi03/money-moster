  const incomeOutput = document.getElementById('income-output');
  const foodOutput = document.getElementById('food-output');
  const rentOutput = document.getElementById('rent-output');
  const clothOutput = document.getElementById('cloth-output');
  const totalExpeOutput = document.getElementById('total-expeOutput');
  const balanceOutput = document.getElementById('balance-output');

document.getElementById('calculate-btn').addEventListener('click',function(){
  const tootalCost = parseFloat(foodOutput.value) + parseFloat(rentOutput.value) + parseFloat(clothOutput.value);

  if(incomeOutput.value == ''){
    return alert('Your income please')
  }else if(incomeOutput.value < 0){
    return alert('Areah! baba negative number jibone income korso')
  }else if(foodOutput.value == ''){
    alert('Please fill up Food Field')
  }else if(rentOutput.value = ''){
    alert('Please fill up Rent Field')
  }else if(clothOutput.value == ''){
    alert('Please fill up Cloth Field')
  }
  const totalExp = (totalExpeOutput.innerText = tootalCost);
  const haveMoney = incomeOutput.value - totalExp;
  balanceOutput.innerText = haveMoney;
});
