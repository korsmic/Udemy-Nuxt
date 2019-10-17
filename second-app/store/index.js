import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'First post',
                thumbnail: 'https://i.ytimg.com/vi/KI5lXoXBYUM/maxresdefault.jpg',
                previewText: 'previe text1',
              },
              {
                id: '2',
                title: 'Second post',
                thumbnail: 'https://i.ytimg.com/vi/KI5lXoXBYUM/maxresdefault.jpg',
                previewText: 'previe text2',
              },
              {
                id: '3',
                title: 'Third post',
                thumbnail: 'https://i.ytimg.com/vi/KI5lXoXBYUM/maxresdefault.jpg',
                previewText: 'previe text3',
              },
            ]);
            resolve();
          }, 1500);
        });
      },
      setPosts(vuexContext) {
        vuexContext.commit('setPosts', posts);
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
