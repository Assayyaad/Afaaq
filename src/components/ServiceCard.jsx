const ServiceCard = ({ img, desc }) => {
  return (
    <div
      className="card shadow-md rounded-md p-6 flow-content--m max-w-[550px] group hover:bg-cyan-500 duration-300"
      data-aos="zoom-in"
      data-aos-delay="500"
    >
      <div className="img-wrapper">
        <img
          src={img}
          alt={"Service image"}
          className="w-[150px] h-[150px] rounded-full mx-auto"
        />
      </div>
      <p className="description max-w-[450px] group-hover:text-white duration-300">
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;
