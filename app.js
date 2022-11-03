const app = Vue.createApp({
  template: `
        <h1>{{title}}</h1>
        <p>{{content}}</p>
        <p>total number: {{number}}</p>
        <button v-on:click="addApp()">Click here </button>

    `,
  data() {
    return {
      title: "Web page with Vue",
      content: "We have just started learning Vue js ",
      number: 5,
    };
  },
  methods: {
    addApp() {
      console.log("addApp function working! ");
      this.number++;
    },
  },
});
app.mount("#app");
