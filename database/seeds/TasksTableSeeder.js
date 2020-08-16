import { getRepository } from 'typeorm/browser'
import Task from '@models/Task'

export default class TasksTableSeeder {
  static async run() {
    return getRepository(Task).save([
      {
        code: 'REACTION_TIME',
        title: 'Reaction Time',
        locked: false
      },

      {
        code: 'DOT_COUNTING',
        title: 'Dot Counting',
      },

      {
        code: 'DOT_COMPARISON',
        title: 'Dot Comparison',
      },

      {
        code: 'SYMBOLIC_NUMBER_COMPARISON',
        title: 'Symbolic Number Comparison',
      },

      {
        code: 'VERBAL_ARABIC_MATCHING',
        title: 'Verbal Arabic Matching',
      },

      {
        code: 'MATCHING_OBJECTS',
        title: 'Matching Objects',
      },

      {
        code: 'QUANTITY_ESTIMATION',
        title: 'Quantity Estimation',
      },

      {
        code: 'NUMBER_LINE_ESTIMATION',
        title: 'Number Line Estimation',
      },

      {
        code: 'ARITHMETIC_CALCULATION',
        title: 'Arithmetic Calculation',
      },

      {
        code: 'VERBAL_SHORT_TERM_WORKING_MEMORY',
        title: 'Verbal Short-Term Working Memory',
      },

      // {
      //   code: 'SPATIAL_SHORT_TERM_WORKING_MEMORY',
      //   title: 'Spatial Short-Term Working Memory',
      // },
    ])
  }
}
