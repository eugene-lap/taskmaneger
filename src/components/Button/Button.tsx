import { MouseEventHandler } from "react";
import "./button.scss";

export const Button = ({
  onClick,
  text,
  bgColor,
  textColor,
  fontSize,
  //borderColor,
  borderRadius
}: {
  text: string;
  bgColor: string;
  textColor: string;
  fontSize: string;
  //borderColor?: string;
  borderRadius: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="button"
      onClick={onClick}
      style={{
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
        //border: borderColor && `1.5px solid ${borderColor}`,
        cursor: onClick ? "pointer" : "auto",
        fontSize: `${fontSize}px`,
        borderRadius: `${borderRadius}px`
      }}
    >
        {text}
    </button>
  );
};
