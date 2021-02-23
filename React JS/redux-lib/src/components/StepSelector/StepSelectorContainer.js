import { connect } from "react-redux";
import { changeStep } from "../../redux/timer/timerActions";
import StepSelector from "./StepSelector";
import { getStep } from "../../redux/timer/TimerSelectors";

const mapStateToProps = (state) => ({
  value: getStep(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (step) => dispatch(changeStep(step.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepSelector);
