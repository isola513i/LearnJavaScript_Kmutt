function getStringLengths(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.map(function (str) {
    return str.length;
  });
}
// ทดสอบฟังก์ชันด้วยการใส่อาร์เรย์ที่มีสตริงหลายตัว
console.log(getStringLengths(["apple", "banana", "kiwi", "orange"])); // Output: [5, 6, 4, 6]
console.log(getStringLengths(["hello", "world"])); // Output: [5, 5]
console.log(getStringLengths(["ChatGPT", "AI"])); // Output: [7, 2]

// เมธอด map เป็นเครื่องมือที่มีประสิทธิภาพสำหรับการแปลงค่าของอาร์เรย์ในลักษณะที่ไม่เปลี่ยนแปลงอาร์เรย์ต้นฉบับ และสามารถใช้ในการทำงานที่ต้องการปรับแต่งหรือคำนวณค่าใหม่จากข้อมูลในอาร์เรย์ได้อย่างสะดวกครับ
