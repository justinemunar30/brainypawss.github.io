const questions = [
  {q: "Sino ang pambansang bayani ng Pilipinas?", o: ["Andres Bonifacio", "Emilio Aguinaldo", "Apolinario Mabini", "Jose Rizal"], a: "Jose Rizal"},
  {q: "Ano ang pangalan ng pinakamataas na bundok sa Pilipinas?", o: ["Mt. Apo", "Mt. Pulag", "Mt. Banahaw", "Mt. Makiling"], a: "Mt. Apo"},
  {q: "Saang lungsod matatagpuan ang Luneta Park?", o: ["Cebu", "Davao", "Maynila", "Baguio"], a: "Maynila"},
  {q: "Anong isla ang kilala bilang 'Surfing Capital ng Pilipinas'?", o: ["Boracay", "Palawan", "Siargao", "Bohol"], a: "Siargao"},
  {q: "Ano ang pambansang hayop ng Pilipinas?", o: ["Kalabaw", "Tamaraw", "Tarsier", "Agila"], a: "Kalabaw"},
  
  {q: "Ilan ang mga isla na bumubuo sa Pilipinas (tinatayang)?", o: ["7,641", "7,107", "6,999", "8,124"], a: "7,641"},
  {q: "Ano ang tradisyunal na sayaw na isinusuong gamit ang mga kawayan?", o: ["Pandanggo", "Tinikling", "Kuratsa", "Singkil"], a: "Tinikling"},
  {q: "Anong prutas ang kilala sa Davao?", o: ["Mangga", "Saging", "Durian", "Pakwan"], a: "Durian"},
  {q: "Sino ang unang babaeng pangulo ng Pilipinas?", o: ["Gloria Arroyo", "Corazon Aquino", "Leni Robredo", "Imelda Marcos"], a: "Corazon Aquino"},
  {q: "Alin sa mga sumusunod ang isang UNESCO World Heritage Site?", o: ["Enchanted River", "Banaue Rice Terraces", "Chocolate Hills", "Hinatuan Cave"], a: "Banaue Rice Terraces"},
  {q: "Ano ang pambansang wika ng Pilipinas?", o: ["Filipino", "Tagalog", "Baybayin", "Cebuano"], a: "Filipino"},
  {q: "Anong lungsod ang kilala bilang 'Summer Capital ng Pilipinas'?", o: ["Tagaytay", "Baguio", "Benguet", "Sagada"], a: "Baguio"},
  {q: "Ano ang pangalan ng pinakamalaking isda sa Pilipinas?", o: ["Whale shark", "Blue marlin", "Grouper", "Tuna"], a: "Whale shark"},
  {q: "Anong pista ang ipinagdiriwang sa Cebu tuwing Enero?", o: ["Pahiyas", "Dinagyang", "Sinulog", "Ati-Atihan"], a: "Sinulog"},
  {q: "Saan matatagpuan ang Bulkan ng Mayon?", o: ["Albay", "Batangas", "Laguna", "Tarlac"], a: "Albay"},
  
  {q: "Anong pre-kolonial na script ang ginamit sa Pilipinas?", o: ["Alibata", "Baybayin", "Kulitan", "Surat Mangyan"], a: "Baybayin"},
  {q: "Sa anong taon nakuha ng Pilipinas ang kalayaan mula sa Espanya?", o: ["1896", "1898", "1901", "1946"], a: "1898"},
  {q: "Sino ang kilala bilang 'Utak ng Rebolusyon'?", o: ["Jose Rizal", "Andres Bonifacio", "Emilio Jacinto", "Apolinario Mabini"], a: "Apolinario Mabini"},
  {q: "Anong lungsod ang tinatawag na 'Lungsod na May Pader'?", o: ["Cebu City", "Vigan", "Intramuros", "Iloilo City"], a: "Intramuros"},
  {q: "Anong Pilipinong arkitekto ang nagdisenyo ng Cultural Center of the Philippines?", o: ["Juan Nakpil", "Leandro Locsin", "Pablo Antonio", "Ildefonso Santos"], a: "Leandro Locsin"},
  {q: "Sino ang huling Gobernador-Heneral ng Espanya sa Pilipinas?", o: ["Miguel López de Legazpi", "Diego Silang", "Basilio Augustín", "José Basco y Vargas"], a: "Basilio Augustín"},
  {q: "Ano ang kabisera ng lalawigan ng Palawan?", o: ["El Nido", "Coron", "Puerto Princesa", "Roxas"], a: "Puerto Princesa"},
  {q: "Anong isla sa Pilipinas ang hugis puso?", o: ["Batanes", "Samar", "Marinduque", "Mindoro"], a: "Marinduque"},
  {q: "Sino ang unang Pilipino na nanalo ng Nobel Prize?", o: ["Lea Salonga", "Carlos P. Romulo", "Maria Ressa", "Jose Rizal"], a: "Maria Ressa"},
  {q: "Anong tradisyunal na bangkang Pilipino ang may mga outriggers at mga layag?", o: ["Bangka", "Vinta", "Balangay", "Paraw"], a: "Vinta"},
  {q: "Saan matatagpuan ang UNESCO World Heritage Site, ang Baroque Churches ng Pilipinas?", o: ["Ilocos, Maynila, Iloilo, at Miagao", "Cebu, Bohol, Davao, at Pampanga", "Palawan, Cebu, Davao, at Maynila", "Baguio, Vigan, Maynila, at Davao"], a: "Ilocos, Maynila, Iloilo, at Miagao"},
  {q: "Anong Pilipinong siyentipiko ang kilala sa pagtuklas ng pinakamaliit na isda sa mundo?", o: ["Fe del Mundo", "Angel Alcala", "Lourdes Cruz", "Teodora Alonzo"], a: "Angel Alcala"},
  {q: "Anong pangulo ng Pilipinas ang nagdeklara ng Martial Law noong 1972?", o: ["Manuel Roxas", "Ferdinand Marcos", "Diosdado Macapagal", "Carlos P. Garcia"], a: "Ferdinand Marcos"},
  {q: "Anong bulkan sa Pilipinas ang itinuturing na pinaka-aktibo?", o: ["Taal Volcano", "Mayon Volcano", "Mount Pinatubo", "Kanlaon Volcano"], a: "Mayon Volcano"},
  {q: "Ano ang tradisyunal na damit na Pilipino na isinusuong tulad ng palda, madalas makulay at hinabi?", o: ["Tapis", "Malong", "Barong", "Saya"], a: "Malong"},
];

function generateQuestions() {
  const easyDiv = document.getElementById('easy-questions');
  const moderateDiv = document.getElementById('moderate-questions');
  const hardDiv = document.getElementById('hard-questions');

  questions.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `
      <h3>${i + 1}. ${q.q}</h3>
      <ul class="options">
        ${q.o.map(opt => `
          <li>
            <label>
              <input type="radio" name="q${i}" value="${opt}"> ${opt}
            </label>
          </li>
        `).join('')}
      </ul>
    `;

    if (i < 5) easyDiv.appendChild(div);
    else if (i < 15) moderateDiv.appendChild(div);
    else hardDiv.appendChild(div);
  });
}

function calculateScore() {
  // Check for unanswered questions
  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (!selected) {
      alert(`Sagutin muna ang lahat ng tanong bago magpatuloy.`);
      return;
    }
  }

  let score = 0;

  questions.forEach((q, i) => {
    const options = document.getElementsByName(`q${i}`);
    const selected = document.querySelector(`input[name="q${i}"]:checked`);

    Array.from(options).forEach(opt => {
      if (opt.value === q.a) {
        const correctParent = opt.closest('li');
        correctParent.classList.add('correct');
      }
    });

    if (selected) {
      const selectedParent = selected.closest('li');
      if (selected.value === q.a) {
        score++;
      } else {
        selectedParent.classList.add('incorrect');
      }
    }

    const questionDiv = options[0].closest('.question');
    if (!questionDiv.querySelector('.correct-answer')) {
      const correctText = document.createElement('p');
      correctText.innerText = `Correct Answer: ${q.a}`;
      correctText.className = 'correct-answer';
      questionDiv.appendChild(correctText);
    }
  });

  let message = "";
  if (score <= 10) {
    message = "No worries! You'll do better next time!";
  } else if (score <= 20) {
    message = "Good job! Keep it up!";
  } else if (score <= 25) {
    message = "Great work! You really know your stuff!";
  } else {
    message = "Amazing! You are a true expert!";
  }

  document.getElementById('scoreResult').innerText = `You got ${score} out of ${questions.length}! ${message}`;

  const allInputs = document.querySelectorAll('input[type="radio"]');
  allInputs.forEach(input => input.disabled = true);

  const scoreButton = document.getElementById('scoreButton');
  if (scoreButton) scoreButton.disabled = true;
}

// Wait for DOM to fully load
window.addEventListener('DOMContentLoaded', generateQuestions);
