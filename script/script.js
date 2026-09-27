// USERS
const students = [
    // ===== DOLPA SECTION =====

    { name: "Aarya Timalsina", password: "dolpa1", section: "Dolpa" },
    { name: "Aayan Dahal", password: "dolpa2", section: "Dolpa" },
    { name: "Aerik Guragai", password: "dolpa3", section: "Dolpa" },
    { name: "Anmol Timalsina", password: "dolpa4", section: "Dolpa" },
    { name: "Arvin Adhikari", password: "dolpa5", section: "Dolpa" },
    { name: "Binamrata Sapkota", password: "dolpa6", section: "Dolpa" },
    { name: "Evan Shrestha", password: "dolpa7", section: "Dolpa" },
    { name: "Grishika Lamsal", password: "dolpa8", section: "Dolpa" },
    { name: "Hardik Bista", password: "dolpa9", section: "Dolpa" },
    { name: "Macson Chaudhary", password: "dolpa10", section: "Dolpa" },
    { name: "Mahira Thapa Magar", password: "dolpa11", section: "Dolpa" },
    { name: "Mivani Lamsal", password: "dolpa12", section: "Dolpa" },
    { name: "Phurba Dorje Tamang", password: "dolpa13", section: "Dolpa" },
    { name: "Prajisha Humagain", password: "dolpa14", section: "Dolpa" },
    { name: "Prayusha Shrestha", password: "dolpa15", section: "Dolpa" },
    { name: "Prinsika Dulal", password: "dolpa16", section: "Dolpa" },
    { name: "Ritik Khanal", password: "dolpa17", section: "Dolpa" },
    { name: "Riwans Lungeli Magar", password: "dolpa18", section: "Dolpa" },
    { name: "Sabyata Timalsina", password: "dolpa19", section: "Dolpa" },
    { name: "Sachin Dudharaj", password: "dolpa20", section: "Dolpa" },
    { name: "Samden Tamang", password: "dolpa21", section: "Dolpa" },
    { name: "Samrat Adhikari", password: "dolpa22", section: "Dolpa" },
    { name: "Sanvi Humagain", password: "dolpa23", section: "Dolpa" },
    { name: "Shamsher Jung Bista", password: "dolpa24", section: "Dolpa" },
    { name: "Shilpa Rai", password: "dolpa25", section: "Dolpa" },
    { name: "Sparsha Shrestha", password: "dolpa26", section: "Dolpa" },
    { name: "Suranjan Ghimire", password: "dolpa27", section: "Dolpa" },
    { name: "Yaman Raj Basnet", password: "dolpa28", section: "Dolpa" },

    // =====DOTI SECTION =====

    { name: "Aashir Bista", password: "doti1", section: "Doti" },
    { name: "Aayan Kandel", password: "doti2", section: "Doti" },
    { name: "Aayush Yadav", password: "doti3", section: "Doti" },
    { name: "Adity Neupane", password: "doti4", section: "Doti" },
    { name: "Elbin Piya", password: "doti5", section: "Doti" },
    { name: "Anish Timalsina", password: "doti6", section: "Doti" },
    { name: "Bibash Thapa", password: "doti7", section: "Doti" },
    { name: "Binisha Karki", password: "doti8", section: "Doti" },
    { name: "Himani Bajagain", password: "doti9", section: "Doti" },
    { name: "Hridayanshu Ghimire", password: "doti10", section: "Doti" },
    { name: "Kavya Malla", password: "doti11", section: "Doti" },
    { name: "Krischal Dulal", password: "doti12", section: "Doti" },
    { name: "Mimik Saru Magar", password: "doti13", section: "Doti" },
    { name: "Pratigya Mainali", password: "doti14", section: "Doti" },
    { name: "Prasid Timalsina", password: "doti15", section: "Doti" },
    { name: "Piyush Chaudhary", password: "doti16", section: "Doti" },
    { name: "Rajisha Raut", password: "doti17", section: "Doti" },
    { name: "Ridam Chudal", password: "doti18", section: "Doti" },
    { name: "Safal Bista", password: "doti19", section: "Doti" },
    { name: "Sanjita Magar", password: "doti20", section: "Doti" },
    { name: "Saanvi Khatri", password: "doti21", section: "Doti" },
    { name: "Shubham Neupane", password: "doti22", section: "Doti" },
    { name: "Shobik Khatri", password: "doti23", section: "Doti" },
    { name: "Shubham Lamichhane", password: "doti24", section: "Doti" },
    { name: "Suhan Gautam", password: "doti25", section: "Doti" },
    { name: "Supriya Chaudhary", password: "doti26", section: "Doti" },
    { name: "Supriya Katwal", password: "doti27", section: "Doti" },
    { name: "Supriya Timalsina", password: "doti28", section: "Doti" },

    // ===== GORKHA SECTION
    { name: "Aakanshya Dhakal", password: "gorkha1", section: "Gorkha" },
    { name: "Aakankshya Lama", password: "gorkha2", section: "Gorkha" },
    { name: "Aaleesha Timalsina", password: "gorkha3", section: "Gorkha" },
    { name: "Aditi Dhakal", password: "gorkha4", section: "Gorkha" },
    { name: "Amrish Ghimire", password: "gorkha5", section: "Gorkha" },
    { name: "Apil Ghimire", password: "gorkha6", section: "Gorkha" },
    { name: "Arik Gurung", password: "gorkha7", section: "Gorkha" },
    { name: "Aryav Maharjan", password: "gorkha8", section: "Gorkha" },
    { name: "Bibek Jyoti", password: "gorkha9", section: "Gorkha" },
    { name: "Bimochan Timalsina", password: "gorkha10", section: "Gorkha" },
    { name: "David Sunuwar", password: "gorkha11", section: "Gorkha" },
    { name: "Ishan Pakuwal", password: "gorkha12", section: "Gorkha" },
    { name: "Kabin K.C", password: "gorkha13", section: "Gorkha" },
    { name: "Kristina Thakulla", password: "gorkha14", section: "Gorkha" },
    { name: "Merina Rogu", password: "gorkha15", section: "Gorkha" },
    { name: "Numasa Limbu", password: "gorkha16", section: "Gorkha" },
    { name: "Ridam Timalsina", password: "gorkha17", section: "Gorkha" },
    { name: "Ronisha Ghatraj", password: "gorkha18", section: "Gorkha" },
    { name: "Rubina Sapkota", password: "gorkha19", section: "Gorkha" },
    { name: "Samten Gongba", password: "gorkha20", section: "Gorkha" },
    { name: "Samyam Thing", password: "gorkha21", section: "Gorkha" },
    { name: "Sanskriti Rana Magar", password: "gorkha22", section: "Gorkha" },
    { name: "Shreyan Timalsina", password: "gorkha23", section: "Gorkha" },
    { name: "Simson Pariyar", password: "gorkha24", section: "Gorkha" },
    { name: "Sinjuka Tamang", password: "gorkha25", section: "Gorkha" },
    { name: "Siwon Rokka", password: "gorkha26", section: "Gorkha" },
    { name: "Sulav Regmi", password: "gorkha27", section: "Gorkha" },
    { name: "Yubak Sahi", password: "gorkha28", section: "Gorkha" },
    { name: "Prakriti Neupane", password: "gorkha29", section: "Gorkha" }
];
// LOGIN
function login() {
    let u = document.getElementById("username").value.trim().toLowerCase();
    let p = document.getElementById("password").value;

    if (!u || !p) {
        alert("Please fill all fields");
        return;
    }

    let valid = students.find(
        s => s.name.toLowerCase() === u && s.password === p
    );

    if (valid) {
        localStorage.setItem("student", valid.name);
        localStorage.setItem("studentSection", valid.section); // Store section
        window.location.href = "home.html";
    } else {
        alert("Invalid login ❌");
    }
}

// ---------------- FIXED START TIME ----------------
const examStart = new Date("2026-05-13T18:45:00+05:45");

// CHECK START
function checkStart() {
    let now = new Date();

    if (now < examStart) {
        alert("Exam starts at 6:45 PM (NPT). Please wait.");
        return false;
    }
    return true;
}

// ---------------- VOICE ALERT FUNCTION ----------------
function speakMessage(message) {
    try {
        // Stop any ongoing speech
        window.speechSynthesis.cancel();

        // Create new speech utterance
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;

        // Speak the message
        window.speechSynthesis.speak(utterance);
        console.log(`🔊 Voice Alert: ${message}`);
    } catch (e) {
        console.log("Speech synthesis not supported");
    }
}

// ---------------- RANDOM QUESTIONS ----------------
function getRandom(arr, n) {
    return [...arr].sort(() => 0.5 - Math.random()).slice(0, n);
}

// ---------------- EXAM INIT ----------------
let selected = [];
let answers = {};
let time = 1200;
let voiceAlertTriggered5Min = false;
let voiceAlertTriggered1Min = false;
let examStartedVoiceTriggered = false;

function initExam() {

    if (!checkStart()) return;

    selected = getRandom(allQuestions, 25);

    const qDiv = document.getElementById("questions");
    const nav = document.getElementById("nav");

    qDiv.innerHTML = "";
    nav.innerHTML = "";

    selected.forEach((q, i) => {

        // =====================================================
        // QUESTION CONTAINER
        // =====================================================

        const questionBox = document.createElement("div");
        questionBox.id = "q" + (i + 1);
        questionBox.className = "q-box";

        // =====================================================
        // QUESTION TEXT
        // =====================================================

        const questionText = document.createElement("p");
        questionText.innerHTML = `<strong>${i + 1}. ${q.question}</strong>`;
        questionBox.appendChild(questionText);

        // =====================================================
        // QUESTION IMAGE
        // =====================================================

        if (q.image) {

            const questionImage = document.createElement("img");

            questionImage.src = q.image;
            questionImage.alt = "Question image";

            questionImage.style.maxWidth = "500px";
            questionImage.style.maxHeight = "300px";
            questionImage.style.width = "auto";
            questionImage.style.height = "auto";
            questionImage.style.display = "block";
            questionImage.style.margin = "10px auto";
            questionImage.style.objectFit = "contain";
            questionImage.style.borderRadius = "8px";

            // If image is missing
            questionImage.onerror = function() {
                console.error("Question image not found:", q.image);
                this.style.display = "none";
            };

            questionBox.appendChild(questionImage);
        }

        // =====================================================
        // OPTIONS
        // =====================================================

        q.options.forEach((opt, optionIndex) => {

            // -------------------------------------------------
            // SUPPORT BOTH:
            //
            // 1. Normal option:
            //    "Diamond"
            //
            // 2. Image option:
            //    {
            //        text: "Diamond",
            //        image: "quiz_images/image13.png"
            //    }
            // -------------------------------------------------

            let optionText;
            let optionImage = null;

            if (typeof opt === "object") {

                optionText = opt.text || "";

                if (opt.image) {
                    optionImage = opt.image;
                }

            } else {

                optionText = opt;
            }

            // -------------------------------------------------
            // OPTION LABEL
            // -------------------------------------------------

            const label = document.createElement("label");

            label.style.display = "block";
            label.style.cursor = "pointer";
            label.style.margin = "12px 0";
            label.style.padding = "10px";
            label.style.borderRadius = "8px";

            // -------------------------------------------------
            // RADIO BUTTON
            // -------------------------------------------------

            const radio = document.createElement("input");

            radio.type = "radio";
            radio.name = "q" + i;

            // IMPORTANT:
            // Store the TEXT as the value.
            // This keeps your existing correct answers working.
            radio.value = optionText;

            radio.style.marginRight = "8px";

            // -------------------------------------------------
            // SAVE ANSWER
            // -------------------------------------------------

            radio.addEventListener("change", function() {

                saveAns(i, optionText);

                // Highlight selected option
                const allLabels = questionBox.querySelectorAll("label");

                allLabels.forEach(function(lbl) {
                    lbl.style.background = "";
                    lbl.style.border = "";
                });

                label.style.background = "#e8f0ff";
                label.style.border = "2px solid #4285f4";
            });

            label.appendChild(radio);

            // -------------------------------------------------
            // OPTION TEXT
            // -------------------------------------------------

            const textSpan = document.createElement("span");

            textSpan.textContent =
                String.fromCharCode(65 + optionIndex) + ". " + optionText;

            textSpan.style.fontSize = "16px";
            textSpan.style.fontWeight = "500";

            label.appendChild(textSpan);

            // -------------------------------------------------
            // OPTION IMAGE
            // -------------------------------------------------

            if (optionImage) {

                const optionImg = document.createElement("img");

                optionImg.src = optionImage;
                optionImg.alt = optionText;

                optionImg.style.display = "block";
                optionImg.style.maxWidth = "250px";
                optionImg.style.maxHeight = "180px";
                optionImg.style.width = "auto";
                optionImg.style.height = "auto";
                optionImg.style.margin = "10px 0 5px 30px";
                optionImg.style.objectFit = "contain";
                optionImg.style.borderRadius = "6px";
                optionImg.style.cursor = "pointer";

                // If image doesn't exist
                optionImg.onerror = function() {
                    console.error(
                        "Option image not found:",
                        optionImage
                    );

                    this.style.display = "none";
                };

                // Clicking image selects radio button
                optionImg.addEventListener("click", function() {
                    radio.checked = true;
                    radio.dispatchEvent(new Event("change"));
                });

                label.appendChild(optionImg);
            }

            questionBox.appendChild(label);
        });

        // =====================================================
        // ADD QUESTION TO PAGE
        // =====================================================

        qDiv.appendChild(questionBox);

        // =====================================================
        // NAVIGATION BUTTON
        // =====================================================

        const btn = document.createElement("button");

        btn.innerText = i + 1;
        btn.className = "q-btn";

        btn.onclick = function() {

            document.getElementById("q" + (i + 1))
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
        };

        nav.appendChild(btn);
    });


    // 🔥 ADD CAMERA MONITOR WITH EYE TRACKING & SOUND
    addCameraMonitorWithSound();

    startTimer();

    // 🔥 VOICE: EXAM STARTED
    if (!examStartedVoiceTriggered) {
        setTimeout(() => {
            speakMessage("Exam started. Good luck! You have 20 minutes to complete your exam.");
            examStartedVoiceTriggered = true;
        }, 1000);
    }
}

// Camera monitoring with eye tracking and sound alerts (No external API)
function addCameraMonitorWithSound() {
    // Create camera container with enhanced styling
    const cameraContainer = document.createElement("div");
    cameraContainer.id = "camera-monitor";
    cameraContainer.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 350px;
    height: 260px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    z-index: 9999;
    cursor: move;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3), 0 0 0 2px rgba(255,255,255,0.1) inset;
    overflow: hidden;
    backdrop-filter: blur(5px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  `;

    // Create header bar
    const headerBar = document.createElement("div");
    headerBar.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 35px;
    background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5));
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    z-index: 10001;
    border-radius: 15px 15px 0 0;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  `;

    // Title section
    const titleSection = document.createElement("div");
    titleSection.style.cssText = `
    display: flex;
    align-items: center;
    gap: 8px;
    color: white;
    font-size: 12px;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  `;

    // Camera icon
    const cameraIcon = document.createElement("span");
    cameraIcon.innerHTML = "📹";
    cameraIcon.style.cssText = `
    font-size: 14px;
    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
  `;

    const titleText = document.createElement("span");
    titleText.innerText = "EYE MONITORING ACTIVE";
    titleText.style.cssText = `
    letter-spacing: 1px;
  `;

    titleSection.appendChild(cameraIcon);
    titleSection.appendChild(titleText);

    // Warning indicator
    const warningIndicator = document.createElement("div");
    warningIndicator.style.cssText = `
    background: rgba(255, 193, 7, 0.9);
    color: #856404;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 10px;
    font-weight: bold;
    display: none;
    align-items: center;
    gap: 4px;
  `;
    warningIndicator.innerHTML = "⚠️ WARNING";

    // Control buttons container
    const buttonsContainer = document.createElement("div");
    buttonsContainer.style.cssText = `
    display: flex;
    gap: 8px;
    align-items: center;
  `;

    buttonsContainer.appendChild(warningIndicator);

    // Minimize button
    const minimizeBtn = document.createElement("button");
    minimizeBtn.innerHTML = "−";
    minimizeBtn.style.cssText = `
    background: rgba(255,255,255,0.2);
    color: white;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
  `;
    minimizeBtn.onmouseover = () => {
        minimizeBtn.style.background = "rgba(255,255,255,0.4)";
        minimizeBtn.style.transform = "scale(1.1)";
    };
    minimizeBtn.onmouseout = () => {
        minimizeBtn.style.background = "rgba(255,255,255,0.2)";
        minimizeBtn.style.transform = "scale(1)";
    };

    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "✕";
    closeBtn.style.cssText = `
    background: rgba(220, 53, 69, 0.8);
    color: white;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
    closeBtn.onmouseover = () => {
        closeBtn.style.background = "rgba(220, 53, 69, 1)";
        closeBtn.style.transform = "scale(1.1)";
    };
    closeBtn.onmouseout = () => {
        closeBtn.style.background = "rgba(220, 53, 69, 0.8)";
        closeBtn.style.transform = "scale(1)";
    };

    buttonsContainer.appendChild(minimizeBtn);
    buttonsContainer.appendChild(closeBtn);
    headerBar.appendChild(titleSection);
    headerBar.appendChild(buttonsContainer);

    // Video container
    const videoWrapper = document.createElement("div");
    videoWrapper.style.cssText = `
    position: absolute;
    top: 35px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: #000;
  `;

    // Create video element
    const video = document.createElement("video");
    video.id = "exam-video";
    video.style.cssText = `
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scaleX(-1);
  `;
    video.autoplay = true;
    video.playsInline = true;

    // Canvas for motion detection
    const canvas = document.createElement("canvas");
    canvas.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  `;

    // Recording indicator
    const recordingIndicator = document.createElement("div");
    recordingIndicator.style.cssText = `
    position: absolute;
    top: 45px;
    left: 12px;
    background: rgba(76, 175, 80, 0.9);
    color: white;
    padding: 4px 8px;
    border-radius: 20px;
    font-size: 10px;
    font-weight: bold;
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: monospace;
    backdrop-filter: blur(5px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  `;

    const greenDot = document.createElement("div");
    greenDot.style.cssText = `
    width: 8px;
    height: 8px;
    background: #4caf50;
    border-radius: 50%;
    animation: pulse 1.5s infinite;
  `;

    const recordingText = document.createElement("span");
    recordingText.innerText = "TRACKING";

    recordingIndicator.appendChild(greenDot);
    recordingIndicator.appendChild(recordingText);

    videoWrapper.appendChild(video);
    videoWrapper.appendChild(canvas);
    cameraContainer.appendChild(headerBar);
    cameraContainer.appendChild(videoWrapper);
    cameraContainer.appendChild(recordingIndicator);
    document.body.appendChild(cameraContainer);

    // Add animations
    const style = document.createElement('style');
    style.textContent = `
    @keyframes pulse {
      0% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.5;
        transform: scale(1.2);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
    @keyframes warningPulse {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.05); }
      100% { opacity: 1; transform: scale(1); }
    }
    @keyframes soundWave {
      0% { box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(255, 0, 0, 0); }
      100% { box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }
    }
  `;
    document.head.appendChild(style);

    // Function to play warning sound (NO EXTERNAL API - pure JavaScript)
    function playWarningSound() {
        try {
            // Method 1: Using Web Audio API for beep sound
            const audioCtx = new(window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.type = 'sine';
            oscillator.frequency.value = 880; // 880 Hz beep
            gainNode.gain.value = 0.3;

            oscillator.start();
            gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.5);
            oscillator.stop(audioCtx.currentTime + 0.5);

            // Resume audio context if suspended (required by browsers)
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
        } catch (e) {
            // Method 2: Fallback using Audio element with data URI (no external files)
            try {
                const audioContext = new(window.AudioContext || window.webkitAudioContext)();
                const sampleRate = 44100;
                const duration = 0.5;
                const samples = duration * sampleRate;
                const buffer = audioContext.createBuffer(1, samples, sampleRate);
                const channelData = buffer.getChannelData(0);

                // Generate a simple beep waveform
                for (let i = 0; i < samples; i++) {
                    channelData[i] = Math.sin(2 * Math.PI * 880 * i / sampleRate);
                    // Fade out
                    if (i > samples * 0.8) {
                        channelData[i] *= (1 - (i - samples * 0.8) / (samples * 0.2));
                    }
                }

                const source = audioContext.createBufferSource();
                source.buffer = buffer;
                source.connect(audioContext.destination);
                source.start();

                if (audioContext.state === 'suspended') {
                    audioContext.resume();
                }
            } catch (e2) {
                console.log("Audio not supported in this browser");
            }
        }
    }

    // Function to show visual warning and play sound
    let warningTimeout = null;
    let lastWarningTime = 0;
    let violationCount = 0;

    function triggerWarning(message) {
        const now = Date.now();

        // Limit warnings to once every 3 seconds to avoid spamming
        if (now - lastWarningTime < 3000) return;
        lastWarningTime = now;

        // Play sound alert
        playWarningSound();

        // Increment violation count
        violationCount++;
        console.log(`⚠️ Warning ${violationCount}: ${message}`);

        // Show warning indicator
        warningIndicator.style.display = "flex";
        warningIndicator.style.animation = "warningPulse 0.5s ease";

        // Change camera border to red with animation
        cameraContainer.style.border = "3px solid #ff0000";
        cameraContainer.style.animation = "soundWave 0.5s ease";
        cameraContainer.style.boxShadow = "0 0 20px rgba(255,0,0,0.5)";

        // Change recording indicator to red
        recordingIndicator.style.background = "rgba(220, 53, 69, 0.9)";
        greenDot.style.background = "#ff0000";
        recordingText.innerText = "WARNING!";

        // Create floating warning message
        const warningMsg = document.createElement("div");
        warningMsg.style.cssText = `
      position: fixed;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #ff6b6b, #ee5a24);
      color: white;
      padding: 15px 30px;
      border-radius: 50px;
      font-size: 20px;
      font-weight: bold;
      z-index: 100000;
      box-shadow: 0 5px 20px rgba(0,0,0,0.3);
      animation: shake 0.5s ease;
      font-family: 'Segoe UI', sans-serif;
      white-space: nowrap;
      text-align: center;
    `;
        warningMsg.innerHTML = `⚠️ ${message} ⚠️`;
        document.body.appendChild(warningMsg);

        // Remove warning message after 2 seconds
        setTimeout(() => {
            if (warningMsg && warningMsg.parentNode) {
                warningMsg.style.opacity = "0";
                warningMsg.style.transition = "opacity 0.5s";
                setTimeout(() => {
                    if (warningMsg && warningMsg.parentNode) {
                        warningMsg.parentNode.removeChild(warningMsg);
                    }
                }, 500);
            }
        }, 2000);

        // Reset warning indicator after 2 seconds
        if (warningTimeout) clearTimeout(warningTimeout);
        warningTimeout = setTimeout(() => {
            warningIndicator.style.display = "none";
            cameraContainer.style.border = "none";
            cameraContainer.style.animation = "";
            cameraContainer.style.boxShadow = "0 10px 40px rgba(0,0,0,0.3), 0 0 0 2px rgba(255,255,255,0.1) inset";
            recordingIndicator.style.background = "rgba(76, 175, 80, 0.9)";
            greenDot.style.background = "#4caf50";
            recordingText.innerText = "TRACKING";
        }, 2000);
    }

    // Eye and head movement detection using motion analysis
    let previousFrameData = null;
    let lookingAwayCounter = 0;
    let frameAnalysisInterval = null;

    function analyzeEyeMovement() {
        if (!video.videoWidth || video.readyState !== 4) return;

        // Set canvas size to match video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext('2d');

        // Draw current video frame to canvas for analysis
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Get image data for motion detection
        const currentImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (previousFrameData) {
            // Calculate motion between frames
            let motionAmount = 0;
            let motionThreshold = 30; // Sensitivity threshold

            // Compare pixel differences
            for (let i = 0; i < currentImageData.data.length; i += 4) {
                const rDiff = Math.abs(currentImageData.data[i] - previousFrameData.data[i]);
                const gDiff = Math.abs(currentImageData.data[i + 1] - previousFrameData.data[i + 1]);
                const bDiff = Math.abs(currentImageData.data[i + 2] - previousFrameData.data[i + 2]);
                const avgDiff = (rDiff + gDiff + bDiff) / 3;

                if (avgDiff > motionThreshold) {
                    motionAmount++;
                }
            }

            // Calculate percentage of changed pixels
            const totalPixels = canvas.width * canvas.height;
            const motionPercentage = (motionAmount / totalPixels) * 100;

            // Draw motion heatmap for debugging (optional visualization)
            ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';

            // Detect significant movement (looking away or moving eyes excessively)
            if (motionPercentage > 25) { // More than 25% of frame changed
                lookingAwayCounter++;

                if (lookingAwayCounter > 3) { // Sustained movement for multiple frames
                    triggerWarning("Don't look away! Stay focused on your exam");
                    lookingAwayCounter = 0;
                }

                // Visual feedback on canvas
                ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.font = "20px Arial";
                ctx.fillStyle = "red";
                ctx.shadowBlur = 0;
                ctx.fillText("⚠️ MOVEMENT DETECTED", 20, 50);

            } else if (motionPercentage > 15) { // Small movements (normal)
                lookingAwayCounter = Math.max(0, lookingAwayCounter - 1);
                ctx.fillStyle = 'rgba(255, 255, 0, 0.1)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Draw eye tracking guide
                ctx.beginPath();
                ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
                ctx.strokeStyle = "yellow";
                ctx.lineWidth = 2;
                ctx.stroke();

            } else {
                lookingAwayCounter = Math.max(0, lookingAwayCounter - 0.5);

                // Draw normal eye tracking zone
                ctx.beginPath();
                ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
                ctx.strokeStyle = "green";
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.font = "14px Arial";
                ctx.fillStyle = "green";
                ctx.fillText("✓ EYES FOCUSED", canvas.width - 120, 30);
            }

            // Draw face detection zone guide
            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
            ctx.lineWidth = 1;
            ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);

            // Draw center target
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.fill();

        } else {
            // First frame, just show guide
            ctx.strokeStyle = "green";
            ctx.lineWidth = 2;
            ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
            ctx.font = "16px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Position your face in the center", canvas.width / 2 - 120, 40);
        }

        // Store current frame for next comparison
        previousFrameData = currentImageData;
    }

    // Start frame analysis
    function startFrameAnalysis() {
        if (frameAnalysisInterval) clearInterval(frameAnalysisInterval);
        frameAnalysisInterval = setInterval(analyzeEyeMovement, 500); // Analyze every 0.5 seconds
    }

    // Initialize camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                video.srcObject = stream;
                video.onloadedmetadata = () => {
                    video.play();
                    startFrameAnalysis();
                };
            })
            .catch(function(error) {
                console.error("Camera error:", error);
                videoWrapper.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                videoWrapper.style.display = "flex";
                videoWrapper.style.alignItems = "center";
                videoWrapper.style.justifyContent = "center";

                const errorMsg = document.createElement("div");
                errorMsg.style.cssText = `
          color: white;
          text-align: center;
          font-family: 'Segoe UI', sans-serif;
          padding: 20px;
        `;
                errorMsg.innerHTML = "⚠️ Camera access denied<br><small>Camera is required for exam monitoring</small>";
                videoWrapper.appendChild(errorMsg);

                recordingIndicator.style.background = "rgba(220, 53, 69, 0.9)";
                recordingText.innerText = "NO CAMERA";
            });
    } else {
        videoWrapper.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
        videoWrapper.style.display = "flex";
        videoWrapper.style.alignItems = "center";
        videoWrapper.style.justifyContent = "center";

        const errorMsg = document.createElement("div");
        errorMsg.style.cssText = `
      color: white;
      text-align: center;
      font-family: 'Segoe UI', sans-serif;
      padding: 20px;
    `;
        errorMsg.innerHTML = "📷 Camera not supported<br><small>Your browser doesn't support camera access</small>";
        videoWrapper.appendChild(errorMsg);
    }

    // Make camera draggable
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    let isResizing = false;

    cameraContainer.addEventListener("mousedown", dragStart);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", dragEnd);

    function dragStart(e) {
        if (e.target === minimizeBtn || e.target === closeBtn ||
            e.target.parentElement === buttonsContainer || isResizing) return;

        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        if (e.target === cameraContainer || cameraContainer.contains(e.target)) {
            isDragging = true;
            cameraContainer.style.cursor = "grabbing";
            cameraContainer.style.opacity = "0.95";
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            const maxX = window.innerWidth - cameraContainer.offsetWidth;
            const maxY = window.innerHeight - cameraContainer.offsetHeight;
            currentX = Math.min(Math.max(0, currentX), maxX);
            currentY = Math.min(Math.max(0, currentY), maxY);

            cameraContainer.style.left = `${currentX}px`;
            cameraContainer.style.top = `${currentY}px`;
            cameraContainer.style.right = "auto";
            cameraContainer.style.bottom = "auto";
            cameraContainer.style.transform = "scale(1.02)";
        }
    }

    function dragEnd(e) {
        isDragging = false;
        cameraContainer.style.cursor = "move";
        cameraContainer.style.opacity = "1";
        cameraContainer.style.transform = "scale(1)";
    }

    // Minimize functionality
    let isMinimized = false;
    let originalSize = { width: "350px", height: "260px" };

    minimizeBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        if (!isMinimized) {
            originalSize = {
                width: cameraContainer.style.width,
                height: cameraContainer.style.height
            };
            cameraContainer.style.width = "180px";
            cameraContainer.style.height = "45px";
            videoWrapper.style.opacity = "0";
            recordingIndicator.style.opacity = "0";
            minimizeBtn.innerHTML = "+";
            isMinimized = true;
        } else {
            cameraContainer.style.width = originalSize.width;
            cameraContainer.style.height = originalSize.height;
            videoWrapper.style.opacity = "1";
            recordingIndicator.style.opacity = "1";
            minimizeBtn.innerHTML = "−";
            isMinimized = false;
        }
    });

    // Close functionality
    closeBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        if (video.srcObject) {
            const tracks = video.srcObject.getTracks();
            tracks.forEach(track => track.stop());
        }
        if (frameAnalysisInterval) {
            clearInterval(frameAnalysisInterval);
        }
        cameraContainer.remove();
        triggerWarning("⚠️ Camera monitoring stopped! This violation has been recorded ⚠️");
    });

    // Add resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.cssText = `
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.3) 50%);
    cursor: nw-resize;
    border-radius: 0 0 15px 0;
    z-index: 10002;
  `;
    cameraContainer.appendChild(resizeHandle);

    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", function(e) {
        isResizing = true;
        startWidth = cameraContainer.offsetWidth;
        startHeight = cameraContainer.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
        e.preventDefault();
        e.stopPropagation();
    });

    document.addEventListener("mousemove", function(e) {
        if (isResizing) {
            const newWidth = startWidth + (e.clientX - startX);
            const newHeight = startHeight + (e.clientY - startY);

            const constrainedWidth = Math.min(Math.max(200, newWidth), 700);
            const constrainedHeight = Math.min(Math.max(150, newHeight), 500);

            cameraContainer.style.width = `${constrainedWidth}px`;
            cameraContainer.style.height = `${constrainedHeight}px`;
            videoWrapper.style.height = `calc(100% - 35px)`;
        }
    });

    document.addEventListener("mouseup", function(e) {
        isResizing = false;
    });

    // Add hover effect for resize handle
    resizeHandle.onmouseover = () => {
        resizeHandle.style.background = "linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.6) 50%)";
    };
    resizeHandle.onmouseout = () => {
        resizeHandle.style.background = "linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.3) 50%)";
    };
}

// ---------------- SAVE ANSWER ----------------
function saveAns(i, val) {
    answers[i] = val;

    // 🔥 MARK BUTTON GREEN (ATTEMPTED)
    let btns = document.getElementsByClassName("q-btn");
    btns[i].style.background = "#fa0909";
    btns[i].style.color = "white";
}

// ---------------- TIMER WITH VOICE ALERTS ----------------
function startTimer() {
    let t = setInterval(() => {
        time--;

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        // 🔥 VOICE ALERT: 5 minutes remaining
        if (time === 300 && !voiceAlertTriggered5Min) {
            speakMessage("Attention! Only 5 minutes remaining. Please complete your exam quickly.");
            voiceAlertTriggered5Min = true;
        }

        // 🔥 VOICE ALERT: 1 minute remaining
        if (time === 60 && !voiceAlertTriggered1Min) {
            speakMessage("Just one minute left! Hurry up and finish your exam.");
            voiceAlertTriggered1Min = true;
        }

        if (time <= 0) {
            clearInterval(t);
            speakMessage("Time's up! Submitting your exam now.");
            setTimeout(() => {
                submitExam();
            }, 1000);
        }
    }, 1000);
}

// SUBMIT
function submitExam() {
    localStorage.setItem("answers", JSON.stringify(answers));
    localStorage.setItem("questions", JSON.stringify(selected));
    window.location = "result.html";
}

// ---------------- RESULT TIMER ----------------
let count = 300; // 5 minutes = 300 seconds
let timerInterval = null;

function startResultTimer() {
    // Create progress bar inside timer box if it doesn't exist
    createProgressBarInTimerBox();

    // Get progress fill element
    const progressFill = document.getElementById("progressFill");

    // Reset progress bar to full
    if (progressFill) {
        progressFill.style.width = "100%";
        progressFill.style.transition = "width 1s linear";
    }

    // Clear existing interval if any
    if (timerInterval) clearInterval(timerInterval);

    // Start countdown timer
    timerInterval = setInterval(() => {
        count--;

        // Calculate minutes and seconds
        let minutes = Math.floor(count / 60);
        let seconds = count % 60;

        // Format the time as MM:SS
        let formattedTime = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        document.getElementById("count").innerText = formattedTime;

        // Update progress bar (based on 600 seconds total)
        const progressPercentage = (count / 600) * 100;
        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;

            // Change color based on remaining time
            if (count <= 60) { // Last 1 minute (60 seconds)
                progressFill.style.background = "#ff4757";
            } else if (count <= 180) { // Last 3 minutes (180 seconds)
                progressFill.style.background = "#ffa502";
            } else {
                progressFill.style.background = "#00e676";
            }
        }

        if (count <= 0) {
            clearInterval(timerInterval);
            document.getElementById("count").innerText = "0:00";
            showResult();
        }
    }, 1000);
}

// Function to create progress bar inside timer box
function createProgressBarInTimerBox() {
    // Check if progress bar already exists
    if (document.getElementById("progressBarContainer")) return;

    // Find the timer box element
    const timerBox = document.querySelector('.timer-box');
    if (!timerBox) return;

    // Create progress bar container
    const progressContainer = document.createElement("div");
    progressContainer.id = "progressBarContainer";
    progressContainer.style.cssText = `
    margin-top: 15px;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
  `;

    // Create progress fill
    const progressFill = document.createElement("div");
    progressFill.id = "progressFill";
    progressFill.style.cssText = `
    width: 100%;
    height: 6px;
    background: #00e676;
    transition: width 1s linear;
    border-radius: 10px;
  `;

    progressContainer.appendChild(progressFill);
    timerBox.appendChild(progressContainer);
}

// ---------------- SHOW RESULT ----------------
function showResult() {

    // Clear timer interval if running
    if (timerInterval) clearInterval(timerInterval);

    let ans = JSON.parse(localStorage.getItem("answers"));
    let qs = JSON.parse(localStorage.getItem("questions"));

    let score = 0;
    let html = "";

    qs.forEach((q, i) => {

        if (ans[i] === q.correct) {
            score += 0.5;
            html += `<p style="color:green">${q.question} ✔</p>`;
        } else {
            html += `<p style="color:red">${q.question} ❌ Correct: ${q.correct}</p>`;
        }
    });

    html += `<h3>Score: ${score}/12.5</h3>`;

    document.getElementById("result").innerHTML = html;

    // 🔥 SHOW BUTTON AFTER RESULT
    document.getElementById("pdfBtn").style.display = "inline-block";
}

// ---------------- PDF DOWNLOAD ----------------
// ---------------- PDF DOWNLOAD ----------------// ---------------- PDF DOWNLOAD WITH QUESTION IMAGES ----------------
async function downloadPDF() {

    const { jsPDF } = window.jspdf || {};

    if (!jsPDF) {
        alert("PDF library missing!");
        return;
    }

    const qs = JSON.parse(localStorage.getItem("questions")) || [];
    const ans = JSON.parse(localStorage.getItem("answers")) || {};
    const student = localStorage.getItem("student") || "Unknown Student";
    const section = localStorage.getItem("studentSection") || "Not Assigned";

    if (qs.length === 0) {
        alert("No questions found!");
        return;
    }

    // ---------------------------------------------------------
    // LOAD IMAGE FUNCTION
    // ---------------------------------------------------------
    function loadImage(src) {
        return new Promise((resolve, reject) => {

            if (!src) {
                resolve(null);
                return;
            }

            const img = new Image();

            img.crossOrigin = "anonymous";

            img.onload = function() {
                resolve(img);
            };

            img.onerror = function() {
                console.error("PDF image could not be loaded:", src);
                resolve(null);
            };

            img.src = src;
        });
    }

    // ---------------------------------------------------------
    // CREATE PDF
    // ---------------------------------------------------------
    let doc = new jsPDF();

    let y = 15;

    // ---------------------------------------------------------
    // HEADER
    // ---------------------------------------------------------
    doc.setFillColor(15, 32, 39);
    doc.rect(0, 0, 210, 40, "F");

    // SCHOOL LOGO
    try {

        const logo = await loadImage("images/schoolLogo.jpg");

        if (logo) {
            doc.addImage(
                logo,
                "JPEG",
                10,
                6,
                25,
                25
            );
        }

    } catch (e) {
        console.log("School logo could not be added:", e);
    }

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(15);
    doc.text("BRIGHT FUTURE SCHOOL", 45, 15);

    doc.setFontSize(10);
    doc.text("Satdobato, Lalitpur, Nepal", 45, 22);

    doc.setFontSize(12);
    doc.text("MCQ Examination Result Report", 45, 32);

    y = 50;

    // ---------------------------------------------------------
    // STUDENT INFORMATION
    // ---------------------------------------------------------
    doc.setTextColor(200, 0, 0);
    doc.setFontSize(12);

    doc.text(`Student: ${student}`, 10, y);
    y += 7;

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);

    doc.text("Class: 3", 10, y);
    y += 5;

    doc.text(`Section: ${section}`, 10, y);
    y += 5;

    doc.text("Exam Type: MCQ", 10, y);
    y += 5;

    doc.text(`Date: ${new Date().toLocaleString()}`, 10, y);
    y += 8;

    doc.line(10, y, 200, y);

    y += 8;

    // ---------------------------------------------------------
    // QUESTIONS
    // ---------------------------------------------------------

    const labels = ["a)", "b)", "c)", "d)"];

    for (let i = 0; i < qs.length; i++) {

        const q = qs[i];

        // -----------------------------------------------------
        // QUESTION HEIGHT CHECK
        // -----------------------------------------------------

        if (y > 245) {
            doc.addPage();
            y = 15;
        }

        // -----------------------------------------------------
        // QUESTION TEXT
        // -----------------------------------------------------

        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);

        // Split long question into multiple lines
        const questionLines = doc.splitTextToSize(
            `Q${i + 1}. ${q.question}`,
            180
        );

        doc.text(questionLines, 10, y);

        y += questionLines.length * 5 + 3;

        // -----------------------------------------------------
        // QUESTION IMAGE
        // -----------------------------------------------------

        if (q.image) {

            console.log("Loading question image:", q.image);

            const questionImg = await loadImage(q.image);

            if (questionImg) {

                // Original image size
                let imgWidth = questionImg.width;
                let imgHeight = questionImg.height;

                // Maximum PDF image size
                const maxWidth = 100;
                const maxHeight = 65;

                // Resize proportionally
                const ratio = Math.min(
                    maxWidth / imgWidth,
                    maxHeight / imgHeight,
                    1
                );

                imgWidth = imgWidth * ratio;
                imgHeight = imgHeight * ratio;

                // Check page space
                if (y + imgHeight + 10 > 280) {
                    doc.addPage();
                    y = 15;
                }

                // Center image
                const imgX = (210 - imgWidth) / 2;

                try {

                    doc.addImage(
                        questionImg,
                        "JPEG",
                        imgX,
                        y,
                        imgWidth,
                        imgHeight
                    );

                } catch (error) {

                    console.error(
                        "Could not add question image:",
                        q.image,
                        error
                    );

                }

                y += imgHeight + 7;

            } else {

                console.warn(
                    "Question image missing:",
                    q.image
                );

                doc.setFontSize(8);
                doc.setTextColor(150, 0, 0);
                doc.text(
                    "[Question image could not be loaded]",
                    15,
                    y
                );

                y += 5;

                doc.setTextColor(0, 0, 0);
            }
        }

        // -----------------------------------------------------
        // OPTIONS
        // -----------------------------------------------------

        const userAns = ans[i];

        for (let index = 0; index < q.options.length; index++) {

            const opt = q.options[index];

            // Support both:
            // "Diamond"
            //
            // and:
            // {
            //    text: "Diamond",
            //    image: "quiz_images/image13.png"
            // }

            let optionText = "";
            let optionImage = null;

            if (typeof opt === "object") {

                optionText = opt.text || "";
                optionImage = opt.image || null;

            } else {

                optionText = String(opt);

            }

            // -------------------------------------------------
            // OPTION HEIGHT
            // -------------------------------------------------

            if (y > 265) {
                doc.addPage();
                y = 15;
            }

            // -------------------------------------------------
            // CORRECT / WRONG STATUS
            // -------------------------------------------------

            const isCorrect = optionText === q.correct;
            const isUser = optionText === userAns;

            let statusText = "";

            if (userAns === q.correct) {

                if (isCorrect) {

                    doc.setFillColor(210, 255, 210);
                    doc.rect(10, y - 4, 180, 6, "F");

                    doc.setTextColor(0, 120, 0);

                    statusText = "OK";
                }

            } else if (userAns && userAns !== q.correct) {

                if (isUser) {

                    doc.setFillColor(255, 200, 200);
                    doc.rect(10, y - 4, 180, 6, "F");

                    doc.setTextColor(200, 0, 0);

                    statusText = "X";

                } else if (isCorrect) {

                    doc.setFillColor(210, 255, 210);
                    doc.rect(10, y - 4, 180, 6, "F");

                    doc.setTextColor(0, 120, 0);

                    statusText = "OK";
                }
            }

            // -------------------------------------------------
            // OPTION TEXT
            // -------------------------------------------------

            doc.setFontSize(10);

            const optionLines = doc.splitTextToSize(
                `${labels[index] || (index + 1) + ")"} ${optionText}`,
                165
            );

            doc.text(
                optionLines,
                12,
                y
            );

            // -------------------------------------------------
            // RIGHT SIDE STATUS
            // -------------------------------------------------

            if (statusText !== "") {

                if (statusText === "OK") {
                    doc.setTextColor(0, 120, 0);
                } else {
                    doc.setTextColor(200, 0, 0);
                }

                doc.text(
                    statusText,
                    185,
                    y
                );
            }

            y += optionLines.length * 5 + 2;

            // -------------------------------------------------
            // OPTION IMAGE
            // -------------------------------------------------

            if (optionImage) {

                const optionImg = await loadImage(optionImage);

                if (optionImg) {

                    let optionWidth = optionImg.width;
                    let optionHeight = optionImg.height;

                    const maxOptionWidth = 65;
                    const maxOptionHeight = 45;

                    const optionRatio = Math.min(
                        maxOptionWidth / optionWidth,
                        maxOptionHeight / optionHeight,
                        1
                    );

                    optionWidth *= optionRatio;
                    optionHeight *= optionRatio;

                    // Page break if needed
                    if (y + optionHeight + 8 > 280) {
                        doc.addPage();
                        y = 15;
                    }

                    try {

                        doc.addImage(
                            optionImg,
                            "JPEG",
                            25,
                            y,
                            optionWidth,
                            optionHeight
                        );

                    } catch (error) {

                        console.error(
                            "Could not add option image:",
                            optionImage,
                            error
                        );

                    }

                    y += optionHeight + 5;
                }
            }

            // Reset text color
            doc.setTextColor(0, 0, 0);
        }

        y += 5;
    }

    // ---------------------------------------------------------
    // FINAL SCORE
    // ---------------------------------------------------------

    if (y > 250) {
        doc.addPage();
        y = 20;
    }

    let score = 0;

    qs.forEach((q, i) => {

        if (ans[i] === q.correct) {
            score += 0.5;
        }

    });

    doc.setDrawColor(0);
    doc.line(10, y, 200, y);

    y += 10;

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 120);

    doc.text(
        `FINAL SCORE: ${score} / 12.5`,
        10,
        y
    );

    y += 25;

    // ---------------------------------------------------------
    // VERIFICATION SECTION
    // ---------------------------------------------------------

    if (y > 240) {
        doc.addPage();
        y = 20;
    }

    doc.setDrawColor(0);
    doc.line(10, y, 200, y);

    y += 10;

    doc.setFontSize(10);

    // LEFT - TEACHER
    doc.setTextColor(200, 0, 0);
    doc.setFont(undefined, "bold");

    doc.text(
        "Verified By:",
        10,
        y
    );

    doc.setTextColor(0, 120, 0);
    doc.setFont(undefined, "normal");

    doc.text(
        "Teacher: Bishal Danuwar",
        10,
        y + 6
    );

    doc.text(
        "Phone: 9863238887",
        10,
        y + 12
    );

    // RIGHT - PRINCIPAL
    doc.setTextColor(200, 0, 0);
    doc.setFont(undefined, "bold");

    doc.text(
        "Verified By:",
        120,
        y
    );

    doc.setTextColor(0, 0, 150);
    doc.setFont(undefined, "normal");

    doc.text(
        "Principal: Kishor Adhikari",
        120,
        y + 6
    );

    doc.text(
        "Phone: 9851153746",
        120,
        y + 12
    );

    // ---------------------------------------------------------
    // SAVE PDF
    // ---------------------------------------------------------

    const safeName = student.replace(/\s+/g, "_");

    doc.save(
        `${safeName}_[${section}]_MCQ_Result.pdf`
    );
}