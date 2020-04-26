<template>
  <div class="wrapper">
    <KSwiper
      class="swiper"
      :indicator-dots="indicatorDots"
      :circular="circular"
      :autoplay="autoplay"
      :duration="duration"
    >
      <KSwiperItem v-for="(item, index) in bannerList" :key="index">
        <KView class="swiper-item" :style="{ 'background-image': `url(${item.url})` }" />
      </KSwiperItem>
    </KSwiper>
    <div class="entry">
      <div class="entry-item" :key="index" v-for="(item, index) in entryList">
        <img :src="item.logo" alt="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </div>
    <div class="activity-wrapper">
      <div class="left" @click="goDetail"><img :src="activeList[0].bgImageUrl" alt="" /></div>
      <div class="right">
        <div class="top" @click="goActivity(activeList[1].linkUrl)">
          <img :src="activeList[1].bgImageUrl" alt="" />
        </div>
        <div class="bottom" @click="goActivity(activeList[2].linkUrl)">
          <img :src="activeList[2].bgImageUrl" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { KSwiper, KSwiperItem, KView } from 'kbone-ui';
import router from '@/utils/router';

Vue.use(KSwiper);
Vue.use(KSwiperItem);
Vue.use(KView);

export default {
  name: 'index',
  data() {
    return {
      indicatorDots: true,
      circular: true,
      autoplay: true,
      duration: 300,
      bannerList: [
        {
          url: 'https://static-image.91jkys.com/index/a9d3b5b5-b3a9-45e1-bdeb-b45507c3fe60.png',
          type: '3',
          targetId: '',
          href: 'https://static.91jkys.com/tms/chunjichuxing/index.html'
        },
        {
          url: 'https://static-image.91jkys.com/index/8638c390-041e-4751-b84a-bed140b102ac.jpg',
          type: '3',
          targetId: '',
          href: 'https://static.91jkys.com/tms/yifei/index.html'
        },
        {
          url: 'https://static-image.91jkys.com/index/3d9a13da-8eba-490d-9f66-984a817e7b71.jpg',
          type: '3',
          targetId: '',
          href: 'https://static.91jkys.com/collection/toubao/dist/index.html#/entrance'
        },
        {
          url: 'https://static-image.91jkys.com/index/8591f98f-04ac-4591-a2eb-16276d283b0d.png',
          type: '3',
          targetId: '',
          href: 'https://static.91jkys.com/newactivity/dist/renshen2/index.html'
        },
        {
          url: 'https://static-image.91jkys.com/index/49c02d33-a537-43f7-9e21-bd5efce1a216.jpg',
          type: '3',
          targetId: '',
          href: 'https://static.91jkys.com/tms/haocai/index.html'
        }
      ],
      entryList: [
        {
          logo: 'https://static-image.91jkys.com/index/68e3839f-8f7c-43b3-9f0c-fae6f240ed35.png',
          text: '联系客服'
        },
        {
          logo: 'https://static-image.91jkys.com/index/68e3839f-8f7c-43b3-9f0c-fae6f240ed35.png',
          text: '我的订单'
        },
        {
          logo: 'https://static-image.91jkys.com/index/51481435-c729-412b-b556-5aeba08d3dc6.png',
          text: '我的抵用卷'
        }
      ],
      activeList: [
        {
          imageUrl: null,
          bgImageUrl: 'https://static-image.91jkys.com/index/6e1e26e4-3881-45dd-bb73-0d2a65fa6edd.gif',
          linkUrl: '',
          type: '2',
          targetId: '3079',
          startTime: 1587607200000,
          spareTime: 3366478,
          status: 2
        },
        {
          imageUrl: null,
          bgImageUrl: 'https://static-image.91jkys.com/index/42236ac2-5adc-4866-be45-0b71347bba7f.jpg',
          linkUrl: 'https://static.91jkys.com/tms/tbxin/index.html',
          type: '3',
          targetId: '',
          startTime: null,
          spareTime: null,
          status: null
        },
        {
          imageUrl: null,
          bgImageUrl: 'https://static-image.91jkys.com/index/c7941d81-1a04-4881-89e6-3f2333cbf743.jpg',
          linkUrl: 'http://static.91jkys.com/collection/toubao/dist/index.html#/entrance',
          type: '3',
          targetId: '',
          startTime: null,
          spareTime: null,
          status: null
        }
      ]
    };
  },
  methods: {
    goActivity(url) {
      router.push(`/h5/${encodeURIComponent(url)}`);
    },
    goDetail() {
      router.push('/goodsDetail');
    }
  }
};
</script>

<style lang="less">
.wrapper {
  width: 100%;
  height: 100%;

  .swiper {
    height: 200px;
  }

  .entry {
    display: flex;
    margin-bottom: 20px;
    background-color: #fff;

    .entry-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: 120px;

      img {
        margin-bottom: 12px;
        width: 40px;
        height: 40px;
      }

      .text {
        font-size: 12px;
      }
    }
  }

  .swiper-item {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
  }

  .activity-wrapper {
    display: flex;
    height: 212px;

    img {
      width: 100%;
    }

    .left {
      flex: 1;
    }

    .right {
      display: flex;
      flex-direction: column;
      flex: 1;

      .top {
        height: 50%;
      }
      .bottom {
        height: 50%;
      }
    }
  }
}
</style>
