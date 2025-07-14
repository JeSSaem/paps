function calculatePAPS(height, weight, runTime){
  const bmi = weight / ((height/100)**2);
  const bmiScore = bmi < 18.5 ? 3 : bmi < 23 ? 5 : bmi < 25 ? 3 : 1;
  const runScore = runTime <= 600 ? 5 : runTime <= 720 ? 3 : 1;
  const total = bmiScore + runScore;
  return {bmi: bmi.toFixed(2), bmiScore, runScore, total};
}

document.getElementById('paps-form').addEventListener('submit', e=>{
  e.preventDefault();
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const run   = parseFloat(document.getElementById('run').value);
  const {bmi,bmiScore,runScore,total}=calculatePAPS(height,weight,run);

  const result = document.getElementById('result');
  result.innerHTML = `
    <p>BMI: <strong>${bmi}</strong> (점수 ${bmiScore})</p>
    <p>오래달리기 점수: <strong>${runScore}</strong></p>
    <p>종합 점수: <strong>${total}</strong></p>
  `;
  result.classList.remove('hidden');
});

document.getElementById('paps-form').addEventListener('reset', ()=>{
  document.getElementById('result').classList.add('hidden');
});
