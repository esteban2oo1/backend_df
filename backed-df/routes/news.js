const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

/**
 * @swagger
 * components:
 *   schemas:
 *     News:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - author
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the news
 *         title:
 *           type: string
 *           description: The title of the news
 *         content:
 *           type: string
 *           description: The content of the news
 *         image:
 *           type: string
 *           description: URL of the news image
 *         author:
 *           type: string
 *           description: The author of the news
 *         isHighlighted:
 *           type: boolean
 *           description: Whether the news is highlighted
 *           default: false
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Tags associated with the news
 *         publishDate:
 *           type: string
 *           format: date-time
 *           description: The date the news was published
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the news was last updated
 *       example:
 *         _id: 60d21b4667d0d8992e610c85
 *         title: New Campus Building
 *         content: The university is opening a new campus building next month.
 *         image: https://example.com/images/new-building.jpg
 *         author: John Doe
 *         isHighlighted: true
 *         tags: [campus, building, new]
 *         publishDate: 2023-01-15T19:00:00.000Z
 *         updatedAt: 2023-01-15T19:00:00.000Z
 */

/**
 * @swagger
 * tags:
 *   name: News
 *   description: News management API
 */

/**
 * @swagger
 * /api/news:
 *   get:
 *     summary: Returns a list of all news
 *     tags: [News]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: The number of items per page
 *       - in: query
 *         name: highlighted
 *         schema:
 *           type: string
 *           enum: [true, false]
 *         description: Filter by highlighted news
 *     responses:
 *       200:
 *         description: The list of news
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 news:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/News'
 *                 totalPages:
 *                   type: integer
 *                 currentPage:
 *                   type: integer
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/news/{id}:
 *   get:
 *     summary: Get a news item by id
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The news id
 *     responses:
 *       200:
 *         description: The news item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       404:
 *         description: The news was not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/news:
 *   post:
 *     summary: Create a new news item
 *     tags: [News]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - author
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               image:
 *                 type: string
 *               author:
 *                 type: string
 *               isHighlighted:
 *                 type: boolean
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: The news was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       400:
 *         description: Invalid request data
 */

/**
 * @swagger
 * /api/news/{id}:
 *   put:
 *     summary: Update a news item
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The news id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               image:
 *                 type: string
 *               author:
 *                 type: string
 *               isHighlighted:
 *                 type: boolean
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: The news was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       404:
 *         description: The news was not found
 *       400:
 *         description: Invalid request data
 */

/**
 * @swagger
 * /api/news/{id}:
 *   delete:
 *     summary: Delete a news item
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The news id
 *     responses:
 *       200:
 *         description: The news was deleted
 *       404:
 *         description: The news was not found
 *       500:
 *         description: Server error
 */

// Routes for news
router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);
router.post('/', newsController.createNews);
router.put('/:id', newsController.updateNews);
router.delete('/:id', newsController.deleteNews);

module.exports = router;
