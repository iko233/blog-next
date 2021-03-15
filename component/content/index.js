import {
  Card,
  Layout,
  Pagination,
  Typography,
  Skeleton,
} from 'antd';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import styles from './index.module.css';
import Axios from 'axios';
import Link from 'next/link'
import {

} from '@ant-design/icons';
import React from 'react';

const { Content } = Layout;
const { Title, Paragraph } = Typography;
export default function MyContent() {

  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [current, setCurrent] = React.useState(1);
  

  React.useEffect(() => {
    //获取data
    setLoading(true);
    Axios({
      url: '/api/public/posts/' + current,
      method: 'GET'
    }).then(rep => {
      setTotal(rep.data.total);
      setData(rep.data.homeCards);
      setLoading(false);
    });
  }, [current]);

  return (
    <Content className={styles.myContent}>
      {loading ?
        <div>
          <Card bordered={true} className={styles.myContentCard}>
            <Skeleton active loading={loading}>
              <Title>title</Title>
              <Paragraph>content</Paragraph>
            </Skeleton>
          </Card>
          <Card bordered={true} className={styles.myContentCard}>
            <Skeleton active loading={loading}>
              <Title>title</Title>
              <Paragraph>content</Paragraph>
            </Skeleton>
          </Card>
          <Card bordered={true} className={styles.myContentCard}>
            <Skeleton active loading={loading}>
              <Title>title</Title>
              <Paragraph>content</Paragraph>
            </Skeleton>
          </Card>
          <Card bordered={true} className={styles.myContentCard}>
            <Skeleton active loading={loading}>
              <Title>title</Title>
              <Paragraph>content</Paragraph>
            </Skeleton>
          </Card>
          <Card bordered={true} className={styles.myContentCard}>
            <Skeleton active loading={loading}>
              <Title>title</Title>
              <Paragraph>content</Paragraph>
            </Skeleton>
          </Card>
          <Card bordered={true} className={styles.myContentCard}>
            <Skeleton active loading={loading}>
              <Title>title</Title>
              <Paragraph>content</Paragraph>
            </Skeleton>
          </Card>
          <Card bordered={true} className={styles.myContentCard}>
            <Skeleton active loading={loading}>
              <Title>title</Title>
              <Paragraph>content</Paragraph>
            </Skeleton>
          </Card>
          <Card bordered={true} className={styles.myContentCard}>
            <Skeleton active loading={loading}>
              <Title>title</Title>
              <Paragraph>content</Paragraph>
            </Skeleton>
          </Card>
        </div>
        :
        data.map((item) => {
          return (
            <Link href={'/posts/' + item.id}>
              <a >
                <Card bordered={true} className={styles.myContentCard}>
                  <Title>{item.title}</Title>
                  <Paragraph>{item.content}</Paragraph>
                </Card>
              </a>
            </Link>
          )
        })
      }
      < Pagination defaultCurrent={current} current={current} total={total} className={styles.myPagination} />
    </Content >
  )

}
