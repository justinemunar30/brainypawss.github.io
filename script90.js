const questions = [
  // Easy (5)
  {q: "Who is the national hero of the Philippines?", o: ["Andres Bonifacio", "Emilio Aguinaldo", "Apolinario Mabini", "Jose Rizal"], a: "Jose Rizal"},
  {q: "What is the highest mountain in the Philippines?", o: ["Mt. Apo", "Mt. Pulag", "Mt. Banahaw", "Mt. Makiling"], a: "Mt. Apo"},
  {q: "In which city is Luneta Park located?", o: ["Cebu", "Davao", "Manila", "Baguio"], a: "Manila"},
  {q: "Which island is known as the 'Surfing Capital of the Philippines'?", o: ["Boracay", "Palawan", "Siargao", "Bohol"], a: "Siargao"},
  {q: "What is the national animal of the Philippines?", o: ["Carabao", "Tamaraw", "Tarsier", "Eagle"], a: "Carabao"},

  // Moderate (10)
  {q: "Approximately how many islands make up the Philippines?", o: ["7,641", "7,107", "6,999", "8,124"], a: "7,641"},
  {q: "What traditional dance uses bamboo poles?", o: ["Pandanggo", "Tinikling", "Kuratsa", "Singkil"], a: "Tinikling"},
  {q: "What fruit is Davao famous for?", o: ["Mango", "Banana", "Durian", "Watermelon"], a: "Durian"},
  {q: "Who was the first female president of the Philippines?", o: ["Gloria Arroyo", "Corazon Aquino", "Leni Robredo", "Imelda Marcos"], a: "Corazon Aquino"},
  {q: "Which of the following is a UNESCO World Heritage Site?", o: ["Enchanted River", "Banaue Rice Terraces", "Chocolate Hills", "Hinatuan Cave"], a: "Banaue Rice Terraces"},
  {q: "What is the national language of the Philippines?", o: ["Filipino", "Tagalog", "Baybayin", "Cebuano"], a: "Filipino"},
  {q: "Which city is called the 'Summer Capital of the Philippines'?", o: ["Tagaytay", "Baguio", "Benguet", "Sagada"], a: "Baguio"},
  {q: "What is the largest fish found in the Philippines?", o: ["Whale shark", "Blue marlin", "Grouper", "Tuna"], a: "Whale shark"},
  {q: "What festival is celebrated in Cebu every January?", o: ["Pahiyas", "Dinagyang", "Sinulog", "Ati-Atihan"], a: "Sinulog"},
  {q: "Where is Mayon Volcano located?", o: ["Albay", "Batangas", "Laguna", "Tarlac"], a: "Albay"},

  // Hard (15)
  {q: "What is the pre-colonial script used in the Philippines?", o: ["Alibata", "Baybayin", "Kulitan", "Surat Mangyan"], a: "Baybayin"},
  {q: "In what year did the Philippines gain independence from Spain?", o: ["1896", "1898", "1901", "1946"], a: "1898"},
  {q: "Who is known as the 'Brains of the Revolution'?", o: ["Jose Rizal", "Andres Bonifacio", "Emilio Jacinto", "Apolinario Mabini"], a: "Apolinario Mabini"},
  {q: "Which city is called the 'Walled City'?", o: ["Cebu City", "Vigan", "Intramuros", "Iloilo City"], a: "Intramuros"},
  {q: "Which Filipino architect designed the Cultural Center of the Philippines?", o: ["Juan Nakpil", "Leandro Locsin", "Pablo Antonio", "Ildefonso Santos"], a: "Leandro Locsin"},
  {q: "Who was the last Spanish Governor-General in the Philippines?", o: ["Miguel López de Legazpi", "Diego Silang", "Basilio Augustín", "José Basco y Vargas"], a: "Basilio Augustín"},
  {q: "What is the capital of Palawan?", o: ["El Nido", "Coron", "Puerto Princesa", "Roxas"], a: "Puerto Princesa"},
  {q: "Which Philippine island is heart-shaped?", o: ["Batanes", "Samar", "Marinduque", "Mindoro"], a: "Marinduque"},
  {q: "Who was the first Filipino to win a Nobel Prize?", o: ["Lea Salonga", "Carlos P. Romulo", "Maria Ressa", "Jose Rizal"], a: "Maria Ressa"},
  {q: "Which traditional Philippine boat has outriggers and sails?", o: ["Bangka", "Vinta", "Balangay", "Paraw"], a: "Vinta"},
  {q: "Where can you find the UNESCO Baroque Churches of the Philippines?", o: ["Ilocos, Manila, Iloilo, and Miagao", "Cebu, Bohol, Davao, and Pampanga", "Palawan, Cebu, Davao, and Manila", "Baguio, Vigan, Manila, and Davao"], a: "Ilocos, Manila, Iloilo, and Miagao"},
  {q: "Which Filipino scientist discovered the world's smallest fish?", o: ["Fe del Mundo", "Angel Alcala", "Lourdes Cruz", "Teodora Alonzo"], a: "Angel Alcala"},
  {q: "Which Philippine president declared Martial Law in 1972?", o: ["Manuel Roxas", "Ferdinand Marcos", "Diosdado Macapagal", "Carlos P. Garcia"], a: "Ferdinand Marcos"},
  {q: "Which volcano in the Philippines is considered the most active?", o: ["Taal Volcano", "Mayon Volcano", "Mount Pinatubo", "Kanlaon Volcano"], a: "Mayon Volcano"},
  {q: "Which traditional Filipino garment is colorful and worn like a skirt?", o: ["Tapis", "Malong", "Barong", "Saya"], a: "Malong"}
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
  // Check if all questions are answered
  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (!selected) {
      alert(`Please answer all questions before finishing.`);
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

// Load questions only after the page has fully loaded
window.addEventListener('DOMContentLoaded', generateQuestions);
