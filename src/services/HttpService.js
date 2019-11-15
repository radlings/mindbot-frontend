export function get(url, onSuccess, onError) {
    fetch(url)
    .then((resp) => {
        if(resp.ok) {
            return resp.json();
        }
        else {
            resp.json().then((json) => {
                onError(json.status);
            });
        }
    }).then((resp) => {
        onSuccess(resp);
    }).catch((e) => {
        onError(e.message);
    });
}