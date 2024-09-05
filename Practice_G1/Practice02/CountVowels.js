function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }

  return count;
}

// ตัวอย่างการใช้งาน
console.log(countVowels("hello")); // Output: 2
console.log(countVowels("world")); // Output: 1
console.log(countVowels("")); // Output: 0
console.log(countVowels("a"));

// // vowels: สตริงที่เก็บสระทั้งหมด (ทั้งตัวพิมพ์ใหญ่และเล็ก)
// count: ตัวแปรเก็บจำนวนสระที่นับได้
// for loop: วนลูปผ่านแต่ละตัวอักษรใน str
// indexOf: ตรวจสอบว่าตัวอักษรปัจจุบันอยู่ใน vowels หรือไม่ ถ้าอยู่ในนั้นจะได้ค่ามากกว่า -1
// count++: ถ้าเป็นสระ เพิ่มค่า count ขึ้น 1
// return count: คืนค่าจำนวนสระที่นับได้
