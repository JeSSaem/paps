document.getElementById('papsForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const run = parseFloat(document.getElementById('run').value);
  const situp = parseFloat(document.getElementById('situp').value);
  const flex = parseFloat(document.getElementById('flex').value);
  const sprint = parseFloat(document.getElementById('sprint').value);

  if ([height, weight, run, situp, flex, sprint].some(isNaN)) {
    document.getElementById('result').innerText = "모든 항목을 정확히 입력해주세요.";
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  const bmiLevel = bmi < 18.5 ? "저체중" : bmi < 23 ? "정상" : bmi < 25 ? "과체중" : "비만";

  let runScore = run < 700 ? 5 : run < 800 ? 4 : run < 900 ? 3 : run < 1000 ? 2 : 1;
  let situpScore = situp > 50 ? 5 : situp > 40 ? 4 : situp > 30 ? 3 : situp > 20 ? 2 : 1;
  let flexScore = flex > 20 ? 5 : flex > 15 ? 4 : flex > 10 ? 3 : flex > 5 ? 2 : 1;
  let sprintScore = sprint < 8 ? 5 : sprint < 9 ? 4 : sprint < 10 ? 3 : sprint < 11 ? 2 : 1;

  let total = runScore + situpScore + flexScore + sprintScore;
  let average = total / 4;
  let grade = average >= 4.5 ? "1등급" :
              average >= 3.5 ? "2등급" :
              average >= 2.5 ? "3등급" :
              average >= 1.5 ? "4등급" : "5등급";

  document.getElementById('result').innerText =
    `▶ BMI: ${bmi.toFixed(2)} (${bmiLevel})\n` +
    `▶ 종합 체력 점수: ${total}점\n` +
    `▶ 평균 등급: ${grade}`;
});
