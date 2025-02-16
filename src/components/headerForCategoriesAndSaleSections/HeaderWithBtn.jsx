import React from "react";
import s from "./HeaderWithBtn.module.css";
import { NavLink } from "react-router-dom";

export default function HeaderWithBtn({ headerText, btnText, path }) {
  return (
    <div className={s.mainContainer}>
      <div className={s.header}>
        <div>
          <h2>{headerText}</h2>
        </div>
        <div className={s.lineButtonCont}>
          {/* Линия, ведущая к кнопке 'All categories' или 'All sales' */}
          <div className={s.line}></div>
          <div>
            <NavLink to={path}>
              <button>{btnText}</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
