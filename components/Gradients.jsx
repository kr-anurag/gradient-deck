import Gradient from "./Gradient";
import data from "../data.json";

export default function Gradients() {

  const fetchData = async () => {
    console.log(data);
    data.gradients.map((d) => console.log(d));
  };

  fetchData();
  return (
    <div>
      <Gradient color1="#fafafa" color2="#fff" />
    </div>
  );
}
