// ============================================================
//  IMAGE QUIZ DATABASE — 45 ข้อ (รูปภาพล้วน)
//  วิธีเพิ่มรูป: ใส่ไฟล์ไว้ใน assets/images/ แล้วแก้ path
// ============================================================
const quizImageDatabase = [
    {
        image: "assets/images/episode/1-1.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.3",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [0]
    },
    {
        image: "assets/images/episode/1-2.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.4",img:""},{text:"EP.6",img:""},{text:"EP.9",img:""}],
        correct: [0]
    },
    {
        image: "assets/images/episode/2-1.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.4",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [0]
    },
    {
        image: "assets/images/episode/2-2.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.2",img:""},{text:"EP.6",img:""},{text:"EP.9",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/3-1.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.3",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/3-2.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.3",img:""},{text:"EP.6",img:""},{text:"EP.9",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/4-1.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.4",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/4-2.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.4",img:""},{text:"EP.6",img:""},{text:"EP.9",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/5-1.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.3",img:""},{text:"EP.5",img:""},{text:"EP.9",img:""}],
        correct: [2]
    },
    {
        image: "assets/images/episode/5-2.png", audio: "",
        options: [{text:"EP.3",img:""},{text:"EP.5",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/5-3.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.5",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/6-1.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.4",img:""},{text:"EP.6",img:""},{text:"EP.9",img:""}],
        correct: [2]
    },
    {
        image: "assets/images/episode/6-2.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.4",img:""},{text:"EP.6",img:""},{text:"EP.8",img:""}],
        correct: [2]
    },
    {
        image: "assets/images/episode/7-1.png", audio: "",
        options: [{text:"EP.3",img:""},{text:"EP.5",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [2]
    },
    {
        image: "assets/images/episode/7-2.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.4",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [2]
    },
    {
        image: "assets/images/episode/8-1.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.5",img:""},{text:"EP.8",img:""},{text:"EP.9",img:""}],
        correct: [2]
    },
    {
        image: "assets/images/episode/8-2.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.4",img:""},{text:"EP.6",img:""},{text:"EP.8",img:""}],
        correct: [3]
    },
    {
        image: "assets/images/episode/9-1.png", audio: "",
        options: [{text:"EP.3",img:""},{text:"EP.5",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [3]
    },
    {
        image: "assets/images/episode/9-2.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.4",img:""},{text:"EP.6",img:""},{text:"EP.9",img:""}],
        correct: [3]
    },
    {
        image: "assets/images/episode/1-3.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.3",img:""},{text:"EP.6",img:""},{text:"EP.8",img:""}],
        correct: [0]
    },
    {
        image: "assets/images/episode/1-4.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.4",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [0]
    },
    {
        image: "assets/images/episode/1-5.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.3",img:""},{text:"EP.6",img:""},{text:"EP.8",img:""}],
        correct: [0]
    },
    {
        image: "assets/images/episode/2-3.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.5",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [0]
    },
    {
        image: "assets/images/episode/2-4.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.2",img:""},{text:"EP.5",img:""},{text:"EP.8",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/2-5.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.4",img:""},{text:"EP.8",img:""},{text:"EP.9",img:""}],
        correct: [0]
    },
    {
        image: "assets/images/episode/3-3.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.3",img:""},{text:"EP.6",img:""},{text:"EP.9",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/3-4.png", audio: "",
        options: [{text:"EP.3",img:""},{text:"EP.5",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [0]
    },
    {
        image: "assets/images/episode/3-5.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.3",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/4-3.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.4",img:""},{text:"EP.6",img:""},{text:"EP.9",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/4-4.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.4",img:""},{text:"EP.8",img:""},{text:"EP.9",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/4-5.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.4",img:""},{text:"EP.6",img:""},{text:"EP.7",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/5-4.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.5",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/5-5.png", audio: "",
        options: [{text:"EP.3",img:""},{text:"EP.5",img:""},{text:"EP.8",img:""},{text:"EP.9",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/6-3.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.4",img:""},{text:"EP.6",img:""},{text:"EP.8",img:""}],
        correct: [2]
    },
    {
        image: "assets/images/episode/6-4.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.3",img:""},{text:"EP.6",img:""},{text:"EP.9",img:""}],
        correct: [2]
    },
    {
        image: "assets/images/episode/6-5.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.6",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [1]
    },
    {
        image: "assets/images/episode/7-3.png", audio: "",
        options: [{text:"EP.3",img:""},{text:"EP.5",img:""},{text:"EP.7",img:""},{text:"EP.8",img:""}],
        correct: [2]
    },
    {
        image: "assets/images/episode/7-4.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.4",img:""},{text:"EP.7",img:""},{text:"EP.8",img:""}],
        correct: [2]
    },
    {
        image: "assets/images/episode/7-5.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.5",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [2]
    },
    {
        image: "assets/images/episode/8-3.png", audio: "",
        options: [{text:"EP.4",img:""},{text:"EP.6",img:""},{text:"EP.8",img:""},{text:"EP.9",img:""}],
        correct: [2]
    },
    {
        image: "assets/images/episode/8-4.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.5",img:""},{text:"EP.7",img:""},{text:"EP.8",img:""}],
        correct: [3]
    },
    {
        image: "assets/images/episode/8-5.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.3",img:""},{text:"EP.6",img:""},{text:"EP.8",img:""}],
        correct: [3]
    },
    {
        image: "assets/images/episode/9-3.png", audio: "",
        options: [{text:"EP.3",img:""},{text:"EP.6",img:""},{text:"EP.8",img:""},{text:"EP.9",img:""}],
        correct: [3]
    },
    {
        image: "assets/images/episode/9-4.png", audio: "",
        options: [{text:"EP.2",img:""},{text:"EP.5",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [3]
    },
    {
        image: "assets/images/episode/9-5.png", audio: "",
        options: [{text:"EP.1",img:""},{text:"EP.4",img:""},{text:"EP.7",img:""},{text:"EP.9",img:""}],
        correct: [3]
    },

];

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
            { text: "อัคคี", img: "assets/images/akki.png" },
            { text: "เบียร์", img: "assets/images/beer.png" },
            { text: "ตอง", img: "assets/images/tong.png" },
            { text: "จ๊ะโอ", img: "assets/images/ja-o.png" }
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
        image: "assets/images/toto-14.png",
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
        image: "assets/images/ep-5-medium.png",
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
        image: "assets/images/ep-4-medium.png",
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
        image: "assets/images/ep-3-hard.png",
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
        image: "assets/images/ep-4-hard.png",
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
            { text: "ชมพู", img: "assets/images/kanit-pink-choice.png" },
            { text: "เขียว", img: "assets/images/kanit-green-choice.png" },
            { text: "แดง", img: "assets/images/kanit-normal-choice.png" },
            { text: "ม่วง", img: "assets/images/kanit-purple-choice.png" }
        ],
        correct: [2]
    },


];

let activeQuizSet = [];
let userAnswers = [];
let currentMode = "image";
let imageScore = 0;         // สะสม timeRemaining ของข้อที่ตอบถูก (image mode)
let currentLang = 'th';

const i18n = {
    th: {
        welcomeText: "ก่อนเครื่องลงจอดเป็นครั้งสุดท้าย ✈️",
        gameDescTop: "🐶ทบทวนก่อนจาก — คุณจำทุกซีนได้ดีแค่ไหน?",
        clickToPlay: "กดปุ่มเพื่อเริ่มเล่นเกม",
        menuSubtitle: "นี่คือเที่ยวบินสุดท้าย — พร้อมทบทวนความทรงจำทุกซีนก่อนจากกันแล้วหรือยัง?",
        rulesGameDesc: "🎮 ทายว่าแต่ละฉากในรูปมาจาก EP. ไหนของซีรีส์",
        rulesQ: "🖼️ จำนวนคำถามทั้งหมด <b>15 ข้อ</b> (สุ่มจาก 45 ข้อ)",
        rulesTime: "⏱️ จำกัดเวลาข้อละ <b>1 นาที (60 วินาที)</b>",
        rulesScore: "⭐ คะแนนเต็ม <b>100 คะแนน</b> — ยิ่งตอบเร็ว ยิ่งได้คะแนนมาก",
        rulesTimeout: "❌ หากหมดเวลา ไม่ได้คะแนนข้อนั้น",
        startBtn: "เริ่มทำแบบทดสอบ",
        audioBtn: "🔊กดเพื่อฟังเสียง ☁️",
        timerPre: "เหลือ ",
        timerPost: " วิ",
        scoreUnit: " คะแนน",
        questionOf: (cur, total) => `ข้อที่ ${cur}/${total}`,
        resultTitle: "รายงานสถานะผู้โดยสาร ✈️📡",
        resultSubtitle: "สรุปภารกิจความทรงจำและความแม่นยำบนเที่ยวบินนี้",
        showAnswerBtn: "ดูเฉลยทุกข้อ 📋",
        retryBtn: "ทำแบบทดสอบอีกครั้ง 🔄",
        answerTitle: "เฉลยข้อสอบ 📋",
        answerSubtitle: "ตรวจสอบคำตอบที่ถูกต้องของแต่ละข้อ",
        backToResult: "← กลับผลลัพธ์",
        timeoutNote: "⏱️ หมดเวลา — ไม่ได้เลือกคำตอบ",
        questionPrefix: (i) => `ข้อ ${i + 1}`,
        imageRanks: [
            { max: 25,  title: (s) => `🙈 ตาถึงแต่ใจไม่ถึง (${s} คะแนน)`, text: "มองแล้วแต่ไม่เห็น เห็นแล้วแต่ไม่จำ 😵‍💫 ความช่างสังเกตยังเบาบางมาก ลองกลับไปดู EP. อีกรอบแล้วฝึกสังเกตรายละเอียดเล็กๆ น้อยๆ ดูนะ 👀", color: "#ff929e" },
            { max: 50,  title: (s) => `🔎 นักสังเกตการณ์มือใหม่ (${s} คะแนน)`, text: "เห็นภาพรวมได้บ้าง แต่รายละเอียดยังหลุดไปบางส่วน 🌀 เหมือนมองผ่านแว่นที่ยังไม่ได้ตัดค่าสายตา ฝึกสังเกตบ่อยๆ แล้วความจำจะคมขึ้นเอง 💪", color: "#fbd5c6" },
            { max: 70,  title: (s) => `👁️ คนช่างสังเกตระดับกลาง (${s} คะแนน)`, text: "ตาไวพอตัว จับรายละเอียดได้ค่อนข้างดี 🎯 แต่บางซีนยังหลุดออกไป อาจเพราะตอบเร็วเกินไปหรือซีนนั้นดูไม่ค่อยได้ เกือบแล้ว!", color: "#3182e6" },
            { max: 90,  title: (s) => `🦅 นักสังเกตการณ์ระดับเชี่ยวชาญ (${s} คะแนน)`, text: "ตาแหลม สังเกตเก่งมาก จับทุกรายละเอียดได้แม่นและเร็ว ⚡ เหมือนมีตาที่สามช่วยดู ระดับนี้ถือว่าอยู่ในชั้นแนวหน้าของการสังเกตมนุษย์เลยนะ 🧠✨", color: "#9b59b6" },
            { max: 101, title: (s) => `🏆 ตาทิพย์ — ไม่มีอะไรหลุดสายตา (${s} คะแนน)`, text: "คุณไม่ใช่แค่ดูซีรีส์ คุณคือคนที่บันทึกทุกอณูของมันไว้ในความจำ 🧠🔍 ไม่มีซีนไหนหลุดสายตา ไม่มีรายละเอียดไหนตกหล่น นี่คือระดับตำนานแห่งการสังเกต!", color: "#f1c40f" }
        ]
    },
    en: {
        welcomeText: "Before the final landing ✈️",
        gameDescTop: "🐶 How well do you remember every scene?",
        clickToPlay: "Press the button to start",
        menuSubtitle: "This is the last flight — ready to recall every scene before we say goodbye?",
        rulesGameDesc: "🎮 Guess which episode each scene is from",
        rulesQ: "🖼️ Total: <b>15 questions</b> (randomly picked from 45)",
        rulesTime: "⏱️ Time limit: <b>1 minute (60 sec)</b> per question",
        rulesScore: "⭐ Max score: <b>100 points</b> — the faster you answer, the more you earn",
        rulesTimeout: "❌ Time out = no points for that question",
        startBtn: "Start Quiz",
        audioBtn: "🔊 Tap to listen ☁️",
        timerPre: "",
        timerPost: "s left",
        scoreUnit: " pts",
        questionOf: (cur, total) => `Q. ${cur}/${total}`,
        resultTitle: "Passenger Status Report ✈️📡",
        resultSubtitle: "Mission summary: memory & accuracy on this flight",
        showAnswerBtn: "See All Answers 📋",
        retryBtn: "Try Again 🔄",
        answerTitle: "Answer Key 📋",
        answerSubtitle: "Check the correct answer for each question",
        backToResult: "← Back to Results",
        timeoutNote: "⏱️ Time's up — no answer selected",
        questionPrefix: (i) => `Q. ${i + 1}`,
        imageRanks: [
            { max: 25,  title: (s) => `🙈 Eyes Wide Open, Brain Elsewhere (${s} pts)`, text: "Looking but not seeing, seeing but not remembering 😵‍💫 Your eye for detail needs training. Try rewatching the episodes! 👀", color: "#ff929e" },
            { max: 50,  title: (s) => `🔎 Rookie Scene Detective (${s} pts)`, text: "You catch the big picture, but details slip through 🌀 Like watching through foggy glasses. Keep practicing — your memory will sharpen! 💪", color: "#fbd5c6" },
            { max: 70,  title: (s) => `👁️ Mid-Level Scene Observer (${s} pts)`, text: "Pretty sharp eyes! You catch most details 🎯 But a few scenes still slipped by — maybe you answered too fast. Almost there!", color: "#3182e6" },
            { max: 90,  title: (s) => `🦅 Expert Scene Analyst (${s} pts)`, text: "Sharp-eyed and quick! You catch every detail accurately ⚡ Like having a third eye. You're in the top tier of scene observers! 🧠✨", color: "#9b59b6" },
            { max: 101, title: (s) => `🏆 All-Seeing Eye — Nothing Gets Past You (${s} pts)`, text: "You didn't just watch the series — you memorized every single frame 🧠🔍 No scene slipped by, no detail was missed. This is legendary-level observation!", color: "#f1c40f" }
        ]
    }
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateQuizSet() {
    if (currentMode === "image") {
        const pool = [...quizImageDatabase];
        shuffleArray(pool);
        activeQuizSet = pool.slice(0, 15);
        return;
    }

    const easyPool = quizDatabase.filter(q => q.level === "easy");
    const mediumPool = quizDatabase.filter(q => q.level === "medium");
    const hardPool = quizDatabase.filter(q => q.level === "hard");

    shuffleArray(easyPool);
    shuffleArray(mediumPool);
    shuffleArray(hardPool);

    const selectedEasy = easyPool.slice(0, 8);
    const selectedMedium = mediumPool.slice(0, 5);
    const selectedHard = hardPool.slice(0, 3);

    activeQuizSet = [...selectedEasy, ...selectedMedium, ...selectedHard];
    shuffleArray(activeQuizSet);
}

const TIME_LIMIT = 60;
let timeRemaining = TIME_LIMIT; // อัปเดตตลอดโดย resetAndStartTimer
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
        if (startScreenEl && activeScreenEl) {
            startScreenEl.style.display = "none";
            activeScreenEl.style.display = "block";
            generateQuizSet();
            loadQuestion();
        }
    });
}


function setLanguage(lang) {
    currentLang = lang;
    const btnTh = document.getElementById('lang-btn-th');
    const btnEn = document.getElementById('lang-btn-en');
    if (btnTh) btnTh.classList.toggle('active', lang === 'th');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    applyLanguage();
}

function applyLanguage() {
    const L = i18n[currentLang];
    const set = (id, val, html = false) => {
        const el = document.getElementById(id);
        if (el) html ? (el.innerHTML = val) : (el.innerText = val);
    };
    set('welcome-text', L.welcomeText);
    set('game-desc-top', L.gameDescTop);
    set('click-to-play', L.clickToPlay);
    set('phase2-subtitle', L.menuSubtitle);
    set('rules-game-desc', L.rulesGameDesc);
    set('rules-q', L.rulesQ, true);
    set('rules-time', L.rulesTime, true);
    set('rules-score', L.rulesScore, true);
    set('rules-timeout', L.rulesTimeout);
    if (actualStartBtn) actualStartBtn.innerText = L.startBtn;
    if (playAudioBtn) playAudioBtn.innerText = L.audioBtn;
    set('timer-pre', L.timerPre);
    set('timer-post', L.timerPost);
    set('score-unit', L.scoreUnit);
    set('result-title', L.resultTitle);
    set('result-subtitle', L.resultSubtitle);
    set('show-answer-btn', L.showAnswerBtn);
    set('retry-btn', L.retryBtn);
    set('answer-title', L.answerTitle);
    set('answer-subtitle', L.answerSubtitle);
    set('back-to-result-btn', L.backToResult);
    set('answer-retry-btn', L.retryBtn);
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
    if (questionNumberEl) questionNumberEl.innerText = i18n[currentLang].questionOf(currentQuestionIndex + 1, activeQuizSet.length);
    if (questionTextEl) {
        if (currentQuiz.question) {
            questionTextEl.innerText = currentQuiz.question;
            questionTextEl.style.display = 'block';
        } else {
            questionTextEl.style.display = 'none';
        }
    }

    const progressPercent = (currentQuestionIndex / activeQuizSet.length) * 100;
    if (questionProgressEl) questionProgressEl.style.width = `${progressPercent}%`;
    if (questionIconEl) questionIconEl.style.left = `${progressPercent}%`;

    resetAndStartTimer();

    if (questionImgEl) {
        if (currentQuiz.image && currentQuiz.image !== "") {
            questionImgEl.style.display = "block";
            questionImgEl.style.opacity = "0";
            questionImgEl.onload = () => { questionImgEl.style.opacity = "1"; };
            questionImgEl.onerror = () => { questionImgEl.style.opacity = "1"; };
            questionImgEl.src = currentQuiz.image;
        } else {
            questionImgEl.style.display = "none";
            questionImgEl.onload = null;
            questionImgEl.onerror = null;
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

        button.addEventListener('mousedown', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 560);
        });

        button.addEventListener('click', () => checkAnswer(index));
        optionsContainerEl.appendChild(button);
    });

    const quizCardEl = document.querySelector('.quiz-card');
    if (quizCardEl) {
        quizCardEl.classList.remove('card-enter');
        void quizCardEl.offsetWidth;
        quizCardEl.classList.add('card-enter');
    }
    optionsContainerEl.classList.remove('opts-enter');
    void optionsContainerEl.offsetWidth;
    optionsContainerEl.classList.add('opts-enter');
}

function resetAndStartTimer() {
    clearInterval(timerInterval);
    timeRemaining = TIME_LIMIT;

    const totalMs = TIME_LIMIT * 1000;
    let msRemaining = totalMs;

    const timerBadgeEl = document.querySelector('.timer-badge');
    if (timerBadgeEl) timerBadgeEl.classList.remove('timer-warning');

    if (timerTextEl) timerTextEl.innerText = TIME_LIMIT;
    if (timeProgressEl) timeProgressEl.style.width = "100%";
    if (timeIconEl) timeIconEl.style.left = "100%";

    const tickRate = 50;

    timerInterval = setInterval(() => {
        msRemaining -= tickRate;
        timeRemaining = Math.max(0, Math.ceil(msRemaining / 1000));

        const secondsToShow = Math.ceil(msRemaining / 1000);
        if (timerTextEl) timerTextEl.innerText = secondsToShow >= 0 ? secondsToShow : 0;

        if (timerBadgeEl) {
            if (msRemaining <= 10000 && msRemaining > 0) {
                timerBadgeEl.classList.add('timer-warning');
            } else {
                timerBadgeEl.classList.remove('timer-warning');
            }
        }

        const timePercent = (msRemaining / totalMs) * 100;

        if (msRemaining >= 0) {
            if (timeProgressEl) timeProgressEl.style.width = `${timePercent}%`;
            if (timeIconEl) timeIconEl.style.left = `${timePercent}%`;
        }

        if (msRemaining <= 0) {
            clearInterval(timerInterval);
            userAnswers.push({ selectedIndex: null, timedOut: true });
            showAnswerFeedback(-1);
            setTimeout(() => {
                currentQuestionIndex++;
                loadQuestion();
            }, 1200);
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

    const timeAtAnswer = timeRemaining;
    const currentQuiz = activeQuizSet[currentQuestionIndex];
    const isCorrect = currentQuiz.correct.includes(selectedIndex);

    userAnswers.push({ selectedIndex, timedOut: false, isCorrect });

    if (isCorrect) {
        if (currentMode === "image") {
            const BASE_PER_Q = 60 / activeQuizSet.length;
            const BONUS_PER_Q = 40 / activeQuizSet.length;
            const earned = BASE_PER_Q + (timeAtAnswer / TIME_LIMIT) * BONUS_PER_Q;
            imageScore += earned;
            updateScoreDisplay();
            showScorePopup(earned);
        } else {
            score++;
        }
    }

    showAnswerFeedback(selectedIndex);
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1200);
}

function showScorePopup(earned) {
    const pointsEarned = Math.round(earned);

    const timerBadge = document.querySelector('.timer-badge');
    const rect = timerBadge ? timerBadge.getBoundingClientRect() : null;

    const popup = document.createElement('div');
    popup.classList.add('score-popup');
    popup.textContent = `+${pointsEarned} ⭐`;

    if (rect) {
        popup.style.left = `${rect.left + rect.width / 2}px`;
        popup.style.top = `${rect.top}px`;
    } else {
        popup.style.left = '50%';
        popup.style.top = '60px';
    }

    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 1400);
}

function showAnswerFeedback(selectedIndex) {
    const currentQuiz = activeQuizSet[currentQuestionIndex];
    const buttons = optionsContainerEl.querySelectorAll('.quiz-opt-btn-grid');
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (currentQuiz.correct.includes(idx)) {
            btn.classList.add('opt-correct');
        } else if (idx === selectedIndex) {
            btn.classList.add('opt-wrong');
        }
    });
}

function updateScoreDisplay() {
    const el = document.getElementById('current-score-display');
    if (!el) return;
    el.innerText = Math.round(imageScore);
}

function showResult() {
    if (activeScreenEl) activeScreenEl.style.display = "none";
    if (resultScreenEl) resultScreenEl.style.display = "block";

    let scorePercentage;
    let rankTitle = "";
    let feedbackText = "";
    let badgeColor = "#39b54a";

    if (currentMode === "image") {
        const displayScore = Math.round(imageScore);
        scorePercentage = displayScore;

        if (finalScoreEl) finalScoreEl.innerText = displayScore;
        if (totalQuestionsEl) totalQuestionsEl.innerText = 100;

        const rankData = i18n[currentLang].imageRanks.find(r => scorePercentage <= r.max);
        rankTitle = rankData.title(displayScore);
        feedbackText = rankData.text;
        badgeColor = rankData.color;
    } else {
        if (finalScoreEl) finalScoreEl.innerText = score;
        if (totalQuestionsEl) totalQuestionsEl.innerText = activeQuizSet.length;
        scorePercentage = (score / activeQuizSet.length) * 100;

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
    }

    if (resultBadgeEl) {
        resultBadgeEl.innerText = rankTitle;
        resultBadgeEl.style.backgroundColor = badgeColor;
        resultBadgeEl.classList.remove('badge-enter');
        void resultBadgeEl.offsetWidth;
        resultBadgeEl.classList.add('badge-enter');
    }
    if (resultFeedbackEl) resultFeedbackEl.innerText = feedbackText;
}

function showAnswerKey() {
    const answerScreenEl = document.getElementById('quiz-answer-screen');
    const answerListEl = document.getElementById('answer-list');
    if (!answerScreenEl || !answerListEl) return;

    if (resultScreenEl) resultScreenEl.style.display = "none";
    answerScreenEl.style.display = "block";

    answerListEl.innerHTML = "";

    activeQuizSet.forEach((quiz, i) => {
        const userAns = userAnswers[i];
        const card = document.createElement('div');
        card.classList.add('answer-card');

        const qHeader = document.createElement('div');
        qHeader.classList.add('answer-q-header');

        const statusIcon = userAns?.timedOut ? "⏱️" : (userAns?.isCorrect ? "✅" : "❌");
        qHeader.innerHTML = `<span class="answer-q-num">${statusIcon} ${i18n[currentLang].questionPrefix(i)}</span><span class="answer-q-text">${quiz.question}</span>`;
        card.appendChild(qHeader);

        if (quiz.image && quiz.image !== "" && !quiz.image.endsWith("/.png")) {
            const img = document.createElement('img');
            img.src = quiz.image;
            img.classList.add('answer-q-img');
            card.appendChild(img);
        }

        const optList = document.createElement('div');
        optList.classList.add('answer-options');

        quiz.options.forEach((opt, idx) => {
            const optEl = document.createElement('div');
            optEl.classList.add('answer-opt');

            const isCorrect = quiz.correct.includes(idx);
            const isSelected = userAns?.selectedIndex === idx;

            if (isCorrect) optEl.classList.add('answer-opt-correct');
            else if (isSelected && !isCorrect) optEl.classList.add('answer-opt-wrong');

            const prefix = isCorrect ? "✔ " : (isSelected && !isCorrect ? "✘ " : "");
            optEl.textContent = `${prefix}${opt.text}`;
            optList.appendChild(optEl);
        });

        if (userAns?.timedOut) {
            const timeoutNote = document.createElement('div');
            timeoutNote.classList.add('answer-timeout-note');
            timeoutNote.textContent = i18n[currentLang].timeoutNote;
            card.appendChild(timeoutNote);
        }

        card.appendChild(optList);
        answerListEl.appendChild(card);
    });
}

function resetQuiz() {
    const answerScreenEl = document.getElementById('quiz-answer-screen');
    if (answerScreenEl) answerScreenEl.style.display = "none";
    if (resultScreenEl) resultScreenEl.style.display = "none";
    if (startScreenEl) startScreenEl.style.display = "block";
    if (startPhase1) startPhase1.style.display = "block";
    if (startPhase2) startPhase2.style.display = "none";

    currentQuestionIndex = 0;
    score = 0;
    imageScore = 0;
    userAnswers = [];
    const scoreDisplayEl = document.getElementById('current-score-display');
    if (scoreDisplayEl) scoreDisplayEl.innerText = '0';
}
