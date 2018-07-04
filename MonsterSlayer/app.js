let app = new Vue({
    el:"#app",
    data:{
        isGameRunning: false,
        playerHealth : 100,
        monsterHealth: 100,
        newPlayerAttackAmount: 0,
        newMonsterAttackAmount: 0,
        newHealAmount: 0,
        damages: [],
        isHealingTurn: false
    },
    methods:{

        // Start new game
        startNewGame: function(){
            this.isGameRunning = true
        },

        // The player attacked (calculate the amount)
        newPlayerAttack: function(){
            this.isHealingTurn = false
            this.newPlayerAttackAmount = Math.floor(Math.random()* 10 + 4)
            this.manageDatasRound()
        },

        // The player attacked with a special attack (calculate the amount)
        newPlayerSpecialAttack: function(){
            this.isHealingTurn = false
            this.newPlayerAttackAmount = Math.floor(Math.random()*10 + 4) * 2
            this.manageDatasRound()
        },

        // The player healed himself
        newHeal: function(){
            this.newHealAmount = 10
            this.isHealingTurn = true
            this.manageDatasRound()
        },

        // The monster attacked (calculate the amount)
        newMonsterAttack: function(){
            this.newMonsterAttackAmount = Math.floor(Math.random()*10 + 4)
        },

        // We apply all damages and potential heals
        manageDatasRound: function(){
            this.newMonsterAttack()

            // We apply damages
            this.playerHealth -= this.newMonsterAttackAmount
            this.monsterHealth -= this.newPlayerAttackAmount

            // We check player and monster health range
            if(this.playerHealth < 0) {
                this.playerHealth = 0
            }
            if(this.monsterHealth < 0) {
                this.monsterHealth = 0
            }

            // If the player chose to heal, we apply it
            if (this.isHealingTurn == true) {

                if(this.playerHealth < 100 - this.newHealAmount) {
                    this.playerHealth += this.newHealAmount
                } else {
                    this.playerHealth = 100
                }

                this.newPlayerAttackAmount = 0

            } else {
                this.newHealAmount = 0
            }

            // We push damages for the logs
            this.damages.unshift({
                playerDamages: this.newPlayerAttackAmount,
                monsterDamages: this.newMonsterAttackAmount
            })

            if(this.monsterHealth == 0){
                if (confirm('You won! New Game?')) {
                    this.resetGame()
                }
            }

            if(this.playerHealth == 0){
                if (confirm('You lost! New Game?')) {
                    this.resetGame()
                }
            }
        },

        // We reset the game
        resetGame: function(){
            this.damages = []
            this.isGameRunning = false
            this.playerHealth = 100
            this.monsterHealth = 100
        }
    },
})