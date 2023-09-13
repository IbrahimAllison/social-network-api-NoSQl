const mongoose = require('mongoose');

// The code snippets below show how mongose connect to the localhost using MongoDB
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://127.0.0.1:27017/SocialNetworkApi',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

module.exports = mongoose.connection