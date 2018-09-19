import React from 'react';
/* eslint no-dupe-keys: 0 */
import { ListView } from 'antd-mobile';

import styles from './test.css';
import moment from 'moment';

const results = [
  {
      "id": 13425,
      "lines": [
          {
              "id": 19687,
              "order_id": 13425,
              "brand_id": 390,
              "shop_id": 147,
              "shop_num": "313007",
              "shop_sku": "6936776174956",
              "hg_code": "6936776174956",
              "shop_line_notes": "",
              "product_id": 125699,
              "title": "紫草修护膏",
              "main_image": "https://img-backend.hanguangbaihuo.com/media%2Fsparrow_product%2Fafu201807096936776174956.jpg",
              "sku_attr": "12g 默认",
              "upc": null,
              "quantity": 1,
              "line_price": "58.00",
              "discount_amount": "19.00",
              "discount_hg": "0.00",
              "discount_shop": "19.00",
              "original_price": "58.00",
              "retail_price": "58.00",
              "shop_income_price": "39.00",
              "amount_for_point": "39.00",
              "point_amount": "1.00",
              "point_multiple": "1.00",
              "points": 39,
              "offer": "9",
              "flow_id": 24
          }
      ],
      "gifts": [],
      "shop": {
          "id": 147,
          "shop_num": "313007",
          "name": "AFU",
          "front_id": "3130070",
          "contact": "01066010346",
          "location": "西扶梯口",
          "shop_type": "LY",
          "deleted": false,
          "floor": {
              "id": 4,
              "deleted": false,
              "name": "3F",
              "desc": "精品女装馆",
              "floor_num": "3"
          },
          "images": [
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9704.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9705.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9706.JPG"
          ]
      },
      "user": {
          "id": "1feb5694fca24d3885b51b8b3364a1e5",
          "username": "13811182290",
          "name": "孙艾拉"
      },
      "payment_type": "17",
      "deleted": false,
      "number": "18071799900000024",
      "user_id": "1feb5694fca24d3885b51b8b3364a1e5",
      "shipping_address_id": null,
      "contact_id": 4124,
      "flashsale_guide_id": null,
      "shipping_method": "self_service",
      "postage": "0.00",
      "pay_status": "pay_finished",
      "assign_status": "completed",
      "shipping_status": "init",
      "aftersale_status": "done",
      "total_amount": "58.00",
      "actual_amount": "39.00",
      "cash_pay_amount": "39.00",
      "created_time": "2018-07-17T14:39:58.447744",
      "updated_time": "2018-07-17T14:42:27.161830",
      "order_type": "flashsale",
      "note": null,
      "operator_note": null,
      "sync_status": true,
      "sync_time": "2018-07-17T14:40:04.941541",
      "completed_time": null,
      "client_app_id": "app_1521010788",
      "is_unpaid_warned": false
  },
  {
      "id": 13424,
      "lines": [
          {
              "id": 19686,
              "order_id": 13424,
              "brand_id": 390,
              "shop_id": 147,
              "shop_num": "313007",
              "shop_sku": "6936776174956",
              "hg_code": "6936776174956",
              "shop_line_notes": "",
              "product_id": 125699,
              "title": "紫草修护膏",
              "main_image": "https://img-backend.hanguangbaihuo.com/media%2Fsparrow_product%2Fafu201807096936776174956.jpg",
              "sku_attr": "12g 默认",
              "upc": null,
              "quantity": 1,
              "line_price": "58.00",
              "discount_amount": "19.00",
              "discount_hg": "0.00",
              "discount_shop": "19.00",
              "original_price": "58.00",
              "retail_price": "58.00",
              "shop_income_price": "39.00",
              "amount_for_point": "39.00",
              "point_amount": "1.00",
              "point_multiple": "1.00",
              "points": 39,
              "offer": "9",
              "flow_id": 23
          }
      ],
      "gifts": [],
      "shop": {
          "id": 147,
          "shop_num": "313007",
          "name": "AFU",
          "front_id": "3130070",
          "contact": "01066010346",
          "location": "西扶梯口",
          "shop_type": "LY",
          "deleted": false,
          "floor": {
              "id": 4,
              "deleted": false,
              "name": "3F",
              "desc": "精品女装馆",
              "floor_num": "3"
          },
          "images": [
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9704.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9705.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9706.JPG"
          ]
      },
      "user": {
          "id": "1feb5694fca24d3885b51b8b3364a1e5",
          "username": "13811182290",
          "name": "孙艾拉"
      },
      "payment_type": "17",
      "deleted": false,
      "number": "18071799900000023",
      "user_id": "1feb5694fca24d3885b51b8b3364a1e5",
      "shipping_address_id": null,
      "contact_id": 4123,
      "flashsale_guide_id": null,
      "shipping_method": "self_service",
      "postage": "0.00",
      "pay_status": "pay_finished",
      "assign_status": "completed",
      "shipping_status": "init",
      "aftersale_status": "open",
      "total_amount": "58.00",
      "actual_amount": "39.00",
      "cash_pay_amount": "39.00",
      "created_time": "2018-07-17T14:10:55.072486",
      "updated_time": "2018-07-17T14:12:15.614047",
      "order_type": "flashsale",
      "note": null,
      "operator_note": null,
      "sync_status": true,
      "sync_time": "2018-07-17T14:11:01.120967",
      "completed_time": null,
      "client_app_id": "app_1521010788",
      "is_unpaid_warned": false
  },
  {
      "id": 13423,
      "lines": [
          {
              "id": 19685,
              "order_id": 13423,
              "brand_id": 390,
              "shop_id": 147,
              "shop_num": "313007",
              "shop_sku": "6936776174956",
              "hg_code": "6936776174956",
              "shop_line_notes": "",
              "product_id": 125699,
              "title": "紫草修护膏",
              "main_image": "https://img-backend.hanguangbaihuo.com/media%2Fsparrow_product%2Fafu201807096936776174956.jpg",
              "sku_attr": "12g 默认",
              "upc": null,
              "quantity": 1,
              "line_price": "58.00",
              "discount_amount": "19.00",
              "discount_hg": "0.00",
              "discount_shop": "19.00",
              "original_price": "58.00",
              "retail_price": "58.00",
              "shop_income_price": "39.00",
              "amount_for_point": "39.00",
              "point_amount": "1.00",
              "point_multiple": "1.00",
              "points": 39,
              "offer": "9",
              "flow_id": 22
          }
      ],
      "gifts": [],
      "shop": {
          "id": 147,
          "shop_num": "313007",
          "name": "AFU",
          "front_id": "3130070",
          "contact": "01066010346",
          "location": "西扶梯口",
          "shop_type": "LY",
          "deleted": false,
          "floor": {
              "id": 4,
              "deleted": false,
              "name": "3F",
              "desc": "精品女装馆",
              "floor_num": "3"
          },
          "images": [
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9704.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9705.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9706.JPG"
          ]
      },
      "user": {
          "id": "1feb5694fca24d3885b51b8b3364a1e5",
          "username": "13811182290",
          "name": "孙艾拉"
      },
      "payment_type": "17",
      "deleted": false,
      "number": "18071799900000022",
      "user_id": "1feb5694fca24d3885b51b8b3364a1e5",
      "shipping_address_id": null,
      "contact_id": 4122,
      "flashsale_guide_id": null,
      "shipping_method": "self_service",
      "postage": "0.00",
      "pay_status": "pay_finished",
      "assign_status": "completed",
      "shipping_status": "init",
      "aftersale_status": "open",
      "total_amount": "58.00",
      "actual_amount": "39.00",
      "cash_pay_amount": "39.00",
      "created_time": "2018-07-17T14:10:45.672112",
      "updated_time": "2018-07-17T14:12:28.649770",
      "order_type": "flashsale",
      "note": null,
      "operator_note": null,
      "sync_status": true,
      "sync_time": "2018-07-17T14:10:51.633702",
      "completed_time": null,
      "client_app_id": "app_1521010788",
      "is_unpaid_warned": false
  },
  {
      "id": 13422,
      "lines": [
          {
              "id": 19684,
              "order_id": 13422,
              "brand_id": 390,
              "shop_id": 147,
              "shop_num": "313007",
              "shop_sku": "6936776175410",
              "hg_code": "6936776175410",
              "shop_line_notes": "",
              "product_id": 125897,
              "title": "茶树精油",
              "main_image": "https://img-backend.hanguangbaihuo.com/media%2Fsparrow_product%2Fafu201807096936776175410.jpg",
              "sku_attr": "10ml 默认",
              "upc": null,
              "quantity": 1,
              "line_price": "188.00",
              "discount_amount": "89.00",
              "discount_hg": "0.00",
              "discount_shop": "89.00",
              "original_price": "188.00",
              "retail_price": "188.00",
              "shop_income_price": "99.00",
              "amount_for_point": "99.00",
              "point_amount": "1.00",
              "point_multiple": "1.00",
              "points": 99,
              "offer": "9",
              "flow_id": 21
          }
      ],
      "gifts": [],
      "shop": {
          "id": 147,
          "shop_num": "313007",
          "name": "AFU",
          "front_id": "3130070",
          "contact": "01066010346",
          "location": "西扶梯口",
          "shop_type": "LY",
          "deleted": false,
          "floor": {
              "id": 4,
              "deleted": false,
              "name": "3F",
              "desc": "精品女装馆",
              "floor_num": "3"
          },
          "images": [
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9704.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9705.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9706.JPG"
          ]
      },
      "user": {
          "id": "1feb5694fca24d3885b51b8b3364a1e5",
          "username": "13811182290",
          "name": "孙艾拉"
      },
      "payment_type": "17",
      "deleted": false,
      "number": "18071799900000021",
      "user_id": "1feb5694fca24d3885b51b8b3364a1e5",
      "shipping_address_id": null,
      "contact_id": 4121,
      "flashsale_guide_id": "1feb5694fca24d3885b51b8b3364a1e5",
      "shipping_method": "self_service",
      "postage": "0.00",
      "pay_status": "pay_finished",
      "assign_status": "completed",
      "shipping_status": "completed",
      "aftersale_status": "open",
      "total_amount": "188.00",
      "actual_amount": "99.00",
      "cash_pay_amount": "99.00",
      "created_time": "2018-07-17T14:00:09.985428",
      "updated_time": "2018-07-17T14:04:18.056524",
      "order_type": "flashsale",
      "note": null,
      "operator_note": null,
      "sync_status": true,
      "sync_time": "2018-07-17T14:00:16.909183",
      "completed_time": "2018-07-17T14:03:17.149694",
      "client_app_id": "app_1521010788",
      "is_unpaid_warned": false
  },
  {
      "id": 13421,
      "lines": [
          {
              "id": 19683,
              "order_id": 13421,
              "brand_id": 390,
              "shop_id": 147,
              "shop_num": "313007",
              "shop_sku": "6936776174956",
              "hg_code": "6936776174956",
              "shop_line_notes": "",
              "product_id": 125699,
              "title": "紫草修护膏",
              "main_image": "https://img-backend.hanguangbaihuo.com/media%2Fsparrow_product%2Fafu201807096936776174956.jpg",
              "sku_attr": "12g 默认",
              "upc": null,
              "quantity": 1,
              "line_price": "58.00",
              "discount_amount": "19.00",
              "discount_hg": "0.00",
              "discount_shop": "19.00",
              "original_price": "58.00",
              "retail_price": "58.00",
              "shop_income_price": "39.00",
              "amount_for_point": "39.00",
              "point_amount": "1.00",
              "point_multiple": "1.00",
              "points": 39,
              "offer": "9",
              "flow_id": 20
          }
      ],
      "gifts": [],
      "shop": {
          "id": 147,
          "shop_num": "313007",
          "name": "AFU",
          "front_id": "3130070",
          "contact": "01066010346",
          "location": "西扶梯口",
          "shop_type": "LY",
          "deleted": false,
          "floor": {
              "id": 4,
              "deleted": false,
              "name": "3F",
              "desc": "精品女装馆",
              "floor_num": "3"
          },
          "images": [
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9704.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9705.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9706.JPG"
          ]
      },
      "user": {
          "id": "1feb5694fca24d3885b51b8b3364a1e5",
          "username": "13811182290",
          "name": "孙艾拉"
      },
      "payment_type": "17",
      "deleted": false,
      "number": "18071799900000020",
      "user_id": "1feb5694fca24d3885b51b8b3364a1e5",
      "shipping_address_id": null,
      "contact_id": 4120,
      "flashsale_guide_id": "1feb5694fca24d3885b51b8b3364a1e5",
      "shipping_method": "self_service",
      "postage": "0.00",
      "pay_status": "pay_finished",
      "assign_status": "completed",
      "shipping_status": "completed",
      "aftersale_status": "open",
      "total_amount": "58.00",
      "actual_amount": "39.00",
      "cash_pay_amount": "39.00",
      "created_time": "2018-07-17T13:59:58.214888",
      "updated_time": "2018-07-17T14:04:32.952740",
      "order_type": "flashsale",
      "note": null,
      "operator_note": null,
      "sync_status": true,
      "sync_time": "2018-07-17T14:00:04.965953",
      "completed_time": "2018-07-17T14:03:17.483716",
      "client_app_id": "app_1521010788",
      "is_unpaid_warned": false
  },
  {
      "id": 13420,
      "lines": [
          {
              "id": 19682,
              "order_id": 13420,
              "brand_id": 390,
              "shop_id": 147,
              "shop_num": "313007",
              "shop_sku": "6936776175410",
              "hg_code": "6936776175410",
              "shop_line_notes": "",
              "product_id": 125897,
              "title": "茶树精油",
              "main_image": "https://img-backend.hanguangbaihuo.com/media%2Fsparrow_product%2Fafu201807096936776175410.jpg",
              "sku_attr": "10ml 默认",
              "upc": null,
              "quantity": 1,
              "line_price": "188.00",
              "discount_amount": "89.00",
              "discount_hg": "0.00",
              "discount_shop": "89.00",
              "original_price": "188.00",
              "retail_price": "188.00",
              "shop_income_price": "99.00",
              "amount_for_point": "99.00",
              "point_amount": "1.00",
              "point_multiple": "1.00",
              "points": 99,
              "offer": "9",
              "flow_id": 19
          }
      ],
      "gifts": [],
      "shop": {
          "id": 147,
          "shop_num": "313007",
          "name": "AFU",
          "front_id": "3130070",
          "contact": "01066010346",
          "location": "西扶梯口",
          "shop_type": "LY",
          "deleted": false,
          "floor": {
              "id": 4,
              "deleted": false,
              "name": "3F",
              "desc": "精品女装馆",
              "floor_num": "3"
          },
          "images": [
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9704.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9705.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9706.JPG"
          ]
      },
      "user": {
          "id": "1feb5694fca24d3885b51b8b3364a1e5",
          "username": "13811182290",
          "name": "孙艾拉"
      },
      "payment_type": "17",
      "deleted": false,
      "number": "18071799900000019",
      "user_id": "1feb5694fca24d3885b51b8b3364a1e5",
      "shipping_address_id": null,
      "contact_id": 4119,
      "flashsale_guide_id": null,
      "shipping_method": "self_service",
      "postage": "0.00",
      "pay_status": "pay_finished",
      "assign_status": "completed",
      "shipping_status": "init",
      "aftersale_status": "open",
      "total_amount": "188.00",
      "actual_amount": "99.00",
      "cash_pay_amount": "99.00",
      "created_time": "2018-07-17T13:59:43.169191",
      "updated_time": "2018-07-17T14:04:46.957519",
      "order_type": "flashsale",
      "note": null,
      "operator_note": null,
      "sync_status": true,
      "sync_time": "2018-07-17T13:59:50.169188",
      "completed_time": null,
      "client_app_id": "app_1521010788",
      "is_unpaid_warned": false
  },
  {
      "id": 13419,
      "lines": [
          {
              "id": 19681,
              "order_id": 13419,
              "brand_id": 390,
              "shop_id": 147,
              "shop_num": "313007",
              "shop_sku": "6936776174956",
              "hg_code": "6936776174956",
              "shop_line_notes": "",
              "product_id": 125699,
              "title": "紫草修护膏",
              "main_image": "https://img-backend.hanguangbaihuo.com/media%2Fsparrow_product%2Fafu201807096936776174956.jpg",
              "sku_attr": "12g 默认",
              "upc": null,
              "quantity": 1,
              "line_price": "58.00",
              "discount_amount": "19.00",
              "discount_hg": "0.00",
              "discount_shop": "19.00",
              "original_price": "58.00",
              "retail_price": "58.00",
              "shop_income_price": "39.00",
              "amount_for_point": "39.00",
              "point_amount": "1.00",
              "point_multiple": "1.00",
              "points": 39,
              "offer": "9",
              "flow_id": 18
          }
      ],
      "gifts": [],
      "shop": {
          "id": 147,
          "shop_num": "313007",
          "name": "AFU",
          "front_id": "3130070",
          "contact": "01066010346",
          "location": "西扶梯口",
          "shop_type": "LY",
          "deleted": false,
          "floor": {
              "id": 4,
              "deleted": false,
              "name": "3F",
              "desc": "精品女装馆",
              "floor_num": "3"
          },
          "images": [
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9704.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9705.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9706.JPG"
          ]
      },
      "user": {
          "id": "1feb5694fca24d3885b51b8b3364a1e5",
          "username": "13811182290",
          "name": "孙艾拉"
      },
      "payment_type": "17",
      "deleted": false,
      "number": "18071799900000018",
      "user_id": "1feb5694fca24d3885b51b8b3364a1e5",
      "shipping_address_id": null,
      "contact_id": 4118,
      "flashsale_guide_id": null,
      "shipping_method": "self_service",
      "postage": "0.00",
      "pay_status": "pay_finished",
      "assign_status": "completed",
      "shipping_status": "init",
      "aftersale_status": "open",
      "total_amount": "58.00",
      "actual_amount": "39.00",
      "cash_pay_amount": "39.00",
      "created_time": "2018-07-17T13:59:20.900836",
      "updated_time": "2018-07-17T14:04:53.542724",
      "order_type": "flashsale",
      "note": null,
      "operator_note": null,
      "sync_status": true,
      "sync_time": "2018-07-17T13:59:27.813477",
      "completed_time": null,
      "client_app_id": "app_1521010788",
      "is_unpaid_warned": false
  },
  {
      "id": 13418,
      "lines": [
          {
              "id": 19680,
              "order_id": 13418,
              "brand_id": 390,
              "shop_id": 147,
              "shop_num": "313007",
              "shop_sku": "6936776174956",
              "hg_code": "6936776174956",
              "shop_line_notes": "",
              "product_id": 125699,
              "title": "紫草修护膏",
              "main_image": "https://img-backend.hanguangbaihuo.com/media%2Fsparrow_product%2Fafu201807096936776174956.jpg",
              "sku_attr": "12g 默认",
              "upc": null,
              "quantity": 1,
              "line_price": "58.00",
              "discount_amount": "19.00",
              "discount_hg": "0.00",
              "discount_shop": "19.00",
              "original_price": "58.00",
              "retail_price": "58.00",
              "shop_income_price": "39.00",
              "amount_for_point": "39.00",
              "point_amount": "1.00",
              "point_multiple": "1.00",
              "points": 39,
              "offer": "9",
              "flow_id": 17
          }
      ],
      "gifts": [],
      "shop": {
          "id": 147,
          "shop_num": "313007",
          "name": "AFU",
          "front_id": "3130070",
          "contact": "01066010346",
          "location": "西扶梯口",
          "shop_type": "LY",
          "deleted": false,
          "floor": {
              "id": 4,
              "deleted": false,
              "name": "3F",
              "desc": "精品女装馆",
              "floor_num": "3"
          },
          "images": [
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9704.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9705.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9706.JPG"
          ]
      },
      "user": {
          "id": "1feb5694fca24d3885b51b8b3364a1e5",
          "username": "13811182290",
          "name": "孙艾拉"
      },
      "payment_type": "17",
      "deleted": false,
      "number": "18071799900000017",
      "user_id": "1feb5694fca24d3885b51b8b3364a1e5",
      "shipping_address_id": null,
      "contact_id": 4117,
      "flashsale_guide_id": "1feb5694fca24d3885b51b8b3364a1e5",
      "shipping_method": "self_service",
      "postage": "0.00",
      "pay_status": "pay_finished",
      "assign_status": "completed",
      "shipping_status": "completed",
      "aftersale_status": "open",
      "total_amount": "58.00",
      "actual_amount": "39.00",
      "cash_pay_amount": "39.00",
      "created_time": "2018-07-17T12:53:57.990728",
      "updated_time": "2018-07-17T14:08:16.654588",
      "order_type": "flashsale",
      "note": null,
      "operator_note": null,
      "sync_status": true,
      "sync_time": "2018-07-17T12:54:03.463718",
      "completed_time": "2018-07-17T12:55:37.990696",
      "client_app_id": "app_1521010788",
      "is_unpaid_warned": false
  },
  {
      "id": 13417,
      "lines": [
          {
              "id": 19679,
              "order_id": 13417,
              "brand_id": 390,
              "shop_id": 147,
              "shop_num": "313007",
              "shop_sku": "6936776174376",
              "hg_code": "6936776174376",
              "shop_line_notes": "",
              "product_id": 125896,
              "title": "高保湿爽肤水",
              "main_image": "https://img-backend.hanguangbaihuo.com/media%2Fsparrow_product%2Fafu201807096936776174376.jpg",
              "sku_attr": "190ml 默认",
              "upc": null,
              "quantity": 1,
              "line_price": "158.00",
              "discount_amount": "59.00",
              "discount_hg": "0.00",
              "discount_shop": "59.00",
              "original_price": "158.00",
              "retail_price": "158.00",
              "shop_income_price": "99.00",
              "amount_for_point": "99.00",
              "point_amount": "1.00",
              "point_multiple": "1.00",
              "points": 99,
              "offer": "9",
              "flow_id": 16
          }
      ],
      "gifts": [],
      "shop": {
          "id": 147,
          "shop_num": "313007",
          "name": "AFU",
          "front_id": "3130070",
          "contact": "01066010346",
          "location": "西扶梯口",
          "shop_type": "LY",
          "deleted": false,
          "floor": {
              "id": 4,
              "deleted": false,
              "name": "3F",
              "desc": "精品女装馆",
              "floor_num": "3"
          },
          "images": [
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9704.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9705.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9706.JPG"
          ]
      },
      "user": {
          "id": "1feb5694fca24d3885b51b8b3364a1e5",
          "username": "13811182290",
          "name": "孙艾拉"
      },
      "payment_type": "17",
      "deleted": false,
      "number": "18071799900000016",
      "user_id": "1feb5694fca24d3885b51b8b3364a1e5",
      "shipping_address_id": null,
      "contact_id": 4116,
      "flashsale_guide_id": "1feb5694fca24d3885b51b8b3364a1e5",
      "shipping_method": "self_service",
      "postage": "0.00",
      "pay_status": "pay_finished",
      "assign_status": "completed",
      "shipping_status": "completed",
      "aftersale_status": "open",
      "total_amount": "158.00",
      "actual_amount": "99.00",
      "cash_pay_amount": "99.00",
      "created_time": "2018-07-17T12:52:37.562291",
      "updated_time": "2018-07-17T14:08:19.274040",
      "order_type": "flashsale",
      "note": null,
      "operator_note": null,
      "sync_status": true,
      "sync_time": "2018-07-17T12:52:43.230652",
      "completed_time": "2018-07-17T12:55:58.536671",
      "client_app_id": "app_1521010788",
      "is_unpaid_warned": false
  },
  {
      "id": 13416,
      "lines": [
          {
              "id": 19678,
              "order_id": 13416,
              "brand_id": 390,
              "shop_id": 147,
              "shop_num": "313007",
              "shop_sku": "6936776174376",
              "hg_code": "6936776174376",
              "shop_line_notes": "",
              "product_id": 125896,
              "title": "高保湿爽肤水",
              "main_image": "https://img-backend.hanguangbaihuo.com/media%2Fsparrow_product%2Fafu201807096936776174376.jpg",
              "sku_attr": "190ml 默认",
              "upc": null,
              "quantity": 1,
              "line_price": "158.00",
              "discount_amount": "59.00",
              "discount_hg": "0.00",
              "discount_shop": "59.00",
              "original_price": "158.00",
              "retail_price": "158.00",
              "shop_income_price": "99.00",
              "amount_for_point": "99.00",
              "point_amount": "1.00",
              "point_multiple": "1.00",
              "points": 99,
              "offer": "9",
              "flow_id": 15
          }
      ],
      "gifts": [],
      "shop": {
          "id": 147,
          "shop_num": "313007",
          "name": "AFU",
          "front_id": "3130070",
          "contact": "01066010346",
          "location": "西扶梯口",
          "shop_type": "LY",
          "deleted": false,
          "floor": {
              "id": 4,
              "deleted": false,
              "name": "3F",
              "desc": "精品女装馆",
              "floor_num": "3"
          },
          "images": [
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9704.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9705.JPG",
              "https://img-backend.hanguangbaihuo.com/media%2Fshop_image%2FIMG_9706.JPG"
          ]
      },
      "user": {
          "id": "1feb5694fca24d3885b51b8b3364a1e5",
          "username": "13811182290",
          "name": "孙艾拉"
      },
      "payment_type": "17",
      "deleted": false,
      "number": "18071799900000015",
      "user_id": "1feb5694fca24d3885b51b8b3364a1e5",
      "shipping_address_id": null,
      "contact_id": 4115,
      "flashsale_guide_id": null,
      "shipping_method": "self_service",
      "postage": "0.00",
      "pay_status": "pay_finished",
      "assign_status": "completed",
      "shipping_status": "init",
      "aftersale_status": "open",
      "total_amount": "158.00",
      "actual_amount": "99.00",
      "cash_pay_amount": "99.00",
      "created_time": "2018-07-17T12:52:27.618864",
      "updated_time": "2018-07-17T13:49:44.897430",
      "order_type": "flashsale",
      "note": null,
      "operator_note": null,
      "sync_status": true,
      "sync_time": "2018-07-17T12:52:33.269534",
      "completed_time": null,
      "client_app_id": "app_1521010788",
      "is_unpaid_warned": false
  }
]
let listData = [];
results.forEach(element => {
  let listItem = {};
  listItem.shop_income = 0;
  listItem.name = element.user ? element.user.name : '';
  listItem.username = element.user ? element.user.username : '';
  listItem.number = element.number;
  listItem.created_time = moment(element.created_time).format('YYYY-MM-DD dddd HH:mm:ss');
  listItem.completed_time = moment(element.completed_time).format('YYYY-MM-DD dddd HH:mm:ss')
  // 转换订单中单个商品的数据信息
  let linesData = [];
  element.lines.forEach(element => {
    let linesItem = {};
    linesItem.title = element.title;
    if (linesItem.title.length > 10) {
      linesItem.title = linesItem.title.slice(0, 9) + '...';
    };
    linesItem.quantity = element.quantity;
    linesItem.retail_price = element.retail_price;
    linesItem.original_price = element.original_price;
    linesItem.hg_code = element.hg_code;
    linesItem.offer = element.offer;
    linesItem.sku_attr = element.sku_attr;
    if (linesItem.sku_attr.length > 10) {
      linesItem.sku_attr = linesItem.sku_attr.slice(0, 9) + '...';
    }
    linesData.push(linesItem);
    // 计算专柜收入，进行数据计算，保留两位小数
    listItem.shop_income += parseFloat(element.shop_income_price * 100);
    return (listItem.shop_income)
  });
  listItem.lines = linesData;
  // 订单类型判断
  if (element.order_type === 'online') {
    listItem.order_type = '线上';
  } else if (element.order_type === 'flashsale') {
    if (element.shipping_status === "init") {
      listItem.order_type = '闪购(未提)';
    } else if (element.shipping_status === "partial") {
      listItem.order_type = '闪购(已提)';
    } else if (element.shipping_status === "completed") {
      listItem.order_type = '闪购(已提)';
    }
  }
  // 支付方式判断
  if (element.payment_type === '17') {
    listItem.payment_type = '微信支付';
  } else if (element.payment_type === '18') {
    listItem.payment_type = '支付宝支付';
  } else {
    listItem.payment_type = element.payment_type;
  }
  // 配送方式判断
  if (element.shipping_method === 'express') {
    listItem.shipping_method = '快递（￥' + element.postage + '）';
  } else if (element.shipping_method === 'self_service') {
    listItem.shipping_method = '到店自提';
  }
  // 是否有售后单的判断
  if (element.aftersale_status === 'open') {
    listItem.aftersale_status = '有售后-处理中';
  } else if (element.aftersale_status === 'none') {
    listItem.aftersale_status = '';
  } else if (element.aftersale_status === 'done') {
    listItem.aftersale_status = '有售后-已退';
  }
  listData.push(listItem);
});


const data = listData;

const NUM_ROWS = data.length;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  // 当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用
  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    // 如果提供了此属性，一个可渲染的组件会被渲染在每一行下面，除了小节标题的前面的最后一行。在其上方的小节ID和行ID，以及邻近的行是否被高亮会作为参数传递进来。
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#ff0000',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      console.log(obj);
      return (
        <div style={{ marginTop: '50px' }}>
          {
            listData.map((item, index) => {
              return (
                <div key={`list-item-${index}`} className={styles.preview}>
                  <div style={{ width: "100%", height: "50px", lineHeight: "50px", borderBottom: '0.5px solid #f0f0f0', }}>
                    <div style={{ width: "94%", margin: "0 auto", textAlign: "justify", color: "#999999", }}>
                      <div style={{ float: "left", fontSize: "18px" }}>专柜收入</div>
                      <div style={{ float: "right", color: "#000000", fontSize: "26px" }}>{'￥' + (item.shop_income / 100).toFixed(2)}</div>
                    </div>
                  </div>
                  <div className={styles.body} style={{ borderBottom: '0.5px solid #f0f0f0', height: "100px", }}>
                    <div style={{ width: "100%", height: "25px", lineHeight: "25px" }}>
                      <div style={{ width: "94%", margin: "0 auto", textAlign: "justify", color: "#999999", }}>
                        <div style={{ float: "left", }}>下单人</div>
                        <div style={{ float: "right", }}>{item.name}</div>
                      </div>
                    </div>
                    <div style={{ width: "100%", height: "25px", lineHeight: "25px" }}>
                      <div style={{ width: "94%", margin: "0 auto", textAlign: "justify", color: "#999999", }}>
                        <div style={{ float: "left", }}>下单手机</div>
                        <a href={`tel:${item.username}`} style={{ float: "right", color: "#999999", }}>{item.username}</a>
                      </div>
                    </div>
                    <div style={{ width: "100%", height: "25px", lineHeight: "25px" }}>
                      <div style={{ width: "94%", margin: "0 auto", textAlign: "justify", color: "#999999", }}>
                        <div style={{ float: "left", }}>下单时间</div>
                        <div style={{ float: "right", }}>{item.created_time}</div>
                      </div>
                    </div>
                    <div style={{ width: "100%", height: "25px", lineHeight: "25px" }}>
                      <div style={{ width: "94%", margin: "0 auto", textAlign: "justify", color: "#999999", }}>
                        <div style={{ float: "left", }}>提货时间</div>
                        <div style={{ float: "right", }}>{item.completed_time}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.body} style={{ borderBottom: '0.5px solid #f0f0f0' }}>
                    {
                      item.lines.map((item, index) => {
                        return (
                          <div className={styles.body} style={{ borderBottom: '0.5px solid #f0f0f0', height: "60px", }}>
                            <div style={{ width: "100%", height: "30px", lineHeight: "30px" }}>
                              <div style={{ width: "94%", margin: "0 auto", textAlign: "justify", color: "#999999", }}>
                                <div style={{ float: "left", }}>{`${item.title} x ${item.quantity}`}</div>
                                <div style={{ float: "right", }}>{'￥' + item.retail_price + '(原价' + item.original_price + ')'}</div>
                              </div>
                            </div>
                            <div style={{ width: "100%", height: "30px", lineHeight: "30px" }}>
                              <div style={{ width: "94%", margin: "0 auto", textAlign: "justify", color: "#999999", }}>
                                <div style={{ float: "left", }}>{item.hg_code}</div>
                                <div style={{ float: "right", }}>{item.offer + '中分类 | ' + item.sku_attr}</div>
                              </div>
                            </div>
                          </div>
                        )
                      })

                    }
                  </div>
                  <div className={styles.body} style={{ borderBottom: '0.5px solid #f0f0f0', height: "90px", }}>
                    <div style={{ width: "100%", height: "30px", lineHeight: "30px" }}>
                      <div style={{ width: "94%", margin: "0 auto", textAlign: "justify", color: "#999999", }}>
                        <div style={{ float: "left", }}>订单号</div>
                        <div style={{ float: "right", }}>{item.number}</div>
                      </div>
                    </div>
                    <div style={{ width: "100%", height: "30px", lineHeight: "30px" }}>
                      <div style={{ width: "94%", margin: "0 auto", textAlign: "justify", color: "#999999", }}>
                        <div style={{ float: "left", }}>其他信息</div>
                        <div style={{ float: "right", }}>
                          {
                            item.order_type === "闪购(未提)" ?
                              <span style={{ color: "red" }}>{item.order_type}</span> :
                              <span>{item.order_type}</span>
                          }
                          &nbsp;|&nbsp;
                                                <span>{item.payment_type}</span>&nbsp;|&nbsp;
                                                <span>{item.shipping_method}</span>
                        </div>
                      </div>
                    </div>
                    {
                      item.aftersale_status ? (
                        <div style={{ width: "100%", height: "30px", lineHeight: "30px" }}>
                          <div style={{ width: "94%", margin: "0 auto", textAlign: "justify", color: "#999999", }}>
                            <div style={{ float: "left", }}>售后信息</div>
                            <div style={{ float: "right", color: "red", }}>{item.aftersale_status}</div>
                          </div>
                        </div>
                      ) : null
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        // 数据源
        dataSource={this.state.dataSource}
        // 页眉
        // renderHeader={() => <span>header</span>}
        // 页脚
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? '加载中...' : '------ 我是有底线的，底线在此 ------'}
        </div>)}
        // 从数据源(data source)中接受一条数据，以及它和它所在section的ID。返回一个可渲染的组件来为这行数据进行渲染。默认情况下参数中的数据就是放进数据源中的数据本身，不过也可以提供一些转换器。如果某一行正在被高亮（通过调用highlightRow函数），ListView会得到相应的通知。
        // 数据填充模板
        renderRow={row}
        // 如果提供了此属性，一个可渲染的组件会被渲染在每一行下面，除了小节标题的前面的最后一行。在其上方的小节ID和行ID，以及邻近的行是否被高亮会作为参数传递进来。
        renderSeparator={separator}
        className="am-list"
        // 每次事件循环（每帧）渲染的行数
        pageSize={10}
        // 使用 html 的 body 作为滚动容器
        useBodyScroll
        // 在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制。
        onScroll={() => { console.log('scroll'); }}
        // 控制在滚动过程中，scroll事件被调用的频率
        scrollRenderAheadDistance={500}
        // 当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用
        onEndReached={this.onEndReached}
        // 调用onEndReached之前的临界值，单位是像素
        onEndReachedThreshold={50}
      />
    );
  }
}

export default Demo;