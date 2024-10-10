function getPassingName(std) {
  return std
    .filter((student) => student.score >= 70)
    .map((student) => student.name.toUpperCase());
}
