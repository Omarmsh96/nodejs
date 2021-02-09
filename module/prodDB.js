const Product = require("./product");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/appex', { useNewUrlParser: true } ,(error) =>{
 if(error){ console.log('error')}
 else{
 console.log('connecting to db')
 }
})

const product = [

    new Product({
        imgPath:'/images/i11.png',
        nameOfProudct:'iphone 11' ,
        
        info: {
                display:'5.5 Inch',
                storage:128 ,
                Ram:4,
                camera:12 
            },
        price:600,
            
        } ),

    new Product({
        imgPath:'/images/i11.png',
        nameOfProudct:'iphone 11' ,
        
        info: {
                display:'5.5 Inch',
                storage:128 ,
                Ram:4,
                camera:12 
            },
        price:600,
            
        } ),

     new Product({
        imgPath:'/images/i11.png',
        nameOfProudct:'iphone 11' ,
            
        info: {
                display:'5.5 Inch',
                storage:128 ,
                Ram:4,
                 camera:12 
              },
         price:600,
                
            }),
    
            new Product({
                imgPath:'/images/i11.png',
                nameOfProudct:'iphone 11' ,
                
                info: {
                        display:'5.5 Inch',
                        storage:128 ,
                        Ram:4,
                        camera:12 
                    },
                price:600,
                    
                } ),
        
             new Product({
                imgPath:'/images/20.png',
                nameOfProudct:'Note20 Ultra' ,
                    
                info: {
                        display:'7 Inch',
                        storage:512 ,
                        Ram:12,
                        camera:64 
                      },
                 price:1200,
                        
                    }),
             new Product({
                imgPath:'/images/21.png',
                 nameOfProudct:'Galaxy S21' ,
                            
                info: {
                        display:'6 Inch',
                        storage:228 ,
                        Ram:6,
                        camera:20 
                       },
                 
                 price:900,
                                
                         }),

           
]

var done =0;
for(var i=0; i < product.length; ++i ) {
    product[i].save((error , doc) =>{
        if(error){
            console.log(error)
        }
        console.log(doc)
        done ++
        if(done === product.length){
            mongoose.disconnect();
        }

    } )
}

