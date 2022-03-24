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
  background-color: var(--bg);
  border-radius: 10px;
  border: 5px var(--bg) solid;
  box-sizing: border-box;
  box-shadow: -0px -0px 0px var(--shadow-light) inset, 0px 0px 0px var(--shadow-dark) inset, -1px -1px 1px var(--shadow-light), 1px 1px 1px var(--shadow-dark);
  transition: 0.2s;
}
.calendar-area:hover{
  box-shadow: 0px 0px 0px var(--shadow-light) inset, 0px 0px 0px var(--shadow-dark) inset, -10px -10px 20px var(--shadow-light), 10px 10px 20px var(--shadow-dark);
}
.calendar-header{
  width: calc( 100% - 30px );
  height: 60px;
  background-color: var(--content);
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 0px 0px 0 var(--shadow-dark) inset;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--bg);
  font-size: 20px;
  transition: 0.2s;
}
.calendar-area:hover .calendar-header{
  /* background-color: var(--primary); */
  /* box-shadow: 5px 5px 15px -5px var(--shadow-dark) inset,-5px 5px 5px -5px var(--shadow-dark) inset; */
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
  box-shadow: -0px -0px 0px var(--shadow-light), 0px 0px 0px var(--shadow-dark);
  transition: 0.2s;
}
.calendar-day:hover{
  /* text-shadow: -1px -1px 1px var(--shadow-light), 1px 1px 1px var(--shadow-dark); */
  box-shadow: -5px -5px 15px var(--shadow-light), 5px 5px 15px var(--shadow-dark);
}
.calendar-day-today{
  width: 60px;
  height: 70px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -1px -1px 1px 0 var(--shadow-light), 1px 1px 1px 0 var(--shadow-dark),-1px -1px 1px 0 var(--shadow-light) inset, 1px 1px 1px 0 var(--shadow-dark) inset;
  transition: 0.2s;
}
.calendar-day-today:hover{
  text-shadow: -1px -1px 1px var(--shadow-light), 1px 1px 1px var(--shadow-dark);
  box-shadow: -5px -5px 15px var(--shadow-light), 5px 5px 15px var(--shadow-dark), 0px 0px 0px var(--shadow-light) inset, 0px 0px 0px var(--shadow-dark) inset;
}
.weekday{
  color: var(--primary);
  font-weight: 600;
  font-size: 12px;
}
.calendar-area:hover .weekday{
  color: var(--primary);
}
.date{
  color: var(--content);
  font-weight: 600;
  font-size: 25px;
}
.calendar-day:hover .date{
  color: var(--primary);
}
.date-today{
  color: var(--primary);
  font-weight: 600;
  font-size: 25px;
}
.calendar-area:hover .date-today{
  color: var(--primary);
}
</style>
