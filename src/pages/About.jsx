import React from "react";

const About = () => {
  const picture = {
    height: "100px",
    width: "100px",
  };
  return (
    <section
      className=" md:w-2/3 md:my-24 w-5/6 mx-2"
      style={{ textShadow: "5px 5px 5px #292524" }}
    >
      <div className="place-self-center flex-col pl-8">
        <div>
          <h1 className="antialiased text-4xl py-6 font-bold align-middle text-slate-400">
            About Me
          </h1>
        </div>
        <div>
          <img
            src={require("../images/KrisMarshall.jpg")}
            alt="headshot"
            style={picture}
            className="border-solid border-2 rounded-full mb-4"
          />
        </div>
        <p className="antialiased md:text-2xl text-lg md:px-8 px-4 font-mono text-slate-400">
          I am a Full-Stack Web Developer with a background in music. As such, I
          have extensive experience with collaboration in large and small
          contexts alike, as well as a passion for elegance. I am biased towards
          aesthetic harmony and will bring that to the design of your
          application.
        </p>
        <br />
        <p className="antialiased md:text-2xl text-lg md:px-8 px-4 font-mono text-slate-400">
          Having recently completed a full-stack bootcamp, my next area of study
          is design and backend frameworks in order to streamline the
          development process.
        </p>
      </div>
    </section>
  );
};

export default About;
