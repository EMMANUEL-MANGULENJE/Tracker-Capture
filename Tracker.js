const basicAuth = 'Basic ' + btoa('admin:district');
const headers = new Headers({
    'Authorization': basicAuth,
    'Content-type': 'application/json',
    Accept: 'application/json',
});

class Tracker {
    config = {
        baseUrl: '',
    };

    setConfig = config => {
        this.config = config;
    };

    getTrackerCapture = id => {
        return fetch(`${this.config.baseUrl}/TrackerCapture/`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    };


}

export default new Api();
