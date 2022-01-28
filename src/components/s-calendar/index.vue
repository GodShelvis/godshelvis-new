<template>
  <div class="calendar-area no-select">
    <div class="calendar-header">
      <span>{{month}} 月</span>
      <span>{{year}} 年</span>
    </div>
    <div class="mini-calendar">
      <div :class="`calendar-day${date.date == today?'-today':''}`" v-for="date in dateArray" :key="date.date">
        <div class="weekday">{{ weekFormatArray[date.weekday] }}</div>
        <div :class="`date${date.date == today?'-today':''}`">{{ date.date }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const weekFormatArray = ['SUN','MON','TUE','WED','THU','FRI','SAT','SUN']
const currentDate = new Date()
const year = currentDate.getFullYear()
const month = currentDate.getMonth()+1
const today = currentDate.getDate()
const weekday = currentDate.getDay()

let firstDate = new Date(currentDate.setDate(today - weekday))
let dateArray:Object[] = []
for (let i = 0; i < 7; i++) {
  let _date: Date = firstDate
  firstDate.setDate(firstDate.getDate() + 1)
  dateArray.push({
    weekday: _date.getDay(),
    date: _date.getDate()
  })
}
</script>

<style scoped>
.calendar-area{
  width: 100%;
  height: 160px;
  background-color: #F2F2F2;
  border-radius: 10px;
  border: 5px #F2F2F2 solid;
  box-sizing: border-box;
  box-shadow: -0px -0px 0px #FFFFFF inset, 0px 0px 0px #B2BBC7 inset, -1px -1px 1px #FFFFFF, 1px 1px 1px #B2BBC7;
  transition: 0.2s;
}
.calendar-area:hover{
  box-shadow: -5px -5px 15px #FFFFFF inset, 5px 5px 15px #B2BBC7 inset, -10px -10px 20px #FFFFFF, 10px 10px 20px #B2BBC7;
}
.calendar-header{
  width: calc( 100% - 30px );
  height: 60px;
  background-color: #F15959;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 0px 0px 0 #B61919 inset;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #F2F2F2;
  font-size: 20px;
  transition: 0.2s;
}
.calendar-area:hover .calendar-header{
  box-shadow: 5px 5px 15px 0 #B61919 inset;
}
.mini-calendar{
  width: calc( 100% - 30px );
  height: 70px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.calendar-day{
  width: 60px;
  height: 70px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -0px -0px 0px #FFFFFF, 0px 0px 0px #B2BBC7;
  transition: 0.2s;
}
.calendar-day:hover{
  text-shadow: -1px -1px 1px #FFFFFF, 1px 1px 1px #B2BBC7;
  box-shadow: -5px -5px 15px #FFFFFF, 5px 5px 15px #B2BBC7;
}
.calendar-day-today{
  width: 60px;
  height: 70px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -1px -1px 1px 0 #FFFFFF, 1px 1px 1px 0 #B2BBC7,-1px -1px 1px 0 #FFFFFF inset, 1px 1px 1px 0 #B2BBC7 inset;
  transition: 0.2s;
}
.calendar-day-today:hover{
  text-shadow: -1px -1px 1px #FFFFFF, 1px 1px 1px #B2BBC7;
  box-shadow: -5px -5px 15px #FFFFFF, 5px 5px 15px #B2BBC7, 0px 0px 0px #FFFFFF inset, 0px 0px 0px #B2BBC7 inset;
}
.weekday{
  color: #F26C6C;
  font-weight: 600;
  font-size: 12px;
}
.date{
  color: #979FAA;
  font-weight: 600;
  font-size: 25px;
}
.date-today{
  color: #F15959;
  font-weight: 600;
  font-size: 25px;
}
</style>
