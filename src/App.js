import React, { Component } from "react";
import ListItem from "./components/ListItem";

class App extends Component {
  constructor(props) {
    super(props);
    const open = "8:00";
    const close = "20:00";
    const interval = 30;
    const staffPerInterval = 8;
    let availableHours =
      parseInt(close.split(":")[0]) - parseInt(open.split(":")[0]);
    const totalIntervals = (availableHours * 60) / interval;
    let hh = parseInt(open.split(":")[0]);
    let mm = parseInt(open.split(":")[1]);
    // debugger;
    const timeIntervals = new Array(totalIntervals);
    // debugger;
    // for (let i = 0; i < timeIntervals.length; i++) {
    //   if (i === 0) {
    //     timeIntervals[i] = (
    //       <ListItem time={(hh, mm)} staff={staffPerInterval} key={i} />
    //     );
    //   } else if ((mm + interval) % 60 !== 0) {
    //     mm += interval;
    //     timeIntervals[i] = (
    //       <ListItem
    //         time={(hh, mm + interval)}
    //         staff={staffPerInterval}
    //         key={i}
    //       />
    //     );
    //   } else {
    //     hh += 1;
    //     mm += interval;
    //     timeIntervals[i] = (
    //       <ListItem
    //         time={(hh + 1, mm + interval)}
    //         staff={staffPerInterval}
    //         key={i}
    //       />
    //     );
    //   }
    // }
    this.state = {
      timeIntervals: timeIntervals,
      hh: hh,
      mm: mm,
      staffPerInterval: staffPerInterval,
      interval: interval,
    };
  }
  render() {
    debugger;
    const { timeIntervals, hh, mm, staffPerInterval, interval } = this.state;
    const element = <h1>hola</h1>;
    return (
      <>
        <ul>
          {timeIntervals
            .map((item, i) => {
              if (i === 0) {
                return (
                  <ListItem time={(hh, mm)} staff={staffPerInterval} key={i} />
                );
              } else if ((mm + interval) % 60 !== 0) {
                return (
                  <ListItem
                    time={(hh, mm + interval)}
                    staff={staffPerInterval}
                    key={i}
                  />
                );
              } else {
                return (
                  <ListItem
                    time={(hh + 1, mm + interval)}
                    staff={staffPerInterval}
                    key={i}
                  />
                );
              }
            })
            .join("")}
        </ul>
      </>
    );
  }
}

export default App;
