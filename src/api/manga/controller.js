import { getMangakakalotChapters, getPages } from '../../services/scraper/index'

export const index = async (req, res, next) => {
  const { manga } = req.query
  const pages = await getPages(manga)

  return res.status(200).json({ result: pages })
}

export const show = async ({ params }, res, next) => {
  const { id } = params
  const searchResult = await getMangakakalotChapters(id)

  return res.status(200).json({ chapters: searchResult })
}
