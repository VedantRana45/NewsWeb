const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('685975e632ac4a359973cfc090425da9');

exports.sendTopNews = (req, res) => {

    newsapi.v2.topHeadlines({
        country: 'in',
        category: req.query.category,
        pageSize: 10,
        page: req.query.page,
    }).then(response => {
        res.status(200).json(response);
    }).catch(err => {
        res.status(200).json({
            "error": err.message,
        });
    })

}


exports.sendEveryNews = (req, res) => {

    newsapi.v2.everything({
        q: req.query.q,
        pageSize: 10,
        page: req.query.page,
    }).then(response => {
        res.status(200).json(response);
    }).catch(err => {
        res.status(200).json({
            "error": err.message,
        })
    })

}