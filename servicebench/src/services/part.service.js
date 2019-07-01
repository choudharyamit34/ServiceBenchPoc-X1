const partService = {
    getAllParts: function () {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3007/parts').then((response) => {
                response.json().then((data) => {
                    resolve(data);
                }, (err) => {
                    reject("Parsing Error...");
                })
            }, (err) => {
                reject("Communication Error...");
            })
        });
        return promise;
    },
    getPartById: function (id) {
        var promise = new Promise((resolve, reject) => {
            fetch(`http://localhost:3007/parts?id=${id}`).then((response) => {
                response.json().then((data) => {
                    resolve(data);
                }, (err) => {
                    reject("Parsing Error...");
                })
            }, (err) => {
                reject("Communication Error...");
            })
        });
        return promise;
    }

}

export default partService;