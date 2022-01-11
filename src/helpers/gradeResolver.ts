import {initialGradeObj} from '../dto/initialGradeObj'
import {jewGrades, stuffGrades} from '../dto/gradesObj'
import {GradesObjType} from '../dto/types'

const resolver = (obj: GradesObjType, grade: string) => {
  switch (grade) {
    case 'I': return obj.I
    case 'II': return obj.II
    case 'III': return obj.III
    case 'IV': return obj.IV
    case 'V': return obj.V
    default: return initialGradeObj
  }
}

export const jewGradeResolver = (grade: string) => {
  return resolver(jewGrades, grade)
}

export const stuffGradeResolver = (grade: string) => {
  return resolver(stuffGrades, grade)
}
