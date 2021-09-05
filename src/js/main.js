console.log(
  function Ship(draft=20,crew=0) {
    this.draft = draft
    this.crew = crew
    this.isWorthIt = ()=> draft > 20 && crew === 0
    return this.isWorthIt()
  }()
);
// [Ship] making