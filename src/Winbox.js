import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "winbox";
import ReactDOM from "react-dom";

const WinboxWrapper = ({
  title,
  id,
  children,
  isvisible,
  closeHelper,
  moveHelper,
  focusHelper,
  blurHelper,
  resizeHelper
}) => {
  useEffect(() => {
    if (isvisible) {
      var div = document.createElement("div");
      ReactDOM.render(<Provider store={store}>{children}</Provider>, div);
      const winbox = window.WinBox.new({
        id: "my-window",
        class: ["no-full", "my-theme"],
        root: document.body,
        title: "All Options",
        background: "#fff",
        border: 4,
        x: "center",
        y: "center",
        max: false,
        splitscreen: true,
        top: 50,
        right: 50,
        bottom: 0,
        left: 50,
        mount: div,
        onfocus: focusHelper,
        onblur: blurHelper,
        onresize: resizeHelper,
        onmove: moveHelper,
        onclose: closeHelper,
      });
      winbox.resize("50%", "50%").move("center", "center");
    }
  }, [title, id, children, isvisible]);

  return null;
};
export default WinboxWrapper;
