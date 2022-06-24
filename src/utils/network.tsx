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
        return  false;
    }

}
// (async () => {
//     const body = await  getApiResource(SWAPI+PEOPLE);
//     console.log(body)
// })();

