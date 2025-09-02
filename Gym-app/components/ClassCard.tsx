import { NavLink } from "react-router-dom";

type ClassCardInfo = {
  id?: number;
  name: string;
  trainer_id?: string;
  trainer: string;
  date: string;
  duration?: number;
};

const ClassCard: React.FC<ClassCardInfo> = ({ name, date, duration, trainer_id }) => {
  return (
    <NavLink to="/class-info">
      <div className="text-white bg-cyan-900 rounded-2xl w-70 h-76 m-10">
        <img src="../src/assets/class.jpeg" alt="Class" className=" p-5 rounded-3xl" />
        <div className="pl-10">
          <h1 className="mt-3">{name} </h1>
          <h3 className="mt-2">{trainer_id}</h3>
          <h3 className="mt-2">{date}</h3>
          <h3 className="mt-2">{duration}</h3>
        </div>
      </div>
    </NavLink>
  );
};

export default ClassCard;
