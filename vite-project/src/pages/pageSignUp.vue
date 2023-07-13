<script setup>
import RegistrationForm from '../components/RegistrationForm.vue';
import PROVIDE from '../constants/provides.js';
import { inject, ref } from 'vue';

const pb = inject(PROVIDE.PB);
const isSucces = ref(false);

const onLogin = (dto) => {
  pb.collection('userss').authWithPassword(
    dto.username,
    dto.password
  ).then(() =>{
    isSucces.value = true;
  });
};
</script>

<template>
    <div class="content">
        <span class="nameSlot">Sign up</span>
        <div v-if="!isSucces">
            <RegistrationForm @login="onLogin"/>
        </div>
        <div v-else>
            <div>You have been successfully logged in</div>
        </div>
    </div>
</template>

<style>
.content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.containerForGame{
    width: 60%;
    height: 50%;
    border: 1px solid #A50ABE;
    font-weight: 100;
    font-size: 1rem;
    margin: 0 0.5rem 0 0.5rem;
    box-shadow: 
        0 0 1px #A50ABE,
        0 0 2px #A50ABE,
        0 0 5px #A50ABE,
        0 0 11px #A50ABE,
        0 0 20px #A50ABE,
        0 0 30px #A50ABE,
        0 0 55px #A50ABE;
}

.btn{
    width: 6rem;
  border: 1px solid #A50ABE;
  font-weight: 100;
  font-size: 1.2rem;
  margin-top: 4rem;
  box-shadow: 
    0 0 1px #A50ABE,
    0 0 2px #A50ABE,
    0 0 5px #A50ABE,
    0 0 11px #A50ABE;
}
</style>