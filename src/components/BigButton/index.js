import { Link } from "react-router-dom";
import "./style.css";

export default function BigButton(props) {
  const { text, link } = props;
  return (
    <a
      href={link}
      className="btn-big">
      {text}
    </a>
  );
}