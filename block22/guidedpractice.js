//fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log(err));

  async function getPosts() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await res.json();
        return json;
    }catch(err){
        console.log(err);
    }
  }

  const posts = await getPosts();
  console.log(posts)