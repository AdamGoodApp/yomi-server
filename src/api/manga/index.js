import { Router } from 'express'
import { middleware as query } from 'querymen'
import { master } from '../../services/passport'
import { index, show, top24 } from './controller'

const router = new Router()

/**
 * @api {get} /manga Retrieve mangas
 * @apiName RetrieveMangas
 * @apiGroup Manga
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} mangas List of mangas.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /manga/:id Retrieve manga
 * @apiName RetrieveManga
 * @apiGroup Manga
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} manga Manga's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Manga not found.
 * @apiError 401 master access only.
 */
router.get('/:id',
  master(),
  show)

/**
 * @api {get} /manga/top24 Retrieve lastest top 24h mangas
 * @apiName RetrieveTop24Mangas
 * @apiGroup Manga
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object[]} mangas List of top24 mangas.
 */
router.get('/top24',
  master(),
  top24)

export default router
