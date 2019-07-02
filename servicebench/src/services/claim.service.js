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
    },
    getClaimByClaimNumber: function (claimNumber) {
        var promise = new Promise((resolve, reject) => {
            fetch(`http://localhost:3007/Claims?claimNumber=${claimNumber}`).then((response) => {
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
    getClaimsByClaimStatus: function (claimStatus) {
        var promise = new Promise((resolve, reject) => {
            fetch(`http://localhost:3007/Claims?claimStatus=${claimStatus}`).then((response) => {
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