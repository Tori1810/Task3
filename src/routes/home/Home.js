import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Pannel from '../../components/Pannel/Pannel'
import Catalog from '../../components/Catalog/Catalog'
import Content from '../../components/Content/Content'
import Gallery from '../../components/Gallery/Gallery'
import PannelSidebar from '../../components/PannelSidebar/PannelSidebar';
import Registration from '../../components/Registration/Registration';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import s from './Home.css';


class Home extends React.Component {

  render() {  

  const catalog_data = [
    {
      title:"Портрети",
      img:'http://cdn1.savepice.ru/uploads/2017/6/16/73c48eec4ca4de768194458858b86cc1-full.jpg',
      class: "catalog__left_small_block",
      class_img: "small_img",
      class_link: "catalog_link1",
      alt: "portrait",
    },
    {
      title:"Скульптури",
      img:'http://cdn1.savepice.ru/uploads/2017/6/16/1b50bf1d29440debf780b92b6b5359c8-full.jpg',
      class: "catalog__right_small_block",
      class_img: "small_img",
      class_link: "catalog_link2",
      alt: "sculpture",
    },
    {
      title:"Каміни",
      img:'http://cdn1.savepice.ru/uploads/2017/6/16/962ca54d4d31453e05279bf8b23eaeb0-full.jpg',
      class: "catalog__left_big_block",
      class_img: "big_img",
      class_link: "catalog_link3",
      alt: "fireplace",
    },
    {
      title:"Столешні",
      img:'http://cdn1.savepice.ru/uploads/2017/6/16/3c0431ca7881850913186f8d526c292d-full.jpg',
      class: "catalog__right_big_block",
      class_img: "big_img",
      class_link: "catalog_link4",
      alt: "tabletop",
    }
  ];


  const gallery_data = [
    {
      title:"#onyx #m-selection",
      img:'http://cdn1.savepice.ru/uploads/2017/6/16/23c6c18f511506b161f11e6a1cf80332-full.jpg',
      class: "gallery_block__item1",
      alt: "chess",
    },
    {
      title:"#3d #randomy",
      img:'http://cdn1.savepice.ru/uploads/2017/6/16/550744cd8c8a0fee2a7dff035965a53f-full.jpg',
      class: "gallery_block__item2",
      alt: "sheme",
    },
    {
      title:"#onyx #m-selection",
      img:'http://cdn1.savepice.ru/uploads/2017/6/16/23c6c18f511506b161f11e6a1cf80332-full.jpg',
      class: "gallery_block__item3",
      alt: "chess",
    },
    {
      title:"#onyx #m-selection",
      img:'http://cdn1.savepice.ru/uploads/2017/6/16/23c6c18f511506b161f11e6a1cf80332-full.jpg',
      class: "gallery_block__item4",
      alt: "chess",
    },
    {
      title:"#onyx #m-selection",
      img:'http://cdn1.savepice.ru/uploads/2017/6/16/23c6c18f511506b161f11e6a1cf80332-full.jpg',
      class: "gallery_block__item5",
      alt: "chess",
    },
    {
      title:"#onyx #m-selection",
      img:'http://cdn1.savepice.ru/uploads/2017/6/16/23c6c18f511506b161f11e6a1cf80332-full.jpg',
      class: "gallery_block__item6",
      alt: "chess",
    },    
  ]; 


    return (
      <div >
        <Layout data={1}>
        <Pannel ><PannelSidebar /></ Pannel>
        <Catalog data={catalog_data}/>
        <Content />
        <Gallery data={gallery_data} />
        <Registration />
        </ Layout>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(Home);
