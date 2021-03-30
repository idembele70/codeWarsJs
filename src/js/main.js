class Point {
  static points(games=['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']){
      let point = 0;
         games.forEach(matchPoint => {
            return matchPoint.split(/:/)[0] > matchPoint.split(/:/)[1]
            ? point +=3 : matchPoint.split(/:/)[0] == matchPoint.split(/:/)[1]
            ? point += 1 : point += 0;
        })
        return point;
    }
}

console.log(Point.points());