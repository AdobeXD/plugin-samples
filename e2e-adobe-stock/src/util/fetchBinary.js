function fetchBinary(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onload = () => {
            if (req.status === 200) {
                try {
                    resolve(req.response);
                } catch (err) {
                    reject(`Couldn't parse response. ${err.message}, ${req.response}`);
                }
            } else {
                reject(`Request had an error: ${req.status}`);
            }
        };
        req.onerror = reject;
        req.onabort = reject;
        req.open('GET', url);
        req.responseType = 'arraybuffer';
        req.send();
    });
}

module.exports = fetchBinary;