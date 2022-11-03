const app = Vue.createApp({
  template: `
        <h1>{{title}}</h1>
        <p>{{content}}</p>
        <p>Total number: {{number}}</p>
        <button v-on:click="addApp()">Click here </button>
        <p @click="addApp()">{{article}}</p>


    `,
  data() {
    return {
      title: "Web page with Vue",
      content: "We have just started learning Vue js ",
      number: 5,
      article: "Click this article for increasing number ",
    };
  },
  methods: {
    addApp() {
      console.log("addApp function working! ");
      this.number++;
      this.article = `Now ${this.number} apss working!`;
    },
  },
});
app.mount("#app");
