import { users } from './users.js'

// posts schema
const postOut = {
    id: true,
    title: true
}

const postWithUserOut = {
    ...postOut,
    author: {
        select: users.userOut
    }
}

export const posts = {
    postOut,
    postWithUserOut
}
