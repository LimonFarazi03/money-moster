  const incomeOutput = document.getElementById('income-output');
  const foodOutput = document.getElementById('food-output');
  const rentOutput = document.getElementById('rent-output');
  const clothOutput = document.getElementById('cloth-output');
  const totalExpeOutput = document.getElementById('total-expeOutput');
  const balanceOutput = document.getElementById('balance-output');
  // 2nd Cal
  const saveOutput = document.getElementById('save-output');
  const saveAmount = document.getElementById('save-amount');
  const remainingAmount = document.getElementById('remain-amount');


document.getElementById('calculate-btn').addEventListener('click',function(){
  const tootalCost =
  parseFloat(foodOutput.value) + parseFloat(rentOutput.value) + parseFloat(clothOutput.value);
  // Condition
  if(incomeOutput.value == ''){
    return alert('Your income please')
  }else if(foodOutput.value == ''){
    alert('Please fill up Food Field');
    return;
  }else if(rentOutput.value == ''){
    alert('Please fill up Rent Field');
    return
  }else if(clothOutput.value == ''){
    alert('Please fill up Cloth Field');
    return
  }
  // Error Massage
  else if( incomeOutput.value < 0 || foodOutput.value < 0 || rentOutput.value < 0 || clothOutput.value < 0){
    const errorMessage = document.getElementById('error-msg');
    errorMessage.style.display = 'block';
  }
  else if(foodOutput.value > 0 || rentOutput.value > 0 || clothOutput.value > 0){
    const errorMessage = document.getElementById('error-msg');
    errorMessage.style.display = 'none';
  }
  // Final Touch
  const totalExp = totalExpeOutput.innerText = tootalCost;
  const haveMoney = incomeOutput.value - totalExp;
  balanceOutput.innerText = haveMoney;
});
// SaveAmount Section
document.getElementById('save-btn').addEventListener('click',function(){
  const percent = incomeOutput.value * saveOutput.value  ;
  const percentResult = percent / 100
  const resultSaveAmo = saveAmount.innerText = percentResult;
  const remainResult = balanceOutput.innerText - resultSaveAmo;
  remainingAmount.innerText = remainResult;
  
  // If
  if(balanceOutput.innerText < saveAmount.innerText){
    alert('You not have enought money to save');
  }
})
