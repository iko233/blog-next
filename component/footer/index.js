import {
  Card,
  Layout,
} from 'antd';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import styles from './index.module.css'
import {

} from '@ant-design/icons';

const {Footer}=Layout;
export default function myFooter() {
  return (
    <Footer ClassName={styles.myFooter} theme="dark">
      <p>备©个鬼</p>
    </Footer>
  )
}
