function attachEvents() {
    const btnLoad = document.querySelector('#btnLoadPosts');
    const btnView = document.querySelector('#btnViewPost');
    const selectPosts = document.querySelector('#posts')
    const h1Title = document.querySelector('#post-title');
    const ulBody = document.querySelector('#post-body');

    btnLoad.addEventListener('click', onClick);
    btnView.addEventListener('click', expectClick)


    function expectClick() {
        const URL = `http://localhost:3030/jsonstore/blog/comments/${selectPosts.value}`;
        const URL2 = `http://localhost:3030/jsonstore/blog/comments`;
        Promise.all([fetch(URL), fetch(URL2)]).then(response => {
            response[0].json().then(data => console.log(data));
        });

        // const postData = await postsResponse.json();

        // h1Title.textContent = postData.title
        // ulBody.textContent = postData.body;

        // console.log(postData)
        // const commentsData = await commentsReponse.json();
    }

    function onClick(ev) {
        const URL = `http://localhost:3030/jsonstore/blog/posts`;
        fetch(URL).then(response => response.json().then(data => {
            Object.keys(data).forEach(key => {
                const optionEl = createElement('option', data[key].title, key);
                selectPosts.appendChild(optionEl);
            })
        }));
    }

}

attachEvents();


function createElement(type, content, value) {
    const createElement = document.createElement(type);
    if (content) {
        createElement.textContent = content;
    }
    if (value) {
        createElement.value = value;
    }
    return createElement;
}