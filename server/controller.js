const houses = require("./db.json")
const globalId = 4
module.exports = {
    getHouse: (req, res) =>{
        res.status(200).send(houses)
        // console.log(req.params)
    },
    deleteHouse: (req, res) =>{
        let {id} = req.params
        let houseIndex = houses.findIndex(element => element.id === +id)
        houses.splice(houseIndex, 1)
        res.status(200).send(houses)
    },  
    createHouse: (req, res) =>{ 
        let {address, price, imageURL} = req.body
        let newHouse = {globalId, address, price, imageURL}
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId ++
    },
    updateHouse: (req, res) =>{
        //ask garrett about this later
        let {id} = req.params
        let {type} = req.body
    },
}
