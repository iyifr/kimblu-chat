import * as express from 'express'
import cors from 'cors'
import { prisma } from './prisma.connect.mjs'


async function main() {
    // ... you will write your Prisma Client queries here
    await prisma.user.create({
        data: {
            name: 'Rich',
            email: 'hello@prisma.com',
            posts: {
                create: {
                    title: 'My first post',
                    body: 'Lots of really interesting stuff',
                    slug: 'my-first-post',
                },
            },
        },
    })
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })