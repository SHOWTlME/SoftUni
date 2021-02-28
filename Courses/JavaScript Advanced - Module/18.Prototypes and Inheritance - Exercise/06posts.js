function solution () {

    class Post {
        constructor(title,content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title,content,likes,dislikes) {
            super(title,content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
            this.title = title;
            this.content = content;
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            if (this.comments.length > 0) {
                return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\nComments:\n${this.comments.map(comment => ` * ${comment}`).join('\n')}`;
            }else {
                return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;
            }
        }

    }

    class BlogPost extends Post {
        constructor(title,content,views) {
            super(title,content)
            this.views = views;
        }

        view () {
            this.views++;
            return this;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }
}

let mySocialMedia = solution();
let myClasses = new mySocialMedia.socialMediaPost('TestTitle','TEST',25,30);
console.log(myClasses.title);

