import Header from "../components/Header";
import ClassCard from "../components/ClassCard";

const Classes = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-end mr-25 items-center"></div>
      <div className="ml-25 mr-25 mt-10">
        <div className="bg-cyan-950 rounded-2xl p-5 flex flex-wrap justify-between">
          <ClassCard name="Pilates" date="4-29" duration={60} trainer="Steve" />
          <ClassCard name="Reformer" date="4-29" duration={60} trainer="Steve" />
          <ClassCard name="Yoga" date="4-29" duration={60} trainer="Steve" />
        </div>
      </div>
    </div>
  );
};

export default Classes;
