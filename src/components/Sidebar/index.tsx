import React from "react";
import { SidebarStyles } from "./Sidebar.styled";

const Sidebar = () => {
  return (
    <SidebarStyles>
      <table className="table">
        <tr>
          <th>#</th>
          <th>Время</th>
          <th>ao5</th>
          <th>ao12</th>
        </tr>
        <tr>
          <td>2</td>
          <td>16.56</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>1</td>
          <td>24.3</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </table>

    </SidebarStyles>
  );
};

export default Sidebar;
