<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  components: {
    PostList
  },
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
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>