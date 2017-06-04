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

import imgUrl_1 from '../../components/images/portrait.jpg';
import imgUrl_2 from '../../components/images/sculpture.jpg';
import imgUrl_3 from '../../components/images/fireplace.jpg';
import imgUrl_4 from '../../components/images/tabletop.jpg';
import imgUrl_5 from '../../components/images/chess.jpg';
import imgUrl_6 from '../../components/images/sheme.jpg';


class Home extends React.Component {

  render() {  


  var catalog_data = [
    {
      title:"Портрети",
      img:imgUrl_1,
      class: "catalog__left_small_block",
      class_img: "small_img",
      class_link: "catalog_link1",
      alt: "portrait",
    },
    {
      title:"Скульптури",
      img:imgUrl_2,
      class: "catalog__right_small_block",
      class_img: "small_img",
      class_link: "catalog_link2",
      alt: "sculpture",
    },
    {
      title:"Каміни",
      img:imgUrl_3,
      class: "catalog__left_big_block",
      class_img: "big_img",
      class_link: "catalog_link3",
      alt: "fireplace",
    },
    {
      title:"Столешні",
      img:imgUrl_4,
      class: "catalog__right_big_block",
      class_img: "big_img",
      class_link: "catalog_link4",
      alt: "tabletop",
    }
  ] 


  var gallery_data = [
    {
      title:"#onyx #m-selection",
      img:imgUrl_5,
      class: "gallery_block__item1",
      alt: "chess",
    },
    {
      title:"#3d #randomy",
      img:imgUrl_6,
      class: "gallery_block__item2",
      alt: "sheme",
    },
    {
      title:"#onyx #m-selection",
      img:imgUrl_5,
      class: "gallery_block__item3",
      alt: "chess",
    },
    {
      title:"#onyx #m-selection",
      img:imgUrl_5,
      class: "gallery_block__item4",
      alt: "chess",
    },
    {
      title:"#onyx #m-selection",
      img:imgUrl_5,
      class: "gallery_block__item5",
      alt: "chess",
    },
    {
      title:"#onyx #m-selection",
      img:imgUrl_5,
      class: "gallery_block__item6",
      alt: "chess",
    },    
  ] 


    return (
      <div >
        <Layout>
        <Header />
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
