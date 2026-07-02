const quizDatabase = [
    {
        question: "ข้อใดคือชื่อจริงของโตโต้ที่ถูกต้อง",
        image: "assets/images/toto-1.png",
        audio: "",
        level: "easy",
        options: [
            { text: "ภาณุพงศ์ สุขหาญกล้า", img: "" },
            { text: "พงศ์ภาณุ สุขกล้าหาญ", img: "" },
            { text: "ภาณุพงศ์ สุขกล้าหาญ", img: "" },
            { text: "ภาณุพันธ์ สุขหาญกล้า", img: "" }
        ],
        correct: [2]
    },
    {
        question: "ข้อใดคือชื่อจริงของคณิตที่ถูกต้อง",
        image: "assets/images/kanit-2.png",
        audio: "",
        level: "easy",
        options: [
            { text: "คณิณ ศักดาทวี", img: "" },
            { text: "คณิต ศักดาทวี", img: "" },
            { text: "คณิต ศักดิ์ทวี", img: "" },
            { text: "คณิต ศักดิ์ดาบริบูรณ์", img: "" }
        ],
        correct: [1]
    },
    {
        question: "\"ตตคณปฟก\" แปลว่าอะไร",
        image: "",
        audio: "",
        level: "easy",
        options: [
            { text: "โตโต้คณิตเป็นแฟนกัน", img: "" },
            { text: "โตโต้คณิตปูฟูกกัน", img: "" },
            { text: "โตโต้คณิตแปรงฟันกัน", img: "" },
            { text: "โตโต้คณิตไปฟรานซ์กัน", img: "" },
        ],
        correct: [0]
    },
    {
        question: "โตโต้คณิตทำอะไรใน EP.5",
        image: "assets/images/balcony-4.png",
        audio: "",
        level: "easy",
        options: [
            { text: "ปูฟูกกัน", img: "" },
            { text: "กินคั่วกลิ้ง", img: "" },
            { text: "Room Tour", img: "" },
            { text: "กินเต้าหู้บนโต๊ะ", img: "" },
        ],
        correct: [0, 1, 2, 3]
    },
    {
        question: "เสียงที่ได้ยินต่อไปนี้ มาจากเพลง Rescue You ใช่หรือไม่",
        image: "",
        audio: "assets/audio/intro-fly-with-me.mp3",
        level: "easy",
        options: [
            { text: "ใช่", img: "" },
            { text: "ไม่ใช่", img: "" },
        ],
        correct: [1]
    },
    {
        question: "ในการเจอกันครั้งแรก ฉายาที่โตโต้เรียกคณิตคืออะไร",
        image: "",
        audio: "",
        level: "easy",
        options: [
            { text: "ลูกชิ้นปลาเดือด", img: "" },
            { text: "เต้าหู้เดือด", img: "" },
            { text: "เต้าหู้ปลาเดือด", img: "" },
            { text: "น้ำเต้าหู้เดือด", img: "" }
        ],
        correct: [1]
    },
    {
        question: "เวหา นามสกุลอะไร",
        image: "",
        audio: "",
        level: "easy",
        options: [
            { text: "วงศ์สวัสดิ์หรือวงศ์สะวัตอะไรนี่แหละ", img: "" },
            { text: "วงศ์เศวต", img: "" },
            { text: "วงศ์สวัสดิ์", img: "" },
            { text: "วงศ์สุขสวัสดิ์", img: "" }
        ],
        correct: [3]
    },
    {
        question: "ก่อนคณิตที่จับว่าได้ว่าไลออนนอกใจ ทั้งคู่คบกันมากี่ปี",
        image: "",
        audio: "",
        level: "easy",
        options: [
            { text: "3 ปี", img: "" },
            { text: "4 ปี", img: "" },
            { text: "5 ปี", img: "" },
            { text: "6 ปี", img: "" }
        ],
        correct: [1]
    },
    {
        question: "ภารกิจตามจับชู้กัปตันไลออน มีชื่อภารกิจว่าอะไร",
        image: "",
        audio: "",
        level: "easy",
        options: [
            { text: "ภารกิจเรยา", img: "" },
            { text: "ภารกิจเด่นจันทร์", img: "" },
            { text: "ภารกิจนพนภา", img: "" },
            { text: "ภารกิจมุตตา", img: "" }
        ],
        correct: [2]
    },
    {
        question: "ในภารกิจตายจับชู้ปฏิบัติการนพนภา ใครใดไม่ได้อยู่ในภารกิจ",
        image: "",
        audio: "",
        level: "easy",
        options: [
            { text: "อัคคี", img: "assets/images/akki.JPEG" },
            { text: "เบียร์", img: "assets/images/beer.JPEG" },
            { text: "ตอง", img: "assets/images/tong.JPEG" },
            { text: "จ๊ะโอ", img: "assets/images/ja-o.JPEG" }
        ],
        correct: [1]
    },
    {
        question: "ซีนนี้ EP. ไหน?",
        image: "assets/images/ep-1.png",
        audio: "",
        level: "easy",
        options: [
            { text: "EP.1", img: "" },
            { text: "EP.2", img: "" },
            { text: "EP.3", img: "" },
            { text: "EP.4", img: "" },
            { text: "EP.5", img: "" }
        ],
        correct: [0]
    },
    {
        question: "ซีนนี้ EP. ไหน?",
        image: "assets/images/ep-3.png",
        audio: "",
        level: "easy",
        options: [
            { text: "EP.1", img: "" },
            { text: "EP.2", img: "" },
            { text: "EP.3", img: "" },
            { text: "EP.4", img: "" },
            { text: "EP.5", img: "" }
        ],
        correct: [2]
    },
    {
        question: "ในเวอร์ชันออกอากาศทางโทรทัศน์โตโต้โดนเซ็นเซอร์คำหยาบไปทั้งหมดกี่ครั้ง",
        image: "assets/images/toto-14.JPEG",
        audio: "",
        level: "easy",
        options: [
            { text: "ครั้งแล้ว", img: "" },
            { text: "ครั้งเล่า", img: "" }
        ],
        correct: [0,1]
    },
    {
        question: "คอนโดคณิตหมายเลขห้องอะไร",
        image: "",
        audio: "",
        level: "medium",
        options: [
            { text: "508", img: "" },
            { text: "608", img: "" },
            { text: "518", img: "" },
            { text: "618", img: "" }
        ],
        correct: [0]
    },
    {
        question: "สลากกินแบ่งรัฐบาลที่ไลออนซื้อมามีหมายเลขอะไรบ้าง",
        image: "",
        audio: "",
        level: "medium",
        options: [
            { text: "653008, 654118", img: "" },
            { text: "654008, 654118", img: "" },
            { text: "653008, 653118", img: "" },
            { text: "654008, 653118", img: "" },
        ],
        correct: [1]
    },
    {
        question: "\"ถ้าคุณเป็นแฟนผมนะ คุณไม่ต้องเหนื่อยอะไรเลย ผมก็รักคุณแบบที่คุณเป็นแบบนี้นี่แหละ\" เป็นคำพูดของโตโต้จาก EP. ใด",
        image: "",
        audio: "",
        level: "medium",
        options: [
            { text: "EP.1", img: "" },
            { text: "EP.2", img: "" },
            { text: "EP.3", img: "" },
            { text: "EP.4", img: "" },
            { text: "EP.5", img: "" }
        ],
        correct: [2]
    },
     {
        question: "\"ผมเข้าใจว่าข้างบนท้องฟ้ามันสวย... ท้องฟ้าข้างล่างก็ไม่เลวนะคุณ เห็นเงาพระจันทร์สะท้อนน้ำด้วย\" เป็นคำพูดของโตโต้จาก EP. ใด",
        image: "",
        audio: "",
        level: "medium",
        options: [
            { text: "EP.1", img: "" },
            { text: "EP.2", img: "" },
            { text: "EP.3", img: "" },
            { text: "EP.4", img: "" },
            { text: "EP.5", img: "" }
        ],
        correct: [4]
    },
    {
        question: "ซีนนี้ EP. ไหน?",
        image: "assets/images/ep-5-medium.JPEG",
        audio: "",
        level: "medium",
        options: [
            { text: "EP.1", img: "" },
            { text: "EP.2", img: "" },
            { text: "EP.3", img: "" },
            { text: "EP.4", img: "" },
            { text: "EP.5", img: "" }
        ],
        correct: [4]
    },
    {
        question: "ซีนนี้ EP. ไหน?",
        image: "assets/images/ep-4-medium.JPEG",
        audio: "",
        level: "medium",
        options: [
            { text: "EP.1", img: "" },
            { text: "EP.2", img: "" },
            { text: "EP.3", img: "" },
            { text: "EP.4", img: "" },
            { text: "EP.5", img: "" }
        ],
        correct: [3]
    },
    {
        question: "เสียงนี้ EP. ไหน?",
        image: "",
        audio: "assets/audio/ep2.mp3",
        level: "medium",
        options: [
            { text: "EP.1", img: "" },
            { text: "EP.2", img: "" },
            { text: "EP.3", img: "" },
            { text: "EP.4", img: "" },
            { text: "EP.5", img: "" }
        ],
        correct: [1]
    },
    {
        question: "จงต่อประโยคหลังจากนี้ให้ถูกต้อง \"โทษนะ ฮอตมากจ้ะ คนจีบเยอะมาก เดมแตก ...........\"",
        image: "assets/images/toto-hot.png",
        audio: "",
        level: "medium",
        options: [
            { text: "โห่ ไม่ใช่ซาซ่าที่เลือกไม่ได้", img: "" },
            { text: "โห่ เลือกได้จ้า", img: "" },
            { text: "โห่ กู้ภัยหล่อบอกต่อด้วย", img: "" },
            { text: "โห่ เก็ทเปล่า", img: "" },
            { text: "โห่ อยู่เป็นโสดละเสียวกว่า", img: "" }
        ],
        correct: [2]
    },
    {
        question: "เมนูใดไม่ได้อยู่ในชุด Limited Love Set",
        image: "",
        audio: "",
        level: "hard",
        options: [
            { text: "ลาบสองใจ", img: "" },
            { text: "ยำหน้าด้านซีฟู๊ด", img: "" },
            { text: "สเต๊กเนื้อคบชู้", img: "" },
            { text: "ต้มต้นงิ้ว", img: "" },

        ],
        correct: [2]
    },
    {
        question: "ซีนนี้ EP. ไหน?",
        image: "assets/images/ep-3-hard.JPEG",
        audio: "",
        level: "hard",
        options: [
            { text: "EP.1", img: "" },
            { text: "EP.2", img: "" },
            { text: "EP.3", img: "" },
            { text: "EP.4", img: "" },
            { text: "EP.5", img: "" }
        ],
        correct: [2]
    },
    {
        question: "ซีนนี้ EP. ไหน?",
        image: "assets/images/ep-4-hard.JPEG",
        audio: "",
        level: "hard",
        options: [
            { text: "EP.1", img: "" },
            { text: "EP.2", img: "" },
            { text: "EP.3", img: "" },
            { text: "EP.4", img: "" },
            { text: "EP.5", img: "" }
        ],
        correct: [3]
    },
    {
        question: "รอยสักใต้อกข้างซ้ายของโตโต้เป็นประโยคจากเพลงใดของ LOSO และเป็นท่อนใดในเนื้อเพลง",
        image: "",
        audio: "",
        level: "hard",
        options: [
            { text: "\"ขอเพียงแค่ฝันให้ไกล\" - ผู้ชนะ", img: "" },
            { text: "\"คนแน่แน่ว เท่านั้นผู้ชนะ\" - ผู้ชนะ", img: "" },
            { text: "\"หนทางที่เดินฉันลิขิตเอง \" - จักรยานสีแดง", img: "" },
            { text: "\"ฉันกำหนดเองในเส้นทางเดินของใจ\" - จักรยานสีแดง", img: "" },
            { text: "\"สิ่งที่ฉันทำลงไปใจสั่งมา\" - ใจสั่งมา", img: "" },
            { text: "\"ก็อยู่ที่ใจของคุณนั้นแหละ\" - ผู้นำอยู่ที่ใจ", img: "" },


        ],
        correct: [1]
    },
    {
        question: "ซีนนี้คณิตใส่เสื้อสีอะไร?",
        image: "",
        audio: "",
        level: "hard",
        options: [
            { text: "", img: "assets/images/kanit-pink-choice.png" },
            { text: "", img: "assets/images/kanit-green-choice.png" },
            { text: "", img: "assets/images/kanit-normal-choice.JPEG" },
            { text: "", img: "assets/images/kanit-purple-choice.png" }
        ],
        correct: [2]
    },


];

let activeQuizSet = []; 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateQuizSet() {
    const easyPool = quizDatabase.filter(q => q.level === "easy");
    const mediumPool = quizDatabase.filter(q => q.level === "medium");
    const hardPool = quizDatabase.filter(q => q.level === "hard");

    shuffleArray(easyPool);
    shuffleArray(mediumPool);
    shuffleArray(hardPool);

    const selectedEasy = easyPool.slice(0, 10);
    const selectedMedium = mediumPool.slice(0, 6);
    const selectedHard = hardPool.slice(0, 4);

    activeQuizSet = [...selectedEasy, ...selectedMedium, ...selectedHard];
    shuffleArray(activeQuizSet);
}

const TIME_LIMIT = 60; 
let timeRemaining = TIME_LIMIT;
let timerInterval = null;
let currentQuestionIndex = 0;
let score = 0;

// --- 📱 ดึง DOM Elements ---
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const questionImgEl = document.getElementById('question-image');
const optionsContainerEl = document.getElementById('options-container');
const questionProgressEl = document.getElementById('question-progress');
const timeProgressEl = document.getElementById('time-progress');
const timerTextEl = document.getElementById('timer-text');
const playAudioBtn = document.getElementById('play-audio-btn');
const questionAudioEl = document.getElementById('question-audio');
const questionIconEl = document.getElementById('question-icon');
const timeIconEl = document.getElementById('time-icon');

// --- หน้าจอ Screen ต่างๆ ---
const startScreenEl = document.getElementById('quiz-start-screen');
const activeScreenEl = document.getElementById('quiz-active-screen');
const resultScreenEl = document.getElementById('quiz-result-screen');
const startPhase1 = document.getElementById('start-phase-1');
const startPhase2 = document.getElementById('start-phase-2');

const bigPlayBtn = document.getElementById('big-play-btn');
const actualStartBtn = document.getElementById('actual-start-btn');
const captchaModal = document.getElementById('captcha-modal');
const captchaInput = document.getElementById('captcha-input');
const captchaVerifyBtn = document.getElementById('captcha-verify-btn');

const finalScoreEl = document.getElementById('final-score');
const totalQuestionsEl = document.getElementById('total-questions');
const resultBadgeEl = document.getElementById('result-badge');
const resultFeedbackEl = document.getElementById('result-feedback');


if (bigPlayBtn) {
    bigPlayBtn.addEventListener('click', () => {
        if (startPhase1 && startPhase2) {
            startPhase1.style.display = "none";
            startPhase2.style.display = "block"; 
        }
    });
}

if (actualStartBtn) {
    actualStartBtn.addEventListener("click", () => {
        if (captchaModal && captchaInput) {
            captchaModal.style.setProperty('display', 'flex', 'important');
            captchaModal.style.display = "flex"; 
            captchaInput.value = ""; 
            captchaInput.focus();
        }
    });
}

if (captchaVerifyBtn) {
    captchaVerifyBtn.addEventListener("click", () => {
        const userInput = captchaInput.value.trim();
        
        if (userInput === "เตนิวเป็นแฟนกัน") {
            if (captchaModal && startScreenEl && activeScreenEl) {
                captchaModal.style.display = "none";
                startScreenEl.style.display = "none";
                activeScreenEl.style.display = "block";
                
                generateQuizSet();
                loadQuestion();
            }
        } else {
            alert("❌คำตอบของคุณยังไม่ถูกต้อง กรุณาท่องมะยังภันเตนิว 3 จบก่อนพิมพ์คำตอบอีกครั้ง☁️");
            if (captchaInput) {
                captchaInput.value = "";
                captchaInput.focus();
            }
        }
    });
}

if (captchaInput) {
    captchaInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && captchaVerifyBtn) {
            captchaVerifyBtn.click();
        }
    });
}


// --- ฟังก์ชันโหลดโจทย์คำถาม ---
function loadQuestion() {
    if (!optionsContainerEl) return;
    optionsContainerEl.innerHTML = "";

    if (currentQuestionIndex >= activeQuizSet.length) {
        clearInterval(timerInterval);
        showResult();
        return;
    }

    const currentQuiz = activeQuizSet[currentQuestionIndex];
    if (questionNumberEl) questionNumberEl.innerText = `ข้อที่ ${currentQuestionIndex + 1}/${activeQuizSet.length}`;
    if (questionTextEl) questionTextEl.innerText = currentQuiz.question;

    const progressPercent = (currentQuestionIndex / activeQuizSet.length) * 100;
    if (questionProgressEl) questionProgressEl.style.width = `${progressPercent}%`;
    if (questionIconEl) questionIconEl.style.left = `${progressPercent}%`;

    resetAndStartTimer();

    if (questionImgEl) {
        if (currentQuiz.image && currentQuiz.image !== "") {
            questionImgEl.src = currentQuiz.image;
            questionImgEl.style.display = "block";
        } else {
            questionImgEl.style.display = "none";
        }
    }

    if (questionAudioEl && playAudioBtn) {
        if (currentQuiz.audio && currentQuiz.audio !== "") {
            questionAudioEl.src = currentQuiz.audio;
            playAudioBtn.style.display = "block";
        } else {
            questionAudioEl.src = "";
            playAudioBtn.style.display = "none";
        }
    }

    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('quiz-opt-btn-grid');

        if (option.img && option.img !== "") {
            const img = document.createElement('img');
            img.src = option.img;
            img.classList.add('option-img');
            button.appendChild(img);
        }

        const textSpan = document.createElement('span');
        textSpan.innerText = option.text;
        button.appendChild(textSpan);

        button.addEventListener('click', () => checkAnswer(index));
        optionsContainerEl.appendChild(button);
    });
}

function resetAndStartTimer() {
    clearInterval(timerInterval); 

    const totalMs = TIME_LIMIT * 1000;
    let msRemaining = totalMs;

    if (timerTextEl) timerTextEl.innerText = TIME_LIMIT;
    if (timeProgressEl) timeProgressEl.style.width = "100%";
    if (timeIconEl) timeIconEl.style.left = "100%";

    const tickRate = 50;

    timerInterval = setInterval(() => {
        msRemaining -= tickRate;

        const secondsToShow = Math.ceil(msRemaining / 1000);
        if (timerTextEl) timerTextEl.innerText = secondsToShow >= 0 ? secondsToShow : 0;

        const timePercent = (msRemaining / totalMs) * 100;

        if (msRemaining >= 0) {
            if (timeProgressEl) timeProgressEl.style.width = `${timePercent}%`;
            if (timeIconEl) timeIconEl.style.left = `${timePercent}%`;
        }

        if (msRemaining <= 0) {
            clearInterval(timerInterval);
            currentQuestionIndex++;
            loadQuestion();
        }
    }, tickRate);
}

if (playAudioBtn) {
    playAudioBtn.addEventListener('click', () => {
        if (questionAudioEl && questionAudioEl.src) {
            questionAudioEl.currentTime = 0; 
            questionAudioEl.play();
        }
    });
}

function checkAnswer(selectedIndex) {
    clearInterval(timerInterval); 
    if (questionAudioEl) questionAudioEl.pause();   
    
    const currentQuiz = activeQuizSet[currentQuestionIndex];
    
    if (currentQuiz.correct.includes(selectedIndex)) {
        score++;
    }
    
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    if (activeScreenEl) activeScreenEl.style.display = "none";
    if (resultScreenEl) resultScreenEl.style.display = "block";

    if (finalScoreEl) finalScoreEl.innerText = score;
    if (totalQuestionsEl) totalQuestionsEl.innerText = activeQuizSet.length;
    
    const scorePercentage = (score / activeQuizSet.length) * 100;

    let rankTitle = "";
    let feedbackText = "";
    let badgeColor = "#39b54a"; 

    if (scorePercentage <= 25) {
        rankTitle = `🪂ผู้โดยสารงงว่าขึ้นเครื่องตอนไหน (${Math.round(scorePercentage)}%)`;
        feedbackText = "คุณเหมือนเพิ่งรู้ตัวกลางอากาศว่า ‘นี่มันเกมอะไรเนี่ย?’ 🤯🧠 ความทรงจำหลุดออกจากเครื่องตั้งแต่ตอนประตูยังไม่ปิด 🚪✈️ ตอนนี้ทีมกู้ภัยกำลังพยายามตามหาความทรงจำของคุณอยู่ แนะนำให้กลับไปเช็กอินใหม่อีกรอบ 🎫";
        badgeColor = "#ff929e";
    } else if (scorePercentage <= 60) {
        rankTitle = `🧳ผู้โดยสารกระเป๋าหายระหว่างทาง(${Math.round(scorePercentage)}%)`;
        feedbackText = "จำได้บ้าง ลืมบ้าง 🧠💨 เหมือนฝากกระเป๋าไว้กับสายการบินแล้วระบบงง ๆ 📦❓ หายไปครึ่งหนึ่ง ตอนนี้หน่วยกู้ภัยพบเบาะแสความจำของคุณบางส่วนแล้ว 🔎 แต่ยังต้องค้นหาเพิ่มอีกนิด";
        badgeColor = "#fbd5c6";
    } else if (scorePercentage <= 80) {
        rankTitle = `✈️ผู้โดยสารชั้นประหยัดสายเนียน (${Math.round(scorePercentage)}%)`;
        feedbackText = "ความจำดีระดับหนึ่ง 🧠✔️ เหมือนมีทีมกู้ภัยคอยชี้เป้าอยู่ข้าง ๆ เลยรอดมาได้สวย 😆 แม้บางฉากจะเบลอเหมือนหมอกบนรันเวย์ 🌫️🛬 แต่ภารกิจช่วยเหลือถือว่าใกล้สำเร็จแล้ว";
        badgeColor = "#3182e6";
    } else if (scorePercentage <= 90) {
        rankTitle = `🧭ผู้โดยสารกึ่งกัปตันสายลับ(${Math.round(scorePercentage)}%)`;
        feedbackText = "คุณจำทุกดีเทลได้แบบน่าสงสัยมาก 🧠🔍 จนทีมกู้ภัย เริ่มไม่แน่ใจว่าใครกำลังช่วยใครกันแน่ 😆 เหมือนคุณเป็นทั้งผู้รอดชีวิตและผู้บัญชาการภารกิจในเวลาเดียวกัน 📡✈️";
        badgeColor = "#9b59b6";
    } else {
        rankTitle = `🚨🏆 ตำนานผู้รอดชีวิตระดับ HQ กู้ภัย (${Math.round(scorePercentage)}%)`;
        feedbackText = "คุณไม่ได้แค่ดู…คุณเหมือนเป็นทั้งผู้รอดชีวิตและศูนย์บัญชาการกู้ภัยเองด้วย จำได้ครบทุกดีเทลตั้งแต่ต้นจนจบ 🧠🎬 จนทีมกู้ภัยต้องขออัดเทปคุณไปเป็นคู่มือภารกิจต่อไป 🎥✈️";
        badgeColor = "#f1c40f";
    }

    if (resultBadgeEl) {
        resultBadgeEl.innerText = rankTitle;
        resultBadgeEl.style.backgroundColor = badgeColor;
    }
    if (resultFeedbackEl) resultFeedbackEl.innerText = feedbackText;
}

function resetQuiz() {
    if (resultScreenEl && startPhase1 && startPhase2 && startScreenEl) {
        resultScreenEl.style.display = "none";
        startPhase1.style.display = "block";
        startPhase2.style.display = "none";
        startScreenEl.style.display = "block"; 
        currentQuestionIndex = 0;
        score = 0;
    }
}