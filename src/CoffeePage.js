import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DataCard from "./DataCard";

function CoffeePage(data) {
  if (data.data.length <= 0) {
    return <span style={{ color: "red" }}>No Coffee today</span>;
  } else {
    return (
      <div className="coffeeItems">
        {data.data.map((element) => (
          <DataCard data={element} key={element.title}></DataCard>
        ))}
      </div>
    );
  }
}

export default CoffeePage;
