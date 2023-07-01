const container = document.querySelector(".container");

const URL = "https://jsonplaceholder.typicode.com/posts";

let limit = 6;
let page = 1;

async function getPosts() {
  try {
    const res = await fetch(`${URL}?_limit=${limit}&_page=${page}`);
    const posts = await res.json();

    posts.forEach((post) => {
      const element = `
    <div class="post">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <p>Post ID: ${post.id}</p>
    </div>`;

      container.insertAdjacentHTML("beforeend", element);
    });

    const lastChildObserver = new IntersectionObserver((entries) => {
      const lastChild = entries[0];
      if (!lastChild.isIntersecting) return;
      lastChildObserver.unobserve(lastChild.target);
      page++;
      getPosts();
    });

    lastChildObserver.observe(container.querySelector("div:last-child"));
  } catch (error) {
    console.log(error);
  }
}

getPosts();

// window.addEventListener("scroll", () => {
//   const { scrollY, innerHeight } = window;
//   const { scrollHeight } = document.documentElement;

//   if (scrollY + innerHeight >= scrollHeight) {
//     page++;
//     getPosts();
//   }
// });
