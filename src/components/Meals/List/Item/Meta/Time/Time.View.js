import React from "react";
import moment from "moment";

import * as Time from "./Time.Styles";

export const TimeEditor = props => {
  const { hour, setHour, min, setMin, toggle, setTime } = props;

  const minHour = 0;
  const maxHour = 23;
  const minMin = 0;
  const maxMin = 59;

  const checkHourBounds = val => val >= minHour && val <= maxHour;
  const checkMinBounds = val => val >= minMin && val <= maxMin;

  return (
    <Time.Container>
      <Time.Controls>
        <Time.Group>
          <Time.Button
            onClick={() => setHour(Number(hour) + 1)}
            disabled={hour >= maxHour}
          >
            <Time.Icon icon={["fas", "chevron-up"]} />
          </Time.Button>
          <Time.Input
            type="number"
            placeholder="00"
            value={hour}
            onChange={e =>
              checkHourBounds(e.target.value) ? setHour(e.target.value) : null
            }
          />
          <Time.Button
            onClick={() => setHour(Number(hour) - 1)}
            disabled={hour <= minHour}
          >
            <Time.Icon icon={["fas", "chevron-down"]} />
          </Time.Button>
        </Time.Group>
        <Time.Span>:</Time.Span>
        <Time.Group>
          <Time.Button
            onClick={() => setMin(Number(min) + 1)}
            disabled={min >= maxMin}
          >
            <Time.Icon icon={["fas", "chevron-up"]} />
          </Time.Button>
          <Time.Input
            type="number"
            placeholder="00"
            value={min}
            onChange={e =>
              checkMinBounds(e.target.value) ? setMin(e.target.value) : null
            }
          />
          <Time.Button
            onClick={() => setMin(Number(min) - 1)}
            disabled={min <= minMin}
          >
            <Time.Icon icon={["fas", "chevron-down"]} />
          </Time.Button>
        </Time.Group>
      </Time.Controls>
      <Time.Buttons>
        <Time.Button onClick={setTime}>
          <Time.Icon icon={["fas", "check"]} />
        </Time.Button>
        <Time.Button onClick={toggle}>
          <Time.Icon icon={["fas", "times"]} />
        </Time.Button>
      </Time.Buttons>
    </Time.Container>
  );
};

export const TimeDisplay = ({ time, toggle }) => (
  <Time.Display onClick={toggle}>{moment(time).format("H:mm")}</Time.Display>
);
