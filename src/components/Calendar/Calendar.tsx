import { DatePicker } from "antd";
import styles from "./Calendar.module.scss";
import { Space } from "antd";
import { useDispatch } from "react-redux";
import { addDates } from "../../redux/slices/calendar";
import { fetchDates } from "../../redux/slices/calendar";
import { AppDispatch } from "../../redux/store";
import React from "react";
const { RangePicker } = DatePicker;
export const Calendar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onCalendarChange = (dates: any, dateStrings: any): void => {
    dispatch(addDates(dateStrings));
    dispatch(fetchDates(dateStrings));
  };
  return (
    <div className={styles.cardHeader}>
      <Space size={"small"} wrap>
        <p className={styles.text}>Посещения</p>
        <RangePicker
          format={"DD.MM.YYYY"}
          onCalendarChange={onCalendarChange}
        ></RangePicker>
      </Space>
      <p className={styles.dayPeriod}>Выбранный период: 45 дней</p>
    </div>
  );
};
