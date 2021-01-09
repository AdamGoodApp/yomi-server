// const api = require('mangadex-full-api')

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  res.status(200).json([{ test: 'comon' }])

export const show = ({ params }, res, next) =>
  res.status(200).json({})

export const top24 = ({ querymen: { query, select, cursor } }, res, next) =>
  res.status(200).json([{ test: 'comon' }])
