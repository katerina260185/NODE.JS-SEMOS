const { get } = require("../pkg/config")
const {weatherFiveDays} =  require ("../pkg/weatherforFivedays")

const getFiveDays = async (req, res) => {
    try {
        const weatherFive = await weatherFiveDays(req.params.city)
        res.send(weatherFive);

    }catch(err) {
        return res.status(500).send("Internal server error");
    }
}
module.exports = {
    getFiveDays,
}