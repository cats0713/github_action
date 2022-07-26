<template>
  <div class="bigBox">
    <div class="formBox">
      <v-card
      width="100%"
      height="100%"
      >
        <v-card-title>
          <v-row>
            <v-col cols="1"></v-col>
            <v-col>
            <v-text-field
              v-model="pipe.searchUser"
              label="User"
              single-line
              hide-details
              clearable
              @click:clear="pipe.searchUser = null"
            ></v-text-field>
            </v-col>
            <v-col>
            <v-text-field
              v-model="pipe.searchText"
              label="Contents"
              single-line
              hide-details
              clearable
              @click:clear="pipe.searchText = null"
            ></v-text-field>
            </v-col>
            <v-col>
              <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                max-width="290"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    :value="computedDateFormattedMomentjs"
                    label="날짜를 선택해 주세요"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    clearable
                    @click:clear="pipe.searchDate = null"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="pipe.searchDate"
                  @change="menu1 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-btn
              @click="reDataBtn"
              >
                확인
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="datas"
          :search="search"
        >
        </v-data-table>
        <v-row>
          <v-col
          cols="2"
          >
          </v-col>
          <v-col
          cols="8"
          >
          <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
          </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import { format, parseISO } from 'date-fns'
  export default {
    data () {
      return {
        menu1: false,
        search: '',
        pipe: {
          searchUser: null,
          searchText: null,
          searchDate: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
        },
        todayDate: null,
        headers: [
          {
            text: '사용자',
            align: 'start',
            filterable: false,
            value: 'user',
          },
          { text: '내용', value: 'contents' },
          { text: '날짜', value: 'date' },
        ],
        datas: [],
        keys: [
          'user',
          'contents',
          'date',
        ],
      }
    },
    created () {
      this.$axios.post('/api/notice', { ok: 'ok' }).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          // console.log(res.data[i])
          this.datas.push(res.data[i])
          this.todayDate = moment().format('YYYY-MM-DD')
        }
      })
    },
    methods: {
      getColor (aaa) {
        if (aaa === this.todayDate) return 'green'
        else return 'white'
      },
      reDataBtn () {
        // console.log(this.pipe.searchUser)
        console.log(this.pipe)
        this.$axios.post('/api/notice', this.pipe).then(res => {
          this.datas = []
          // console.log(this.datas)
          for (let i = 0; i < res.data.length; i++) {
            // console.log(res.data[i])
            this.datas.push(res.data[i])
            // console.log(this.datas)
          }
        })
      },
    },
    computed: {
      computedDateFormattedMomentjs () {
        return this.pipe.searchDate ? moment(this.pipe.searchDate).format('YYYY-MM-DD') : ''
      },
    },
  }
</script>

<style scoped>
  .bigBox{
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .formBox{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
</style>
