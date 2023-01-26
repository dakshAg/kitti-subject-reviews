import prisma from '/lib/prisma';

export default async function handler(req, res) {
  const {
    query: { q },
    method,
  } = req;
  const result = await prisma.subject.findMany({
    skip: 0,
  take: 10,
    where: {
      code: {
        contains: q,
      },
    },
  })
  res.status(200).json(result)
}