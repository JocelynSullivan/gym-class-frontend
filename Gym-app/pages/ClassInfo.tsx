import ClassCard from "../components/ClassCard";
import { NavLink } from "react-router-dom";

const ClassInfo = () => {
  return (
    <div>
      <div className="bg-cyan-950 p-8 mb-20">
        <nav className="flex justify-center text-white list-none text-4xl">
          <h1>Class Info</h1>
        </nav>
      </div>

      <div className="p-5 rounded-3xl">
        <div className="flex flex-row pl-10">
          <NavLink to="/classes">
            <ClassCard />
          </NavLink>
          <div>
            <h1 className="pt-15 text-2xl text-white">Class Name - </h1>
            <NavLink to="/trainers">
              <h1 className="pt-20 text-2xl text-white">Instructor - </h1>
            </NavLink>
            <h1 className="pt-20 text-2xl text-white">Duration - </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassInfo;
