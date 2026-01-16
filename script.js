Chart.register(ChartDataLabels);

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

const CHART_COLORS = [ //for graph
  'rgba(255, 99, 132, 0.6)', 
  'rgba(54, 162, 235, 0.6)',  
  'rgba(255, 206, 86, 0.6)',  
  'rgba(75, 192, 192, 0.6)',  
  'rgba(153, 102, 255, 0.6)', 
  'rgba(255, 159, 64, 0.6)',  
  'rgba(199, 199, 199, 0.6)', 
  'rgba(83, 102, 255, 0.6)'   
];

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
    title: "สถานการณ์ที่ 1: บนรถบัส",
    image: "scenario-images/1.png",
    text: "ตะวันเช้าทอแสงอ่อนผ่านม่านหมอกแห่งขุนเขา รถบัสลูกเสือกำลังไต่ทางลาดขึ้นสู่สถานที่ลับแห่งหนึ่งที่ไม่มีระบุใน Google Maps ผู้คนรอบข้างเต็มไปด้วยเสียงหัวเราะ กลิ่นไอของความตื่นเต้นลอยอบอวลระหว่างเพื่อนใหม่ที่เพิ่งรู้จัก คุณนั่งริมหน้าต่าง รถโยกทุกครั้งเหมือนพาคุณสู่โลกใหม่... แล้วคุณเลือกทำอะไรเพื่อเติมพลังใจระหว่างการเดินทางอันแสนยาวไกล?",
    answers: [
      { text: "อ่านหนังสือผจญภัยหรือเขียนบันทึกการเดินทาง", type: TYPES.LANGUAGE },
      { text: "คำนวณระยะทาง ความเร็ว และเวลาที่จะถึงจุดหมาย", type: TYPES.LOGIC },
      { text: "ฟังเพลงหรือร้องเพลงกับเพื่อนๆ", type: TYPES.MUSIC },
      { text: "เล่นเกมส์ที่ต้องใช้ร่างกาย เช่น เกมทายคำ", type: TYPES.BODY },
      { text: "มองวิวภูเขาและวาดภาพทิวทัศน์ที่สวยงาม", type: TYPES.VISUAL },
      { text: "คุยสนุกและทำความรู้จักเพื่อนใหม่ในกลุ่ม", type: TYPES.SOCIAL },
      { text: "นั่งเงียบๆ คิดถึงสิ่งที่จะเกิดขึ้นและวางแพลนในใจ", type: TYPES.SELF },
      { text: "สังเกตต้นไม้ ภูเขา สัตว์ป่า และธรรมชาติรอบทาง", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 2: แผนที่ลึกลับ",
    image: "scenario-images/2.png",
    text: "เดินทางถึงค่ายแล้ว! ผู้กำกับลูกเสือให้แผนที่เก่าๆ ที่มีสัญลักษณ์แปลกๆ คุณจะทำอย่างไร?",
    answers: [
      { text: "อ่านคำอธิบายและสัญลักษณ์ในตำนาน แล้วแปลความหมาย", type: TYPES.LANGUAGE },
      { text: "วิเคราะห์พิกัด ทิศทาง และระยะทางอย่างเป็นระบบ", type: TYPES.LOGIC },
      { text: "สังเกตลวดลายและจังหวะของสัญลักษณ์ บางทีอาจเป็นโน้ตเพลง", type: TYPES.MUSIC },
      { text: "ลองเดินตามแผนที่ไปจริงๆ เพื่อสำรวจ", type: TYPES.BODY },
      { text: "วาดแผนที่ใหม่ให้ชัดเจนและเข้าใจง่ายขึ้น", type: TYPES.VISUAL },
      { text: "ชวนทีมมาระดมความคิดร่วมกัน", type: TYPES.SOCIAL },
      { text: "ใช้เวลาคิดคนเดียวก่อน แล้วค่อยหาคำตอบด้วยตัวเอง", type: TYPES.SELF },
      { text: "สังเกตว่าสัญลักษณ์เกี่ยวข้องกับธรรมชาติอะไร เช่น ภูเขา แม่น้ำ ต้นไม้", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 3: การตั้งเต็นท์",
    image: "scenario-images/3.png",
    text: "ถึงเวลาตั้งเต็นท์! คุณจะทำหน้าที่ไหน?",
    answers: [
      { text: "อ่านคู่มือการตั้งเต็นท์และอธิบายขั้นตอนให้เพื่อนฟัง", type: TYPES.LANGUAGE },
      { text: "คำนวณพื้นที่ วัดระยะ และวางแผนจัดวางตำแหน่ง", type: TYPES.LOGIC },
      { text: "เปิดเพลงเบาๆ สร้างบรรยากาศให้การทำงานสนุกขึ้น", type: TYPES.MUSIC },
      { text: "ตอกหลัก ขึงเชือก ยกเสา ทำงานที่ใช้แรงและความคล่องแคล่ว", type: TYPES.BODY },
      { text: "ดูภาพรวมและจัดวางให้เต็นท์ดูสวยงาม เป็นระเบียบ", type: TYPES.VISUAL },
      { text: "เป็นหัวหน้าทีมประสานงานให้ทุกคนทำงานร่วมกัน", type: TYPES.SOCIAL },
      { text: "เลือกมุมที่เหมาะกับตัวเองและตั้งเต็นท์ส่วนตัว", type: TYPES.SELF },
      { text: "เลือกพื้นที่ที่ปลอดภัย ไม่มีรังมด ห่างจากต้นไม้ใหญ่", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 4: จุดกองไฟ",
    image: "scenario-images/4.png",
    text: "ค่ำคืนแรก ต้องจุดกองไฟเพื่อทำอาหารและให้ความอบอุ่น คุณจะช่วยเพื่อนในหมู่อย่างไร?",
    answers: [
      { text: "อ่านหนังสือเทคนิคการจุดไฟและบอกวิธีที่ถูกต้อง", type: TYPES.LANGUAGE },
      { text: "คำนวณปริมาณไม้ฟืน ออกซิเจน และอุณหภูมิที่เหมาะสม", type: TYPES.LOGIC },
      { text: "ร้องเพลงรอบกองไฟเมื่อจุดได้แล้ว", type: TYPES.MUSIC },
      { text: "เก็บฟืน ตัดกิ่งไม้ และจัดเรียงกองไฟด้วยมือ", type: TYPES.BODY },
      { text: "จัดวางฟืนให้เป็นรูปทรงสวยงามและมีประสิทธิภาพ", type: TYPES.VISUAL },
      { text: "แบ่งหน้าที่ให้ทุกคนมีส่วนร่วม", type: TYPES.SOCIAL },
      { text: "อยู่อย่างสงบและมีสมาธิในการจุดไฟ", type: TYPES.SELF },
      { text: "เลือกฟืนแห้ง ใบไม้แห้ง และหาวัสดุจากธรรมชาติ", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 5: แสงแรกแห่งยอดดอย",
    image: "scenario-images/5.png",
    text: "ระหว่างทางขึ้นสู่ยอดเขา... มีแสงพระอาทิตย์ขึ้นคุณจะเลือกใช้เวลาเช้านี้อย่างไร?",
    answers: [
      { text: "หยุดมองท้องฟ้าจดบันทึกความรู้สึกและเขียนบทกวีเกี่ยวกับพระอาทิตย์ขึ้น", type: TYPES.LANGUAGE },
      { text: "คำนวณเวลาและมุมที่พระอาทิตย์จะขึ้น", type: TYPES.LOGIC },
      { text: "เปิดเพลงเบาๆ หรือฮัมเพลงเบาๆ ขณะชมวิว", type: TYPES.MUSIC },
      { text: "ปีนเร็วที่สุด เพื่อไปถึงยอดเขาก่อนใคร", type: TYPES.BODY },
      { text: "ถ่ายรูปและบันทึกภาพทิวทัศน์ที่สวยงาม", type: TYPES.VISUAL },
      { text: "ชวนเพื่อนๆ ไปด้วยกันและคุยกันระหว่างทาง", type: TYPES.SOCIAL },
      { text: "ปีนช้าๆ ใคร่ครวญและสะท้อนความคิดในใจ", type: TYPES.SELF },
      { text: "สังเกตพืช สัตว์ และการเปลี่ยนแปลงของธรรมชาติ", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 6: หลงทางในป่า",
    image: "scenario-images/6.png",
    text: "ระหว่างเดินป่า หมู่ของคุณหลงทาง จะแก้ปัญหาอย่างไร?",
    answers: [
      { text: "ดูป้ายและอ่านคำแนะนำที่มีอยู่", type: TYPES.LANGUAGE },
      { text: "ใช้เข็มทิศ ดูดวงอาทิตย์ และคำนวณทิศทาง", type: TYPES.LOGIC },
      { text: "นกหวีดหรือร้องเพลงเพื่อส่งสัญญาณให้ผู้อื่นได้ยิน", type: TYPES.MUSIC },
      { text: "เดินสำรวจรอบๆ เพื่อหาเส้นทางที่ถูกต้อง", type: TYPES.BODY },
      { text: "วาดแผนที่จากความทรงจำว่าเดินมาทางไหน", type: TYPES.VISUAL },
      { text: "ปรึกษาทุกคนในกลุ่มว่าจำเส้นทางได้หรือไม่", type: TYPES.SOCIAL },
      { text: "สงบสติอารมณ์ คิดย้อนกลับว่าเดินมาอย่างไร", type: TYPES.SELF },
      { text: "มองหาสัญญาณธรรมชาติ เช่น ทางเดินสัตว์ แม่น้ำ", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 7: พบเห็ดแปลกในป่า",
    image: "scenario-images/7.png",
    text: "เจอเห็ดสีสันสวยงามในป่า คุณจะทำอย่างไร?",
    answers: [
      { text: "อ่านหนังสือพรรณพืชเพื่อหาว่าเห็ดชนิดนี้คืออะไร", type: TYPES.LANGUAGE },
      { text: "จำแนกตามลักษณะทางวิทยาศาสตร์ เช่น สี รูปร่าง", type: TYPES.LOGIC },
      { text: "ถ่ายรูปเห็ดและแต่งเสียงเพลงประกอบ", type: TYPES.MUSIC },
      { text: "เก็บตัวอย่างเห็ดใส่ถุงเพื่อศึกษา (ระวังไม่แตะมือเปล่า)", type: TYPES.BODY },
      { text: "วาดภาพเห็ดให้สมจริงที่สุด", type: TYPES.VISUAL },
      { text: "เรียกเพื่อนๆ มาดูและคุยกันว่าเห็ดนี้คืออะไร", type: TYPES.SOCIAL },
      { text: "ใคร่ครวญว่าควรเก็บหรือไม่ ระวังความปลอดภัย", type: TYPES.SELF },
      { text: "สังเกตว่าเห็ดขึ้นใกล้ต้นไม้ชนิดไหน ในสภาพแวดล้อมแบบใด", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 8: ข้ามลำธาร",
    image: "scenario-images/8.png",
    text: "เจอลำธารขวางทาง ต้องหาวิธีข้ามไปอีกฝั่ง คุณจะทำอย่างไร?",
    answers: [
      { text: "อ่านคู่มือเทคนิคการข้ามน้ำอย่างปลอดภัย", type: TYPES.LANGUAGE },
      { text: "วัดความลึก ความเร็วกระแสน้ำ และหาจุดที่ปลอดภัยที่สุด", type: TYPES.LOGIC },
      { text: "ร้องเพลงให้กำลังใจขณะข้าม", type: TYPES.MUSIC },
      { text: "กระโดดข้ามก้อนหินอย่างคล่องแคล่ว", type: TYPES.BODY },
      { text: "วางแผนเส้นทางข้ามที่ดีที่สุดในใจก่อน", type: TYPES.VISUAL },
      { text: "จับมือเพื่อนๆ ข้ามไปด้วยกัน", type: TYPES.SOCIAL },
      { text: "ประเมินความสามารถตัวเองก่อนตัดสินใจ", type: TYPES.SELF },
      { text: "สังเกตว่าสัตว์ข้ามลำธารตรงไหน เพราะมักปลอดภัย", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 9: พบนกหายาก",
    image: "scenario-images/9.png",
    text: "เจอนกสายพันธุ์หายากบนต้นไม้ คุณจะทำอย่างไร?",
    answers: [
      { text: "จดบันทึกลักษณะนกและเขียนรายงาน", type: TYPES.LANGUAGE },
      { text: "นับจำนวน สังเกตพฤติกรรม และบันทึกข้อมูลอย่างเป็นระบบ", type: TYPES.LOGIC },
      { text: "บันทึกเสียงร้องของนก", type: TYPES.MUSIC },
      { text: "ปีนต้นไม้เพื่อดูนกใกล้ๆ (อย่างระวัง)", type: TYPES.BODY },
      { text: "วาดภาพหรือถ่ายรูปนกในมุมสวยๆ", type: TYPES.VISUAL },
      { text: "บอกเพื่อนๆ และชมนกด้วยกัน", type: TYPES.SOCIAL },
      { text: "นั่งเงียบๆ สังเกตนกคนเดียวอย่างตั้งใจ", type: TYPES.SELF },
      { text: "สังเกตว่านกกินอะไร ทำรังอย่างไร อาศัยอยู่อย่างไร", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 10: ทำอาหารกลางวัน",
    image: "scenario-images/10.png",
    text: "เที่ยงแล้ว! ต้องทำอาหารกลางวันในป่า คุณจะช่วยอย่างไร?",
    answers: [
      { text: "อ่านสูตรอาหารและบอกวิธีทำทีละขั้นตอน", type: TYPES.LANGUAGE },
      { text: "คำนวณส่วนผสม เวลาในการปรุง และแบ่งหน้าที่", type: TYPES.LOGIC },
      { text: "ร้องเพลงหรือเปิดเพลงขณะทำอาหาร", type: TYPES.MUSIC },
      { text: "สับ หั่น ผัด ทำงานที่ต้องใช้มือและแรง", type: TYPES.BODY },
      { text: "จัดจานให้อาหารดูน่ารับประทาน สวยงาม", type: TYPES.VISUAL },
      { text: "ประสานงานทีมให้ทุกคนทำงานร่วมกันอย่างลงตัว", type: TYPES.SOCIAL },
      { text: "ชิมรสชาติและปรับปรุงตามความพอใจส่วนตัว", type: TYPES.SELF },
      { text: "หาผักป่าหรือสมุนไพรที่กินได้มาเสริม", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 11: เล่นเกมกลางคืน",
    image: "scenario-images/11.png",
    text: "คืนวันที่สอง มีเกมสนุกๆ คุณชอบเล่นเกมแบบไหน?",
    answers: [
      { text: "เกมทายคำ ต่อคำศัพท์", type: TYPES.LANGUAGE },
      { text: "เกมปริศนาตรรกะ แก้โจทย์คณิตศาสตร์", type: TYPES.LOGIC },
      { text: "เกมเดาเพลง ร้องเพลงประกวด", type: TYPES.MUSIC },
      { text: "เกมวิ่งไล่จับ แข่งขัน", type: TYPES.BODY },
      { text: "เกมวาดภาพให้เพื่อนทาย", type: TYPES.VISUAL },
      { text: "เกมที่ต้องทำงานเป็นทีม", type: TYPES.SOCIAL },
      { text: "เกมที่ต้องใช้กลยุทธ์ส่วนตัว เช่น หมากรุก", type: TYPES.SELF },
      { text: "เกมเดาสัตว์ เดาพืช จากคำใบ้", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 12: เรื่องเล่ารอบกองไฟ",
    image: "scenario-images/12.png",
    text: "ก่อนนอน หัวหน้าให้ทุกคนเล่าเรื่อง คุณจะเล่าเรื่องแบบไหน?",
    answers: [
      { text: "เล่านิทานหรือตำนานท้องถิ่นที่น่าสนใจ", type: TYPES.LANGUAGE },
      { text: "เล่าเรื่องลึกลับที่มีปริศนาให้แก้", type: TYPES.LOGIC },
      { text: "เล่าเรื่องพร้อมร้องเพลงประกอบ", type: TYPES.MUSIC },
      { text: "เล่าเรื่องผจญภัยที่ต้องใช้กำลังกาย", type: TYPES.BODY },
      { text: "เล่าเรื่องที่มีภาพพจน์สวยงาม", type: TYPES.VISUAL },
      { text: "เล่าเรื่องตลกให้ทุกคนหัวเราะ", type: TYPES.SOCIAL },
      { text: "เล่าประสบการณ์ส่วนตัวที่มีความหมาย", type: TYPES.SELF },
      { text: "เล่าเรื่องสัตว์ป่าหรือปรากฏการณ์ธรรมชาติ", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 13: ภารกิจสุดท้าย: การพิชิตยอดเขาสูงที่สุด",
    image: "scenario-images/13.png",
    text: "ก่อนที่ขาจะก้าวสู่ก้อนหินแรก คุณเตรียมตัวอย่างไร?",
    answers: [
      { text: "อ่านแผนที่ คู่มือ และข้อมูลทุกอย่าง", type: TYPES.LANGUAGE },
      { text: "คำนวณระยะทาง ความชัน และเวลาที่ใช้", type: TYPES.LOGIC },
      { text: "เตรียมเพลงกำลังใจไว้ร้องระหว่างปีน", type: TYPES.MUSIC },
      { text: "ยืดเส้นยืดสายให้ร่างกายพร้อม", type: TYPES.BODY },
      { text: "ดูแผนที่ จำภาพเส้นทางในใจ", type: TYPES.VISUAL },
      { text: "วางแผนทีม ใครเดินหน้า ใครดูแลท้าย", type: TYPES.SOCIAL },
      { text: "ตั้งเป้าหมายส่วนตัวว่าจะปีนให้สำเร็จ", type: TYPES.SELF },
      { text: "สำรวจเส้นทางว่ามีอุปสรรคอะไรบ้าง", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 14: ระหว่างการปีน",
    image: "scenario-images/14.png",
    text: "กำลังปีนอยู่ มีอุปสรรคมากมาย คุณจะทำอย่างไร?",
    answers: [
      { text: "อ่านป้ายบอกทางและคำแนะนำ", type: TYPES.LANGUAGE },
      { text: "คำนวณพลังงานที่เหลือว่าพอไปต่อไหม", type: TYPES.LOGIC },
      { text: "ร้องเพลงให้กำลังใจตัวเองและเพื่อน", type: TYPES.MUSIC },
      { text: "ใช้แรงขาและแขนปีนต่อไปเรื่อยๆ", type: TYPES.BODY },
      { text: "จำภาพยอดเขาในใจเป็นแรงบันดาลใจ", type: TYPES.VISUAL },
      { text: "ช่วยเหลือเพื่อนที่เหนื่อย", type: TYPES.SOCIAL },
      { text: "พูดให้กำลังใจตัวเอง 'ทำได้!'", type: TYPES.SELF },
      { text: "สังเกตธรรมชาติรอบข้างเพื่อลดความเครียด", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 15: ถึงยอดเขาแล้ว!",
    image: "scenario-images/15.png",
    text: "สำเร็จแล้ว! ถึงยอดเขา คุณรู้สึกอย่างไรและจะทำอะไร?",
    answers: [
      { text: "เขียนบันทึกความรู้สึกและความสำเร็จ", type: TYPES.LANGUAGE },
      { text: "คำนวณว่าใช้เวลาเท่าไรและเทียบกับแผน", type: TYPES.LOGIC },
      { text: "ร้องเพลงฉลองบนยอดเขา", type: TYPES.MUSIC },
      { text: "โบกธง กระโดดโลดเต้นด้วยความดีใจ", type: TYPES.BODY },
      { text: "ถ่ายรูปวิวสวยๆ จากมุมต่างๆ", type: TYPES.VISUAL },
      { text: "กอดเพื่อนๆ ฉลองด้วยกัน", type: TYPES.SOCIAL },
      { text: "นั่งเงียบๆ ภูมิใจในตัวเอง", type: TYPES.SELF },
      { text: "สังเกตทิวทัศน์ธรรมชาติจากมุมสูง", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 16: พบจดหมายลึกลับ",
    image: "scenario-images/16.png",
    text: "บนยอดเขามีกล่องเก่าๆ ข้างในมีจดหมายเขียนด้วยรหัส คุณจะทำอย่างไร?",
    answers: [
      { text: "อ่านและแปลรหัสตามหลักภาษาศาสตร์", type: TYPES.LANGUAGE },
      { text: "วิเคราะห์รูปแบบและใช้คณิตศาสตร์ถอดรหัส", type: TYPES.LOGIC },
      { text: "ลองอ่านออกเสียงดูว่าเป็นทำนองเพลงไหม", type: TYPES.MUSIC },
      { text: "ลองใช้มือจับจดหมายดูว่ามีอะไรซ่อนอยู่", type: TYPES.BODY },
      { text: "วาดสัญลักษณ์ใหม่เพื่อมองภาพรวม", type: TYPES.VISUAL }
    ]
  },
  {
    title: "สถานการณ์ที่ 17: รางวัลแห่งความสำเร็จ",
    image: "scenario-images/17.png",
    text: "เมื่อถอดรหัสได้สำเร็จ พบว่ามันนำไปสู่ 'รางวัลทางใจ' คุณคิดว่ารางวัลนั้นคืออะไรสำหรับคุณ?",
    answers: [
      { text: "สมุดบันทึกเล่มเก่าที่จารึกเรื่องราวตำนานของภูเขาลูกนี้", type: TYPES.LANGUAGE },
      { text: "เข็มทิศชนิดพิเศษที่คำนวณทิศได้แม่นยำ", type: TYPES.LOGIC },
      { text: "ขลุ่ยไม้ไผ่ที่ทำจากต้นไม้บนยอดเขา", type: TYPES.MUSIC },
      { text: "รองเท้าเดินป่าคู่ใหม่ที่ทนทานต่อการบุกตะลุย", type: TYPES.BODY },
      { text: "กล้องส่องทางไกลที่เห็นภาพวิวได้ชัดเจน", type: TYPES.VISUAL },
      { text: "เกียรติบัตรแสดงความสามัคคีของหมู่", type: TYPES.SOCIAL },
      { text: "กระจกเงาบานเล็กที่สลักคำว่า 'ค้นพบตัวเอง'", type: TYPES.SELF },
      { text: "เมล็ดพันธุ์ไม้หายากให้นำกลับไปปลูก", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 18: ขาลงจากยอดเขา",
    image: "scenario-images/18.png",
    text: "ได้เวลากลับลงมาแล้ว ทางลงค่อนข้างชันและลื่น คุณจะใช้วิธีไหน?",
    answers: [
      { text: "อ่านป้ายเตือนและตะโกนบอกเพื่อนตามจุดต่างๆ", type: TYPES.LANGUAGE },
      { text: "คำนวณองศาความชันเพื่อวางเท้าในจุดที่สมดุลที่สุด", type: TYPES.LOGIC },
      { text: "ฮัมเพลงเป็นจังหวะก้าวเท้า ซ้าย-ขวา ให้สม่ำเสมอ", type: TYPES.MUSIC },
      { text: "ทรงตัวโดยใช้ทักษะร่างกาย สไลด์ลงมาอย่างคล่องแคล่ว", type: TYPES.BODY },
      { text: "จินตนาการเส้นทางในหัวล่วงหน้า แล้วเดินตามภาพนั้น", type: TYPES.VISUAL },
      { text: "จับมือกันเดินลงมาเป็นโซ่มนุษย์เพื่อความปลอดภัย", type: TYPES.SOCIAL },
      { text: "รวบรวมสมาธิ เดินอย่างมีสติ รู้เนื้อรู้ตัวทุกย่างก้าว", type: TYPES.SELF },
      { text: "สังเกตพืชคลุมดิน ว่าตรงไหนเหยียบได้ไม่ลื่น", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 19: เก็บสัมภาระกลับบ้าน",
    image: "scenario-images/19.png",
    text: "กลับถึงค่ายหลัก ต้องรื้อถอนเต็นท์และเก็บของ คุณจะช่วยอย่างไร?",
    answers: [
      { text: "ตรวจเช็คชื่ออุปกรณ์ตามรายการ (Checklist) ให้ครบถ้วน", type: TYPES.LANGUAGE },
      { text: "จัดเรียงของใส่กระเป๋าโดยคำนวณพื้นที่ให้คุ้มค่าที่สุด", type: TYPES.LOGIC },
      { text: "ผิวปากหรือร้องเพลงไปเพลินๆ ระหว่างเก็บของ", type: TYPES.MUSIC },
      { text: "รับหน้าที่แบกของหนักๆ และม้วนเต็นท์ที่ต้องใช้แรง", type: TYPES.BODY },
      { text: "พับผ้าและจัดระเบียบกระเป๋าให้สวยงาม เรียบร้อย", type: TYPES.VISUAL },
      { text: "ช่วยเพื่อนคนอื่นๆ เก็บของก่อน แล้วค่อยเก็บของตัวเอง", type: TYPES.SOCIAL },
      { text: "แยกตัวมาจัดการของส่วนตัวให้เสร็จเงียบๆ อย่างรวดเร็ว", type: TYPES.SELF },
      { text: "ตรวจสอบความสะอาดพื้นที่ ไม่ให้เหลือขยะทำลายธรรมชาติ", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 20: พิธีอำลาป่า",
    image: "scenario-images/20.png",
    text: "ก่อนขึ้นรถบัส ผู้กำกับให้ทุกคนกล่าวลาป่าแห่งนี้ คุณจะทำอย่างไร?",
    answers: [
      { text: "เขียนกลอนหรือคำคมสั้นๆ ทิ้งไว้ในสมุดเยี่ยม", type: TYPES.LANGUAGE },
      { text: "นับสถิติว่าเดินไปกี่ก้าว และใช้เวลากี่ชั่วโมงในค่ายนี้", type: TYPES.LOGIC },
      { text: "ร้องเพลงสามัคคีชุมนุมด้วยความซาบซึ้ง", type: TYPES.MUSIC },
      { text: "วิ่งรอบค่ายรอบสุดท้ายเพื่อสั่งลา", type: TYPES.BODY },
      { text: "ยืนมองวิวรอบๆ เพื่อจดจำภาพสุดท้ายไว้ในใจ", type: TYPES.VISUAL },
      { text: "กอดคอเพื่อนๆ แล้วขอบคุณที่ร่วมทุกข์ร่วมสุขกันมา", type: TYPES.SOCIAL },
      { text: "ยืนหลับตาขอบคุณตัวเองที่ผ่านอุปสรรคมาได้", type: TYPES.SELF },
      { text: "สัมผัสต้นไม้ใหญ่และขอบคุณธรรมชาติที่ดูแลเรา", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 21: บนรถบัสขากลับ",
    image: "scenario-images/21.png",
    text: "กิจกรรมแก้เบื่อระหว่างนั่งรถกลับ ร่างกายเริ่มเหนื่อยล้า คุณเลือกทำอะไร?",
    answers: [
      { text: "หยิบหนังสือเล่มโปรดขึ้นมาอ่านฆ่าเวลา", type: TYPES.LANGUAGE },
      { text: "นั่งคิดตลกๆ ว่ารถวิ่งด้วยความเร็วเท่าไหร่จะถึงโรงเรียนกี่โมง", type: TYPES.LOGIC },
      { text: "ใส่หูฟัง ฟังเพลงเพลย์ลิสต์โปรด", type: TYPES.MUSIC },
      { text: "หลับเพื่อชาร์จพลัง หรือบิดขี้เกียจยืดเส้นยืดสาย", type: TYPES.BODY },
      { text: "นั่งมองก้อนเมฆนอกหน้าต่าง จินตนาการเป็นรูปต่างๆ", type: TYPES.VISUAL },
      { text: "เม้าท์มอยเล่าเรื่องตลกให้เพื่อนที่นั่งข้างๆ ฟัง", type: TYPES.SOCIAL },
      { text: "นั่งทบทวนสิ่งที่ได้เรียนรู้เงียบๆ คนเดียว", type: TYPES.SELF },
      { text: "มองหานกหรือสัตว์เลี้ยงตามข้างทางผ่านหน้าต่าง", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 22: รถติดหนักมาก",
    image: "scenario-images/22.jpg",
    text: "ใกล้ถึงโรงเรียนแต่รถติดหนักมาก ทุกคนเริ่มหงุดหงิด คุณจะทำอย่างไร?",
    answers: [
      { text: "เล่าเรื่องผีหรือนิทานให้เพื่อนฟังเพื่อดึงความสนใจ", type: TYPES.LANGUAGE },
      { text: "วิเคราะห์เส้นทางใน Google Map ว่ามีทางลัดไหม", type: TYPES.LOGIC },
      { text: "เคาะนิ้วเป็นจังหวะ หรือชวนเพื่อนร้องเพลงแก้เครียด", type: TYPES.MUSIC },
      { text: "อยู่นิ่งไม่ไหว ขอครูลุกขึ้นมายืดเหยียดขา", type: TYPES.BODY },
      { text: "วาดรูปรถติดหรือบรรยากาศในรถลงสมุดวาดเขียน", type: TYPES.VISUAL },
      { text: "ปลอบเพื่อนที่กำลังหงุดหงิดและชวนคุยเรื่องอื่น", type: TYPES.SOCIAL },
      { text: "ฝึกควบคุมอารมณ์ตัวเองให้ใจเย็น ไม่หงุดหงิดตาม", type: TYPES.SELF },
      { text: "สังเกตต้นไม้เกาะกลางถนนว่าเหี่ยวเฉาเพราะควันรถหรือไม่", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 23: ถึงโรงเรียนแล้ว",
    image: "scenario-images/23.png",
    text: "รถจอดเทียบค่ายที่โรงเรียน ทุกคนต้องขนของลง คุณจะทำอะไร?",
    answers: [
      { text: "อ่านป้ายชื่อที่กระเป๋าและตะโกนเรียกเจ้าของ", type: TYPES.LANGUAGE },
      { text: "จัดระบบการส่งต่อกระเป๋าเป็นแถวตอนเพื่อความรวดเร็ว", type: TYPES.LOGIC },
      { text: "ส่งเสียงให้จังหวะเวลาเพื่อนยกของ", type: TYPES.MUSIC },
      { text: "กระโดดลงรถไปช่วยรับกระเป๋าใบใหญ่ๆ", type: TYPES.BODY },
      { text: "ดูแลการจัดวางกระเป๋ากองรวมกันให้เป็นระเบียบ ไม่ขวางทาง", type: TYPES.VISUAL },
      { text: "ดูแลเพื่อนที่เมารถ หรือช่วยถือของให้เพื่อนตัวเล็ก", type: TYPES.SOCIAL },
      { text: "ตรวจสอบสัมภาระของตัวเองให้ครบก่อนเดินออกไป", type: TYPES.SELF },
      { text: "ระวังไม่ให้กระเป๋าทับมดหรือแมลงที่พื้น", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 24: กลับถึงบ้าน - เล่าให้แม่ฟัง",
    image: "scenario-images/24.png",
    text: "คุณแม่ถามว่า 'ไปค่ายเป็นยังไงบ้างลูก?' คุณจะตอบหรือทำอะไรเป็นอย่างแรก?",
    answers: [
      { text: "เล่าเรื่องราวเป็นฉากๆ ตั้งแต่ต้นจนจบอย่างละเอียด", type: TYPES.LANGUAGE },
      { text: "บอกแม่ว่า 'คุ้มค่ามากแม่ ไม่เสียค่าใช้จ่ายเลย คุ้มทุกอย่าง'", type: TYPES.LOGIC },
      { text: "เพลงรอบกองไฟสนุกมาก เดี๋ยวร้องให้ฟัง", type: TYPES.MUSIC },
      { text: "ทำท่าทางตอนปีนเขา หรือตอนหนีผึ้งให้แม่ดู", type: TYPES.BODY },
      { text: "เอารูปที่ถ่ายสวยๆ ในมือถือให้แม่ดูทันที", type: TYPES.VISUAL },
      { text: "เล่าเรื่องเพื่อนใหม่และครูที่ค่ายให้แม่ฟัง", type: TYPES.SOCIAL },
      { text: "สนุกครับ/ค่ะ... ขอตัวไปอาบน้ำพักผ่อนก่อนนะแม่", type: TYPES.SELF },
      { text: "เอาหินสวยๆ หรือใบไม้ทับแห้งที่เก็บมาอวดแม่", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 25: บันทึกความทรงจำ",
    image: "scenario-images/25.png",
    text: "ครูให้การบ้านชิ้นสุดท้าย คือ 'สรุปสิ่งที่ประทับใจที่สุด' งานแบบไหนที่คุณถนัด",
    answers: [
      { text: "เรียงความเรื่อง 'บันทึกการเดินทางของข้าพเจ้า'", type: TYPES.LANGUAGE },
      { text: "ไทม์ไลน์ (Timeline) สรุปเหตุการณ์และกราฟความสนุกในแต่ละวัน", type: TYPES.LOGIC },
      { text: "แต่งเพลง หรือคลิปวิดีโอประกอบเพลง", type: TYPES.MUSIC },
      { text: "การแสดงบทบาทสมมติหน้าชั้นเรียน", type: TYPES.BODY },
      { text: "จัดบอร์ดนิทรรศการรูปภาพ หรือวาดภาพระบายสี", type: TYPES.VISUAL },
      { text: "สัมภาษณ์เพื่อนๆ แล้วทำเป็นคลิปรายการทอล์กโชว์", type: TYPES.SOCIAL },
      { text: "เขียนไดอารี่สะท้อนความรู้สึกภายในใจ (Reflection)", type: TYPES.SELF },
      { text: "รายงานเรื่องระบบนิเวศในค่ายพักแรม", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 26: บทเรียนชีวิต",
    image: "scenario-images/26.png",
    text: "สิ่งที่เปลี่ยนไปในตัวคุณ หลังจากจบค่ายนี้คืออะไร?",
    answers: [
      { text: "มีคลังคำศัพท์ใหม่ๆ และกล้าพูด กล้าแสดงออกมากขึ้น", type: TYPES.LANGUAGE },
      { text: "คิดเป็นเหตุเป็นผล และแก้ปัญหาเฉพาะหน้าได้ดีขึ้น", type: TYPES.LOGIC },
      { text: "ฟังเสียงธรรมชาติและจังหวะชีวิตได้ละเอียดขึ้น", type: TYPES.MUSIC },
      { text: "ร่างกายแข็งแรงขึ้น และรู้ขีดจำกัดของตัวเอง", type: TYPES.BODY },
      { text: "เป็นคนช่างสังเกต มองเห็นความสวยงามในมุมมองใหม่ๆ", type: TYPES.VISUAL },
      { text: "เข้าใจความแตกต่างของเพื่อน และทำงานเป็นทีมเป็น", type: TYPES.SOCIAL },
      { text: "รู้จักตัวเองมากขึ้น ว่าเราชอบหรือไม่ชอบอะไร", type: TYPES.SELF },
      { text: "รักและหวงแหนธรรมชาติ อยากช่วยดูแลสิ่งแวดล้อม", type: TYPES.NATURE }
    ]
  },
  {
    title: "สถานการณ์ที่ 27: ค่ายครั้งหน้า",
    image: "scenario-images/27.png",
    text: "ถ้าได้เป็นคนเลือกสถานที่ค่ายครั้งหน้า คุณจะเสนอที่ไหน?",
    answers: [
      { text: "ห้องสมุดโลก หรือค่ายนักเขียน", type: TYPES.LANGUAGE },
      { text: "ค่ายวิทยาศาสตร์และดาราศาสตร์", type: TYPES.LOGIC },
      { text: "ค่ายดนตรีและศิลปะการแสดง", type: TYPES.MUSIC },
      { text: "ค่ายกีฬาทางน้ำ หรือเข้าค่ายทหารฝึกความอดทน", type: TYPES.BODY },
      { text: "ค่ายศิลปะ หรือพิพิธภัณฑ์ศิลป์", type: TYPES.VISUAL },
      { text: "ค่ายอาสาพัฒนาชุมชน (ได้เจอคนเยอะๆ)", type: TYPES.SOCIAL },
      { text: "ค่ายปฏิบัติธรรม หรือค่ายฝึกจิต", type: TYPES.SELF },
      { text: "อุทยานแห่งชาติทางทะเล หรือสวนพฤกษศาสตร์", type: TYPES.NATURE }
    ]
  }
];

let currentQuestion = 0;
let scores = {};

const questionTitleEl = document.getElementById("question-title");
const questionBodyEl = document.getElementById("question-body");
const questionImgEl = document.getElementById("question-image");
const answersEl = document.getElementById("answers");
const resultBox = document.getElementById("result-box");
const resultEl = document.getElementById("result");
const questionBox = document.getElementById("question-box");
const introBox = document.getElementById("intro-box");

function startQuiz() {
  introBox.classList.add("hidden");
  questionBox.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionTitleEl.textContent = q.title;
  questionBodyEl.textContent = q.text;
  questionImgEl.src = q.image;
  questionImgEl.alt = questionTitleEl;
  answersEl.innerHTML = "";

  const current = questions[currentQuestion];
  const shuffledAnswers = shuffleArray(current.answers);

  shuffledAnswers.forEach(answer => {
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

let chartInstance = null;

function showResult() {
  questionBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topType = sorted[0][0];
  const description = DESCRIPTIONS[topType];

  resultEl.innerHTML = `
    <h3>${description.title}</h3>
    <p>${description.text}</p>
    <h4>การกระจายคะแนน</h4>
  `;

  renderChart(sorted);
}

function renderChart() {
const ctx = document.getElementById("resultChart").getContext("2d");
  const totalQuestions = questions.length;

  if (chartInstance) {
    chartInstance.destroy();
  }

  const labels = Object.values(TYPES);
  const dataPoints = labels.map(label => scores[label] || 0);

  chartInstance = new Chart(ctx, {
    type: "polarArea",
    data: {
      labels: labels,
      datasets: [{
        data: dataPoints,
        backgroundColor: CHART_COLORS,
        borderColor: "#fff",
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      layout: {
        padding: 50 
      },
      scales: {
        r: {
          grid: { display: true },
          ticks: { display: false },
          pointLabels: {
            display: true,
            centerPointLabels: true,
            font: {
              size: 12,
              weight: 'bold'
            },
            color: '#333',
            callback: function(label, index) {
              const score = dataPoints[index];
              const percentage = Math.round((score / totalQuestions) * 100);
              return [label, percentage + "%"]; 
            }
          }
        }
      },
      plugins: {
        legend: { display: false },
        datalabels: { display: false }
      }
    }
  });
}

function shuffleArray(array) {
  const arr = [...array]; //copy version
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function restartQuiz() {
  currentQuestion = 0;
  scores = {};
  resultBox.classList.add("hidden");
  introBox.classList.remove("hidden");
  //questionBox.classList.remove("hidden");
  showQuestion();
}

//showQuestion();
