const userAuthenticator = {
    getUserByUserName: function (userName) {
        var promise = new Promise((resolve, reject) => {
            fetch(`http://localhost:3004/users?userName=${userName}`).then((response) => {
                console.log("response",response);
                response.json().then((data) => {
                    console.log("data recived in getUserByUserName ",data);
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

export default  userAuthenticator ;