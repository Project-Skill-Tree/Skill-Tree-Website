import React, { useEffect, useRef, useState } from "react";
import "./popup.css"
import {useScrollContext} from "../SmoothScroll/scroll-context";

export const Popup = ({show, onClose, children, style = {} }) => {
  const { previous } = useScrollContext();
  const ref = useRef()
  const popupBody = useRef()

  useEffect(() => {
    popupBody.current.classList.toggle('active');
  }, [show])

  useEffect(() => {
    ref.current.style.setProperty("--scroll", `${previous}px`);
  }, [previous]);

  return (
    <div id="popup"
         className="popup"
         style={{display: show ? "flex" : "none"}}
         ref={ref}
         onClick={onClose}>
      <div className={"popup-content"}
           ref={popupBody}
           style={style}
           onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};