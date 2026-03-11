const router = require('express').Router();
const News = require('../models/News');
const Event = require('../models/Event');

// NEWS ROUTES
// Get all news
router.get('/news', async (req, res) => {
    try {
        const news = await News.find().sort({ date: -1 });
        res.json(news);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Add news
router.post('/news', async (req, res) => {
    try {
        const { title, content, date, link, isNew } = req.body;
        const newNews = new News({ title, content, date, link, isNew });
        await newNews.save();
        res.json('News added!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// EVENTS ROUTES
// Get all events
router.get('/events', async (req, res) => {
    try {
        const events = await Event.find().sort({ eventDate: 1 });
        res.json(events);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Add event
router.post('/events', async (req, res) => {
    try {
        const { title, description, eventDate, location, image } = req.body;
        const newEvent = new Event({ title, description, eventDate, location, image });
        await newEvent.save();
        res.json('Event added!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;
