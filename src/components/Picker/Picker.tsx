import dayjs, { Dayjs } from "dayjs";
import { DatePicker as AntDatePicker } from "antd";
import { DatePickerProps as AntDatePickerProps } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import locale from "antd/es/date-picker/locale/ru_RU";
import "dayjs/locale/ru";
import { useState } from "react";
import "./Picker.css";

export type DatePickerProps = AntDatePickerProps;

const dateFormat = "YYYY.MM.DD";

const DatePicker: React.FC = ({ ...props }: DatePickerProps) => {
  const [open, setOpen] = useState<boolean>();
  const [day, setDay] = useState<Dayjs | undefined>();
  const [defaultValue, setDefaultValue] = useState<Dayjs | undefined>(
    undefined
  );
  const [dateStringState, setDateString] = useState<string[]>();
  const onChange: DatePickerProps["onChange"] = (
    val: Dayjs | null,
    dateString: string
  ): void => {
    if (defaultValue) {
      val && setDay(val);
    } else {
      val && setDefaultValue(val);
    }

    if (day && defaultValue) {
      if (defaultValue < day) {
        setOpen(false);
        setDateString([
          dayjs(defaultValue).format(dateFormat),
          dayjs(day).format(dateFormat),
        ]);
        setDay(undefined);
        setDefaultValue(undefined);
      } else {
        alert("Установите верный диапазон");
      }
    }
  };
  const openChange = (open: boolean) => {
    if (open) {
      setOpen(open);
    }
  };
  const customStartEndFormat: DatePickerProps["format"] = (value) => {
    if (dateStringState)
      return `${dayjs(dateStringState[0]).format(dateFormat)} - ${dayjs(
        dateStringState[1]
      ).format(dateFormat)}`;
    return "";
  };

  const datePicker = (
    <AntDatePicker
      format={customStartEndFormat}
      locale={locale}
      open={open}
      onOpenChange={openChange}
      defaultValue={defaultValue}
      onChange={onChange}
      suffixIcon
      {...props}
    />
  );

  return datePicker;
};

export default DatePicker;
