import { Space } from "antd";
import styles from "./Report.module.scss";
import { LessonStatus } from "../Lesson/Lesson";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Report: React.FC = () => {
  const lessonData = useSelector((state: RootState) => state.lesson.data);
  const countLesssons = (status: LessonStatus): number => {
    return lessonData.filter((x) => x.status === status).length;
  };
  return (
    <Space size={[8, 16]} wrap className={styles.container}>
      <div className={styles.reportLesson}>
        <div className={styles.coloredBlockSuccess}></div>
        <p>Проведено: {countLesssons(LessonStatus.SUCCESS)}</p>
      </div>
      <div className={styles.reportLesson}>
        <div className={styles.coloredBlockSkiped}></div>
        <p>Пропущено: {countLesssons(LessonStatus.SKIPED)}</p>
      </div>
      <div className={styles.reportLesson}>
        <div className={styles.coloredBlockCanceled}></div>
        <p>Отменено: {countLesssons(LessonStatus.CANCELED)}</p>
      </div>
      <div className={styles.reportLesson}>
        <div className={styles.coloredBlockPlanned}></div>
        <p>Запланировано: {countLesssons(LessonStatus.PLANNED)}</p>
      </div>
    </Space>
  );
};
