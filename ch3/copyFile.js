const fs = require('fs').promises

fs.copyFile('readme2.txt','writeme4.txt')
.then(()=>{
    console.log('복사 완료');
})
.catch((err)=>{
    console.error(err);
})