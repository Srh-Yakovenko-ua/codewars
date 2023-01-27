// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

function points(games) {
    let totalPoints = 0;
    for (let i = 0; i < games.length; i++) {
       if(games[i][0] > games[i][2] ){
           totalPoints += 3
       } else if (games[i][0] === games[i][2]){
           totalPoints += 1
       }
    }
    return totalPoints
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) // 30
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])) // 0