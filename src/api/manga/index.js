import { Router } from 'express'
import { middleware as query } from 'querymen'
import { master } from '../../services/passport'
import { index, show } from './controller'

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

export default router
