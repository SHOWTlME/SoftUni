class Story {
    #comments
    #likes
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.#comments = [];
        this.#likes = [];
    }

    get likes() {
        if (this.#likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this.#likes.length == 1) {
            return `${this.#likes[0]} likes this story!`;
        } else {
            return `${this.#likes[this.#likes.length - 1]} and ${this.#likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (this.#likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        } else if (this.creator == username) {
            throw new Error("You can't like your own story!");
        } else {
            this.#likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username) {
        if (!this.#likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        } else {
            const index = this.#likes.indexOf(username);
            this.#likes.splice(index, 1);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) {
        if (id === undefined && this.#comments.length == 0) {
            this.#comments.push({ Id: 1, Username: username, Content: content, replies: {} });
            return `${username} commented on ${this.title}`;

        } else if (id == undefined) {
            let index = this.#comments.length - 1;
            const currentId = this.#comments[index].Id + 1;
            this.#comments.push({ Id: currentId, Username: username, Content: content, replies: {} });
            return `${username} commented on ${this.title}`;

        } else {
            for (let i = 0; i < this.#comments.length; i++) {
                let x = this.#comments[i];
                if (x.Id !== id) {
                    this.#comments.push({ Id: id, Username: username, Content: content, replies: {} });
                    return `${username} commented on ${this.title}`;
                } else if (x.Id == id) {
                    x.replies.Id = x.Id + 0.1;
                    x.replies.Username = username;
                    x.replies.Content = content;
                    return "You replied successfully";
                }
            }
        }
    }

    toString(sortingType) {
        if (sortingType == 'asc') {
            this.#comments.sort((a, b) => a.Id - b.Id)
            this.#likes.sort((a, b) => a.Id - b.Id);
        } else if (sortingType == 'desc') {
            this.#comments.sort((a, b) => b.Id - a.Id)
            this.#likes.sort((a, b) => b.Id - a.Id);
        } else if (sortingType == 'username') {
            this.#comments.sort((a, b) => a.Username.localeCompare(b.Username))
            this.#likes.sort((a, b) => a.Username.localeCompare(b.Username));
        }
        let comments = '';
        this.#comments.forEach(x => {
            if (x.replies.hasOwnProperty('Id')) {
                comments += `--- ${x.replies.Id}. ${x.replies.Username}: ${x.replies.Content}\n`;
            }else {
                comments += `-- ${x.Id}. ${x.Username}: ${x.Content}\n`;
            }
            
        })
        return `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this.#likes.length}\nComments:\n${comments}`;

    }
}
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
