import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../../assets/MoonIcon";
import { SunIcon } from "../../assets/SunIcon";

export default function SwitchButton() {
  return (
    <Switch defaultSelected size="lg" color="secondary" thumbIcon={({ isSelected, className }) => (isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />)}>
      Dark mode
    </Switch>
  );
}
