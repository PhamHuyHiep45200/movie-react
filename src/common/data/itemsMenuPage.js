import {
  FundProjectionScreenOutlined,
  AppstoreAddOutlined,
  AuditOutlined,
} from "@ant-design/icons";

const items = [
  {
    key: "/movie",
    icon: <FundProjectionScreenOutlined />,
    label: "Quản lý phim",
  },
  {
    key: "/room",
    icon: <AppstoreAddOutlined />,
    label: "Quản lý phòng",
  },
  {
    key: "/users",
    icon: <AuditOutlined />,
    label: "Quản lý người dùng",
  },
];

export default items;
