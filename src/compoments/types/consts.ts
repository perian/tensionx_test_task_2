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

export type Score = {
  class: string,
  id: number,
  name: string,
  parents: string[],
  score: string,
  speed: string,
  tests: Test,
}

type Scores = Score[];

export default Scores;

export interface queryParams {
  data: Scores,
  page: number,
  size: number,
  search: string,
  sortBy: 'name' | 'class' | 'score' | 'speed',
  sortDir: -1 | 0 | 1,
}
