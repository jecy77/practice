import Dah from "./Dah";
import Sub from "./Sub";

export default function Body(props) {
  return (
    <>
      <div className="h-auto flex flex-row w-screen flex-grow">
        <Dah />
        <Sub />
      </div>
    </>
  );
}
