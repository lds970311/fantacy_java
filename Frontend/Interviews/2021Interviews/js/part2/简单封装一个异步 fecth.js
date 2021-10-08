let res = (async () => {
    class HttpRequestUtil {
        async get(url) {
            const res = await fetch(url);
            return await res.json();
        }

        async post(url, data) {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return await res.json();
        }

        async put(url, data) {
            const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data)
            });
            return await res.json();
        }

        async delete(url, data) {
            const res = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data)
            });
            return await res.json();
        }
    }

    function getInstance() {
        return new HttpRequestUtil();
    }
})()

console.log(res);



