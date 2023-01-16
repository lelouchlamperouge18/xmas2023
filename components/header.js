import React, { useState } from "react";
import Link from 'next/link'
import {
  AppstoreOutlined,
  HomeOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const items = [
  {
    label: (
      <Link href="/">
        Home
      </Link>
    ),
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: (
      <Link href="/traditions">
        Traditions
      </Link>
    ),
    key: "traditions",
    icon: <MailOutlined />,
  },
  {
    label: "Foods and Drinks",
    key: "food",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Quiz",
    key: "quiz",
    icon: <MailOutlined />,
  },
  {
    label: "Carols",
    key: "carols",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Other Topics",
    key: "other",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Decorations",
        children: [
          {
            label: "Inside",
            key: "setting:1",
          },
          {
            label: "Outside",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Feedback",
        children: [
          {
            label: "Rating",
            key: "setting:3",
          },
          {
            label: "Contributions",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://www.youtube.com/channel/UCj94ms5ojYZvhL1SHaxpmAA" target="_blank" rel="noopener noreferrer">
        Youtube Channel
      </a>
    ),
    key: "youtube-channel",
  },
  {
    label: "About us",
    key: "about",
    icon: <MailOutlined />,
  },
];

export default function Header() {
  const [current, setCurrent] = useState("about");

  const onClick = (e) => {
    console.log("Recent selected tab: ", e);
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ minWidth: 0, flex: "auto" }}
        className="items-center justify-center" 
      />
    </div>
  );
}
