import express from 'express'
import { enrollStudentController, getAllCoursesByBranchController} from '../controllers/courseControllers.js'

const router=express.Router()

router.route('/').get(getAllCoursesByBranchController)
router.route('/:id').post(enrollStudentController)

export const studentCourseRouter = router