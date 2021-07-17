import React, { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import "winbox";
import ReactDOM from "react-dom";

const WinboxWrapper = ({ title, id, children,isvisible,closeHelper }) => {
  useEffect(() => {
      if(isvisible){
          var div = document.createElement("div");
          ReactDOM.render(<Provider store={store}>{children}</Provider>, div);
          window.WinBox.new({ mount: div , onclose: function(force){ closeHelper && closeHelper(force) }});
      }
  }, [title, id, children, isvisible]);

  return null;
};
export default WinboxWrapper;
