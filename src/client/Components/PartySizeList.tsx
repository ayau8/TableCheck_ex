import React, { useState } from "react";
import { PartySize } from "../Pages/ShopBookingPage/PartySize";

type Props = {
  partySize: PartySize;
};

export const PartySizeList = ({ partySize }: Props): JSX.Element => {
  const [adultNum, setAdultNum] = useState(partySize["shop"].minNumPeople);
  const [childNum, setChildNum] = useState(0);
  const [babyNum, setBabyNum] = useState(0);
  const [seniorNum, setSeniorNum] = useState(0);
  const [min, setMin] = useState(partySize["shop"].minNumPeople);
  const [max, setMax] = useState(partySize["shop"].maxNumPeople);

  let menuList = partySize["menu"];

  let total = adultNum + childNum + babyNum + seniorNum;

  return (
    <div data-testid="Party Size List">
      <div data-testid="Party Size List Adults Counter">
        <label htmlFor="adultCounter">Adult Counter:</label>
        <button
          data-testid="Counter Add Button"
          onClick={() => setAdultNum(adultNum + 1)}
          disabled={total >= max || total < min}
        >
          +
        </button>
        <input type="text" disabled value={adultNum} />
        <button
          data-testid="Counter Subtract Button"
          onClick={() => setAdultNum(adultNum - 1)}
          disabled={total >= max || total <= min}
        >
          -
        </button>
      </div>

      {partySize["shop"].showSenior && (
        <div>
          <div data-testid="Party Size List Seniors Counter">
            <label htmlFor="seniorCounter">Seniors Counter:</label>
            <button
              data-testid="Counter Add Button"
              onClick={() => setSeniorNum(seniorNum + 1)}
              disabled={total >= max || total < min}
            >
              +
            </button>
            <input type="text" disabled value={seniorNum}></input>
            <button
              data-testid="Counter Subtract Button"
              onClick={() => setSeniorNum(seniorNum - 1)}
              disabled={total >= max || total <= min || seniorNum === 0}
            >
              -
            </button>
          </div>
        </div>
      )}

      {partySize["shop"].showBaby && (
        <div>
          <div data-testid="Party Size List Babies Counter">
            <label htmlFor="babyounter">Babies Counter:</label>
            <button
              data-testid="Counter Add Button"
              onClick={() => setBabyNum(babyNum + 1)}
              disabled={total >= max || total < min}
            >
              +
            </button>
            <input type="text" disabled value={babyNum}></input>
            <button
              data-testid="Counter Subtract Button"
              onClick={() => setBabyNum(babyNum - 1)}
              disabled={total >= max || total <= min || babyNum === 0}
            >
              -
            </button>
          </div>
        </div>
      )}

      {partySize["shop"].showChild && (
        <div>
          <div data-testid="Party Size List Children Counter">
            <label htmlFor="childrenCounter">Children Counter:</label>
            <button
              data-testid="Counter Add Button"
              onClick={() => setChildNum(childNum + 1)}
              disabled={total >= max || total < min}
            >
              +
            </button>
            <input type="text" disabled value={childNum}></input>
            <button
              data-testid="Counter Subtract Button"
              onClick={() => setChildNum(childNum - 1)}
              disabled={total >= max || total <= min || childNum === 0}
            >
              -
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
