const serviceJobService = {
    getAllServiceJobs: function (cb) {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3007/ServiceJobs').then((response) => {
                console.log("response",response);
                response.json().then((data) => {
                    console.log("data",data);
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
    getAllServicejobBySjnumber: function (serviceJobNumber) {
        var promise = new Promise((resolve, reject) => {
            fetch('`http://localhost:3007/ServiceJobs?serviceJobNumber=${serviceJobNumber}`').then((response) => {
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

export default  serviceJobService ;