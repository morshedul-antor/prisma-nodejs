import { v1 } from '../../api/index.js'
import { Router } from 'express'
const router = Router()

router.use('/roles', v1.roles)
router.use('/users', v1.users)
router.use('/posts', v1.posts)

export default router
