const api = require('mangadex-full-api')

// export const index = ({ querymen: { query, select, cursor } }, res, next) =>
//   res.status(200).json([{ test: 'comon' }])

export const index = ({ query: { list } }, res, next) => {
  switch (list) {
    case 'top24':
      get24(res)
      break
  }
}

export const show = ({ params }, res, next) =>
  res.status(200).json({})

export const top24 = ({ querymen: { query, select, cursor } }, res, next) =>
  res.status(200).json([{ test: 'comon' }])

const get24 = async (res) => {
  const home = new api.Home()
  const { top24h } = await home.fill()
  const manga = top24h.map((x) => { return { id: x.id, title: x.title, cover: `https://mangadex.org/images/manga/${x.id}.jpg` } })

  return res.status(200).json({ top24h: manga })
}
