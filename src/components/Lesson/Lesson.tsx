import styles from "./Lesson.module.scss";

export enum LessonStatus {
  SUCCESS = "success",
  SKIPED = "skiped",
  CANCELED = "canceled",
  PLANNED = "planned",
}

export interface LessonProps {
  status: LessonStatus;
  dayOfWeek: string;
  date: string;
}

export const Lesson: React.FC<LessonProps> = ({
  status,
  dayOfWeek,
  date,
}: LessonProps) => {
  return (
    <>
      {status === LessonStatus.SUCCESS && (
        <div className={styles.lessonBlock}>
          <div className={styles.dayOfWeek}>{dayOfWeek}</div>
          <div className={styles.date}>{date}</div>
        </div>
      )}
      {status === LessonStatus.SKIPED && (
        <div
          className={styles.lessonBlock}
          style={{ backgroundColor: "#EA5C5D80" }}
        >
          <div className={styles.dayOfWeek}>{dayOfWeek}</div>
          <div className={styles.date}>{date}</div>
        </div>
      )}
      {status === LessonStatus.PLANNED && (
        <div
          className={styles.lessonBlock}
          style={{ backgroundColor: "#E6E6E6" }}
        >
          <div className={styles.dayOfWeek}>{dayOfWeek}</div>
          <div className={styles.date}>{date}</div>
        </div>
      )}
      {status === LessonStatus.CANCELED && (
        <div
          className={styles.lessonBlock}
          style={{ backgroundColor: "#E6E6E6", textDecoration: "line-through" }}
        >
          <div className={styles.dayOfWeek}>{dayOfWeek}</div>
          <div className={styles.date}>{date}</div>
        </div>
      )}
    </>
  );
};
