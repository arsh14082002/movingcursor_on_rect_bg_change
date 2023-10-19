// sbse phle pata kro k mouse rectangle pr aya aur move hua ya nhi.
// ab ye calculate kro ki hm rectangle k left pr aur right pr khn hai
// ab pata kro ki hm rectangle k center se kitna right pr hai aur jitna right pr hai uske intensity uska color red kro

const center = document.querySelector("#center");

center.addEventListener("mousemove", (details) => {
  let rectlocation = center.getBoundingClientRect();
  //   console.log(Math.floor(details.clientX - rectlocation.left));
  let rectval = details.clientX - rectlocation.left;

  //   console.log(details);
  if (rectval < rectlocation.width / 2) {
    let red = gsap.utils.mapRange(0, rectlocation.width / 2, 255, 0, rectval);

    gsap.to(center, {
      backgroundColor: `rgb(${red}, 0 ,0)`,
    });
  } else if (rectlocation.width / 2) {
    gsap.to(center, {
      backgroundColor: `rgb(0, 0, 0)`,
    });
  } else {
    // let blue = gsap.utils.mapRange(
    //   rectlocation.width / 2,
    //   rectlocation.width,
    //   0,
    //   255,
    //   rectval
    // );

    // console.log(
    //   gsap.utils.mapRange(
    //     rectlocation.width / 2,
    //     rectlocation.width,
    //     0,
    //     255,
    //     rectval
    //   )
    // );

    let blue = gsap.utils.mapRange(
      rectlocation.width / 2,
      rectlocation.width,
      0,
      255,
      rectval
    );

    // console.log(`rgb(0, 0, ${blue})`);

    gsap.to(center, {
      backgroundColor: `rgb(0, 0, ${blue})`,
    });
  }
});

center.addEventListener("mouseleave", () => {
  console.log("out");
  // center.style.backgroundColor = "#fff";   gsap overwirte this code
  gsap.to(center, {
    backgroundColor: "white",
  });
});

// apply gsap utilities
// console.log(gsap.utils.mapRange(0, rectlocation.width / 2, 255, 0, rectval));
// console.log(
//   gsap.utils.mapRange(
//     rectlocation.width / 2,
//     rectlocation.width,
//     0,
//     255,
//     rectval
//   )
// );
// gsap.utils.mapRange(inMin, inMax, outMin, outMax, valueToMap)

// inMax : initial values
// inMax : final Value
// outMin : jo hme initial val pr display krna hai
// outMax : jo hme final val pr display krna hai
// valueToMap : hmari current value hai
