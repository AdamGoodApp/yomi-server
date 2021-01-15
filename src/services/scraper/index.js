const Xray = require('x-ray')
const xray = Xray()

const search = async (query) => {
  const cleaned = query.replace(/ /g, '_')
  return await xray(`https://mangakakalot.com/search/story/${cleaned}`, '.story_name a@href')
}

// Takes a searched title href and returns arrays of available chapters
const getChapters = async (titleUrl) => {
  const { titles, hrefs } = await xray(titleUrl, '.row-content-chapter', { titles: ['a'], hrefs: ['a @href'] })

  return titles.map((title, index) => {
    return { title: title, href: hrefs[index] }
  })
}

export const getMangakakalotChapters = async (title) => {
  const manga = await search(title)
  const chapters = await getChapters(manga)

  return chapters
}
