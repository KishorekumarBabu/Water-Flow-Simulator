import React, { Component } from "react";
import WaterFlowGridCreator from "./components/WaterFlowGridCreator";
import WaterSimulator from "./components/WaterSimulator";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowCount: 5,
      columnCount: 5,
      blockCount: 3,
      shouldShowWaterSimulatorScreen: false
    };
  }

  handleGridCreatorChange = (fieldName, e) => {
    const { value } = e.target;
    this.setState({ [fieldName]: +value });
  };

  handleCurrentScreenChange = () => {
    this.setState((prevState) => {
      return {
        shouldShowWaterSimulatorScreen: !prevState.shouldShowWaterSimulatorScreen
      };
    });
  };

  render() {
    const {
      rowCount,
      blockCount,
      columnCount,
      shouldShowWaterSimulatorScreen
    } = this.state;
    return (
      <div className="app">
        <h1 className="header">Waterflow Simulator</h1>
        {!shouldShowWaterSimulatorScreen && (
          <WaterFlowGridCreator
            rowCount={rowCount}
            blockCount={blockCount}
            columnCount={columnCount}
            handleGridCreatorChange={this.handleGridCreatorChange}
            handleCurrentScreenChange={this.handleCurrentScreenChange}
          />
        )}
        {shouldShowWaterSimulatorScreen && (
          <WaterSimulator
            rowCount={rowCount}
            blockCount={blockCount}
            columnCount={columnCount}
            handleCurrentScreenChange={this.handleCurrentScreenChange}
          />
        )}
      </div>
    );
  }
}

export default App;
