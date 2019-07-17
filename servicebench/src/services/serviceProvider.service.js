const serviceProviderService = {
    getServiceProviders: function (cb) {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3005/serviceProviders').then((response) => {
                console.log("response",response);
                response.json().then((data) => {
                    console.log("data recived in getServiceProviders ",data);
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
    getServiceProviderbySPID: function (spId) {
        var promise = new Promise((resolve, reject) => {
            fetch(`http://localhost:3005/serviceProviders?serviceProviderId=${spId}`).then((response) => {
                console.log("response",response);
                response.json().then((data) => {
                    console.log("data recived in getServiceProvidersBySpID ",data);
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

export default  serviceProviderService ;