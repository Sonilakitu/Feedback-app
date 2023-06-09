import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
// import PropTypes from "prop-types";
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // const average =
  //   feedback.length === 0
  //     ? 0
  //     : feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length;
  const average =
    feedback.length === 0
      ? 0
      : feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length;

  console.log(average);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average.toFixed(1).replace(/[.,]0$/, "")}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// };
export default FeedbackStats;
