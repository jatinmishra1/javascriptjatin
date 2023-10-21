// promise.all()
// Promise.all([p1,p2,p3])
//promise.all will firstly wait for all the promise to finish whether resolve or reject
//as soon as any of the promise get rejected ...promise.all will throw an error
//immediately as soon as eroor ocuur it will give error,it will not wait for other promises to resolve or reject



//promise.allSettled([p1,p2,p3])
//but in this if p2 get error ,it will still wait for all the promise to settle



//promise.race([p1,p2,p3])
//as soon as first promise get settled,it will give result of that first settled promise whether it is resolved/rejected/error


//promise.any([p1,p2,p3])
//it will wait for the first promise to be resolved that is first promise to be get successfull
//if all the promises are rejected then we wll get the Aggregated error which is the combination of all rejected prmises





const p1=new Promise((res,rej)=>{
    setTimeout(()=>{res("p1 success")},5000)
})


const p2=new Promise((res,rej)=>{
    // setTimeout(()=>{res("p2 success")},3000)\
    setTimeout(()=>{rej("p2 failed")},2000)
})


const p3=new Promise((res,rej)=>{
    setTimeout(()=>{res("p3 success")},4000)
})

const ans=Promise.all([p1,p2,p3]).then((res)=>{
console.log(res)
}).catch((e)=>{
    console.error(e)
})
// console.log(ans)

Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log(res)
    }).catch((e)=>{
        console.error(e)
    })
    // console.log(ans)


    Promise.race([p1,p2,p3]).then((res)=>{
        console.log(res)
        }).catch((e)=>{
            console.error(e)
        })

        Promise.any([p1,p2,p3]).then((res)=>{
            console.log(res)
            }).catch((e)=>{
                console.error(e)
            })