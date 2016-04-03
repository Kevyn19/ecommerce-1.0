var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID("56f858aca5855f0b6b0a5b3f");

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',function(erro,db){
  if(erro) throw err;
  db.collection('contatos').findOne({_id:_idProcurado},function(erro,contato){
    if(erro) throw err;
    console.log(contato);
  })
});
