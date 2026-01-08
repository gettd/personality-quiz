const TYPES = {
  LANGUAGE: "ภาษา",
  LOGIC: "ตรรกะ",
  VISUAL: "ภาพ",
  BODY: "ร่างกาย",
  MUSIC: "ดนตรี",
  SOCIAL: "มนุษย์",
  SELF: "ตนเอง",
  NATURE: "ธรรมชาติ"
};

const DESCRIPTIONS = {
  [TYPES.LANGUAGE]: {
    title: "นักภาษา (Linguistic)",
    text: "คุณเรียนรู้และเข้าใจโลกผ่านคำพูด ตัวอักษร และภาษาได้ดี ชอบอ่าน เขียน อธิบาย และเล่าเรื่อง มีทักษะด้านการสื่อสารสูง"
  },
  [TYPES.LOGIC]: {
    title: "นักตรรกะ (Logical)",
    text: "คุณคิดอย่างเป็นระบบ ชอบวิเคราะห์เหตุผล ตัวเลข และโครงสร้าง เหมาะกับการแก้ปัญหา วางแผน และคิดเชิงเหตุผล"
  },
  [TYPES.VISUAL]: {
    title: "นักภาพ (Visual)",
    text: "คุณเข้าใจสิ่งต่างๆ ผ่านภาพ สี และจินตนาการ ชอบการออกแบบ ศิลปะ แผนภาพ และมองเห็นภาพรวมได้ชัดเจน"
  },
  [TYPES.BODY]: {
    title: "นักลงมือทำ (Bodily)",
    text: "คุณเรียนรู้ได้ดีที่สุดเมื่อได้ขยับร่างกาย ทดลอง และลงมือทำจริง ชอบกิจกรรม การเคลื่อนไหว และการใช้ร่างกาย"
  },
  [TYPES.MUSIC]: {
    title: "นักดนตรี (Musical)",
    text: "คุณไวต่อเสียง จังหวะ และอารมณ์ดนตรี ใช้เสียงและจังหวะช่วยจำ ชอบบรรยากาศที่มีเสียงหรือดนตรี"
  },
  [TYPES.SOCIAL]: {
    title: "นักสังคม (Interpersonal)",
    text: "คุณเข้าใจผู้คน ชอบการพูดคุย ทำงานเป็นทีม และสร้างความสัมพันธ์ เรียนรู้ได้ดีผ่านการแลกเปลี่ยนกับผู้อื่น"
  },
  [TYPES.SELF]: {
    title: "นักเข้าใจตนเอง (Intrapersonal)",
    text: "คุณรู้จักตัวเองดี ชอบคิดทบทวนภายใน มีสมาธิ และต้องการพื้นที่ส่วนตัวในการเรียนรู้และตัดสินใจ"
  },
  [TYPES.NATURE]: {
    title: "นักธรรมชาติ (Naturalist)",
    text: "คุณเชื่อมโยงสิ่งต่างๆ กับธรรมชาติ สิ่งแวดล้อม และระบบรอบตัว ชอบสังเกต เข้าใจโลกผ่านบริบทที่เป็นธรรมชาติ"
  }
};


const questions = [
  {
    text: "1. เมื่อครูเริ่มสอนบทเรียนใหม่ที่ยากและซับซ้อน คุณอยากเรียนรู้ด้วยวิธีใด",
    answers: [
      { text: "อ่านหนังสือคู่มือหรือเอกสารประกอบการสอนก่อน", type: TYPES.LANGUAGE },
      { text: "ฟังครูอธิบายเหตุผลและลำดับขั้นตอนเป็นข้อๆ", type: TYPES.LOGIC },
      { text: "ดูสไลด์ แผนภาพ หรือวิดีโอประกอบการสอน", type: TYPES.VISUAL },
      { text: "ขอลงมือทดลองทำจริง หรือจับต้องอุปกรณ์", type: TYPES.BODY },
      { text: "เรียนโดยใช้เพลง หรือคำคล้องจองช่วยจำ", type: TYPES.MUSIC },
      { text: "จับกลุ่มอภิปรายหรือให้เพื่อนช่วยสอน", type: TYPES.SOCIAL },
      { text: "นั่งทำความเข้าใจเงียบๆ คนเดียวก่อน แล้วค่อยถาม", type: TYPES.SELF },
      { text: "เปรียบเทียบเนื้อหากับสิ่งรอบตัวหรือปรากฏการณ์ธรรมชาติ", type: TYPES.NATURE }
    ]
  },
  {
    text: "2. ถ้าต้องจำคำศัพท์ภาษาอังกฤษ 20 คำใน 10 นาที คุณจะใช้วิธีไหน",
    answers: [
      { text: "ท่องออกเสียง หรือคัดคำศัพท์ลงกระดาษซ้ำๆ", type: TYPES.LANGUAGE },
      { text: "จัดหมวดหมู่คำศัพท์เป็นกลุ่ม หรือหาความสัมพันธ์ของคำ", type: TYPES.LOGIC },
      { text: "วาดรูปประกอบคำศัพท์ หรือใช้สีไฮไลท์ช่วยจำ", type: TYPES.VISUAL },
      { text: "เขียนคำศัพท์กลางอากาศ หรือเดินไปท่องไป", type: TYPES.BODY },
      { text: "แต่งเป็นทำนองเพลง หรือเคาะจังหวะตอนท่อง", type: TYPES.MUSIC },
      { text: "ผลัดกันทายคำศัพท์กับเพื่อน", type: TYPES.SOCIAL },
      { text: "ปิดตาทำสมาธิแล้วนึกทบทวนคำศัพท์ในใจ", type: TYPES.SELF },
      { text: "นึกภาพคำศัพท์นั้นเชื่อมโยงกับสัตว์ พืช หรือสิ่งของจริง", type: TYPES.NATURE }
    ]
  },
  {
    text: "3. คุณได้รับมอบหมายให้ทำรายงานสรุปผลงานตลอดปี คุณจะนำเสนอออกมาในรูปแบบใด",
    answers: [
      { text: "เขียนเรียงความ หรือบทความบรรยายละเอียด", type: TYPES.LANGUAGE },
      { text: "ทำกราฟ ตารางเปรียบเทียบ และสถิติตัวเลข", type: TYPES.LOGIC },
      { text: "ทำ Infographic หรือโปสเตอร์สวยงาม", type: TYPES.VISUAL },
      { text: "สร้างโมเดลจำลอง หรือจัดนิทรรศการที่หยิบจับได้", type: TYPES.BODY },
      { text: "ทำคลิปวิดีโอที่มีเพลงประกอบ หรือ Podcast", type: TYPES.MUSIC },
      { text: "ออกไปพรีเซนต์สดหน้าเวที", type: TYPES.SOCIAL },
      { text: "เขียน Reflection สะท้อนความคิดเห็นส่วนตัว", type: TYPES.SELF },
      { text: "รายงานผลกระทบต่อสิ่งแวดล้อมหรือสังคม", type: TYPES.NATURE }
    ]
  },
  {
    text: "4. ขณะกำลังเตรียมสอบ แล้วรู้สึกเครียดหรือสมองตื้อ คุณจะทำอย่างไร",
    answers: [
      { text: "อ่านทวนหรือเขียนระบายลงสมุด", type: TYPES.LANGUAGE },
      { text: "วางแผนตารางอ่านหนังสือใหม่", type: TYPES.LOGIC },
      { text: "ดูรูปสวยๆ หรือจัดโต๊ะให้โล่ง", type: TYPES.VISUAL },
      { text: "ลุกขึ้นยืดเส้นยืดสาย หรือออกกำลังกาย", type: TYPES.BODY },
      { text: "เปิดเพลงบรรเลงคลอ", type: TYPES.MUSIC },
      { text: "โทรคุยกับเพื่อน หรือติวกลุ่ม", type: TYPES.SOCIAL },
      { text: "นั่งหลับตา ตั้งสติ", type: TYPES.SELF },
      { text: "ออกไปสูดอากาศ มองต้นไม้", type: TYPES.NATURE }
    ]
  },
  {
    text: "5. เมื่อเจอปัญหาโจทย์เลขหรือปัญหางานที่แก้ไม่ออก คุณเริ่มต้นอย่างไร",
    answers: [
      { text: "อ่านโจทย์ซ้ำหลายรอบ", type: TYPES.LANGUAGE },
      { text: "แตกปัญหาเป็นส่วนย่อยๆ", type: TYPES.LOGIC },
      { text: "วาดแผนภาพหรือ Mind Map", type: TYPES.VISUAL },
      { text: "หยิบสิ่งของมาจำลองสถานการณ์", type: TYPES.BODY },
      { text: "เคาะจังหวะหรือฮัมเพลง", type: TYPES.MUSIC },
      { text: "ถามคนอื่นหรือโพสต์ถามกลุ่ม", type: TYPES.SOCIAL },
      { text: "พักก่อน เชื่อสัญชาตญาณ", type: TYPES.SELF },
      { text: "เปรียบเทียบกับระบบในธรรมชาติ", type: TYPES.NATURE }
    ]
  },
  {
    text: "6. ถ้าให้เลือกวิชาเลือกเสรี 1 วิชา คุณจะเลือกเรียนอะไร",
    answers: [
      { text: "การเขียน / วรรณกรรม", type: TYPES.LANGUAGE },
      { text: "วิทยาศาสตร์ / โปรแกรมมิ่ง", type: TYPES.LOGIC },
      { text: "ศิลปะ / ออกแบบ / ถ่ายภาพ", type: TYPES.VISUAL },
      { text: "พลศึกษา / การแสดง / งานช่าง", type: TYPES.BODY },
      { text: "ดนตรี / การขับร้อง", type: TYPES.MUSIC },
      { text: "จิตวิทยา / การสื่อสาร", type: TYPES.SOCIAL },
      { text: "ปรัชญา / พัฒนาตนเอง", type: TYPES.SELF },
      { text: "เกษตร / ชีววิทยา / ดาราศาสตร์", type: TYPES.NATURE }
    ]
  },
  {
    text: "7. คุณชอบบรรยากาศห้องเรียนหรือที่ทำงานแบบไหน",
    answers: [
      { text: "มีหนังสือและป้ายนิเทศความรู้", type: TYPES.LANGUAGE },
      { text: "เป็นระเบียบ มีอุปกรณ์ทันสมัย", type: TYPES.LOGIC },
      { text: "ตกแต่งสวยงาม มีสีสัน", type: TYPES.VISUAL },
      { text: "พื้นที่กว้าง เดินไปมาได้", type: TYPES.BODY },
      { text: "มีเพลงเบาๆ หรือเสียงธรรมชาติ", type: TYPES.MUSIC },
      { text: "จัดโต๊ะแบบกลุ่ม คุยง่าย", type: TYPES.SOCIAL },
      { text: "มีมุมส่วนตัว เงียบสงบ", type: TYPES.SELF },
      { text: "โปร่ง โล่ง มีต้นไม้", type: TYPES.NATURE }
    ]
  },
  {
    text: "8. เมื่อต้องทำงานกลุ่มใหญ่ คุณมักรับหน้าที่ใด",
    answers: [
      { text: "เลขานุการ หรือเขียนบท", type: TYPES.LANGUAGE },
      { text: "วางแผนงาน หรือคุมงบ", type: TYPES.LOGIC },
      { text: "ฝ่ายศิลป์ ทำสไลด์", type: TYPES.VISUAL },
      { text: "ฝ่ายลงมือทำหรือจัดสถานที่", type: TYPES.BODY },
      { text: "ฝ่ายดูแลบรรยากาศ", type: TYPES.MUSIC },
      { text: "หัวหน้ากลุ่ม / ประสานงาน", type: TYPES.SOCIAL },
      { text: "ที่ปรึกษา ตรวจงานเงียบๆ", type: TYPES.SELF },
      { text: "ดูแลอาหารหรืออุปกรณ์", type: TYPES.NATURE }
    ]
  },
  {
    text: "9. ถ้าคุณต้องสอนเพื่อนทำสิ่งที่คุณถนัด คุณจะสอนอย่างไร",
    answers: [
      { text: "เขียนขั้นตอนให้เพื่อนอ่าน", type: TYPES.LANGUAGE },
      { text: "อธิบายหลักการและเหตุผล", type: TYPES.LOGIC },
      { text: "วาดรูปหรือทำให้ดู", type: TYPES.VISUAL },
      { text: "จับมือทำหรือให้ลองเลย", type: TYPES.BODY },
      { text: "ใช้จังหวะหรือเสียงดนตรี", type: TYPES.MUSIC },
      { text: "นั่งคุยทำไปพร้อมกัน", type: TYPES.SOCIAL },
      { text: "ให้เพื่อนค้นหาวิธีที่เหมาะกับตัวเอง", type: TYPES.SELF },
      { text: "พาไปดูของจริง", type: TYPES.NATURE }
    ]
  }
];

let currentQuestion = 0;
let scores = {};

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultBox = document.getElementById("result-box");
const resultEl = document.getElementById("result");
const questionBox = document.getElementById("question-box");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.text;
  answersEl.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.onclick = () => selectAnswer(answer.type);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(type) {
  scores[type] = (scores[type] || 0) + 1;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  const topType = sorted[0][0];

  const scoreBreakdown = sorted
  .map(([type, score]) => `${type}: ${score}`)
  .join("<br>");

  const description = DESCRIPTIONS[topType];

  resultEl.innerHTML = `
    <strong>บุคลิกภาพเด่นของคุณคือ:</strong><br>
    <span style="font-size: 1.2em"><h3>${description.title}</h3>
    <p>${description.text}</p></span> 
  `+ `<hr>${scoreBreakdown}`;
}

function restartQuiz() {
  currentQuestion = 0;
  scores = {};
  resultBox.classList.add("hidden");
  questionBox.classList.remove("hidden");
  showQuestion();
}

showQuestion();
