import { getMangakakalotChapters } from '../../services/scraper/index'

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  res.status(200).json([{ test: 'comon' }])

export const show = async ({ params }, res, next) => {
  const { id } = params
  const searchResult = await getMangakakalotChapters(id)

  return res.status(200).json({ chapters: searchResult })
}
