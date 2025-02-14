import { useTranslation } from "react-i18next";

const Technologies = ({ technologies }) => {
  const { t } = useTranslation("technologies");
    return (
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl pt-16 text-center font-bold text-gray-800">
          <span className="text-blue-600 p-2.5 rounded-2xl bg-blue-200">
          {t("tech.headingHighlight")}
          </span>
          {t("tech.heading")}
        </h2>
        <p className="text-xl text-center font-medium text-gray-600 mt-4">
        {t("tech.description")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 container mt-10 mx-auto px-4">
          {technologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="shadow-[5px_5px_0px_0px_rgb(147,197,253)] p-4 md:p-8"
            >
              <div className="flex flex-col items-center justify-center h-24 md:h-16">
                <div className="w-14 h-14 md:w-16 md:h-16 mb-2">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-lg md:text-xl text-center font-light">
                  {tech.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Technologies;
  