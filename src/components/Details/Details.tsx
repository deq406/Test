import { DownOutlined } from "@ant-design/icons";
import styles from "./Details.module.scss";

export const Details: React.FC = () => {
  return (
    <div className={styles.Text}>
      Детализация <DownOutlined style={{ fontSize: "12px" }}></DownOutlined>
    </div>
  );
};
