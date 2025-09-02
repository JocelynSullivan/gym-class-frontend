import { NavLink } from "react-router-dom";
import TrainerCard from "../components/TrainerCard";

const Trainers = () => {
  return (
    <div>
      <header className="bg-cyan-950 p-8 mb-20">
        <nav className="flex justify-center text-white list-none text-4xl">
          <h1>Trainers</h1>
        </nav>
      </header>
      <div className="flex justify-end mr-25 items-center"></div>
      <div className="ml-25 mr-25 mt-10">
        <NavLink to="/class-info">
          <div className="bg-cyan-950 rounded-2xl p-5 flex flex-wrap justify-between">
            <TrainerCard />
            <TrainerCard />
            <TrainerCard />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Trainers;
