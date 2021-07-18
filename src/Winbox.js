import React, { useEffect, createContext } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "winbox";
import ReactDOM from "react-dom";

const WinboxContext = createContext();
const callWinBox = function ({
  title,
  id,
  div,
  closeHelper,
  moveHelper,
  focusHelper,
  blurHelper,
  resizeHelper,
}) {
  return window.WinBox.new({
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
};

const WinboxProvider = ({ children }) => {
  const CallWinBox = ({
    title,
    id,
    childComp,
    closeHelper,
    moveHelper,
    focusHelper,
    blurHelper,
    resizeHelper,
  }) => {
    var div = document.createElement("div");
    ReactDOM.render(<Provider store={store}>{childComp}</Provider>, div);
    callWinBox({
      title,
      id,
      div,
      closeHelper,
      moveHelper,
      focusHelper,
      blurHelper,
      resizeHelper,
    })
      .resize("50%", "50%")
      .move("center", "center");
  };

  return (
    <WinboxContext.Provider value={{ CallWinBox }}>
      {children}
    </WinboxContext.Provider>
  );
};
export  {WinboxContext, WinboxProvider};
