import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import "./Socials.css";

export default function Socials(props) {
  return (
    <div className="flex" style={{ gap: "0.75rem" }}>
      <a
        href="https:www.facebook.com"
        className="right-icons flex"
        style={{
          backgroundColor: props.bgClr,
          fontSize: props.fSize,
          width: props.width,
          height: props.width,
        }}
        target="_blank"
        rel="noreferrer noopener"
      >
        <RiFacebookFill style={{ color: props.clr }} />
      </a>
      <a
        href="https:www.instagram.com"
        className="right-icons flex"
        style={{
          backgroundColor: props.bgClr,
          fontSize: props.fSize,
          width: props.width,
          height: props.width,
        }}
        target="_blank"
        rel="noreferrer noopener"
      >
        <RiInstagramLine style={{ color: props.clr }} />
      </a>
      <a
        href="https:www.twitter.com"
        className="right-icons flex"
        style={{
          backgroundColor: props.bgClr,
          fontSize: props.fSize,
          width: props.width,
          height: props.width,
        }}
        target="_blank"
        rel="noreferrer noopener"
      >
        <RiTwitterFill style={{ color: props.clr }} />
      </a>
    </div>
  );
}
