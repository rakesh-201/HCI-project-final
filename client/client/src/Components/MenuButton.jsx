import React from "react";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";

function MenuButton() {
  return (
    <CircleMenu
      startAngle={-90}
      rotationAngle={360}
      itemSize={2}
      radius={5}
      rotationAngleInclusive={false}
    >
      <CircleMenuItem
        onClick={() => window.location.href = "https://8501-rakesh201-hciprojectfin-hu6kblgzct8.ws-us98.gitpod.io/"}
        tooltip="Category"
        tooltipPlacement={TooltipPlacement.Right}
        // style={{ color: "yellow" }}
      >
        <i class="fa-solid fa-list"></i>
      </CircleMenuItem>
      <CircleMenuItem tooltip="Top Seller">
      <i class="fa-solid fa-utensils"></i>
      </CircleMenuItem>
      <CircleMenuItem tooltip="Home">
        <i class="fa fa-home" aria-hidden="true"></i>
      </CircleMenuItem>
      <CircleMenuItem tooltip="About">
        ​<i class="fa-solid fa-people-group"></i>
      </CircleMenuItem>
    </CircleMenu>
  );
}

export default MenuButton;
