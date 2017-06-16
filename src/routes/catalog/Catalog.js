import React from 'react';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Content from '../../components/Content/Content'
import Registration from '../../components/Registration/Registration';
import Layout from '../../components/Layout/Layout';
import CentrePannel from './components/CentrePannel/CentrePannel';
import BottomPannel from './components/BottomPannel/BottomPannel';
import Filter from './components/Filter/Filter';
import s from './Catalog.css';


class Catalog extends React.Component {

  render() {

    const img1 = ['http://cdn1.savepice.ru/uploads/2017/6/16/ae20da73acab16393c0ad1cbbc124c03-full.jpg',
                  'http://cdn1.savepice.ru/uploads/2017/6/16/489b2fa6c5abe4e2c7e7636e5a4bf434-full.jpg',
                  'http://cdn1.savepice.ru/uploads/2017/6/16/bedd5a139959fc115879e41a2e2a8231-full.jpg',
                  'http://cdn1.savepice.ru/uploads/2017/6/16/1bc00844144b7902b0d59a43e4d7bbf9-full.jpg',
                  'http://cdn1.savepice.ru/uploads/2017/6/16/b1e94d53789193c1b4b70a4db28bc43b-full.jpg'],
          img2 = ['http://cdn1.savepice.ru/uploads/2017/6/16/4f80680336e0cf0f55cc9720dbc39426-full.jpg',
                  'http://cdn1.savepice.ru/uploads/2017/6/16/489b2fa6c5abe4e2c7e7636e5a4bf434-full.jpg',
                  'http://cdn1.savepice.ru/uploads/2017/6/16/b3c196c2d312af688fdcdc5dbba3540c-full.jpg'],
          img3 = ['http://cdn1.savepice.ru/uploads/2017/6/16/a2b3d5b813f26f96fc9845b9e0104890-full.jpg'];

    const data1 = {title: 'Внутрішнє та зовнішнє оздоблення', img: img1},
          data2 = {title: 'Складні архітектурні вироби', img: img2},
          data3 = {title: 'Садово-паркове мистецтво', img: img3};

    return (
      <div className={s.catalog}>
        <Layout data={2}>
        <h1 className={s.catalog__title}>Каталог продукції</h1>
        <Filter data={data1} />
        <CentrePannel data={data2}/>
        <BottomPannel data={data3}/>
        <Content />
        <Registration />
        </ Layout>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(Catalog);
