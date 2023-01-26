import prisma from '/lib/prisma';
export default async function handle(req, res) {
    const result = await prisma.review.create({
        data: req.body,
    });
    res.json(result);
}