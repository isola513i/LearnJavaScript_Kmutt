// function sumArrays(numbers) {
//   return numbers.reduce((sum, number) => sum + number, 0);
// }
// const numbers = [5, 10, 15, 20];
// console.log(sumArrays(numbers));

// function findMax(numbers) {
//   //   return Math.max(...numbers);
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > numbers[i + 1]) {
//       return numbers;
//     }
//   }
// }
// const numbers = [2, 45, 7, 89, 21];
// console.log(findMax(numbers)); // คาดหวังผลลัพธ์: 89

// function countEvenOdd(numbers) {
//   let even = 0;
//   let odd = 0;
//   numbers.filter((number) => {
//     if (number % 2 === 0) {
//       even++;
//     } else {
//       odd++;
//     }
//   });
//   return { even: even, odd: odd };
// }

// // ทดสอบฟังก์ชัน
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(countEvenOdd(numbers));
// // คาดหวังผลลัพธ์: { even: 5, odd: 5

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// // ทดสอบฟังก์ชัน
// const text = "JavaScript";
// console.log(reverseString(text));
// // คาดหวังผลลัพธ์: "tpircSavaJ"

function isPalindrome(str) {
  // แปลงสตริงให้เป็นตัวอักษรเล็กทั้งหมด และกรองเฉพาะตัวอักษรหรือตัวเลข
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/gi, ""); // ปรับ Regular Expression

  // กลับด้านสตริงแล้วเปรียบเทียบกับสตริงต้นฉบับ
  const reversedStr = cleanStr.split("").reverse().join("");

  // ตรวจสอบว่าข้อความที่กลับด้านแล้วตรงกับต้นฉบับหรือไม่
  return cleanStr === reversedStr;
}

// ทดสอบฟังก์ชัน
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
