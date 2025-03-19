const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - startDate
 *         - endDate
 *         - location
 *         - organizer
 *         - category
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the event
 *         title:
 *           type: string
 *           description: The title of the event
 *         description:
 *           type: string
 *           description: The description of the event
 *         startDate:
 *           type: string
 *           format: date-time
 *           description: The start date and time of the event
 *         endDate:
 *           type: string
 *           format: date-time
 *           description: The end date and time of the event
 *         location:
 *           type: string
 *           description: The location where the event will take place
 *         organizer:
 *           type: string
 *           description: The person or organization organizing the event
 *         category:
 *           type: string
 *           description: The category of the event
 *         image:
 *           type: string
 *           description: URL of the event image
 *         isPublic:
 *           type: boolean
 *           description: Whether the event is public
 *           default: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the event was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the event was last updated
 *       example:
 *         _id: 60d21b4667d0d8992e610c85
 *         title: Annual Science Fair
 *         description: Join us for the annual science fair showcasing student projects.
 *         startDate: 2023-05-15T09:00:00.000Z
 *         endDate: 2023-05-15T17:00:00.000Z
 *         location: Main Campus Auditorium
 *         organizer: Science Department
 *         category: Academic
 *         image: https://example.com/images/science-fair.jpg
 *         isPublic: true
 *         createdAt: 2023-01-15T19:00:00.000Z
 *         updatedAt: 2023-01-15T19:00:00.000Z
 */

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Event management API
 */

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Returns a list of all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: The list of events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     summary: Get an event by id
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The event id
 *     responses:
 *       200:
 *         description: The event details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: The event was not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/events:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - startDate
 *               - endDate
 *               - location
 *               - organizer
 *               - category
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               location:
 *                 type: string
 *               organizer:
 *                 type: string
 *               category:
 *                 type: string
 *               image:
 *                 type: string
 *               isPublic:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: The event was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       400:
 *         description: Invalid request data
 */

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     summary: Update an event
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The event id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               location:
 *                 type: string
 *               organizer:
 *                 type: string
 *               category:
 *                 type: string
 *               image:
 *                 type: string
 *               isPublic:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: The event was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: The event was not found
 *       400:
 *         description: Invalid request data
 */

/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     summary: Delete an event
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The event id
 *     responses:
 *       200:
 *         description: The event was deleted
 *       404:
 *         description: The event was not found
 *       500:
 *         description: Server error
 */

// Routes for events
router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);
router.post('/', eventController.createEvent);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
