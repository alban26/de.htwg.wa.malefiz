

// Create a Vue application
const app = Vue.createApp({})

// Define a new global component called button-counter
app.component('gameboard', {
    data() {
        return {
            count: 8
        }
    },
    template: `
        <div class="container">
            <div class="row ">
                <h1>MALEFIZ</h1>
                <div class="col-sm-7 col-md-7 col-lg-7 col-xl-8">
                    <div class="square">

                        <!--17-->
                            
                        <div v-for="n in 8" class="empty align-items-center justify-content-center d-flex"></div>
                        <div id="131" ></div>                  
                        <div v-for="n in 8" class="empty align-items-center justify-content-center d-flex"></div>
                      
                        <!--16-->
       
                        <div v-for="n in range(114, 131)" :id=n class="field align-items-center justify-content-center d-flex"></div>
                      
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
                    </div>
                </div>
                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 ">
                    <div class="container align-items-center justify-content-center">
                        <div class="row">
                            <div class="square4Info">
                                <div class="col"><p id="statement" class="statementText"></p></div>
                                <div class="col">

                                    <div class="box">
                                        <div>
                                            @* Number of Dice to use*@
                                            @* <input id="number1" type="number" value=2>*@
                                            <button gameInput="200" class="button-5" onclick="rollDiceWithoutValues();
                                            process(this)">ROLL!</button>
                                        </div>
                                        <div id="dice-box1"></div>
                                          <input id="winner" type="hidden" value=@controller.getPlayersTurn.name>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    methods: {
        range: function (start, stop) {
            return new Array(stop - start).fill(start).map((n, i) => n + i);
        },


    }
})


app.mount('#malefiz')

// const app = Vue.createApp({
//     //root component
//     // daten und funktionen
//     //template: '<h2> I am the template</h2>'
//     data() {
//         return {
//             showBooks: true,
//             title: 'The Final Title',
//             author: 'Brandom Hlalal',
//             age: 45,
//             books: [
//                 {title: 'name of the wind', author: 'patrick eee', img: 'images/malefiz-1.png'},
//                 {title: 'name of the wind', author: 'patrick eee', img: 'images/malefiz-1.png'},
//                 {title: 'name of the wind', author: 'patrick eee', img: 'images/malefiz-1.png'},
//                 {title: 'name of the wind', author: 'patrick eee', img: 'images/malefiz-1.png'},
//             ]
//         }
//     },
//
//     methods: {
//         changeTitle() {
//             console.log("clicked me")
//             this.title = 'Neuer Titel'
//         }
//     }
// })
//
//
// // Wir kreieren eben oben eine App
// // und binden es an das div 'app'
// // Und jetzt kontrollieren wir alles was
// // IM div mit iD app ist
// app.mount('#app')




