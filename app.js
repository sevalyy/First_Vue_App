const app = Vue.createApp({
  template: `
        <h1>{{title}}</h1>
        <p>{{content}}</p>

    `,
  data() {
    return {
      title: "Web page with Vue",
      content: "We have just started learning Vue js ",
    };
  },
});
app.mount("#app");
