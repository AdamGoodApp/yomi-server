import { getManganeloChapters, getPages } from '../../services/scraper/index'

export const index = async (req, res, next) => {
  return res.status(200).json({ result: 'index' })
}

export const chapters = async (req, res, next) => {
  const { manga } = req.query
  const searchResult = await getManganeloChapters(manga)

  return res.status(200).json({ chapters: searchResult })
}

export const pages = async (req, res, next) => {
  const { chapter } = req.query
  const pages = await getPages(chapter)

  return res.status(200).json({ result: pages })
}
