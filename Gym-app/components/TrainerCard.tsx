import { NavLink } from "react-router-dom";

type TrainerCardInfo = {
  id?: number;
  name: string;
  specialty?: string;
  classes: string;
};

const TrainerCard: React.FC<TrainerCardInfo> = ({ name, classes }) => {
  return (
    <NavLink to="/class-info">
      <div className="text-white bg-cyan-900 rounded-2xl w-70 h-76 m-10">
        <img src="../src/assets/trainer.jpeg" alt="Class" className=" p-5 rounded-3xl" />
        <div className="pl-10">
          <h1 className="mt-3">{name} </h1>
          <h3 className="mt-2">{classes}</h3>
        </div>
      </div>
    </NavLink>
  );
};

export default TrainerCard;
