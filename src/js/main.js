function uefaeuro2016(teams = ["Germany", "Ukraine"], scores = [2, 0]) {
  const homeTeam = teams[0],
    awayTeam = teams[1];
  const homeScore = scores[0],
    awayScore = scores[1];
  let result = "";
  if (homeScore === awayScore) {
    result = "teams played draw.";
  } else {
    if (homeScore > awayScore) result += homeTeam;
    else result += awayTeam;
    result += " won!";
  }
  return `At match ${homeTeam} - ${awayTeam}, ` + result;
}
console.log(uefaeuro2016());

