export type GradeObjType = {
  min: number
  max: number
  cap: number | null
  capChance: number | null
  prevCapStep: number
  afterCapStep: number
}

export const gradeI = {
  min: 25,
  max: 90,
  cap: 18,
  capChance: 70,
  prevCapStep: 2.5,
  afterCapStep: .5,
}
export const gradeII = {
  min: 10,
  max: 90,
  cap: 40,
  capChance: 50,
  prevCapStep: 1,
  afterCapStep: .2,
}
export const gradeIII = {
  min: 7.5,
  max: 90,
  cap: 44,
  capChance: 40.5,
  prevCapStep: .75,
  afterCapStep: .15,
}
export const gradeIV = {
  min: 2.5,
  max: 90,
  cap: 110,
  capChance: 30,
  prevCapStep: .25,
  afterCapStep: .05,
}
export const gradeV = {
  min: .5,
  max: 90,
  cap: null,
  capChance: null,
  prevCapStep: .05,
  afterCapStep: .05,
}
