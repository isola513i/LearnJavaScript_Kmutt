function isValidPassword(password) {
  if (
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[0-9]/.test(password)
  ) {
    return false;
  }
  return true;
}
console.log(isValidPassword("Password123")); // true
console.log(isValidPassword("pass123")); // false
console.log(isValidPassword("PASSWORD123")); // false
console.log(isValidPassword("Pass12")); // false
