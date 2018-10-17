db.product.find().pretty();


// 2
db.product.find(

    {},
    
    { _id: 0, 
      name: 1,
      category: 1
    }
);

// 3
db.product.find(

    {},
    
    { _id: 0, 
      name: 1,
      category: 1
    }
);

// 4
db.product.find(

    {},
    
    { _id: 0, 
      name: 1,
      category: 1,
      company: 1
    }
);

// 5
db.product.update(
  
  {company: "Stanley"},
  { $set: {company: "Stanley Black Decker"}},
  { multi:true }       
); // 2 documents updated

// 6
db.product.find({
      $and: [
          {category: "Tools"},
          {price: {$gt: 10}}
        ]
});

// 6
db.product.find({
      $and: [
          {category: "Tools"},
          {price: {$gt: 10}},
          {company: "Stanley Black Decker"}
        ]
});

// 7
db.product.remove( 
  
  {company: "crest"}
);