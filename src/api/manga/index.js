import { Router } from 'express'
import { middleware as query } from 'querymen'
import { master } from '../../services/passport'
import { index, chapters, pages } from './controller'

const router = new Router()

/**
 * @api {get} /
 * @apiName Nothing
 * @apiGroup Manga
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {} nothing.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  master(),
  index)

/**
 * @api {get} /manga/chapters Retrieve chapters
 * @apiName RetrieveChapters
 * @apiGroup Manga
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Object} manga Manga's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Manga not found.
 * @apiError 401 master access only.
 */
router.get('/chapters',
  master(),
  chapters)

/**
 * @api {get} /pages Retrieve manga pages
 * @apiName RetrieveMangaPages
 * @apiGroup Manga
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} pages List of pages.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/pages',
  master(),
  pages)

export default router
