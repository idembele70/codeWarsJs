class Point {
    static points(games = ['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']) {
        return games.map(element => {
            const scoreTabs = element.split(/\D/);
            let x = scoreTabs[0], y = scoreTabs[1];
            if (x > y) {
                return element = 3;
            } else if (x == y) {
                return element = 1;
            } else {
               return element = 0;
            }

        }).reduce((acc, val) => acc += val);
    }
}

console.log(Point.points());