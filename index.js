const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello, This is the API from express'))

app.get('/:number',(req,res)=>{
    var integer= Number(req.params.number);
    res.format('application/json');
    console.log(integer);
    
        if (integer%3===0) {
            res.write("P");
            
        }  
        if(integer % 5 ==0){
            res.write("E");
            
        }
        // if(integer % 15==0 )
        // {
        //     res.write("PE");
        // }
        else{
            res.write(integer);
        }
        if (integer ==NaN){
            res.status(404).send("Please use integer");
        }
        res.end();
    

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))