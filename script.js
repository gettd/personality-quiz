Chart.register(ChartDataLabels);

const sectionBreaks = {
  0: 1,// before question index 0 ->section 1
  4: 2,
  12: 3
};


const TYPES = {
  LANGUAGE: "ภาษา",
  LOGIC: "ตรรกะ",
  VISUAL: "ภาพ",
  BODY: "ร่างกาย",
  MUSIC: "ดนตรี",
  SOCIAL: "มนุษย์",
  SELF: "ตนเอง",
  NATURE: "ธรรมชาติ",
  EXIST: "การดำรงชีวิต"
};

const CHART_COLORS = [ //for graph
  'rgba(255, 99, 132, 0.6)', 
  'rgba(54, 162, 235, 0.6)',  
  'rgba(255, 206, 86, 0.6)',  
  'rgba(75, 192, 192, 0.6)',  
  'rgba(153, 102, 255, 0.6)', 
  'rgba(255, 159, 64, 0.6)',  
  'rgba(199, 199, 199, 0.6)', 
  'rgba(83, 102, 255, 0.6)',
  'rgba(126, 0, 0, 0.6)'
];

const DESCRIPTIONS = {
  [TYPES.LANGUAGE]: {
    title: "ปัญญาด้านภาษา (Linguistic Intelligence)",
    text: "นักเรียนมีความสามารถในการใช้ภาษารูปแบบต่างๆ ตั้งแต่ภาษาพื้นเมืองจนถึงภาษาอื่นๆ สามารถรับรู้เข้าใจภาษาและสามารถสื่อภาษาให้ผู้อื่นเข้าใจได้ตามที่ต้องการ สําหรับผู้ที่มีปัญญาด้านนี้โดดเด่น มักจะเป็น กวี นักเขียน นักพูดนักหนังสือพิมพ์ ครู ทนายความ หรือนักการเมือง",
    image: "assets/resultImg/1.png"
  },
  [TYPES.LOGIC]: {
    title: "ปัญญาด้านตรรกศาสตร์และคณิตศาสตร์ (Logical-Mathematical Intelligence)",
    text: "นักเรียนมีความสามารถในการคิดแบบมีเหตุและผล การคิดเชิงนามธรรม การคิดคาดการณ์ และการคิดคํานวณทางคณิตศาสตร์ สําหรับผู้ที่มีปัญญาด้านนี้ โดดเด่น มักจะเป็น นักบัญชี นักสถิติ นักคณิตศาสตร์ นักวิจัย นักวิทยาศาสตร์ นักเขียนโปรแกรม หรือวิศวกร",
    image: "assets/resultImg/2.png"
  },
  [TYPES.VISUAL]: {
    title: "ปัญญาด้านมิติสัมพันธ์ (Visual-Spatial Intelligence)",
    text: "นักเรียนมีความสามารถในการรับรู้ทางสายตาได้ดี สามารถมองเห็นพื้นที่ รูปทรง ระยะทาง และตําแหน่ง อย่างสัมพันธ์เชื่อมโยงกัน แล้วถ่ายทอดแสดงออกอย่างกลมกลืน มีความไวต่อการรับรู้ในเรื่องทิศทาง สําหรับผู้ที่มีปัญญาด้านนี้โดดเด่น จะมีทั้งสายวิทย์และสายศิลป์ สายวิทย์มักจะเป็น นักประดิษฐ์ วิศวกร ส่วนสายศิลป์มักจะเป็นศิลปินในแขนงต่างๆ เช่น จิตรกร วาดรูป ระบายสี เขียนการ์ตูน นักปั้น นักออกแบบ ช่างภาพ หรือสถาปนิก",
    image: "assets/resultImg/3.png"
  },
  [TYPES.BODY]: {
    title: "ปัญญาด้านร่างกายและการเคลื่อนไหว (Bodily-Kinesthetic Intelligence)",
    text: "นักเรียนมีความสามารถในการควบคุมและแสดงออกซึ่งความคิดความรู้สึก โดยใช้อวัยวะส่วนต่างๆ ของร่างกาย รวมถึงความสามารถในการใช้มือประดิษฐ์ ความคล่องแคล่ว ความแข็งแรง ความรวดเร็ว ความยืดหยุ่น ความประณีต และความไวทางประสาทสัมผัส สําหรับผู้ที่มีปัญญาด้านนี้โดดเด่นมักจะเป็นนักกีฬาหรือไม่ก็ศิลปินในแขนง นักแสดง นักฟ้อน นักเต้น นักเต้นบัลเลย์ หรือนักแสดงกายกรรม",
    image: "assets/resultImg/4.png"
  },
  [TYPES.MUSIC]: {
    title: "ปัญญาด้านดนตรี (Musical Intelligence)",
    text: "นักเรียนมีความสามารถในการซึมซับและเข้าถึงสุนทรียะทางดนตรี ทั้งการได้ยิน การรับรู้ การจดจํา และการแต่งเพลง สามารถจดจําจังหวะทํานองและโครงสร้างทางดนตรีได้ดี และถ่ายทอดออกมาโดยการฮัมเพลง เคาะจังหวะ เล่นดนตรี และร้องเพลง สําหรับผู้ที่มีปัญญาด้านนี้ โดดเด่น มักจะเป็น นักดนตรี นักประพันธ์เพลง หรือนักร้อง",
    image: "assets/resultImg/5.png"
  },
  [TYPES.SOCIAL]: {
    title: "ปัญญาด้านมนุษยสัมพันธ์ (Interpersonal Intelligence)",
    text: "นักเรียนมีความสามารถในการเข้าใจผู้อื่น ทั้งด้านความรู้สึกนึกคิดอารมณ์และเจตนาที่ซ่อนเร้นอยู่ภายใน มีความไวในการสังเกต สีหน้า ท่าทาง นํ้าเสียง สามารถตอบสนองได้อย่างเหมาะสม สร้างมิตรภาพได้ง่าย เจรจาต่อรอง ลดความขัดแย้ง สามารถจูงใจผู้อื่นได้ดี เป็นปัญญาด้านที่จําเป็นต้องมีอยู่ในทุกคน สําหรับผู้ที่มีปัญญาด้านนี้ โดดเด่น มักจะเป็นครูบาอาจารย์ นักการทูต เซลล์แมน พนักงานขายตรง พนักงานต้อนรับ ประชาสัมพันธ์ นักการเมือง หรือนักธุรกิจ",
    image: "assets/resultImg/6.png"
  },
  [TYPES.SELF]: {
    title: "ปัญญาด้านการเข้าใจตนเอง (Intrapersonal Intelligence)",
    text: "นักเรียนมีความสามารถในการรู้จักตระหนักรู้ในตนเอง สามารถเท่าทันตนเอง ควบคุมการแสดงออกอย่างเหมาะสมตามกาลเทศะและสถานการณ์ รู้ว่าเมื่อไหร่ควรเผชิญหน้าเมื่อไหร่ควรหลีกเลี่ยงและเมื่อไหร่ต้องขอความช่วยเหลือ มองภาพตนเองตามความเป็นจริง รู้ถึงจุดอ่อนหรือข้อบกพร่องของตนเอง ในขณะเดียวกันก็รู้ว่าตนมีจุดแข็งหรือความสามารถในเรื่องใด มีความรู้เท่าทันอารมณ์ ความรู้สึก ความคิด ความคาดหวัง ความปรารถนา และตัวตนของตนเองอย่างแท้จริง เป็นปัญญาด้านที่จําเป็นต้องมีอยู่เพื่อให้สามารถดํารงชีวิตอย่างมีคุณค่า และมีความสุข สําหรับผู้ที่มีปัญญาด้านนี้ โดดเด่น มักจะเป็น นักคิด นักปรัชญา หรือนักวิจัย",
    image: "assets/resultImg/7.png"
  },
  [TYPES.NATURE]: {
    title: "ปัญญาด้านธรรมชาติวิทยา (Naturalist Intelligence)",
    text: "นักเรียนมีความสามารถในการรู้จักและเข้าใจธรรมชาติอย่างลึกซึ้ง เข้าใจกฎเกณฑ์ปรากฏการณ์และการรังสรรค์ต่างๆของธรรมชาติ มีความไวในการสังเกตเพื่อคาดการณ์ความเป็นไปของธรรมชาติ มีความสามารถในการจัดจําแนกแยกแยะประเภทของสิ่งมีชีวิต ทั้งพืชและสัตว์ สําหรับผู้ที่มีปัญญาด้านนี้ โดดเด่น มักจะเป็น นักธรณีวิทยา",
    image: "assets/resultImg/8.png"
  },
  [TYPES.EXIST]: {
    title: "ปัญญาด้านการดำรงชีวิต (Existential Intelligence)",
    text: "นักเรียนมีความสามารถในการไตร่ตรอง คิดคำนึง ความเข้าใจเกี่ยวกับการมีชีวิตอยู่ เหตุผลของการดำรงอยู่ เข้าใจการวางแผนชีวิต เข้าใจว่าการกระทำในปัจจุบันส่งผลต่ออนาคตอย่างไร สามารถคาดการณ์ถึงผลในระยะยาว เข้าใจสถานการณ์จากมุมมองภายนอก สำหรับผู้ที่มีปัญญาด้านนี้โดดเด่น มักจะเป็น นักปรัชญา นักคิดทฤษฎี ผู้ให้การปรึกษา บาทหลวงหรือนักบวช",
    image: "assets/resultImg/9.png" 
  }
};


const questions = [
  {
    title: "สถานการณ์ที่ 1: บนรถบัส",
    image: "scenario-images/1.png",
    text: "รถบัสลูกเสือกำลังไต่ทางลาดขึ้นสู่สถานที่ลับแห่งหนึ่งที่ไม่มีระบุใน Google Maps ความตื่นเต้นลอยอบอวลระหว่างเพื่อนใหม่ที่เพิ่งรู้จัก คุณนั่งริมหน้าต่าง แล้วคุณเลือกทำอะไรเพื่อเติมพลังใจ ระหว่างการเดินทางอันแสนยาวไกลนี้?",
    answers: [
      { text: "อ่านหนังสือผจญภัย เขียนบันทึกการเดินทาง", type: TYPES.LANGUAGE },
      { text: "คำนวณระยะทาง และเวลาที่จะถึงจุดหมาย", type: TYPES.LOGIC },
      { text: "ฟังเพลงหรือร้องเพลงกับเพื่อนๆ", type: TYPES.MUSIC },
      { text: "เล่นเกมทายคำ", type: TYPES.BODY },
      { text: "มองวิวทิวทัศน์ที่สวยงาม", type: TYPES.VISUAL },
      { text: "คุยทำความรู้จักเพื่อนใหม่ในกลุ่ม", type: TYPES.SOCIAL },
      { text: "นั่งเงียบๆ และวางแพลนในใจ", type: TYPES.SELF },
      { text: "สังเกตธรรมชาติรอบทาง", type: TYPES.NATURE },
      { text: "ตั้งคำถามว่า การที่พวกเรามารวมตัวกันที่นี่ มีจุดประสงค์อะไรนะ", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 2: แผนที่ลึกลับ",
    image: "scenario-images/2.png",
    text: "ในที่สุดก็เดินทางถึงค่ายแล้ว! ผู้กำกับลูกเสือให้แผนที่เก่าๆ ที่มีสัญลักษณ์แปลกๆ กับหมู่ของคุณ คุณจะทำอย่างไร?",
    answers: [
      { text: "อ่านคำอธิบาย แล้วแปลความหมาย", type: TYPES.LANGUAGE },
      { text: "วิเคราะห์พิกัด และระยะทางอย่างเป็นระบบ", type: TYPES.LOGIC },
      { text: "สังเกตลวดลาย สัญลักษณ์ บางทีอาจเป็นโน้ตเพลง", type: TYPES.MUSIC },
      { text: "ลองเดินตามแผนที่ไปจริงๆ เพื่อสำรวจ", type: TYPES.BODY },
      { text: "วาดแผนที่ใหม่ให้ชัดเจน เข้าใจง่ายขึ้น", type: TYPES.VISUAL },
      { text: "ชวนทีมมาระดมความคิดร่วมกัน", type: TYPES.SOCIAL },
      { text: "ใช้เวลาคิดคนเดียวก่อน แล้วค่อยหาคำตอบด้วยตัวเอง", type: TYPES.SELF },
      { text: "สังเกตว่าสัญลักษณ์เกี่ยวข้องกับอะไร", type: TYPES.NATURE },
      { text: "มองแผนที่อันกว้างใหญ่แล้วคิดว่า มนุษย์เราช่างตัวเล็ก", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 3: การตั้งเต็นท์",
    image: "scenario-images/3.png",
    text: "หลังจากกิจกรรมการอ่านแผนที่ ถึงเวลาตั้งเต็นท์! คุณจะรับผิดชอบทำหน้าที่ไหน?",
    answers: [
      { text: "อ่านคู่มือการตั้งเต็นท์ให้เพื่อนฟัง", type: TYPES.LANGUAGE },
      { text: "คำนวณพื้นที่วางแผนจัดวางตำแหน่งเต็นท์", type: TYPES.LOGIC },
      { text: "เปิดเพลงเบาๆ สร้างบรรยากาศ", type: TYPES.MUSIC },
      { text: "ตอกหลัก ขึงเชือก ยกเสา ทำงานที่ใช้แรง", type: TYPES.BODY },
      { text: "ดูภาพรวม จัดวางให้เต็นท์ดูสวยงาม เป็นระเบียบ", type: TYPES.VISUAL },
      { text: "เป็นหัวหน้าทีมประสานงานให้ทุกคนทำงานร่วมกัน", type: TYPES.SOCIAL },
      { text: "เลือกมุมที่เหมาะกับตัวเองและตั้งเต็นท์ส่วนตัว", type: TYPES.SELF },
      { text: "เลือกพื้นที่ที่ปลอดภัยห่างจากต้นไม้ใหญ่", type: TYPES.NATURE },
      { text: "บอกเพื่อนว่าบ้านไม่ได้แปลว่าสิ่งก่อสร้าง แต่คือที่ที่เรารู้สึกปลอดภัย", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 4: จุดกองไฟ",
    image: "scenario-images/4.png",
    text: "และแล้ว ก็ถึงค่ำคืนแรก พวกคุณต้องจุดกองไฟเพื่อทำอาหารและให้ความอบอุ่น คุณจะช่วยเพื่อนในหมู่อย่างไร?",
    answers: [
      { text: "อ่านหนังสือเทคนิคการจุดไฟ ใช้วิธีที่ถูกต้อง", type: TYPES.LANGUAGE },
      { text: "คำนวณปริมาณไม้ฟืน ออกซิเจน และอุณหภูมิที่เหมาะสม", type: TYPES.LOGIC },
      { text: "ร้องเพลงรอบกองไฟเมื่อจุดได้แล้ว", type: TYPES.MUSIC },
      { text: "เก็บฟืน ตัดกิ่งไม้ และจัดเรียงกองไฟด้วยมือ", type: TYPES.BODY },
      { text: "จัดวางฟืนให้เป็นรูปทรงสวยงามและมีประสิทธิภาพ", type: TYPES.VISUAL },
      { text: "แบ่งหน้าที่ให้ทุกคนมีส่วนร่วม", type: TYPES.SOCIAL },
      { text: "อยู่อย่างสงบและมีสมาธิในการจุดไฟคนเดียว", type: TYPES.SELF },
      { text: "เลือกฟืนแห้ง ใบไม้แห้ง และหาวัสดุจากธรรมชาติ", type: TYPES.NATURE },
      { text: "เสนอการแสดงที่เล่าถึง 'กำเนิดโลก'", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 5: เริ่มต้นการผจญภัย",
    image: "scenario-images/5.png",
    text: "รุ่งอรุณของวันที่สองเริ่มต้นด้วยเสียงนกร้องแผ่วเบาในป่าลึก คุณสะพายเป้ พร้อมออกเดินทางท่ามกลางอากาศหนาว ระหว่างทางขึ้นสู่ยอดเขา... มีแสงพระอาทิตย์ขึ้นคุณจะเลือกใช้เวลาช่วงเช้านี้อย่างไร?",
    answers: [
      { text: "หยุดมองท้องฟ้าจดบันทึกความรู้สึก", type: TYPES.LANGUAGE },
      { text: "คำนวณเวลาและมุมที่พระอาทิตย์จะขึ้น", type: TYPES.LOGIC },
      { text: "เปิดเพลงเบาๆ หรือฮัมเพลงเบาๆ ขณะชมวิว", type: TYPES.MUSIC },
      { text: "ปีนเร็วที่สุด เพื่อไปถึงยอดเขาก่อนใคร", type: TYPES.BODY },
      { text: "ถ่ายรูปและบันทึกภาพทิวทัศน์ที่สวยงาม", type: TYPES.VISUAL },
      { text: "ชวนเพื่อนๆ ไปด้วยกันและคุยกันระหว่างทาง", type: TYPES.SOCIAL },
      { text: "ปีนช้าๆ ใคร่ครวญและสะท้อนความคิดในใจ", type: TYPES.SELF },
      { text: "สังเกตธรรมชาติรอบตัว", type: TYPES.NATURE },
      { text: "รู้สึกว่า เรากำลังก้าวออกจากกรอบเดิม ๆ ไปสู่โลกใบใหม่", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 6: หลงทางในป่า",
    image: "scenario-images/6.png",
    text: "บนภูเขาหมู่ของพวกคุณต้องพบกับผืนป่าขนาดใหญ่ กินผืนที่กว้างมาก ระหว่างเดินป่าอยู่นั้น หมู่ของคุณดันหลงทาง พลัดหลงกับครูฝึก คุณจะแก้ปัญหาอย่างไรดี?",
    answers: [
      { text: "ดูป้ายและอ่านคำแนะนำที่มีอยู่", type: TYPES.LANGUAGE },
      { text: "ใช้เข็มทิศ ดูดวงอาทิตย์ คำนวณทิศทาง", type: TYPES.LOGIC },
      { text: "ใช้นกหวีดหรือร้องเพลงเพื่อส่งสัญญาณ", type: TYPES.MUSIC },
      { text: "เดินสำรวจรอบๆ เพื่อหาเส้นทางที่ถูกต้อง", type: TYPES.BODY },
      { text: "วาดแผนที่จากความทรงจำว่าเดินมาทางไหน", type: TYPES.VISUAL },
      { text: "ปรึกษาทุกคนในกลุ่มว่าจำเส้นทางได้หรือไม่", type: TYPES.SOCIAL },
      { text: "สงบสติอารมณ์ คิดย้อนกลับว่าเดินมาอย่างไร", type: TYPES.SELF },
      { text: "มองหาสัญญาณธรรมชาติ เช่น ทางเดินสัตว์ แม่น้ำ", type: TYPES.NATURE },
      { text: "ให้ข้อคิดกับเพื่อนว่า การหลงทางก็เพื่อให้เราได้ค้นพบเส้นทางใหม่ๆ ที่ไม่เคยเห็น", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 7: พบเห็ดแปลกในป่า",
    image: "scenario-images/7.png",
    text: "ระหว่างการค้นหาครูฝึกอยู่นั้น คุณได้เจอเข้ากับเห็ดสีสันสวยงามในป่า คุณจะทำอย่างไรกับเห็ดนั้น?",
    answers: [
      { text: "อ่านหนังสือเพื่อหาว่าเห็ดชนิดนี้คืออะไร", type: TYPES.LANGUAGE },
      { text: "จำแนกตามลักษณะทางวิทยาศาสตร์ เช่น สี รูปร่าง", type: TYPES.LOGIC },
      { text: "ถ่ายรูปเห็ดและแต่งเสียงเพลงประกอบ", type: TYPES.MUSIC },
      { text: "เก็บตัวอย่างเห็ดใส่ถุงเพื่อศึกษา", type: TYPES.BODY },
      { text: "วาดภาพเห็ดให้สมจริงที่สุด", type: TYPES.VISUAL },
      { text: "เรียกเพื่อนๆ มาดูและคุยกันว่าเห็ดนี้คืออะไร", type: TYPES.SOCIAL },
      { text: "ไตร่ตรองว่าควรเก็บหรือไม่", type: TYPES.SELF },
      { text: "สังเกตว่าเห็ดขึ้นในสภาพแวดล้อมแบบใด", type: TYPES.NATURE },
      { text: "มองดูวงจรชีวิตของเห็ดที่ขึ้นบนขอนไม้ผุ", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 8: ข้ามลำธาร",
    image: "scenario-images/8.png",
    text: "เดินมาอีกซักพัก เจอลำธารขวางทางพวกคุณอยู่ ต้องหาวิธีข้ามไปอีกฝั่ง คุณจะทำอย่างไร?",
    answers: [
      { text: "อ่านคู่มือเทคนิคการข้ามน้ำอย่างปลอดภัย", type: TYPES.LANGUAGE },
      { text: "วัดความลึก และหาจุดที่ปลอดภัยที่สุด", type: TYPES.LOGIC },
      { text: "ร้องเพลงให้กำลังใจขณะข้าม", type: TYPES.MUSIC },
      { text: "กระโดดข้ามก้อนหินอย่างคล่องแคล่ว", type: TYPES.BODY },
      { text: "วางแผนเส้นทางข้ามที่ดีที่สุดในใจก่อน", type: TYPES.VISUAL },
      { text: "จับมือเพื่อนๆ ข้ามไปด้วยกัน", type: TYPES.SOCIAL },
      { text: "ประเมินความสามารถตัวเองก่อนตัดสินใจ", type: TYPES.SELF },
      { text: "สังเกตว่าสัตว์ข้ามลำธารตรงไหน", type: TYPES.NATURE },
      { text: "พูดกับเพื่อนว่า อุปสรรคตรงหน้าก็เหมือนสายน้ำไหล เราต้องก้าวข้ามมันเพื่อเติบโต", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 9: พบนกหายาก",
    image: "scenario-images/9.png",
    text: "ระหว่างทาง คุณเจอนกสายพันธุ์หายากบนต้นไม้ คุณคิดจะทำอะไรกับมัน?",
    answers: [
      { text: "จดบันทึกลักษณะนก", type: TYPES.LANGUAGE },
      { text: "นับจำนวน สังเกตพฤติกรรม บันทึกข้อมูลอย่างเป็นระบบ", type: TYPES.LOGIC },
      { text: "บันทึกเสียงร้องของนก", type: TYPES.MUSIC },
      { text: "ปีนต้นไม้เพื่อดูนกใกล้ๆ", type: TYPES.BODY },
      { text: "วาดภาพหรือถ่ายรูปนกในมุมสวยๆ", type: TYPES.VISUAL },
      { text: "บอกเพื่อนๆ และชมนกด้วยกัน", type: TYPES.SOCIAL },
      { text: "นั่งเงียบๆ สังเกตนกคนเดียวอย่างตั้งใจ", type: TYPES.SELF },
      { text: "สังเกตว่านกกินอะไร ทำรังอย่างไร อาศัยอยู่อย่างไร", type: TYPES.NATURE },
      { text: "มองนกที่บินจากไปแล้วคิดถึง อิสรภาพที่แท้จริงของการมีปีกบิน", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 10: ทำอาหารกลางวัน",
    image: "scenario-images/10.png",
    text: "ในที่สุดคุณก็หาทางกลับมารวมกลุ่มกับครูฝึก เวลาเที่ยงตรงพอดี! ต้องทำอาหารกลางวันในป่า คุณจะทำอย่างไร?",
    answers: [
      { text: "อ่านสูตรอาหารที่บอกวิธีทำทีละขั้นตอน", type: TYPES.LANGUAGE },
      { text: "คำนวณส่วนผสม และแบ่งหน้าที่", type: TYPES.LOGIC },
      { text: "ร้องเพลงหรือเปิดเพลงขณะทำอาหาร", type: TYPES.MUSIC },
      { text: "สับ หั่น ผัด ทำงานที่ต้องใช้ฝีมือ", type: TYPES.BODY },
      { text: "จัดจานให้อาหารดูน่ารับประทาน สวยงาม", type: TYPES.VISUAL },
      { text: "ให้ทุกคนช่วยกันทำอาหารร่วมกันอย่างลงตัว", type: TYPES.SOCIAL },
      { text: "ชิมรสชาติและปรับปรุงตามความพอใจส่วนตัว", type: TYPES.SELF },
      { text: "หาผักป่าหรือสมุนไพรที่กินได้มาเสริม", type: TYPES.NATURE },
      { text: "พาเพื่อนขอบคุณธรรมชาติที่มอบอาหารมื้อนี้ให้เรา", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 11: เล่นเกมกลางคืน",
    image: "scenario-images/11.png",
    text: "คืนวันที่สอง มีเกมสนุกๆ เล่นกับเพื่อนๆ ตอนกลางคืน คุณชอบเล่นเกมอะไร?",
    answers: [
      { text: "เกมทายคำ ต่อคำศัพท์", type: TYPES.LANGUAGE },
      { text: "เกมปริศนาตรรกะ แก้โจทย์คณิตศาสตร์", type: TYPES.LOGIC },
      { text: "เกมเดาเพลง ร้องเพลงประกวด", type: TYPES.MUSIC },
      { text: "เกมวิ่งไล่จับ แข่งขัน", type: TYPES.BODY },
      { text: "เกมวาดภาพให้เพื่อนทาย", type: TYPES.VISUAL },
      { text: "เกมที่ต้องทำงานเป็นทีม", type: TYPES.SOCIAL },
      { text: "เกมที่ต้องใช้กลยุทธ์ส่วนตัว เช่น หมากรุก", type: TYPES.SELF },
      { text: "เกมเดาสัตว์ เดาพืช จากคำใบ้", type: TYPES.NATURE },
      { text: "เกมต่อคำปรัชญา คำคม", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 12: เรื่องเล่ารอบกองไฟ",
    image: "scenario-images/12.png",
    text: "ก่อนนอน หัวหน้าหมู่ให้ทุกคนเล่าเรื่อง คุณจะเล่าเรื่องแบบไหน?",
    answers: [
      { text: "เล่านิทานหรือตำนานท้องถิ่นที่น่าสนใจ", type: TYPES.LANGUAGE },
      { text: "เล่าเรื่องลึกลับที่มีปริศนาให้แก้", type: TYPES.LOGIC },
      { text: "เล่าเรื่องพร้อมร้องเพลงประกอบ", type: TYPES.MUSIC },
      { text: "เล่าเรื่องผจญภัยที่ต้องใช้กำลังกาย", type: TYPES.BODY },
      { text: "เล่าเรื่องที่สวยงามน่าค้นหา", type: TYPES.VISUAL },
      { text: "เล่าเรื่องตลกให้ทุกคนหัวเราะ", type: TYPES.SOCIAL },
      { text: "เล่าประสบการณ์ส่วนตัวที่มีความหมาย", type: TYPES.SELF },
      { text: "เล่าเรื่องสัตว์ป่าหรือปรากฏการณ์ธรรมชาติ", type: TYPES.NATURE },
      { text: "เล่าเรื่องโลกหลังความตายและวิญญาณที่สถิตในธรรมชาติ", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 13: ปีนสู่ยอดเขา",
    image: "scenario-images/13.png",
    text: "วันนี้คือภารกิจสุดท้าย: การพิชิตยอดเขาสูงที่สุดของค่ายแห่งนี้ ก่อนที่ขาจะก้าวสู่ก้อนหินก้อนแรก คุณจะเตรียมตัวอย่างไร?",
    answers: [
      { text: "อ่านแผนที่ คู่มือ และข้อมูลทุกอย่าง", type: TYPES.LANGUAGE },
      { text: "คำนวณระยะทาง ความชัน และเวลาที่ใช้", type: TYPES.LOGIC },
      { text: "เตรียมเพลงกำลังใจไว้ร้องระหว่างปีน", type: TYPES.MUSIC },
      { text: "ยืดเส้นยืดสายให้ร่างกายพร้อม", type: TYPES.BODY },
      { text: "ดูแผนที่ จำภาพเส้นทางในใจ", type: TYPES.VISUAL },
      { text: "วางแผนทีม ใครเดินหน้า ใครดูแลท้าย", type: TYPES.SOCIAL },
      { text: "ตั้งเป้าหมายส่วนตัวว่าจะปีนให้สำเร็จ", type: TYPES.SELF },
      { text: "สำรวจเส้นทางว่ามีอุปสรรคอะไรบ้าง", type: TYPES.NATURE },
      { text: "คิดถึงจุดมุ่งหมายของชีวิตที่บางครั้งก็มองไม่เห็นปลายทาง", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 14: ระหว่างการปีน",
    image: "scenario-images/14.png",
    text: "ขณะที่พวกคุณกำลังปีนอยู่ มีอุปสรรคมากมาย ทำให้ปีนขึ้นไปได้ยาก คุณจะทำอย่างไร?",
    answers: [
      { text: "อ่านป้ายบอกทางและคำแนะนำ", type: TYPES.LANGUAGE },
      { text: "คำนวณพลังงานที่เหลือว่าพอไปต่อไหม", type: TYPES.LOGIC },
      { text: "ร้องเพลงให้กำลังใจตัวเองและเพื่อน", type: TYPES.MUSIC },
      { text: "ใช้แรงขาและแขนปีนต่อไปเรื่อยๆ", type: TYPES.BODY },
      { text: "จำภาพยอดเขาในใจเป็นแรงบันดาลใจ", type: TYPES.VISUAL },
      { text: "ช่วยเหลือเพื่อนที่เหนื่อย", type: TYPES.SOCIAL },
      { text: "พูดให้กำลังใจตัวเอง 'ทำได้!'", type: TYPES.SELF },
      { text: "สังเกตธรรมชาติรอบข้างเพื่อลดความเครียด", type: TYPES.NATURE },
      { text: "นึกถึงความพยายามในการปีนของพวกเรา", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 15: ถึงยอดเขาแล้ว!",
    image: "scenario-images/15.png",
    text: "สำเร็จแล้ว! พวกคุณปีนขึ้นสู่ยอดเขาได้ในเวลาไม่นาน คุณจะแสดงความดีใจอย่างไร?",
    answers: [
      { text: "เขียนบันทึกความรู้สึกและความสำเร็จ", type: TYPES.LANGUAGE },
      { text: "คำนวณว่าใช้เวลาเท่าไรและเทียบกับแผน", type: TYPES.LOGIC },
      { text: "ร้องเพลงฉลองบนยอดเขา", type: TYPES.MUSIC },
      { text: "โบกธง กระโดดโลดเต้นด้วยความดีใจ", type: TYPES.BODY },
      { text: "ถ่ายรูปวิวสวยๆ จากมุมต่างๆ", type: TYPES.VISUAL },
      { text: "กอดเพื่อนๆ ฉลองด้วยกัน", type: TYPES.SOCIAL },
      { text: "นั่งเงียบๆ ภูมิใจในตัวเอง", type: TYPES.SELF },
      { text: "สังเกตทิวทัศน์ธรรมชาติจากมุมสูง", type: TYPES.NATURE },
      { text: "มองลงไปข้างล่างแล้วคิดว่า ปัญหาที่เคยดูยิ่งใหญ่ ตอนนี้ดูเล็กนิดเดียว", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 16: พบจดหมายลึกลับ",
    image: "scenario-images/16.png",
    text: "คุณพบสิ่งของหน้าตาประหลาดคล้ายกล่องเก่าๆ ข้างในมีจดหมายเขียนด้วยรหัสลับ ในภาษาที่พวกคุณอ่านไม่เข้าใจ คุณจะทำอย่างไรกับจดหมายนี้?",
    answers: [
      { text: "อ่านและแปลรหัสตามหลักภาษาศาสตร์", type: TYPES.LANGUAGE },
      { text: "วิเคราะห์รูปแบบและใช้คณิตศาสตร์ถอดรหัส", type: TYPES.LOGIC },
      { text: "ลองอ่านออกเสียงดูว่าเป็นทำนองเพลงไหม", type: TYPES.MUSIC },
      { text: "ลองใช้มือจับจดหมายดูว่ามีอะไรซ่อนอยู่", type: TYPES.BODY },
      { text: "วาดสัญลักษณ์ใหม่เพื่อมองภาพรวม", type: TYPES.VISUAL },
      { text: "ปรึกษาเพื่อนในกลุ่มช่วยกันไขปริศนา", type: TYPES.SOCIAL },
      { text: "เชื่อในลางสังหรณ์แรกของตัวเอง", type: TYPES.SELF },
      { text: "สังเกตวัสดุว่าทำมาจากพืชหรือยางไม้ชนิดใด", type: TYPES.NATURE },
      { text: "เตือนเพื่อนว่าอาจเป็น สารจากอดีตที่ส่งมาเพื่อเตือนใจปัจจุบัน", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 17: รางวัลแห่งความสำเร็จ",
    image: "scenario-images/17.png",
    text: "เมื่อถอดรหัสได้สำเร็จ คุณพบว่ามันคือ 'รางวัลทางใจ' คุณคิดว่ารางวัลนั้นหมายถึงอะไรกันแน่?",
    answers: [
      { text: "สมุดโบราณที่จารึกเรื่องราวตำนานของภูเขาลูกนี้", type: TYPES.LANGUAGE },
      { text: "เข็มทิศชนิดพิเศษที่คำนวณทิศได้แม่นยำ", type: TYPES.LOGIC },
      { text: "ขลุ่ยไม้ไผ่ที่ทำจากต้นไม้บนยอดเขา", type: TYPES.MUSIC },
      { text: "รองเท้าเดินป่าคู่ใหม่ที่ทนทานต่อการบุกตะลุย", type: TYPES.BODY },
      { text: "กล้องส่องทางไกลที่เห็นภาพวิวได้ชัดเจน", type: TYPES.VISUAL },
      { text: "เกียรติบัตรแสดงความสามัคคีของหมู่", type: TYPES.SOCIAL },
      { text: "กระจกเงาบานเล็กที่สลักคำว่า 'ค้นพบตัวเอง'", type: TYPES.SELF },
      { text: "เมล็ดพันธุ์ไม้หายากให้นำกลับไปปลูก", type: TYPES.NATURE },
      { text: "ความงามที่ซ่อนอยู่ภายใน รอวันถูกค้นพบ", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 18: ขาลงจากยอดเขา",
    image: "scenario-images/18.png",
    text: "ได้เวลากลับลงมาแล้ว ทางลงค่อนข้างชันและลื่น คุณจะลงยังไงให้ปลอดภัย?",
    answers: [
      { text: "อ่านป้ายเตือนและตะโกนบอกเพื่อนตามจุดต่างๆ", type: TYPES.LANGUAGE },
      { text: "คำนวณองศาความชันหาจุดที่สมดุลที่สุด", type: TYPES.LOGIC },
      { text: "ฮัมเพลงเป็นจังหวะก้าวเท้า", type: TYPES.MUSIC },
      { text: "ทรงตัวโดยใช้ทักษะร่างกาย", type: TYPES.BODY },
      { text: "จินตนาการเส้นทางในหัวล่วงหน้า", type: TYPES.VISUAL },
      { text: "จับมือกันเดินลงเพื่อความปลอดภัย", type: TYPES.SOCIAL },
      { text: "เดินอย่างมีสติ รู้เนื้อรู้ตัวทุกย่างก้าว", type: TYPES.SELF },
      { text: "สังเกตพืชคลุมดิน ว่าตรงไหนเหยียบได้ไม่ลื่น", type: TYPES.NATURE },
      { text: "ให้กำลังใจทุกคนว่า ขาขึ้นคือความทะเยอทะยาน ขาลงคือความถ่อมตน", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 19: เก็บสัมภาระกลับบ้าน",
    image: "scenario-images/19.png",
    text: "กลับถึงค่ายหลัก ต้องรื้อถอนเต็นท์และเก็บของ คุณจะช่วยเหลือคนในหมู่อย่างไร?",
    answers: [
      { text: "ตรวจเช็คชื่ออุปกรณ์ให้ครบถ้วน", type: TYPES.LANGUAGE },
      { text: "จัดเรียงของใส่กระเป๋าโดยใช้พื้นให้คุ้มค่าที่สุด", type: TYPES.LOGIC },
      { text: "ผิวปากหรือร้องเพลงไปเพลินๆ ระหว่างเก็บของ", type: TYPES.MUSIC },
      { text: "รับหน้าที่แบกของหนักๆ และม้วนเต็นท์กลับคืน", type: TYPES.BODY },
      { text: "พับผ้าและจัดระเบียบกระเป๋าให้เรียบร้อยสวยงาม", type: TYPES.VISUAL },
      { text: "ช่วยเพื่อนคนอื่นๆ เก็บของก่อน แล้วค่อยเก็บของตัวเอง", type: TYPES.SOCIAL },
      { text: "แยกตัวมาจัดการของส่วนตัวให้เสร็จเงียบๆ", type: TYPES.SELF },
      { text: "ตรวจสอบความสะอาดพื้นที่ ไม่ให้เหลือขยะ", type: TYPES.NATURE },
      { text: "คิดซะว่าสิ่งที่เราแบกกลับไป ไม่ใช่แค่น้ำหนักของ แต่คือน้ำหนักของประสบการณ์", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 20: อำลาป่า",
    image: "scenario-images/20.png",
    text: "ก่อนขึ้นรถบัส ผู้กำกับให้ทุกคนกล่าวลาป่าแห่งนี้ คุณจะบอกล่าด้วยวิธีใด?",
    answers: [
      { text: "เขียนกลอนหรือคำคมสั้นๆ ทิ้งไว้ในสมุด", type: TYPES.LANGUAGE },
      { text: "นับสถิติว่าเดินไปกี่ก้าว และใช้เวลากี่ชั่วโมงในค่ายนี้", type: TYPES.LOGIC },
      { text: "ร้องเพลงสามัคคีชุมนุมด้วยความซาบซึ้ง", type: TYPES.MUSIC },
      { text: "วิ่งรอบค่ายรอบสุดท้ายเพื่อสั่งลา", type: TYPES.BODY },
      { text: "ยืนมองวิวรอบๆ เพื่อจดจำภาพสุดท้ายไว้ในใจ", type: TYPES.VISUAL },
      { text: "กอดคอเพื่อนๆ ขอบคุณที่ร่วมทุกข์ร่วมสุขกันมา", type: TYPES.SOCIAL },
      { text: "ยืนหลับตาขอบคุณตัวเองที่ผ่านอุปสรรคมาได้", type: TYPES.SELF },
      { text: "ขอบคุณธรรมชาติที่ดูแลเรา", type: TYPES.NATURE },
      { text: "ตระหนักว่า เราเป็นเพียงผู้มาเยือน ธรรมชาติคือเจ้าของที่แท้จริง", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 21: บนรถบัสขากลับ",
    image: "scenario-images/21.png",
    text: "ร่างกายเริ่มเหนื่อยล้า คุณเลือกทำกิจกรรมแก้เบื่ออะไรระหว่างนั่งรถกลับ?",
    answers: [
      { text: "หยิบหนังสือเล่มโปรดขึ้นมาอ่านฆ่าเวลา", type: TYPES.LANGUAGE },
      { text: "นั่งคิดตลกๆ คำนวณเวลาที่จะถึงโรงเรียน", type: TYPES.LOGIC },
      { text: "ใส่หูฟัง ฟังเพลงเพลย์ลิสต์โปรด", type: TYPES.MUSIC },
      { text: "หลับเพื่อชาร์จพลัง หรือบิดขี้เกียจยืดเส้นยืดสาย", type: TYPES.BODY },
      { text: "นั่งมองก้อนเมฆ จินตนาการเป็นรูปต่างๆ", type: TYPES.VISUAL },
      { text: "เม้าท์มอยเล่าเรื่องตลกให้เพื่อนที่นั่งข้างๆ", type: TYPES.SOCIAL },
      { text: "นั่งทบทวนสิ่งที่ได้เรียนรู้เงียบๆ คนเดียว", type: TYPES.SELF },
      { text: "มองหานกหรือสัตว์เลี้ยงตามข้างทางผ่านหน้าต่าง", type: TYPES.NATURE },
      { text: "พูดกับตนเองว่า จุดจบของการเดินทางหนึ่ง คือจุดเริ่มต้นของอีกการเดินทางหนึ่ง", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 22: รถติดหนักมาก",
    image: "scenario-images/22.jpg",
    text: "ใกล้ถึงโรงเรียนแต่รถติดหนักมาก ทุกคนเริ่มหงุดหงิด ทำอย่างไรดี?",
    answers: [
      { text: "เล่าเรื่องผีหรือนิทานให้เพื่อนฟังเพื่อดึงความสนใจ", type: TYPES.LANGUAGE },
      { text: "ดูเส้นทางใน Google Map ว่ามีทางลัดไหม", type: TYPES.LOGIC },
      { text: "เคาะนิ้วเป็นจังหวะ ชวนเพื่อนร้องเพลงแก้เครียด", type: TYPES.MUSIC },
      { text: "อยู่นิ่งไม่ไหว ลุกขึ้นมายืดเหยียดขา", type: TYPES.BODY },
      { text: "วาดรูปรถติดลงสมุดวาดเขียน", type: TYPES.VISUAL },
      { text: "ปลอบเพื่อนที่กำลังหงุดหงิดและชวนคุยเรื่องอื่น", type: TYPES.SOCIAL },
      { text: "ฝึกควบคุมอารมณ์ตัวเองให้ใจเย็น ไม่หงุดหงิดตาม", type: TYPES.SELF },
      { text: "สังเกตต้นไม้เกาะกลางถนน", type: TYPES.NATURE },
      { text: "พูดคำคม เวลามีค่าก็จริง แต่บางครั้งการรอคอยก็สอนอะไรเราบางอย่าง", type: TYPES.EXIST }
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
      { text: "ดูแลการจัดวางกระเป๋ากองรวมกันให้เป็นระเบียบ", type: TYPES.VISUAL },
      { text: "ดูแลเพื่อนที่เมารถ หรือช่วยถือของให้เพื่อนตัวเล็ก", type: TYPES.SOCIAL },
      { text: "ตรวจสอบสัมภาระของตัวเองให้ครบก่อนเดินออกไป", type: TYPES.SELF },
      { text: "ระวังไม่ให้กระเป๋าทับมดหรือแมลงที่พื้น", type: TYPES.NATURE },
      { text: "มองภาพความวุ่นวายแล้วคิดว่า ทุกคนต่างมีหน้าที่ของตัวเอง", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 24: กลับถึงบ้าน",
    image: "scenario-images/24.png",
    text: "คุณพ่อคุณแม่ถามว่า 'ไปค่ายเป็นยังไงบ้างลูก?' คุณจะตอบหรือทำอะไรเป็นอย่างแรก?",
    answers: [
      { text: "เล่าเรื่องราวเป็นฉากๆ ตั้งแต่ต้นจนจบอย่างละเอียด", type: TYPES.LANGUAGE },
      { text: "บอกแม่ว่า 'คุ้มค่ามากแม่ ไม่เสียค่าใช้จ่ายเลย'", type: TYPES.LOGIC },
      { text: "เพลงรอบกองไฟสนุกมาก เดี๋ยวร้องให้ฟัง", type: TYPES.MUSIC },
      { text: "ทำท่าทางตอนปีนเขา หรือตอนหนีผึ้งให้แม่ดู", type: TYPES.BODY },
      { text: "เอารูปที่ถ่ายสวยๆ ในมือถือให้แม่ดูทันที", type: TYPES.VISUAL },
      { text: "เล่าเรื่องเพื่อนใหม่และครูที่ค่ายให้แม่ฟัง", type: TYPES.SOCIAL },
      { text: "สนุกครับ/ค่ะ... ขอตัวไปอาบน้ำพักผ่อนก่อนนะ", type: TYPES.SELF },
      { text: "เอาหินสวยๆ หรือใบไม้ทับแห้งที่เก็บมาอวดแม่", type: TYPES.NATURE },
      { text: "ยิ้มให้แล้วคิดในใจว่า บ้านไม่ใช่แค่สถานที่ แต่คือความรู้สึกอบอุ่นใจ", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 25: บันทึกความทรงจำ",
    image: "scenario-images/25.png",
    text: "ครูให้การบ้านชิ้นสุดท้าย คือ 'สรุปสิ่งที่ประทับใจที่สุด' คุณจะสรุปออกมาในรูปแบบไหน",
    answers: [
      { text: "เรียงความเรื่อง 'บันทึกการเดินทางของข้าพเจ้า'", type: TYPES.LANGUAGE },
      { text: "ไทม์ไลน์ สรุปเหตุการณ์และความสนุกในแต่ละวัน", type: TYPES.LOGIC },
      { text: "แต่งเพลง หรือคลิปวิดีโอประกอบเพลง", type: TYPES.MUSIC },
      { text: "การแสดงบทบาทสมมติหน้าชั้นเรียน", type: TYPES.BODY },
      { text: "จัดบอร์ดนิทรรศการรูปภาพ หรือวาดภาพระบายสี", type: TYPES.VISUAL },
      { text: "สัมภาษณ์เพื่อน ทำเป็นคลิปรายการทอล์กโชว์", type: TYPES.SOCIAL },
      { text: "เขียนไดอารี่สะท้อนความรู้สึกภายในใจ", type: TYPES.SELF },
      { text: "รายงานเรื่องระบบนิเวศในค่ายพักแรม", type: TYPES.NATURE },
      { text: "คิดถึงช่วงเวลานั้นและปล่อยให้มันเป็น 'อดีตที่งดงาม' ไม่ยึดติด", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 26: บทเรียนชีวิต",
    image: "scenario-images/26.png",
    text: "สิ่งที่เปลี่ยนไปในตัวคุณ หลังจากจบค่ายนี้ คุณคิดว่าสิ่งนั้นคืออะไร?",
    answers: [
      { text: "มีคลังคำศัพท์ใหม่ๆ และกล้าแสดงออกมากขึ้น", type: TYPES.LANGUAGE },
      { text: "คิดเป็นเหตุเป็นผล และแก้ปัญหาเฉพาะหน้าได้ดีขึ้น", type: TYPES.LOGIC },
      { text: "ฟังเสียงธรรมชาติและจังหวะชีวิตได้ละเอียดขึ้น", type: TYPES.MUSIC },
      { text: "ร่างกายแข็งแรงขึ้น และรู้ขีดจำกัดของตัวเอง", type: TYPES.BODY },
      { text: "เป็นคนช่างสังเกต มองเห็นความสวยงามในมุมมองใหม่ๆ", type: TYPES.VISUAL },
      { text: "เข้าใจความแตกต่างของเพื่อน และทำงานเป็นทีมเป็น", type: TYPES.SOCIAL },
      { text: "รู้จักตัวเองมากขึ้น ว่าเราชอบหรือไม่ชอบอะไร", type: TYPES.SELF },
      { text: "รักและหวงแหนธรรมชาติ อยากช่วยดูแลสิ่งแวดล้อม", type: TYPES.NATURE },
      { text: "เราเป็นเพียงฝุ่นผงเล็กๆ ในจักรวาลอันกว้างใหญ่", type: TYPES.EXIST }
    ]
  },
  {
    title: "สถานการณ์ที่ 27: ค่ายครั้งหน้า",
    image: "scenario-images/27.png",
    text: "ถ้าได้เป็นคนเลือกสถานที่ค่ายครั้งหน้า คุณจะเสนอไปที่ไหน?",
    answers: [
      { text: "ห้องสมุดโลก หรือค่ายนักเขียน", type: TYPES.LANGUAGE },
      { text: "ค่ายวิทยาศาสตร์และดาราศาสตร์", type: TYPES.LOGIC },
      { text: "ค่ายดนตรีและศิลปะการแสดง", type: TYPES.MUSIC },
      { text: "ค่ายกีฬาทางน้ำ หรือเข้าค่ายทหารฝึกความอดทน", type: TYPES.BODY },
      { text: "ค่ายศิลปะ หรือพิพิธภัณฑ์ศิลป์", type: TYPES.VISUAL },
      { text: "ค่ายอาสาพัฒนาชุมชน (ได้เจอคนเยอะๆ)", type: TYPES.SOCIAL },
      { text: "ค่ายปฏิบัติธรรม หรือค่ายฝึกจิต", type: TYPES.SELF },
      { text: "อุทยานแห่งชาติทางทะเล หรือสวนพฤกษศาสตร์", type: TYPES.NATURE },
      { text: "ค่ายปรัชญาชีวิต และความหมายของการมีชีวิตอยู่", type: TYPES.EXIST }
    ]
  }
];

let currentQuestion = 0;
let scores = {};

let showingSectionIntro = false;

let currentIntro = 0;
let playerName,playerAcademicYear,playerId = "";

const questionTitleEl = document.getElementById("question-title");
const questionBodyEl = document.getElementById("question-body");
const questionImgEl = document.getElementById("question-image");
const answersEl = document.getElementById("answers");
const resultBox = document.getElementById("result-box");
const resultEl = document.getElementById("result");
const questionBox = document.getElementById("question-box");
const introPages = document.querySelectorAll(".intro-page");
const music = document.getElementById("bg-music");

music.volume = 0.2; 

function checkAndShowSectionIntro() {
  if (sectionBreaks[currentQuestion] && !showingSectionIntro) {
    showingSectionIntro = true;
    showSectionIntro(sectionBreaks[currentQuestion]);
    return true;
  }
  return false;
}

function showSectionIntro(sectionNumber) {
  questionBox.classList.add("hidden");
  document.querySelectorAll(".section-page").forEach(p => p.classList.remove("active"));

  const sectionPage = document.getElementById(`section-${sectionNumber}`);
  sectionPage.classList.add("active");
}

function continueFromSection() {
  document.querySelectorAll(".section-page").forEach(p => p.classList.remove("active"));
  questionBox.classList.remove("hidden");
  
  showingSectionIntro = false;
  showQuestion();
}

function showIntroPage(index) {
  if(index==1){
    document.getElementById("bg-music").play();
  }
  introPages.forEach(page => page.classList.remove("active"));
  introPages[index].classList.add("active");
}

function startQuiz() {
  const playerNameInput = document.getElementById("playerName").value.trim();
  const playerAcademicYearInput = document.getElementById("playerAcademicYear").value.trim();
  const playerIdInput = document.getElementById("playerId").value.trim();

  if (playerNameInput === "" || playerAcademicYearInput==="" || playerIdInput==="") {
    alert("ช่วยกรอกข้อมูลให้ครบก่อนเริ่มผจญภัยด้วยครับ");
    return;
  }

  // Temp variables, can be used later
  playerName = playerNameInput;
  playerAcademicYear = playerAcademicYearInput;
  playerId = playerIdInput;

  document.querySelector(".intro-container").classList.add("hidden");
  questionBox.classList.remove("hidden");

  if (!checkAndShowSectionIntro()) { //function return true if showing section intro
    showQuestion();
  }
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
    if (!checkAndShowSectionIntro()) { //function return true if showing section intro
      showQuestion();
    }
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
    <img src=${description.image} style="width: 100%; max-width: 400px; margin: auto;"></img>
    <h3>${description.title}</h3>
    <p>${description.text}</p>
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
  //introBox.classList.remove("hidden");
  questionBox.classList.remove("hidden");
  if (!checkAndShowSectionIntro()) { //function return true if showing section intro
    showQuestion();
  }
}

function preloadImages() {
  
    questions.forEach((q) => {
        if (q.image) {
            const img = new Image();
            img.src = q.image;
        }
    });
}

preloadImages();

showIntroPage(0);
document.getElementById("next0").onclick = () => showIntroPage(1);
document.getElementById("next1").onclick = () => showIntroPage(2);
document.getElementById("next2").onclick = () => showIntroPage(3);
//showQuestion();

