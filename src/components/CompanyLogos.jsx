import { companyLogos } from "../constants/index";
const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline ">
        Helping people to create beautiful content at{" "}
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <img alt="company" src={logo} width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
