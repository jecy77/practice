import Dah from "./Dah";
import Soj from "./Soj";
import Sub from "./Sub";

export default function Body(props) {
  return (
    <>
      <div className="h-auto flex flex-row w-screen flex-grow">
        <Dah />
        <Sub />
        <Soj></Soj>
      </div>
    </>
  );
}
