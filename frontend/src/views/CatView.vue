<template>
  <div class="appBox">
    <v-skeleton-loader
      v-if="lodingStatus"
      class="mx-auto"
      max-width="800"
      max-height="500"
      v-for="i in 4"
      :key="i"
      type="card"
    ></v-skeleton-loader>
    <v-card
      v-if="modalOpen[0]"
      class="popUpBox"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            전세집 구하기
          </div>
          <v-list-item-title class="text-h5 mb-1">
            {{arrayBlnck[modalOpen[1]]['title']}}
          </v-list-item-title>
          <v-list-item-subtitle>{{arrayBlnck[modalOpen[1]]['content']}}</v-list-item-subtitle>
        </v-list-item-content>
        <img :src="arrayBlnck[modalOpen[1]]['image']" class="cardImg">
      </v-list-item>
      <v-card-actions>
        <v-btn
          class="cardBtn"
          outlined
          rounded
          text
          @click="modalClose"
        >
          닫기
        </v-btn>
      </v-card-actions>
    </v-card>
    <div class='bigBox'>
      <div>
        <div class="card" v-for='(e, i) in arrayBlnck' :key='i'>
          <img class='userImg' :src='e.image' alt='고양이' />
          <h4 class='catName' @click="modalOpenFunc(e, e.id)">{{ e.title }}</h4>
          <p>{{ e.price }} 만원</p>
          <v-btn
            class="ma-2"
            text
            icon
            color="blue lighten-2"
            @click="number(i)"
          >
            <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
          <span>좋아요: {{ declaration[i] }}</span>
        </div>
      </div>
      <infinite-loading @infinite='infiniteHandler' spinner="waveDots"></infinite-loading>
    </div>
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading'

  export default {
    name: 'CatView',
    data () {
      //  데이터 보관함
      return {
        lodingStatus: true,
        arrayBlnck: [], // 사진 리스트
        aNumber: true, // 좋아요 누르기
        roomNumber: 0,
        currnetPage: 0, // 현재 페이지
        declaration: [0, 0, 0, 0],
        modalOpen: [false, 0],
        nav: ['Home', 'cat', 'About'],
        isActive: false,
      }
    },
    methods: {
      modalClose () {
        this.$set(this.modalOpen, 0, false)
      },
      modalOpenFunc (e, id) {
        this.$set(this.modalOpen, 0, true)
        this.$set(this.modalOpen, 1, id)
      },
      number (i) {
        if (this.aNumber) {
          for (let j = 0; j < this.roomNumber; j++) {
            this.declaration.push(i)
            this.aNumber = false
          }
        }
        // console.log(this.declaration);
        this.$set(this.declaration, i, ++this.declaration[i])
      },
      infiniteHandler ($state) {
        this.$axios.post('/api/data', { ok: 'ok' }).then(res => {
          // console.log(res.data)
          setTimeout(() => {
            const temp = []
            console.log(this.arrayBlnck.length)
            for (let i = this.arrayBlnck.length; i <= this.arrayBlnck.length + 3; i++) {
              temp.push(res.data[i])
            }
            console.log(temp)
            if (temp.slice(-1)[0] === undefined) {
              if (temp[0] === undefined) {
                temp.splice(0, 4)
                $state.complete()
              } else if (temp[1] === undefined) {
                temp.splice(1, 3)
                this.arrayBlnck = this.arrayBlnck.concat(temp)
                this.aNumber = true
                $state.loaded()
              } else if (temp[2] === undefined) {
                temp.splice(2, 2)
                this.arrayBlnck = this.arrayBlnck.concat(temp)
                this.aNumber = true
                $state.loaded()
              } else {
                temp.splice(3, 1)
                this.arrayBlnck = this.arrayBlnck.concat(temp)
                this.aNumber = true
                $state.loaded()
              }
            } else {
              this.arrayBlnck = this.arrayBlnck.concat(temp)
              this.aNumber = true
              this.roomNumber += 1
              this.lodingStatus = false
              $state.loaded()
            }
          }, 1000)
        })
      },
      plusBtn () {
        console.log('a')
      },
    },
    components: {
      // appMyModal: DelPopup,
      InfiniteLoading,
    },
    inject: {
      theme: {
        default: { isDark: false },
      },
    },
  }
</script>

<style scoped>
  body {
    margin: 0;
  }
  div {
    box-sizing: border-box;
  }
  .catName:hover {
    cursor: pointer;
    color: #f59000;
  }
  .blackBg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0%;
    left: 0%;
    /* padding: 20px; */
  }
  .whiteBg {
    width: 100%;
    background-color: white;
    border-radius: 8px;
    padding: 20px;
  }

  .userImg {
    width: 100%;
    height: 100%;
  }

  .menu {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
  }
  .menu > ul > li {
    list-style: none;
    float: left;
    margin: 10px;
  }

  a {
    color: #fff;
    text-decoration: none;
    outline: none;
  }

  a:hover,
  a:active {
    text-decoration: none;
    color: #fff;
  }

  .container {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tabs {
    display: flex;
    position: relative;
    background-color: #fff;
    box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15),
      0 6px 12px 0 rgba(24, 94, 224, 0.15);
    padding: 0.75rem;
    border-radius: 99px;
  }
  .tabs * {
    z-index: 2;
  }

  input[type="radio"] {
    display: none;
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    width: 200px;
    font-size: 1.25rem;
    font-weight: 500;
    border-radius: 99px;
    cursor: pointer;
    transition: color 0.15s ease-in;
  }

  .notification {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    margin-left: 0.75rem;
    border-radius: 50%;
    background-color: var(--secondary-color);
    transition: 0.15s ease-in;
  }

  .glider {
    position: absolute;
    display: flex;
    height: 54px;
    width: 200px;
    background-color: var(--secondary-color);
    z-index: 1;
    border-radius: 99px;
    transition: 0.25s ease-out;
  }

  .addBtn {
    position: fixed;
    bottom: 30px;
    left: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #2c3e50;
    font-size: 30px;
    color: #e6eef9;
    text-align: center;
    line-height: 42px;
  }
  .addBtn:hover {
    cursor: pointer;
    background-color: #e6eef9;
  }

  .card{
    margin-bottom: 50px;
  }

  .appBox{
    display: inline-block;
    width: 100%;
    height: 100%;
    /* background-color: red; */
    text-align: center;
  }

  .bigBox {
    position: absolute;
    top: 0;
    left: 15%;
    width: 70%;
    height: 100%;
    text-align: center;
    overflow: auto;
    /* .card{
      margin-bottom: 100px;
    } */
  }

  .popUpBox{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 250px;
    margin-left: -250px;
    margin-top: -125px;
    z-index: 100;
    /* .cardImg{
      margin-top: 30px;
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
    .cardBtn{
      margin-top: 10px;
    } */
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
