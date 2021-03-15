import {
  Card,
  Avatar,
} from 'antd';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import styles from './index.module.css'
import {
  UserOutlined,
} from '@ant-design/icons';


export default function MyAside() {
  return (
    <div className={styles.mySider}>
      <Card bordered={true}  >
        <Avatar size={64} icon={<UserOutlined />} /><br/>
        <div className={styles.mySiderBackGround}>

        </div>
      </Card>
      <div>
        备©个鬼
      </div>
    </div>
  );
}
