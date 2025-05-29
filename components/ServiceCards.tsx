import { FaExchangeAlt, FaListUl, FaSearch, FaFileAlt } from "react-icons/fa";

export default function ServicesCards() {
  const services = [
    {
      icon: <FaExchangeAlt className="text-2xl text-primary" />,
      title: "CGPA Conversion",
      description:
        "Accurate conversion of your CGPA/Percentage to the German grading system by our experts.",
    },
    {
      icon: <FaListUl className="text-2xl text-primary" />,
      title: "Short Listing",
      description:
        "Personalized list of degree courses perfectly matched to your academic profile.",
    },
    {
      icon: <FaSearch className="text-2xl text-primary" />,
      title: "Deficiencies",
      description:
        "Comprehensive evaluation to identify and resolve potential application shortcomings.",
    },
    {
      icon: <FaFileAlt className="text-2xl text-primary" />,
      title: "Visa Documents",
      description:
        "Precise preparation of all required embassy documents for seamless processing.",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Services</h1>
          <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div
              className={`p-6 ${
                index % 2 == 0 ? "bg-primary" : "bg-secondary"
              } flex justify-center`}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                {service.icon}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-textp mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
