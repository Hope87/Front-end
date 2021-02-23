import { connect } from "react-redux";
import { increment, decrement } from "../../redux/timer/timerActions";
import Timer from "./Timer";
import { getStep, getValue } from "../../redux/timer/TimerSelectors";

const mapStateToProps = (state) => ({
  value: getValue(state),
  step: getStep(state),
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (step) => dispatch(increment(step)),
  onDecrement: (step) => dispatch(decrement(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
