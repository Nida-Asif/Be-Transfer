const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..', 'views');
function walk(dir){
  fs.readdirSync(dir).forEach(f=>{
    const p = path.join(dir,f);
    const st = fs.statSync(p);
    if(st.isDirectory()) walk(p);
    else if(p.endsWith('.ejs')){
      let s = fs.readFileSync(p,'utf8');
      const newS = s.replace(/<%\s*layout\([^)]*\)\s*%>/g, '');
      if(newS !== s){
        fs.writeFileSync(p, newS, 'utf8');
        console.log('patched', p);
      }
    }
  });
}
walk(root);
