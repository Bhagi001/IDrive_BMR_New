import React from "react";

const Activities = () => {
  return (
    <React.Fragment>
      <li>
        <div className="activities__table__col row__one">
          <span>John-PC</span>
        </div>
        <div className="activities__table__col row__two">
          <span>Incremental Backup</span>
        </div>
        <div className="activities__table__col row__three">
          Volume: <span>C</span>:
        </div>
        <div className="activities__table__col row__four">
          <span className="empty__line">
            <span className="percentage_txt">30%</span>
            <span className="filled__line" style={{ width: "30%" }} />
          </span>
        </div>
        <div className="activities__table__col row__five">
          <span>1 Hour 6 minutes</span>
        </div>
        <div className="activities__table__col row__six">
          <span>250.9 KBit/s</span>
        </div>
        <div className="activities__table__col row__seven ">
          <span className="view__logs__btn" />
        </div>
        <div className="activities__table__col row__eight ">
          <span className="stop__btn" />
        </div>
      </li>
      <li>
        <div className="activities__table__col row__one">
          <span>Michael-PC</span>
        </div>
        <div className="activities__table__col row__two">
          <span>Incremental Backup</span>
        </div>
        <div className="activities__table__col row__three">
          Volume: <span>D</span>:
        </div>
        <div className="activities__table__col row__four">
          <span className="empty__line">
            <span className="percentage_txt empty">Yet to start</span>
            <span className="filled__line" style={{ width: "0%" }} />
          </span>
        </div>
        <div className="activities__table__col row__five">
          <span>-</span>
        </div>
        <div className="activities__table__col row__six">
          <span>-</span>
        </div>
        <div className="activities__table__col row__seven ">
          <span className="view__logs__btn" style={{ display: "none" }} />
        </div>
        <div className="activities__table__col row__eight ">
          <span className="stop__btn" />
        </div>
      </li>
      <li>
        <div className="activities__table__col row__one">
          <span>Alex-PC</span>
        </div>
        <div className="activities__table__col row__two">
          <span>Incremental Backup</span>
        </div>
        <div className="activities__table__col row__three">
          Volume: <span>C</span>:
        </div>
        <div className="activities__table__col row__four">
          <span className="empty__line">
            <span className="percentage_txt">80%</span>
            <span className="filled__line" style={{ width: "80%" }} />
          </span>
        </div>
        <div className="activities__table__col row__five">
          <span>1 Hour 6 minutes</span>
        </div>
        <div className="activities__table__col row__six">
          <span>250.9 KBit/s</span>
        </div>
        <div className="activities__table__col row__seven ">
          <span className="view__logs__btn" />
        </div>
        <div className="activities__table__col row__eight ">
          <span className="stop__btn" />
        </div>
      </li>
      <li>
        <div className="activities__table__col row__one">
          <span>Sham-PC</span>
        </div>
        <div className="activities__table__col row__two">
          <span>Incremental Backup</span>
        </div>
        <div className="activities__table__col row__three">
          Volume: <span>C</span>:
        </div>
        <div className="activities__table__col row__four">
          <span className="empty__line">
            <span className="percentage_txt">40%</span>
            <span className="filled__line" style={{ width: "40%" }} />
          </span>
        </div>
        <div className="activities__table__col row__five">
          <span>1 Hour 6 minutes</span>
        </div>
        <div className="activities__table__col row__six">
          <span>250.9 KBit/s</span>
        </div>
        <div className="activities__table__col row__seven ">
          <span className="view__logs__btn" />
        </div>
        <div className="activities__table__col row__eight ">
          <span className="stop__btn" />
        </div>
      </li>
    </React.Fragment>
  );
};

export default Activities;
