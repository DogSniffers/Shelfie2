module.exports = {
getInventory: (req,res => {
    const db = req.app.get('db');
    const {id} = req.app.get('db');
    db.get_inventory(id).then(res =>{
        const data = res[0];
        res.status(200).send(data);
    })
    
})

}
