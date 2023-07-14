<script>

</script>

<template>
<div class="containerMain">
    <div class="descr">
        <div class="half">
            <h1 class="welcome">GAME WEB</h1>
            <h2>PLAY ONLINE GAMES AND SHARE THE RESULTS!</h2>
            <router-link :to="{ name: 'SignUp' }">
                <button class="btn btnStart" style="width: 9rem; height: 3rem;">
                    <span class="nameSlot" style="font-size: x-large; font-weight: 400;">
                        START!
                    </span>
                </button>
            </router-link>
        </div>
    </div>
</div>
</template>

<style>
.containerMain{
    margin: 0;
    widows: 100%;
    height: 100%;
    background-image: url('../image/mainPageBgDesctop.png');
}

.descr{
    width: 70%;
    height: 100%;
    z-index: 2;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.half{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 9rem;
}

.half > h1{
    color: white;
    font-weight: 100;
    margin: 0;
    font-size: 4rem;
    padding-right: 4rem;
    line-height: 95%;
    text-align: start;
    text-shadow: 
    0 0 1px #A50ABE,
    0 0 2px #A50ABE,
    0 0 5px #A50ABE,
    0 0 11px #A50ABE,
    0 0 20px #A50ABE,
    0 0 30px #A50ABE,
    0 0 55px #A50ABE,
    0 0 80px #A50ABE;
}

.half > h2{
    width: 50%;
    color: white;
    font-weight: 600;
    font-size: 2rem;
    text-shadow: none;
    text-align: start;
    margin-top: 2rem ;
    line-height: 1.2;
}

.btnStart{
    display: flex;
    justify-content: flex-start;
}
</style>