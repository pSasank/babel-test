var num = require ('./main');
async function xyz(numb){
    const a = new Promise((abc, def)=>{setTimeout(abc(numb), 50000);});
    console.log('hi');
    //await console.log(a);
    var b = await a;
    console.log(b);
    //a.then((o)=>{console.log(o);})
    console.log('bye');
    }
    xyz(num);