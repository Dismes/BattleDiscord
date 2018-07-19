var axios = require('axios');

var DND = {
    SayHello: function (message) {
        console.log(message);
    },

    SentGetPost: function (message) {
        console.log('started ')
        return new Promise(function (res, err) {
            axios.get('http://dnd5eapi.co/api/ability-scores/STR').then(function (res) {
                console.log(res.data);
                console.log('NO ERRRO');
                return res;
            }).catch(function (err) {
                console.log(err)
                console.log('error has occured')

            })
        })

    }

}

module.exports = DND;