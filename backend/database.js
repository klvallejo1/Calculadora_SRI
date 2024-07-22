const mongoose=require('mongoose');

const dbUri= 'mongodb+srv://kevin:w0UgQPIby5pdegRI@cluster0.091j0yh.mongodb.net/MeanImpuestos'

mongoose.connect(dbUri)
  .then(() => {
    console.log('Conexión a MongoDB Atlas exitosa');
  })
  .catch((error) => {
    console.error('Error conectándose a MongoDB Atlas:', error);
  });

/*
require('dotenv').config({path: 'variables.env'});

const conectarDB= async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            useFindAndModify: false
        });

        console.log('Base de datos ATLAS conectada');
        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}
module.exports= conectarDB;*/

/*
const URI= 'mongodb://localhost:27017/angular-auth';

mongoose.connect(URI)
.then(db => console.log('Base conectada'))
.catch(err => console.error(err));*/

