import { schemas } from '../../schemas/index.js'
import { prisma } from '../../config/db.js'
import { Router } from 'express'
const router = Router()

router.post('/', async (req, res) => {
    const data = req.body
    try {
        const post = await prisma.post.create({
            data: data
        })
        res.status(201).json(post)
    } catch (error) {
        console.error('Error creating user:', error)
        res.status(500).json({ error: 'Failed to create post!' })
    }
})

router.get('/', async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            select: schemas.posts.postWithUserOut
        })
        res.status(200).json(posts)
    } catch (error) {
        console.error('Error fetching users:', error)
        res.status(500).json({ error: 'Failed to fetch posts!' })
    }
})

export default router
