function loadRepos() {
	const username = document.querySelector('#username');
	const URL = `https://api.github.com/users/${username.value}/repos`;

	fetch(URL)
		.then(response => response.json()
			.then(data => {
				const repos = document.querySelector('#repos');
				repos.innerHTML = '';
				data.forEach(x => {
					const repo = document.createElement('li');
					const anchor = document.createElement('a');
					anchor.href = x.html_url;
					anchor.textContent = x.full_name;
					repo.appendChild(anchor);
					repos.appendChild(repo);
				});
			}));
}