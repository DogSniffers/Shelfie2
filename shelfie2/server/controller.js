module.exports = {
getInventory: (req,res => {
    const db = req.app.get('db');
    const {id} = req.app.get('db');
    db.get_inventory(id).then(res =>{
        const data = res[0];
        res.status(200).send(data);
    })
    
}),
addProduct: (req, res => {
    const db = req.app.get('db');
    const {name, price, url} = req.body
    console.log(req.body)
    db.add_product([name,price,url]).then(res =>{
        res.sentStatus(200)
    }).catch(err => res.status(500).send(err))
})

}
