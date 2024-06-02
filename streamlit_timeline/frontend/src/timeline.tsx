import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import {Chrono} from "react-chrono";

interface State {
  isFocused: boolean
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class StreamlitTimeline extends StreamlitComponentBase<State> {
  public state = {isFocused: false }

  public render = (): ReactNode => {
    const items = this.props.args["items"];
	const titleDateFormat = "DD.MM YYYY";

    // Streamlit sends us a theme object via props that we can use to ensure
    // that our component has visuals that match the active theme in a
    // streamlit app.
    const { theme } = this.props
    // Show a button and some text.
    // When the button is clicked, we'll increment our "numClicks" state
    // variable, and send its new value back to Streamlit, where it'll
    // be available to the Python program.
	if (items && items.length > 0 && theme) {
        return (
              <div>
              <Chrono items={items} mode="VERTICAL" disableToolbar={true} titleDateFormat={titleDateFormat} enableOutline cardHeight={30} theme={{
    primary: theme.primaryColor,
    cardBgColor: theme.backgroundColor,
    titleColor: theme.textColor,
    titleColorActive: 'red',
  }}/></div>
          );

      } else {
          return (
              <span>
                  No timeline actions
              </span>
          )
      }
  }

  /** Click handler for our "Click Me!" button. */
  /** Focus handler for our "Click Me!" button. */
  private _onFocus = (): void => {
    this.setState({ isFocused: true })
  }

  /** Blur handler for our "Click Me!" button. */
  private _onBlur = (): void => {
    this.setState({ isFocused: false })
  }
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(StreamlitTimeline)
