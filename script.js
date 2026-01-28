// Data kerajaan Islam Kalimantan
const kingdoms = [
    {
        id: 1,
        name: "Kesultanan Banjar",
        year: "1526-1905 M",
        location: { top: "65%", left: "35%" },
        description: "Kerajaan Islam terbesar di Kalimantan Selatan yang berdiri pada abad ke-16 dengan pusat pemerintahan di Banjarmasin.",
        facts: [
            "Didirikan oleh Raden Samudera (Sultan Suriansyah)",
            "Pusat perdagangan rempah dan intan",
            "Memiliki hubungan diplomatik dengan Mataram dan VOC",
            "Ditaklukkan Belanda dalam Perang Banjar (1859-1905)"
        ]
    },
    {
        id: 2,
        name: "Kesultanan Kutai Kartanegara",
        year: "1300-sekarang M",
        location: { top: "45%", left: "50%" },
        description: "Kerajaan tertua di Indonesia yang kemudian menjadi kesultanan Islam pada abad ke-17, terletak di Kalimantan Timur.",
        facts: [
            "Kerajaan tertua di Indonesia (berdiri 1300 M)",
            "Masuk Islam pada masa Aji Pangeran Sinum Panji Mendapa",
            "Pusat perdagangan di Sungai Mahakam",
            "Masih eksis sebagai kesultanan hingga sekarang"
        ]
    },
    {
        id: 3,
        name: "Kesultanan Sambas",
        year: "1675-1950 M",
        location: { top: "30%", left: "20%" },
        description: "Kerajaan Islam di Kalimantan Barat yang didirikan oleh keturunan Sultan Brunei dan menjadi produsen lada penting.",
        facts: [
            "Didirikan oleh Ratu Sapudak (keturunan Brunei)",
            "Produsen lada terpenting di Nusantara",
            "Memiliki hubungan dengan Kesultanan Johor",
            "Bergabung dengan Indonesia tahun 1950"
        ]
    },
    {
        id: 4,
        name: "Kesultanan Pontianak",
        year: "1771-1950 M",
        location: { top: "40%", left: "25%" },
        description: "Kesultanan yang didirikan oleh Syarif Abdurrahman Alkadrie di muara Sungai Kapuas, Kalimantan Barat.",
        facts: [
            "Didirikan oleh Syarif Abdurrahman Alkadrie",
            "Pusat pemerintahan di muara Sungai Kapuas",
            "Memiliki Masjid Jami Pontianak (tahun 1778)",
            "Bergabung dengan Indonesia tahun 1950"
        ]
    },
    {
        id: 5,
        name: "Kesultanan Pasir",
        year: "1516-1906 M",
        location: { top: "55%", left: "45%" },
        description: "Kerajaan Islam di wilayah Pasir (sekarang Kalimantan Timur) yang menjadi pusat perdagangan kayu dan emas.",
        facts: [
            "Didirikan oleh Putri Petung dari Jawa",
            "Pusat perdagangan kayu dan emas",
            "Memiliki hubungan dengan Kerajaan Gowa",
            "Ditaklukkan Belanda tahun 1906"
        ]
    },
    {
        id: 6,
        name: "Kesultanan Berau",
        year: "1400-1830 M",
        location: { top: "40%", left: "55%" },
        description: "Kerajaan Islam di Kalimantan Timur yang terpecah menjadi Kesultanan Sambaliung dan Kesultanan Gunung Tabur.",
        facts: [
            "Didirikan oleh Baddit Dipattung",
            "Terpecah menjadi Sambaliung dan Gunung Tabur (1830)",
            "Pusat perdagangan sarang burung walet",
            "Ditaklukkan Belanda abad ke-19"
        ]
    },
    {
        id: 7,
        name: "Kesultanan Bulungan",
        year: "1731-1964 M",
        location: { top: "25%", left: "60%" },
        description: "Kerajaan Islam di Kalimantan Utara yang memiliki hubungan dengan Kesultanan Sulu dan menjadi produsen kayu ulin.",
        facts: [
            "Didirikan oleh Wira Keranda (keturunan Sulu)",
            "Produsen kayu ulin (kayu besi)",
            "Memiliki hubungan dengan Kesultanan Sulu Filipina",
            "Bergabung dengan Indonesia tahun 1963"
        ]
    },
    {
        id: 8,
        name: "Kerajaan Kotawaringin",
        year: "1679-1948 M",
        location: { top: "60%", left: "30%" },
        description: "Kerajaan Islam di Kalimantan Tengah yang merupakan pecahan dari Kesultanan Banjar, terletak di daerah Kotawaringin.",
        facts: [
            "Pecahan dari Kesultanan Banjar",
            "Didirikan oleh Pangeran Dipati Anta-Kasuma",
            "Pusat pemerintahan di Kotawaringin Lama",
            "Bergabung dengan Indonesia tahun 1948"
        ]
    }
];

// Data kuis tentang Kerajaan Islam Kalimantan
const quizQuestions = [
    {
        question: "Kerajaan Islam mana yang merupakan kerajaan tertua di Indonesia yang kemudian menjadi kesultanan Islam di Kalimantan?",
        options: [
            "Kesultanan Banjar",
            "Kesultanan Kutai Kartanegara", 
            "Kesultanan Sambas",
            "Kesultanan Pontianak"
        ],
        correct: 1,
        explanation: "Kesultanan Kutai Kartanegara awalnya adalah kerajaan Hindu tertua di Indonesia (berdiri 1300 M) yang kemudian masuk Islam pada abad ke-17 di bawah Aji Pangeran Sinum Panji Mendapa."
    },
    {
        question: "Siapakah pendiri Kesultanan Banjar yang juga dikenal sebagai Sultan Suriansyah?",
        options: [
            "Pangeran Samudera",
            "Raden Samudera",
            "Sultan Adam",
            "Pangeran Antasari"
        ],
        correct: 1,
        explanation: "Raden Samudera (memerintah 1526-1545) adalah pendiri Kesultanan Banjar yang setelah masuk Islam bergelar Sultan Suriansyah. Ia merupakan keturunan Kerajaan Negara Daha."
    },
    {
        question: "Peristiwa penting apa yang menyebabkan Kesultanan Banjar berakhir?",
        options: [
            "Perang Banjar (1859-1905) melawan Belanda",
            "Bergabung dengan Republik Indonesia",
            "Ditaklukkan oleh Kesultanan Mataram",
            "Bencana alam besar"
        ],
        correct: 0,
        explanation: "Kesultanan Banjar berakhir setelah Perang Banjar (1859-1905) melawan Belanda. Perlawanan dipimpin oleh Pangeran Antasari yang diangkat sebagai Sultan Banjar pada 1862."
    },
    {
        question: "Kesultanan Sambas di Kalimantan Barat terkenal sebagai produsen komoditas apa?",
        options: [
            "Emas dan intan",
            "Lada (merica)",
            "Kayu ulin",
            "Minyak bumi"
        ],
        correct: 1,
        explanation: "Kesultanan Sambas menjadi produsen lada (merica) terpenting di Nusantara pada abad ke-17 dan ke-18, yang diekspor ke berbagai negara melalui pelabuhannya."
    },
    {
        question: "Siapakah pendiri Kesultanan Pontianak yang berasal dari keturunan Arab?",
        options: [
            "Syarif Abdurrahman Alkadrie",
            "Sultan Hamengkubuwono",
            "Pangeran Diponegoro",
            "Sultan Hasanuddin"
        ],
        correct: 0,
        explanation: "Syarif Abdurrahman Alkadrie (1738-1808) adalah pendiri Kesultanan Pontianak pada 1771. Ia berasal dari keturunan Arab Hadramaut dan membangun kota Pontianak di muara Sungai Kapuas."
    },
    {
        question: "Kesultanan Bulungan di Kalimantan Utara memiliki hubungan historis dengan kesultanan dari negara mana?",
        options: [
            "Kesultanan Brunei",
            "Kesultanan Sulu (Filipina)",
            "Kesultanan Malaka",
            "Kesultanan Ternate"
        ],
        correct: 1,
        explanation: "Kesultanan Bulungan didirikan oleh Wira Keranda yang merupakan keturunan dari Kesultanan Sulu di Filipina. Hubungan ini mempengaruhi budaya dan sistem pemerintahan Bulungan."
    },
    {
        question: "Kerajaan Kotawaringin di Kalimantan Tengah merupakan pecahan dari kesultanan apa?",
        options: [
            "Kesultanan Banjar",
            "Kesultanan Kutai",
            "Kesultanan Pasir",
            "Kesultanan Sambas"
        ],
        correct: 0,
        explanation: "Kerajaan Kotawaringin didirikan pada 1679 oleh Pangeran Dipati Anta-Kasuma, yang merupakan putra dari Sultan Banjar. Kerajaan ini merupakan pecahan dari Kesultanan Banjar."
    },
    {
        question: "Apa yang menjadi penyebab terpecahnya Kesultanan Berau menjadi dua kerajaan pada tahun 1830?",
        options: [
            "Perang saudara antar pewaris tahta",
            "Intervensi Belanda dengan politik divide et impera",
            "Bencana alam yang memisahkan wilayah",
            "Tekanan dari Kesultanan Banjar"
        ],
        correct: 1,
        explanation: "Kesultanan Berau terpecah menjadi Kesultanan Sambaliung dan Kesultanan Gunung Tabur pada 1830 akibat politik divide et impera (pecah belah) yang diterapkan Belanda untuk melemahkan kekuasaan lokal."
    },
    {
        question: "Komoditas utama apa yang diperdagangkan oleh Kesultanan Pasir di Kalimantan Timur?",
        options: [
            "Kayu dan emas",
            "Lada dan rempah",
            "Intan dan berlian",
            "Karet dan kopi"
        ],
        correct: 0,
        explanation: "Kesultanan Pasir menjadi pusat perdagangan kayu (khususnya kayu ulin) dan emas. Wilayahnya kaya akan sumber daya hutan dan tambang emas yang diekspor melalui pelabuhan."
    },
    {
        question: "Apa nama masjid tertua di Pontianak yang dibangun oleh pendiri Kesultanan Pontianak?",
        options: [
            "Masjid Jami Pontianak",
            "Masjid Sultan Suriansyah",
            "Masjid Raya Banjarmasin",
            "Masjid Agung Al-Karomah"
        ],
        correct: 0,
        explanation: "Masjid Jami Pontianak (dibangun 1778) adalah masjid tertua di Pontianak yang didirikan oleh Syarif Abdurrahman Alkadrie, pendiri Kesultanan Pontianak. Masjid ini menjadi pusat penyebaran Islam di Kalimantan Barat."
    }
];

// Data timeline khusus Kalimantan
const timelineData = [
    { year: "1300 M", title: "Berdirinya Kerajaan Kutai Kartanegara", description: "Kerajaan Hindu tertua di Indonesia yang kelak menjadi kesultanan Islam." },
    { year: "1400 M", title: "Berdirinya Kerajaan Berau", description: "Kerajaan di Kalimantan Timur yang kemudian menjadi kesultanan Islam." },
    { year: "1526 M", title: "Berdirinya Kesultanan Banjar", description: "Raden Samudera mendirikan Kesultanan Banjar di Kalimantan Selatan." },
    { year: "1605 M", title: "Islamisasi Kutai Kartanegara", description: "Kerajaan Kutai Kartanegara resmi menjadi kesultanan Islam di bawah Aji Pangeran Sinum Panji Mendapa." },
    { year: "1675 M", title: "Berdirinya Kesultanan Sambas", description: "Ratu Sapudak mendirikan Kesultanan Sambas di Kalimantan Barat." },
    { year: "1679 M", title: "Berdirinya Kerajaan Kotawaringin", description: "Pangeran Dipati Anta-Kasuma mendirikan Kerajaan Kotawaringin, pecahan dari Banjar." },
    { year: "1731 M", title: "Berdirinya Kesultanan Bulungan", description: "Wira Keranda mendirikan Kesultanan Bulungan di Kalimantan Utara." },
    { year: "1771 M", title: "Berdirinya Kesultanan Pontianak", description: "Syarif Abdurrahman Alkadrie mendirikan Kesultanan Pontianak." },
    { year: "1830 M", title: "Pembagian Kesultanan Berau", description: "Kesultanan Berau terpecah menjadi Sambaliung dan Gunung Tabur." },
    { year: "1859 M", title: "Perang Banjar Dimulai", description: "Dimulainya Perang Banjar melawan Belanda yang dipimpin Pangeran Antasari." }
];

// Variabel game state
let currentScore = 0;
let currentLevel = 1;
let currentQuestionIndex = 0;
let userAnswers = Array(quizQuestions.length).fill(null);
let startTime = new Date();
let timerInterval;

// Inisialisasi game
document.addEventListener('DOMContentLoaded', function() {
    // Setup tabs
    setupTabs();
    
    // Setup peta interaktif
    setupMap();
    
    // Setup kuis
    setupQuiz();
    
    // Setup timeline
    setupTimeline();
    
    // Setup about section
    setupAbout();
    
    // Setup timer
    startTimer();
    
    // Update tampilan skor dan level
    updateGameInfo();
});

// Fungsi untuk setup tabs
function setupTabs() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            
            // Hapus class active dari semua tab dan content
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Tambah class active ke tab dan content yang diklik
            tab.classList.add('active');
            document.getElementById(`${tabId}-content`).classList.add('active');
            
            // Jika peta, update posisi info box jika ada yang aktif
            if (tabId === 'peta') {
                setTimeout(() => {
                    const activeKingdom = document.querySelector('.kingdom-point.active');
                    if (activeKingdom) {
                        showKingdomInfo(parseInt(activeKingdom.getAttribute('data-id')));
                    }
                }, 100);
            }
        });
    });
}

// Fungsi untuk setup peta interaktif
function setupMap() {
    const mapContainer = document.querySelector('.map-container');
    
    // Tambahkan titik untuk setiap kerajaan
    kingdoms.forEach(kingdom => {
        const point = document.createElement('div');
        point.className = 'kingdom-point';
        point.setAttribute('data-id', kingdom.id);
        point.style.top = kingdom.location.top;
        point.style.left = kingdom.location.left;
        
        // Tooltip sederhana
        point.setAttribute('title', kingdom.name);
        
        point.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Hapus active class dari semua titik
            document.querySelectorAll('.kingdom-point').forEach(p => {
                p.classList.remove('active');
            });
            
            // Tambah active class ke titik yang diklik
            this.classList.add('active');
            
            // Tampilkan informasi kerajaan
            showKingdomInfo(kingdom.id);
        });
        
        mapContainer.appendChild(point);
    });
    
    // Klik di luar untuk menyembunyikan info
    document.addEventListener('click', function() {
        document.querySelectorAll('.kingdom-point').forEach(p => {
            p.classList.remove('active');
        });
        document.getElementById('kingdom-info').style.display = 'none';
    });
}

// Fungsi untuk menampilkan informasi kerajaan
function showKingdomInfo(kingdomId) {
    const kingdom = kingdoms.find(k => k.id === kingdomId);
    if (!kingdom) return;
    
    const infoBox = document.getElementById('kingdom-info');
    const point = document.querySelector(`.kingdom-point[data-id="${kingdomId}"]`);
    const mapContainer = document.querySelector('.map-container');
    
    // Update konten info box
    infoBox.innerHTML = `
        <h3>${kingdom.name} (${kingdom.year})</h3>
        <p>${kingdom.description}</p>
        <h4>Fakta Penting:</h4>
        <ul>
            ${kingdom.facts.map(fact => `<li>${fact}</li>`).join('')}
        </ul>
        <div style="margin-top: 15px; font-style: italic; color: #666;">
            Klik di luar kotak untuk menutup
        </div>
    `;
    
    // Posisikan info box di dekat titik
    const pointRect = point.getBoundingClientRect();
    const mapRect = mapContainer.getBoundingClientRect();
    const containerRect = document.querySelector('.container').getBoundingClientRect();
    
    // Tentukan posisi (usahakan agar tidak keluar dari peta)
    let top = pointRect.top - mapRect.top + 30;
    let left = pointRect.left - mapRect.left + 30;
    
    // Jika terlalu ke kanan, geser ke kiri
    if (left + 300 > mapRect.width) {
        left = pointRect.left - mapRect.left - 300;
    }
    
    // Jika terlalu ke bawah, geser ke atas
    if (top + 250 > mapRect.height) {
        top = pointRect.top - mapRect.top - 200;
    }
    
    // Pastikan posisi tidak negatif
    top = Math.max(10, top);
    left = Math.max(10, left);
    
    infoBox.style.top = `${top}px`;
    infoBox.style.left = `${left}px`;
    infoBox.style.display = 'block';
}

// Fungsi untuk setup kuis
function setupQuiz() {
    // Tampilkan pertanyaan pertama
    showQuestion(currentQuestionIndex);
    
    // Setup tombol navigasi
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('submit-btn').addEventListener('click', submitQuiz);
}

// Fungsi untuk menampilkan pertanyaan
function showQuestion(index) {
    const question = quizQuestions[index];
    
    // Update nomor pertanyaan
    document.getElementById('current-question').textContent = index + 1;
    
    // Update teks pertanyaan
    document.getElementById('question-text').textContent = question.question;
    
    // Update opsi jawaban
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (userAnswers[index] === i) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(i));
        optionsContainer.appendChild(optionElement);
    });
    
    // Update tombol navigasi
    document.getElementById('prev-btn').style.display = index === 0 ? 'none' : 'flex';
    
    if (index === quizQuestions.length - 1) {
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('submit-btn').style.display = 'flex';
    } else {
        document.getElementById('next-btn').style.display = 'flex';
        document.getElementById('submit-btn').style.display = 'none';
    }
    
    // Update progress kuis
    document.getElementById('quiz-progress').textContent = `${index + 1}/${quizQuestions.length}`;
}

// Fungsi untuk memilih opsi jawaban
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update tampilan opsi yang dipilih
    const options = document.querySelectorAll('.option');
    options.forEach((option, i) => {
        option.classList.remove('selected');
        if (i === optionIndex) {
            option.classList.add('selected');
        }
    });
    
    // Otomatis cek jawaban jika kuis sudah selesai
    if (currentQuestionIndex === quizQuestions.length - 1) {
        checkAnswer(currentQuestionIndex);
    }
}

// Fungsi untuk cek jawaban
function checkAnswer(questionIndex) {
    const question = quizQuestions[questionIndex];
    const userAnswer = userAnswers[questionIndex];
    const options = document.querySelectorAll('.option');
    
    // Reset kelas pada semua opsi
    options.forEach(option => {
        option.classList.remove('correct', 'incorrect');
    });
    
    // Jika ada jawaban yang dipilih
    if (userAnswer !== null) {
        // Tandai jawaban yang benar
        options[question.correct].classList.add('correct');
        
        // Jika jawaban salah, tandai jawaban user sebagai salah
        if (userAnswer !== question.correct) {
            options[userAnswer].classList.add('incorrect');
        }
        
        // Update skor jika jawaban benar
        if (userAnswer === question.correct) {
            // Pastikan tidak menambah skor berkali-kali untuk pertanyaan yang sama
            if (!question.answered) {
                currentScore += 10;
                question.answered = true;
                updateGameInfo();
            }
        }
    }
}

// Fungsi untuk pindah ke pertanyaan sebelumnya
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        // Cek jawaban pertanyaan saat ini
        checkAnswer(currentQuestionIndex);
        
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

// Fungsi untuk pindah ke pertanyaan berikutnya
function nextQuestion() {
    if (
