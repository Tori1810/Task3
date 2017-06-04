import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Content from '../../components/Content/Content'
import Registration from '../../components/Registration/Registration';
import Layout from '../../components/Layout/Layout';
import Pannel from './components/Pannel/Pannel';
import Filter from './components/Filter/Filter';
import s from './Catalog.css';
import url1 from '../../components/images/product1.jpg';
import url2 from '../../components/images/product2.jpg';
import url3 from '../../components/images/chess.jpg';
import url4 from '../../components/images/product3.jpg';
import url5 from '../../components/images/product4.jpg';
import url6 from '../../components/images/product5.jpg';
import url7 from '../../components/images/product6.jpg';
import url8 from '../../components/images/product7.jpg';


class Catalog extends React.Component {

  render() {   

    var data1 = {title: 'Внутрішнє та зовнішнє оздоблення', img: [url1, url2, url3, url4, url5]}
    var data2 = {title: 'Складні архітектурні вироби', img: [url6, url2, url7]}
    var data3 = {title: 'Садово-паркове мистецтво', img: [url8]};

    return (
      <div className={s.catalog}>
        <Layout data={2}>
        <h1 className={s.catalog__title}>Каталог продукції</h1>
        <Filter data={data1} />
        <Pannel data={data2}/>
        <Pannel data={data3}/>
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