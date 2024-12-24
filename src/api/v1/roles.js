import { prisma } from '../../config/db.js'
import { Router } from 'express'
const router = Router()

router.post('/', async (req, res) => {
    const data = req.body
    try {
        const role = await prisma.role.create({
            data: data
        })
        res.status(201).json(role)
    } catch (error) {
        console.error('Error creating role:', error)
        res.status(500).json({ error: 'Failed to create role!' })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await prisma.role.findMany()
        res.status(200).json(data)
    } catch (error) {
        console.error('Error fetching roles:', error)
        res.status(500).json({ error: 'Failed to fetch roles!' })
    }
})

export default router
