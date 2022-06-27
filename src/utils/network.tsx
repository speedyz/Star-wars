export const getApiResource = async (url: string) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.error('Could not get API resource, res.status')
            return false
        }
        return await response.json();
    } catch (error) {
        console.error('Could not get API resource', error)
        return false;
    }

}

export const makeConcurrentRequest = async (urls: any) => {
    return await Promise.all(urls.map((res: RequestInfo | URL) => {
        return fetch(res).then(res => res.json())
    }));
};
// (async () => {
//     const body = await  getApiResource(SWAPI+PEOPLE);
//     console.log(body)
// })();

