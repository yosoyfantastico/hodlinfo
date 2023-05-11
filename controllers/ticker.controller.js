exports.getTickers = (req, res) => {
    let tickers =['akshat', 'you', 'us', 'they']
    return res.status(200).json({ response :tickers });
};

exports.createTicker = (req, res) => {
    console.log(req.params.id)
    return res.status(200).json({ response :req.params.id });
};

exports.getTicker = (req, res) => {
    console.log(req.params.id)
    return res.status(200).json({ response :req.params.id });
};

exports.updateTicker = (req, res) => {
    console.log(req.params.id)
    return res.status(200).json({ response :req.params.id });
};

exports.deleteTicker = (req, res) => {
    console.log(req.params.id)
    return res.status(200).json({ response :req.params.id });
};