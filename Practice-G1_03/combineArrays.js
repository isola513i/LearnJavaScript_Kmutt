function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(combineArrays([1, 2], [3, 4]));        
console.log(combineArrays(['a', 'b'], ['c', 'd'])); 
console.log(combineArrays([], [1, 2, 3]));          

// เมธอด concat ใช้ในการรวมข้อมูลทั้งในรูปแบบอาร์เรย์และสตริง และจะส่งผลลัพธ์เป็นข้อมูลที่ถูกรวมในรูปแบบใหม่ โดยไม่เปลี่ยนแปลงค่าของข้อมูลต้นฉบับ