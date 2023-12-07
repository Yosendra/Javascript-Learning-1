
const blogPost = {
    title: "A",
    body: "B",
    author: "C",
    views: 10,
    comments: [
        { author: "A1", body: "Lorem Ipsum" },
        { author: "A2", body: "Lorem Ipsum" }
    ],
    isLive: false
};

// Constructor Function
function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;

    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const blog = new BlogPost("A", "B", "C");
console.log(blog);