import {
  Card,
} from 'antd';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import styles from './index.module.css'
import {

} from '@ant-design/icons';


export default function MyAside() {
  return (
    <div className={styles.mySider}>
      <Card title="Card title" bordered={true} className={styles.myContentCard} >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <div>
        备©个鬼
      </div>
    </div>
  );
}
