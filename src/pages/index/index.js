import React, { Component } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

// import styles from './index.css';
@connect()
class IndexPage extends Component {

  static propTypes = {
  };

  goToShopIncome = () => {
    router.push('/sparrow_shop_statistics/shopIncome');
  };
  goToShopRefund = () => {
    router.push('/sparrow_shop_statistics/shopRefund');
  };
  goToflashSalesDelivery = () => {
    router.push('/sparrow_flashsale/deliver');
  };
  goToflashSalesRefund = () => {
    router.push('/sparrow_flashsale/refund');
  };
  goToTest = () => {
    router.push('/test');
  };


  render() {
    return (
      <WingBlank>
        <Button type="primary" onClick={this.goToShopIncome}>线上购物对账-专柜收入</Button><WhiteSpace />
        <Button type="primary" onClick={this.goToShopRefund}>线上购物对账-专柜退款</Button><WhiteSpace />
        <Button type="primary" onClick={this.goToflashSalesDelivery}>闪购提货</Button><WhiteSpace />
        <Button type="primary" onClick={this.goToflashSalesRefund}>闪购退货</Button><WhiteSpace />
        <Button type="primary" onClick={this.goToTest}>test</Button><WhiteSpace />
      </WingBlank>
    );
  }
}


export default IndexPage;
