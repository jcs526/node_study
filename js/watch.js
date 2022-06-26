const fs = require('fs')

fs.watch('./readme2.txt',(EventType,filename)=>{
    console.log(EventType,filename);
})