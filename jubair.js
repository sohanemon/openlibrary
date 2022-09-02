const user = {
  name: {
    first: "Jubair",
    last: "Khan",
  },
  subject: ["algorithm", "data-structure"],
  getDetails() {
    return `${this.name.first} ${this.name.last} is studying ${this.subject[0]} and ${this.subject[1]}`;
  },
};
console.log(user.getDetails());
