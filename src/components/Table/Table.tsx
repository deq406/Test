import { useState } from "react";
import { Table as Tableantd } from "antd";
import Input from "antd/es/input/Input";
import { SearchOutlined } from "@ant-design/icons";

interface FilterProps {
  setSelectedKeys: any;
  selectedKeys: any;
  confirm: any;
}

export const Table: React.FC = () => {
  const [dataSource, setDataSource] = useState([
    {
      name: "Jonh",
      age: 32,
      address: "NY",
      phone: "+375296519164",
      email: "egormartin0@gmail.com",
    },
    {
      name: "Vanya",
      age: 32,
      address: "NY",
      phone: "+375296519164",
      email: "egormartin0@gmail.com",
    },
    {
      name: "Sergey",
      age: 32,
      address: "NY",
      phone: "+375296519164",
      email: "egormartin0@gmail.com",
    },
    {
      name: "Jonh",
      age: 32,
      address: "NV",
      phone: "+375296519164",
      email: "egormartin0@gmail.com",
    },
    {
      name: "Jonh",
      age: 32,
      address: "UK",
      phone: "+375296519164",
      email: "egormartin0@gmail.com",
    },
    {
      name: "Jonh",
      age: 32,
      address: "RB",
      phone: "+375296519164",
      email: "egormartin0@gmail.com",
    },
    {
      name: "Jonh",
      age: 23,
      address: "NY",
      phone: "+375296519164",
      email: "egormartin0@gmail.com",
    },
    {
      name: "Egor",
      age: 32,
      address: "NY",
      phone: "+375296519164",
      email: "egormartin0@gmail.com",
    },
    {
      name: "Egor",
      age: 32,
      address: "NY",
      phone: "+375296519164",
      email: "egormartin0@gmail.com",
    },
    {
      name: "Egor",
      age: 32,
      address: "NY",
      phone: "+375296519164",
      email: "egormartin0@gmail.com",
    },
  ]);
  const [page, SetPage] = useState(1);
  const [pageSize, SetPageSize] = useState(5);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
      }: FilterProps) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Поиск"
              value={selectedKeys[0]}
              onChange={(e) =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
          </>
        );
      },
      onFilter: (value: any, record: any) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
      filterIcon: () => {
        return <SearchOutlined></SearchOutlined>;
      },
    },
    { title: "Age", dataIndex: "age" },
    { title: "Address", dataIndex: "address" },
    { title: "Phone", dataIndex: "phone" },
    { title: "Email", dataIndex: "email" },
  ];
  return (
    <>
      <Tableantd
        columns={columns}
        dataSource={dataSource}
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            SetPage(page);
            SetPageSize(pageSize);
          },
        }}
      />
    </>
  );
};
