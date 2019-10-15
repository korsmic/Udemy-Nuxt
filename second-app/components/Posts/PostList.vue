<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      title="Hello there!"
      thumbnail="https://www.fairobserver.com/wp-content/uploads/2019/08/Tech-news.jpg"
      previewText="This my first post"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="Hello there!"
      thumbnail="https://www.fairobserver.com/wp-content/uploads/2019/08/Tech-news.jpg"
      previewText="This my second post"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      title="Hello there!"
      thumbnail="https://www.fairobserver.com/wp-content/uploads/2019/08/Tech-news.jpg"
      previewText="This my third post"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin :{
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>