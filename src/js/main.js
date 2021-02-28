class CenturyFromYear {
    century(year=1705) {
        // Finish this :)
        let sum = 0;
        for (let i = 0; i < year; i+=100) {
            sum++
            
        }
        return sum;
      }
}
MyFirstCentury = new CenturyFromYear;
console.log(MyFirstCentury.century());