const Xray = require('x-ray')
const xray = Xray()

const search = async (query) => {
  const cleaned = query.replace(/ /g, '_')
  return await xray(`https://mangakakalot.com/search/story/${cleaned}`, '.story_name a@href')
}

// Takes a searched title href and returns arrays of available chapters
const getChapters = async (titleUrl) => {
  const { titles, hrefs, views, uploaded } = await xray(titleUrl, '.row-content-chapter', {
    titles: ['a'],
    hrefs: ['a @href'],
    views: ['.chapter-view'],
    uploaded: ['span:nth-child(3)']
  })

  return titles.map((title, index) => {
    return {
      title: title,
      href: hrefs[index],
      views: views[index],
      uploaded: uploaded[index]
    }
  })
}

export const getPages = async (manga) => {
  const pages = await xray(manga, '.container-chapter-reader', ['img @src'])

  return pages
}

export const getManganeloChapters = async (title) => {
  const manga = await search(title)
  const chapters = await getChapters(manga)

  return chapters
}