function bonusTime(salary=10000, bonus=true) {
  if (bonus) {
    return '£'+salary * 10 ;
  } else {
    return '£'+salary;
  }
}

console.log(bonusTime());