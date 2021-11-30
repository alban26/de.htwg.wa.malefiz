$(document).ready(function () {
    connectWebSocket();
});
const app = Vue.createApp({})

app.component('gameboard', {
    data() {
        return {
            count: 8
        }
    },
    template: `
      <div class="square">
       
        <!--17-->
        
        <div v-for="n in 8" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="131" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 8" class="empty align-items-center justify-content-center d-flex"></div>
        
        <!--16-->
        
        <div v-for="n in range(114, 131)" :id= n class="field align-items-center justify-content-center d-flex"></div>
        
        <!-- 15 -->
        
        <div id="112" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 15" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="113" class="field align-items-center justify-content-center d-flex"></div>
        
        <!-- 14 -->
        
        <div v-for="n in range (95,112)" :id=n class="field align-items-center justify-content-center d-flex"></div>
        
        <!-- 13 -->
        
        <div v-for="n in 8" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="94" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 8" class="empty align-items-center justify-content-center d-flex"></div>
        
        <!-- 12 -->
        
        <div v-for="n in 6" class="empty align-items-center justify-content-center d-flex"></div>
        <div v-for="n in range (89, 94)" :id=n class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 6" class="empty align-items-center justify-content-center d-flex"></div>
        
        <!-- 11 -->
        
        <div v-for="n in 6" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="87" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 3" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="88" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 6" class="empty align-items-center justify-content-center d-flex"></div>
        
        <!-- 10 -->
        
        <div v-for="n in 4" class="empty align-items-center justify-content-center d-flex"></div>
        <div v-for="n in range(78, 87)" :id=n class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 4" class="empty align-items-center justify-content-center d-flex"></div>
        
        <!-- 9 -->
        
        <div v-for="n in 4" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="76" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 7" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="77" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 4" class="empty align-items-center justify-content-center d-flex"></div>
        
        <!-- 8 -->
        
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div v-for="n in range(63, 76)" :id=n class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        
        <!-- 11 -->
        
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="59" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 3" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="60" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 3" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="61" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 3" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="62" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        
        <!-- 6 -->
        
        <div v-for="n in range(42, 59)" :id="n" class="field align-items-center justify-content-center d-flex"></div>
        
        <!-- 5 -->
        
        <div id="37" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 3" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="38" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 3" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="39" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 3" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="40" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 3" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="41" class="field align-items-center justify-content-center d-flex"></div>
        
        <!-- 4 -->
        
        <div v-for="n in range(20, 37)" :id=n class="field align-items-center justify-content-center d-flex"></div>
        
        <!-- 3 -->
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="4" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 3" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="9" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 3" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="14" class="field align-items-center justify-content-center d-flex"></div>
        <div v-for="n in 3" class="empty align-items-center justify-content-center d-flex"></div>
        <div id="19" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        
        <!-- 2 -->
        
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="2" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="3" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="7" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="8" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="12" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="13" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="17" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="18" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        
        <!-- 1 -->
        
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="0" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="1" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="5" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="6" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="10" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="11" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="15" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
        <div id="16" class="field align-items-center justify-content-center d-flex"></div>
        <div class="empty align-items-center justify-content-center d-flex"></div>
      </div>`
    ,
    methods: {
        range: function (start, stop) {
            return new Array(stop - start).fill(start).map((n, i) => n + i);
        }
    }

})


app.component('infobox', {
    data() {
        return {
            count: 8
        }
    },
    template: `
        <div class="container align-items-center justify-content-center">
            <div class="row">
                <div class="square4Info">
                    <div class="col"><p id="statement" class="statementText"></p></div>
                    <div class="col">
                        <div class="box">
                            <button gameInput="200" class="button-5" onclick="rollDiceWithoutValues();
                                    process(this)">ROLL!
                            </button>
                            <div id="dice-box1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
})


app.component('playerform', {
    data() {
        return {
            title: 'Bitte Spieler eintragen',
        }
    },
    template:`
        <div id="form">
            <h2>{{ title }}</h2>
            <div className="input">
                <div v-for="i in 4" :key="i" className="inputBox">
                    <label>Spieler {{ i }}</label>
                    <input :id="'player_' + i" className="input" type="text" :name="'player_' + i"/>
                </div>
                <div className="inputBox">
                    <input className="input text-center my-4" type="button" onclick="postPlayers()"
                           value="Spiel starten!">
                </div>
            </div>
        </div>`
})

app.mount('#malefiz')





