<script>

</script>

<template>
    <div class="footerContainer">
        <div class="listRight">
            <a href="https://github.com/Anastttasia/Game-Web" class="footerLogo">GitHub</a>
           <span>Anastasia Kaneva</span> 
           <span>2023</span> 
        </div>
          
        <div class="list">
            <router-link :to="{ name: 'Home' }">
                <span>Home</span>
            </router-link>
            <router-link :to="{ name: 'Dino' }">
                <span>Dino</span>
            </router-link>
            <router-link :to="{ name: 'TicTacToe' }">
                <span>Tic-Tac-Toe</span>
            </router-link>
    
        </div>
    </div>
</template>

<style>

.footerContainer{
    max-width: 100%;
    height: 10rem;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem 8rem 2px 8rem;
}
.footerLogo{
    color: white;
    font-weight: 100;
    margin: 0;
    font-size: 1rem;
    padding-right: 4rem;
    line-height: 95%;
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

.listRight{
    display: flex;
    flex-direction: column;
    text-align: start;
}

.list{
    display: flex;
    flex-direction: column;
    text-align: end;
}

@media screen and (max-width: 1270px) {
  .footerContainer {
  padding: 1rem 4rem 2px 4rem;
}
}
</style>