<template>
  <div class="fileApp">
    <v-card>
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h2 basil--text">
          FILE
        </h1>
      </v-card-title>

      <v-tabs
        v-model="tab"
        background-color="transparent"
        grow
      >
        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <!-- 업로드 탭 -->
        <v-tab-item class="tabTitle">
          <h2>업로드 할 파일을 선택해 주세요</h2>
          <v-row>
            <v-col>
              <v-card
                flat
              >
              <v-card-text>
                <v-file-input
                  v-model="userFile"
                  name="file"
                  counter
                  show-size
                  truncate-length="50"
                  type="file"
                  label="파일 제출"
                ></v-file-input>
              </v-card-text>
          </v-card>
            </v-col>
            <v-col>
              <v-btn
              color="#623b2c"
              @click="upload"
              dark
              :loading="upLoadBtn"
              :disabled="upLoadBtn"
              >
                업로드
              </v-btn>
            </v-col>
          </v-row>
        </v-tab-item>
        <!-- 파일 관리 -->
        <v-tab-item>
          <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
          >
            <template v-slot:activator="{ on }">
              <div class="btnBox">
                <v-btn
                  icon
                  class="mx-2"
                  fab
                  small
                  color="pink"
                  @click="reload"
                >
                  <v-icon dark>
                  mdi-refresh
                  </v-icon>
                </v-btn>
                <v-btn
                  class="mx-2"
                  fab
                  small
                  color="green"
                  @click="downImg"
                  icon
                  :disabled="imgOptionArray == '' ? true : false"
                >
                  <v-icon dark>
                  mdi-arrow-collapse-down
                  </v-icon>
                </v-btn>
                <v-btn
                  class="mx-2"
                  fab
                  small
                  color="red"
                  v-on="on"
                  icon
                  :disabled="imgOptionArray == '' ? true : false"
                >
                  <v-icon dark>
                  mdi-delete
                  </v-icon>
                </v-btn>
              </div>
            </template>
            <v-card>
              <v-card-title class="text-h5">
                {{btnText.tilte}}
              </v-card-title>
              <v-card-text>
                {{btnText.text}}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green darken-1"
                  text
                  @click="[dialog = false, deleteImg]"
                >
                  취소
                </v-btn>
                <v-btn
                  color="green darken-1"
                  text
                  @click="deleteImg"
                >
                  확인
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-card
            flat
          >
            <v-card-text>
              <v-responsive
                class="overflow-y-auto"
              >
                <v-responsive
                  class="text-center pa-2"
                >
                  <v-lazy
                    :options="{
                      threshold: .5
                    }"
                    transition="fade-transition"
                    v-for="(e,i) in imgArray" :key="i"
                    v-model="isActive2[i]"
                  >
                    <v-img
                    max-height="300"
                    max-width="500"
                    :id="imgArray[i]"
                    @click="selectImg(imgArray[i], i)"
                    :class="{ active: isActive[i] }"
                    :src="`https://cats0713.keyway.dev/api/download?filename=${imgArray[i]}`"
                    alt="."
                    ></v-img>
                  </v-lazy>
                </v-responsive>
              </v-responsive>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <v-alert
      v-if="!card.cardStatus"
      :type="card.cardType"
      dark
      >
    {{card.cardText}}
    </v-alert>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        card: {
          cardStatus: true,
          cardText: '',
          cardType: '',
        },
        tab: null,
        items: ['upload', 'download'],
        userFile: null,
        imgArray: [],
        upLoadBtn: false,
        isActive: [],
        isActive2: [],
        dialog: false,
        imgOptionArray: [],
        btnText: { tilte: '삭제하시겠습니까?', text: '삭제하면 되돌릴 수 없습니다.' },
      }
    },
    methods: {
      upload () {
        if (this.userFile == null) {
          this.card.cardText = '파일을 선택해 주십시오'
          this.card.cardType = 'error'
          this.card.cardStatus = false
          setTimeout(() => {
            this.card.cardStatus = true
          }, 3000)
        } else {
          this.upLoadBtn = true
          const formData = new FormData()
          formData.append('file', this.userFile)
          this.$axios.post('/api/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => {
            this.userFile = null
            this.card.cardText = '파일전송을 완료했습니다'
            this.card.cardType = 'success'
            this.card.cardStatus = false
            setTimeout(() => {
              this.card.cardStatus = true
              this.upLoadBtn = false
            }, 3000)
          }).catch(err => {
            console.log(err)
          })
        }
      },
      reload () {
        this.imgOptionArray = []
        this.imgArray = []
        this.$axios.get('/api/download/all').then((res) => {
          this.imgArray = Object.assign(res.data)
        })
        this.imgArray.forEach((v, i) => {
          this.isActive[i] = false
          this.isActive2[i] = false
        })
      },
      selectImg (e, i) {
        // console.log(e)
        // this.isActive[i] = !this.isActive[i]
        this.$set(this.isActive, i, !this.isActive[i])
        if (this.isActive[i]) {
          this.imgOptionArray.push(e)
        } else {
          this.imgOptionArray.pop(e)
        }
        console.log(this.imgOptionArray)
      },
      downImg () {
        this.imgOptionArray.forEach((e, i) => {
          console.log(e)
          this.$axios.post('/api/download/down', { filename: e }, { responseType: 'blob' }).then((res) => {
            // console.log(res)
            // const url = new Blob([res.data])
            // const link = document.createElement('a')
            // link.href = url
            // link.setAttribute('download', 'down.jpg')
            // document.body.appendChild(link)
            // link.click()
            // link.remove()
            const url = window.URL.createObjectURL(new Blob([res.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'down.jpg') // or any other extension
            document.body.appendChild(link)
            link.click()
            link.remove()
          })
        })
        this.imgOptionArray = []
        this.imgArray.forEach((v, i) => {
          this.isActive[i] = false
          this.isActive2[i] = false
        })
      },
      deleteImg () {
        this.dialog = false
        console.log(this.imgOptionArray)
        this.imgOptionArray.forEach((e, i) => {
          console.log(e)
          this.$axios.post('/api/download/del', { filename: e }).then((res) => {
            console.log('ok')
            this.imgArray = []
            this.$axios.get('/api/download/all').then((res) => {
              this.imgArray = Object.assign(res.data)
            })
          })
        })
        this.imgArray.forEach((v, i) => {
          this.isActive[i] = false
          this.isActive2[i] = false
        })
        this.imgOptionArray = []
      },
    },
    mounted () {
      this.$axios.get('/api/download/all').then((res) => {
        // console.log(typeof (res))
        this.imgArray = Object.assign(res.data)
        this.imgArray.forEach((v, i) => {
          this.isActive[i] = false
          this.isActive2[i] = false
        })
        // console.log(this.imgArray)
        // console.log(`https://cats0713.keyway.dev/api/download?filename=${this.imgArray[0]}`)
        // console.log(this.isActive)
      })
    },
  }
</script>

<style lang="scss" scoped>
  .tabTitle{
    text-align: center;
    h2{
      margin: 20px;
      display: inline-block;
    }
  }
  .v-image{
    display: inline-block;
  }
  .v-image:hover{
    cursor: pointer;
  }
  .active{
    filter: blur(5px) grayscale(80%);
  }
  .btnBox{
    z-index: 100;
    position: fixed;
    bottom: 10%;
    left: 10%;
  }
  i, .v-icon{
    color: white;
  }
</style>
