import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import {ReactNode} from "react";
import {Chrono} from "react-chrono";

interface State {
}

class TimelineComponent extends StreamlitComponentBase<State> {
  public state = { }
  public render = (): ReactNode => {
      const items = this.props.args["items"];
      console.log(items);
      if (items && items.length > 0) {
          return (
              <Chrono
                  items={items}
                  mode="VERTICAL"
              />
          );
      } else {
          return (
              <span>
                  No timeline actions
              </span>
          )
      }

  }
}

export default withStreamlitConnection(TimelineComponent);