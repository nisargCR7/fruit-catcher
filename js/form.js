class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(900, 50);
        this.title.style('font-size', '80px');
        this.title.style('color', 'skyblue');
        this.input.position(1150,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(1300,500);
        this.button.style('width', '100px');
        this.button.style('height', '30px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            
        
        });
       
    
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(1200,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '50px');
        });
   
    }
}