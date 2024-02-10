const student = {
  name: "shohel",
  class: "diploma",
  semester: "7th",
  fun: function teslaCar() {
    console.log("tesla");
  },
  favorite: {
    name: "rana",
    collage: "tangail",
    car: {
      name: "tesla",
      color: "black",
      model: 2024,
    },
  },
  frends: ["Nafiz", "fahim", "ripon"],
};

console.log(student.favorite.car.color, student.fun);
// function call in object
student.fun();
