const claimService = {
    getAllClaims: function () {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3007/Claims').then((response) => {
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

export default claimService;