const news = document.querySelector('#news');

type TNews = {
    title: string;
    author: string;
    description: string;
    urlToImage: string;
    sourse: TSourse;
};
type TSourse = {
    id: string;
    name: string;
};

let apiUrl = 'https://newsapi.org/v2/';
let apiKey = 'dc994be76c294160a9c41b21b42052db';

async function fetchNews() {
    try {
        let response = await fetch(`${apiUrl}everything?domains=techcrunch.com,thenextweb.com&apiKey=${apiKey}`);
        let obj = await response.json();
        console.log(obj.articles);
        renderNews(obj.articles);
    } catch (error) {
        console.error(error);
        throw new Error('Ощибка при получении данных')
    }
}

fetchNews();

function renderNews(newsArr: TNews[]) {
    newsArr.forEach((newItem) => {
        const listItem = document.createElement('div');
        listItem.className = 'news__item';
        news?.appendChild(listItem);
        const imgItem = document.createElement('img');
        imgItem.src = newItem.urlToImage;
        listItem.appendChild(imgItem);

        const titleItem = document.createElement('h2');
        titleItem.innerHTML = newItem.title;
        listItem.appendChild(titleItem);

        const descriptionItem = document.createElement('p');
        descriptionItem.innerHTML = newItem.description;
        listItem.appendChild(descriptionItem);

        const authorItem = document.createElement('h3');
        authorItem.innerHTML = newItem.author;
        listItem.appendChild(authorItem);
    });
}
