import styles from '../styles/Home.module.css'
import {
  Layout,
  ConfigProvider,
} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import MyHeader from '../component/header';
import MyContent from '../component/content';
import MyAside from '../component/aside';

export default function Home() {
  return (
    <div>
      <ConfigProvider locale={zhCN}>
        <Layout>
            <MyHeader/>    
          <div className={styles.mainBox}>
            <MyContent/>
            <MyAside/>
          </div>
        </Layout>
      </ConfigProvider>
    </div>
  )
}
