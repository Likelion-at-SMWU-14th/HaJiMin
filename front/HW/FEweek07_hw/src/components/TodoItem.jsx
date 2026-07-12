import ellipseBlank from "../assets/ellipse_blank.svg";
import ellipseChecked from "../assets/ellipse_checked.svg";

function TodoItem({ status, detail }) {
  return (
    <div className="todo-item">
      <img
        className="todo-status"
        src={status === "blank" ? ellipseBlank : ellipseChecked}
        alt={status === "blank" ? "미완료" : "완료"}
      />
      <span className="todo-detail">{detail}</span>
    </div>
  );
}
export default TodoItem;
