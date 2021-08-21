const app = Vue.createApp({
  methods: {
    async getImage(m) {
      this.picture =
        "https://app.pixelencounter.com/api/basic/svgmonsters/" + m +"/image/png?fillType=3&size=200";
    },
    async getUser(n) {
      if (confirm("Confirm to download !!") == true) {
        axios({
          url:
            "https://cors.bridged.cc/https://app.pixelencounter.com/api/basic/svgmonsters/" +
            n +
            "/image/png?fillType=3&size=200",
          method: "GET",
          responseType: "blob",
        }).then((response) => {
          15;
          var fileURl = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");
          fileLink.href = fileURl;
          fileLink.setAttribute("download", "image.png");
          document.body.appendChild(fileLink);
          fileLink.click();
        });
      } else {
        alert("You pressed cancel, so image is not being downloaded !!");
      }
    },
  },
});
app.mount("#app");