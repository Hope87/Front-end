import { connect } from "react-redux";
import { getContactsByName } from "../../redux/phoneSelectors";
import { deleteContact } from "../../redux/phoneOperations";
import PhoneList from "./PhoneList";

const mapStateToProps = (state) => ({
  items: getContactsByName(state),
});

const mapDispatchToProps = {
  onDelete: deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
