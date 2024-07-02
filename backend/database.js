const mongoose=require('mongoose');
const URI= 'mongodb://localhost:27017/angular-auth';

mongoose.connect(URI)
.then(db => console.log('Base conectada'))
.catch(err => console.error(err));

module.exports= mongoose;