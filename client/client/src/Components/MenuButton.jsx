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
        onClick={() =>
          (window.location.href =
            "https://8501-rakesh201-hciprojectfin-hu6kblgzct8.ws-us98.gitpod.io/")
        }
        tooltip="Practice"
        tooltipPlacement={TooltipPlacement.Right}
        // style={{ color: "yellow" }}
      >
        ​<i class="fa-solid fa-people-group"></i>
      </CircleMenuItem>
      <CircleMenuItem
        tooltip="Settings"
        onClick={() =>
          (window.location.href =
            "https://8501-rakesh201-hciprojectfin-hu6kblgzct8.ws-us98.gitpod.io/")
        }
      >
        <i class="fa-solid fa-gear"></i>
      </CircleMenuItem>
      <CircleMenuItem
        tooltip="Theme"
        onClick={() =>
          (window.location.href =
            "https://8501-rakesh201-hciprojectfin-hu6kblgzct8.ws-us98.gitpod.io/")
        }
      >
        <i class="fa-regular fa-image"></i>
      </CircleMenuItem>
      <CircleMenuItem
        tooltip="Feedback"
        onClick={() =>
          (window.location.href =
            "https://8501-rakesh201-hciprojectfin-hu6kblgzct8.ws-us98.gitpod.io/")
        }
      >
        <i class="fa-solid fa-phone"></i>
      </CircleMenuItem>
    </CircleMenu>
  );
}

export default MenuButton;
