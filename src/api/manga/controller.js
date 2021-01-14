const { Mangadex } = require('mangadex-api')

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  res.status(200).json([{ test: 'comon' }])

export const show = async ({ params }, res, next) => {
  const { id } = params
  const client = new Mangadex()

  await client.agent.login('uberpoopoo', 'rarro5-zocmuZ-zizkiw', false)

  const result = await client.search({ title: id, with_hentai: true })

  return res.status(200).json({ manga: result })
}
