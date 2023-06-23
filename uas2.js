var questions = [
  {
    question: "Siapakah presiden pertama Indonesia?",
    options: ["Soekarno", "Joko Widodo", "Susilo Bambang Yudhoyono", "Megawati Soekarnoputri"],
    answer: 0
  },
  {
    question: "Berapakah hasil dari 2 + 2?",
    options: ["2", "3", "4", "5"],
    answer: 2
  },
  {
    question: "Apa ibukota Indonesia?",
    options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
    answer: 0
  },
  {
    question: "Siapakah penemu bola lampu?",
    options: ["Thomas Alva Edison", "Nikola Tesla", "Galileo Galilei", "Isaac Newton"],
    answer: 0
  },
  {
    question: "Berapa jumlah provinsi di Indonesia?",
    options: ["30", "32", "34", "36"],
    answer: 2
  },
  {
    question: "Siapakah penulis novel 'Laskar Pelangi'?",
    options: ["Tere Liye", "Andrea Hirata", "Dewi Lestari", "Ahmad Tohari"],
    answer: 1
  },
  {
    question: "Apakah simbol kimia untuk elemen emas?",
    options: ["Au", "Ag", "Fe", "Cu"],
    answer: 0
  },
  {
    question: "Siapakah pelukis terkenal dengan lukisan Mona Lisa?",
    options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"],
    answer: 1
  },
  {
    question: "Apa nama planet terdekat dengan Matahari?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: 3
  },
  {
    question: "Siapakah tokoh fiksi ikonik dengan kostum laba-laba biru dan jaring laba-laba?",
    options: ["Iron Man", "Superman", "Spider-Man", "Batman"],
    answer: 2
  }
];

var currentQuestion = 0;
var score = 0;

var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var submitButton = document.getElementById("submit-btn");

function loadQuestion() {
  var q = questions[currentQuestion];

  questionElement.textContent = q.question;
  optionsElement.innerHTML = "";

  for (var i = 0; i < q.options.length; i++) {
    var option = document.createElement("button");
    option.textContent = q.options[i];
    option.setAttribute("class", "option-button");
    option.setAttribute("value", i);
    option.onclick = checkAnswer;
    optionsElement.appendChild(option);
  }
}

function checkAnswer() {
  if (this.value == questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = "Quiz selesai!";
  optionsElement.innerHTML = "Skor: " + score + " dari " + questions.length;
  submitButton.style.display = "none";
}

var startButton = document.getElementById("start-btn");
startButton.onclick = function() {
  loadQuestion();
  startButton.style.display = "none";
};