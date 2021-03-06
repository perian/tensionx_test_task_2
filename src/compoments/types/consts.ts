export type Test = {
  absent: boolean,
  concept: string,
  date: string,
  expSpeed: string,
  label: string,
  score: number,
  speed: string,
  total: number,
};

export type Tests = Test[];

export type Score = {
  class: string,
  id: number,
  name: string,
  parents: string[],
  score: string,
  speed: string,
  tests: Tests,
}

type Scores = Score[];

export default Scores;

