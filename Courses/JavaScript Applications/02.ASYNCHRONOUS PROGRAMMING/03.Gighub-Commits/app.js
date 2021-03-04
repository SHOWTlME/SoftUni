function loadCommits() {
    const username = document.querySelector('#username');
    const repo = document.querySelector('#repo');
    const URL = `https://api.github.com/repos/${username.value}/${repo.value}/commits`;
    const commits = document.querySelector('#commits');

    fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Request Error');
        }
        response.json().then(data =>{
            console.log(data);
            data.forEach(x => {
                const liElement = document.createElement('li');
                liElement.textContent = `${x.commit.author.name}: ${x.commit.message}`;
                commits.appendChild(liElement);
            });
        });
    })
}