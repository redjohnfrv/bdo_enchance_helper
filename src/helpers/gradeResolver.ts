import {gradeI, gradeII, gradeIII, gradeIV, gradeV} from './gradesObj'

export const gradeResolver = (grade: string) => {
  switch (grade) {
    case 'I': return gradeI
    case 'II': return gradeII
    case 'III': return gradeIII
    case 'IV': return gradeIV
    case 'V': return gradeV
    default: return null
  }
}
