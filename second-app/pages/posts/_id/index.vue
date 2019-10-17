<template>
  <div class="single-post-page">
    <section class="post">
      <h1>{{lodedPost.title}}</h1>
      <div class="post-details">
        <div>Last updated on {{lodedPost.updateDate}}</div>
        <div>Written by {{lodedPost.author}}</div>
      </div>
      <p class="post-content">{{lodedPost.content}}</p>
    </section>
    <div class="post-feedback">
      <p>
        Let me know that you think about the oist, send amail to
        <a
          href="mailto:test@test.com"
        >test@test.com</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: "1",
              title: "First post",
              thumbnail: "https://i.ytimg.com/vi/KI5lXoXBYUM/maxresdefault.jpg",
              previewText: "previe text1"
            },
            {
              id: "2",
              title: "Second post",
              thumbnail: "https://i.ytimg.com/vi/KI5lXoXBYUM/maxresdefault.jpg",
              previewText: "previe text2"
            },
            {
              id: "3",
              title: "Third post",
              thumbnail: "https://i.ytimg.com/vi/KI5lXoXBYUM/maxresdefault.jpg",
              previewText: "previe text3"
            }
          ]
        });
      }, 1500);
      // reject(new Error());
    })
      .then(data => {
        return data;
      })
      .catch(e => {
        context.error(e);
      });
  }
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>