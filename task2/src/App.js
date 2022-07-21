import items from "./itemList";
import { useState } from "react";
import Categories from "./Categories";
import TableHead from "./TableHead";
// hello
export default function App() {
  const [showdata, setShowdata] = useState(false);
  const [data, setData] = useState(items);
  let arr = [];
  let temp = null;
  const handleClick = () => {
    setShowdata(preval => !preval)
  };
  const handleSearch = (e) => {
    {
      let finaldata = items.filter((row) => {
        if (e.target.value === "") {
          return row;
        }
        else if (row.name.toLowerCase().includes(e.target.value)) {
          return row;
        }
      });
      if (finaldata) {
        setData(finaldata);
      } else {
        setData(items);
      }

    }
  };

  data.filter(ele => {
    return showdata ? ele.stocked : ele
  }).forEach(element => {

    if (element.category !== temp) {
      arr.push(<TableHead props={element.category} />)
    }
    arr.push(<Categories props={element} />)
    temp = element.category
  })
  return (
    <div>
      <hr></hr>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      <br></br>
      <input type="checkbox" onClick={handleClick} />
      <label htmlFor=""> Only show products in stock
      </label>
      <hr></hr>
      <thead>
        <tr >
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <hr></hr>

      {arr}
      <hr></hr>
    </div>
  );
}
