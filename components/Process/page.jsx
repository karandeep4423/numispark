import { useInView } from "react-intersection-observer";

const HowAgencyWorks = ({ steps }) => {
  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-center">
        <h2 className="relative mt-16 text-center text-5xl font-bold">
          How Agency Works
        </h2>
        <div className="bg-sky-400 mt-16 absolute mix-blend-multiply filter blur-2xl h-16 w-56"></div>
      </div>
      <div className="flex text-lg xl:text-xl max-w-screen-xl m-auto justify-center items-center mt-10 pb-16 flex-col">
        {steps.map((step, index) => {
          const { ref, inView } = useInView({
            rootMargin: "-200px 0px",
            triggerOnce: true,
            delay: 200,
          });

          return (
            <div key={index} className="w-full flex flex-col items-center">
              {/* Step Number */}
              <div className="z-50 bg-white">
                <span
                  ref={ref}
                  className={`absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white border-2 text-black rounded-full h-10 w-10 ${
                    inView ? "opacity-100" : "opacity-80"
                  }`}
                >
                  {index + 1}
                </span>
              </div>

              {/* Step Content */}
              <div
                ref={ref}
                className={`rounded-xl p-3 lg:p-6 w-10/12 relative flex flex-col lg:flex-row justify-center items-center border-2 border-white ${
                  inView ? "opacity-100" : "opacity-50"
                }`}
              >
                <div className="mt-3 lg:mt-0 flex-shrink-0 bg-gray-700 rounded-xl p-6 flex justify-center items-center">
                  {step.icon}
                </div>
                <div>
                  <h3 className="mt-3 lg:mt-0 text-3xl px-3 text-center font-bold">
                    {step.title}
                  </h3>
                  <p className="ml-3 lg:ml-6 lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`w-1 h-24 relative bg-white ${
                    inView ? "opacity-100" : "opacity-50"
                  }`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowAgencyWorks;
