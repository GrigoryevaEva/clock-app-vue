<script setup lang="ts">
  import { ref } from 'vue'
  import { onMounted } from 'vue'
  import { useDateStore } from '../../../entities/date'
  import './style.module.scss'

  const date = useDateStore()

  const intervalId = ref(0)
  const hours = ref(date.hours)
  const min = ref(date.min)
  const sec = ref(date.date.getSeconds())

  // function update() {
  //   let curSec = sec.value
  //   if (++curSec === 60) {
  //     sec.value = 0

  //     if (Number(min.value) < 10) {
  //       let tmp = Number(min.value) + 1
  //       min.value = '0' + tmp

  //     } else if (Number(min.value) === 59) {
  //       min.value = '00'

  //       if (Number(hours.value) < 10) {
  //         let tmp = Number(hours.value) + 1
  //         hours.value = '0' + tmp
  //       } else if (Number(hours.value) === 23) {
  //         date.fetchDate()
  //         date.newDate()
  //         return
  //       } else {
  //         let tmp = Number(hours.value) + 1
  //         hours.value = `${tmp}`
  //       }

  //     } else {
  //       let tmp = Number(min.value) + 1
  //       min.value = `${tmp}`
  //     }

  //   } else ++sec.value
  //   console.log(sec.value)
  // }

  // function clockStart() {
  //   intervalId.value = setInterval(update, 1000);
  //   update()
  // }

  onMounted(() => {
    date.fetchDate()
    // clockStart()
  })


</script>

<template>
  <main>

    <div>
      <div>
        <p>“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</p>
        <span>Ada Lovelace</span>
      </div>
    </div>

    <div>

      <div>
        <img src="" alt="">
        <p>{{ date.dayTime }}</p>
      </div>

      <p>
        {{ `${hours}:${min}` }}
        <span>{{ date.abbrTZ }}</span>
      </p>

      <p>{{ date.location }}</p>

    </div>

    <div>
      <button>MORE</button>
    </div>

  </main>
</template>