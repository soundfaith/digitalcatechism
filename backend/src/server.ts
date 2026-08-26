import Fastify from 'fastify'
import cors from '@fastify/cors'
import { z } from 'zod'
import { course } from './content.js'

const app = Fastify({ logger: true })
const port = Number(process.env.PORT ?? 4000)

await app.register(cors, { origin: true })

app.get('/health', async () => ({ status: 'ok' }))

app.get('/api/courses/ccc-in-7-days', async () => ({
  ...course,
  topics: course.topics,
}))

app.get('/api/courses/:courseId/topics/:day', async (request, reply) => {
  const params = z.object({ courseId: z.string(), day: z.coerce.number().int().min(1).max(7) }).safeParse(request.params)
  if (!params.success || params.data.courseId !== course.id) return reply.code(404).send({ error: 'Topic not found' })
  return reply.code(501).send({ error: 'Topic content endpoint is reserved for the content service.' })
})

app.listen({ port, host: '0.0.0.0' }).catch((error) => {
  app.log.error(error)
  process.exit(1)
})
