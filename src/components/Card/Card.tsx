import { Space } from "antd";
import { Calendar } from "../Calendar/Calendar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Lesson } from "../Lesson/Lesson";
import { Report } from "../Report/Report";
import { Details } from "../Details/Details";
import styles from "./Card.module.scss";
export const Card: React.FC = () => {
  const lessonData = useSelector((state: RootState) => state.lesson.data);

  return (
    <Space direction="vertical" size={"large"} className={styles.container}>
      <Calendar></Calendar>
      <Space size={"small"} style={{ display: "flex" }} wrap>
        {lessonData.map((lesson, index) => (
          <>
            <Lesson
              key={index}
              status={lesson.status}
              dayOfWeek={lesson.dayOfWeek}
              date={lesson.date}
            />
          </>
        ))}
      </Space>
      <Report></Report>
      <Details></Details>
    </Space>
  );
};
