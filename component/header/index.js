import {
  Layout,
  Menu,
  Dropdown,
} from 'antd';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import styles from './index.module.css'
import {
  MenuOutlined
} from '@ant-design/icons';
const { Header } = Layout;
export default function MyHeader() {
  return (
    <Header className={styles.myHeader}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} className={styles.headerMenuPc}>
        <Menu.Item key="1">首页</Menu.Item>
        <Menu.Item key="2">分类</Menu.Item>
        <Menu.Item key="3">标签</Menu.Item>
      </Menu>
      <Menu theme="dark" className={styles.headerMenuPhone}>
        <Dropdown overlay={(
          <Menu>
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">分类</Menu.Item>
            <Menu.Item key="3">标签</Menu.Item>
          </Menu>
        )} trigger={['click', 'hover']}>
          <MenuOutlined style={{ fontSize: 25 }} />
        </Dropdown>
      </Menu>
    </Header>
  )
}
