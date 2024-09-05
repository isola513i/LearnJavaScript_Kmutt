function isPrime(num) {
  // จำนวนที่น้อยกว่าหรือเท่ากับ 1 ไม่ใช่จำนวนเฉพาะ
  if (num <= 1) {
    return false;
  }

  // วนลูปตรวจสอบตัวหารตั้งแต่ 2 ถึงรากที่สองของ num
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  // ถ้าไม่มีตัวหารใดๆ หารลงตัว แสดงว่าเป็นจำนวนเฉพาะ
  return true;
}

// ตัวอย่างการใช้งาน
console.log(isPrime(2)); // Output: true
console.log(isPrime(4)); // Output: false
console.log(isPrime(17)); // Output: true
