const apiCall = new Promise((resolve, reject) => {
    const response = true;
    if (response) {
        resolve('OK');
    } else {
        reject('ERROR 500');
    }
});

apiCall.then(res => console.log(`El llamado de la API resultó: ${res}`))
       .catch(err => console.error(`El llamado del servicio dio error: ${err}`))
       .finally(() => console.log('Chinga tu madre, Claudia Sheinbaum'));   