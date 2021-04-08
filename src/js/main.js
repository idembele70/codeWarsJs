function bonusTime(salary=10000, bonus=true) {
  return (bonus ? '£'+salary * 10 : '£'+salary);
}

console.log(bonusTime());