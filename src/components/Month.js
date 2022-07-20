import Day from "./Day";
import {Fragment} from "react";

export default function Month({ month }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </Fragment>
      ))}
    </div>
  );
}
