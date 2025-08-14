import React from "react";
import stdntiimg from "../../assets/student-img/studentImg.jpg";
import Typewriter from "typewriter-effect";

const Feedback = () => {
  return (
    <div className="bg-gray-500 text-white grid grid-cols-2 gap-4 p-8 mt-12">
      {/* Image column */}
      <div className="flex items-center justify-center">
        <img src={stdntiimg} alt="feedback" className="rounded-lg" />
      </div>

      {/* Text column */}
      <div className="">
        <Typewriter
          options={{
            strings: ["I am a student of University..."],
            autoStart: true,
            loop: true,
            delay: 200,
            
          }}
        />
        {/* stringSplitter: (text) => text.split(""), */}
        {/* <Typewriter
          options={{ autoStart: true, loop: true }}
          onInit={(typewriter) => {
            function loop() {
              typewriter

                .typeString("I am a student of University...")
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  loop();
                })
                .start();
            }

            loop();
          }}
        /> */}
        {/* etai  r ek rokom  */}
        {/* <Typewriter
          options={{
            strings: ["I am a student of", "University"],
            autoStart: true,
            loop: true,
          }}
        /> */}

        <p className="max-w-md mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          exercitationem magnam aperiam, harum dicta distinctio. Officiis nihil
          fugit, cumque earum deserunt commodi in vel magnam fugiat perspiciatis
          voluptatibus doloribus obcaecati?
        </p>
      </div>
    </div>
  );
};

export default Feedback;
