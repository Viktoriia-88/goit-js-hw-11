export function fetchImg(query) {
    const searchParams = new URLSearchParams({
        key: '47484582-92e080108706ddb17b6ec6a5b',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;

    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
            return response.json();
    });
}