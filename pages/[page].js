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
import { createContext } from 'react';

export default function Home() {
  
  const context=createContext();
  return (
    <div>
      <ConfigProvider locale={zhCN}>
        <Layout>
            <MyHeader key='1'/>    
          <div className={styles.mainBox}>
            <MyContent myContext={context}/>
            <MyAside/>
          </div>
        </Layout>
      </ConfigProvider>
    </div>
  )
}
