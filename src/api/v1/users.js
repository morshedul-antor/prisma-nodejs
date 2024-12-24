import { prisma } from '../../config/db.js'
import { Router } from 'express'
const router = Router()

router.post('/', async (req, res) => {
    const data = req.body
    try {
        const user = await prisma.user.create({
            data: data
        })
        res.status(201).json(user)
    } catch (error) {
        console.error('Error creating user:', error)
        res.status(500).json({ error: 'Failed to create user!' })
    }
})

router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                posts: true
            }
        })
        res.status(200).json(users)
    } catch (error) {
        console.error('Error fetching users:', error)
        res.status(500).json({ error: 'Failed to fetch users!' })
    }
})

export default router
