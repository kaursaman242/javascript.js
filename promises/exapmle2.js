async function fetchProducts(link) {
  try {
    const response = await fetch(link);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}
const output=[]

const data= fetchProducts('https://fakestoreapi.com/products')
data.then((s)=>{
    s.map((e)=>{
   
        output.push(e)
    })
 
}).catch((err)=>{
    console.log(err)
})


console.log(output)