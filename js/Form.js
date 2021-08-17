class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder","Name");

        this.button = createButton("Play");
        
        this.greeting = createElement('h3');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(1000,100);

        
        this.input.position(1000,200);
        this.button.position(1000,250);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount+=1;
            player.updateCount(playerCount);

            player.index=playerCount
            player.update()

           this.greeting.html("Hello "+player.name);
            this.greeting.position(1000,200);
            

       

        } );

    }
}