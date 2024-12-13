<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);
const ingredient = ref('');
</script>

<template>
  <div class="card flex justify-center">
    <Button label="Show" @click="visible = true" />
    <Dialog v-model:visible="visible" modal header="新建连接" :style="{ width: '50rem' }">
      <div class="flex items-center gap-2 mb-4">
        <label for="username" class="font-semibold w-12 ">地址</label>
        <InputText id="username" class="flex-auto" autocomplete="off" />
        <label for="email" class="font-semibold w-12 ml-4">端口</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-12">用户名</label>
        <InputText id="username" class="flex-auto" autocomplete="off" />
        <label for="email" class="font-semibold w-12 ml-4">密码</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
          <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
          <label for="ingredient1">Cheese</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
          <label for="ingredient2">Mushroom</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
          <label for="ingredient3">Pepper</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
          <label for="ingredient4">Onion</label>
        </div>
      </div>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>

</style>