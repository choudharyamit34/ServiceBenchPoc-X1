const serviceJobService = {
    getAllServiceJobs: function (cb) {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3001/ServiceJobs').then((response) => {
                console.log("response",response);
                response.json().then((data) => {
                    console.log("data recived in getAllServiceJobs ",data);
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
            fetch(`http://localhost:3001/ServiceJobs?serviceJobNumber=${serviceJobNumber}`).then((response) => {
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
    ,
    getAllServicejobBySjStatus: function (serviceJobStatus) {
        var promise = new Promise((resolve, reject) => {
            fetch(`http://localhost:3001/ServiceJobs?serviceJobStatus=${serviceJobStatus}`).then((response) => {
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
    getAllServicejobBySjStatusAndSPID: function (serviceJobStatus,spId) {
        var promise = new Promise((resolve, reject) => {
            fetch(`http://localhost:3001/ServiceJobs?serviceJobStatus=${serviceJobStatus}&serviceProviderId=${spId}`).then((response) => {
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