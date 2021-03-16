import {
  Card,
  Layout,
  Pagination,
  Typography,
  Skeleton,
  Tag,
} from 'antd';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import styles from './index.module.css';
import Axios from 'axios';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import {

} from '@ant-design/icons';
import React from 'react';

const { Content } = Layout;
const { Title, Paragraph } = Typography;
export default function MyContent() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {

    console.log(router);
    if(router.route=='/'){
      setLoading(true);
      Axios({
        url: '/api/public/posts/1',
        method: 'GET'
      }).then(rep => {
        setTotal(rep.data.total);
        setData(rep.data.homeCards);
        setLoading(false);
      });
    }else if (router.asPath !== router.route) {
      setLoading(true);
      Axios({
        url: '/api/public/posts/' + router.query.page,
        method: 'GET'
      }).then(rep => {
        setTotal(rep.data.total);
        setData(rep.data.homeCards);
        setLoading(false);
      });
    }
  }, [router])
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
                  <div className={styles.myContentCardTag}>
                    {item.target.map((tag) => {
                      return (
                        <Link href={'/class/' + tag.id}>
                          <Tag color={tag.color}>{tag.name}</Tag>
                        </Link>
                      )
                    })
                    }
                  </div>
                  <Title>{item.title}</Title>
                  <Paragraph>{item.content}</Paragraph>
                </Card>
              </a>
            </Link>
          )
        })
      }
      
      < Pagination defaultCurrent={router.route=='/'?1:parseInt(router.query.page)} current={router.route=='/'?1:parseInt(router.query.page)} onChange={e => {  Router.push({ pathname: `/${e}` })}} total={total} className={styles.myPagination} />
    </Content >
  )

}
