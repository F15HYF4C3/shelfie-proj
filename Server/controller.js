module.exports = {
    getItems: (req, res, next)=>{
        const dbQuery = req.app.get("db");
        dbQuery.GET_PNAME([25])
        .then(items =>{
            res.status(200).send(items);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).send(err);
        })
    }
}