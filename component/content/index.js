import {
  Card,
  Layout,
  Pagination,
} from 'antd';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import styles from './index.module.css'
import {

} from '@ant-design/icons';

const {Content,Sider}=Layout;
export default function MyContent() {
  return (
    <Content className={styles.myContent}>
      <Card title="Card title" bordered={true} className={styles.myContentCard} >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card title" bordered={true} className={styles.myContentCard} >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card title" bordered={true} className={styles.myContentCard} >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card title" bordered={true} className={styles.myContentCard} >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Pagination defaultCurrent={1} total={50} className={styles.myPagination} />
    </Content>
  )
}
