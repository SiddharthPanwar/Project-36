class Food{
    constructor(foodStock,lastFed){
     this.image = loadImage("images/Milk.png");
    }
    getFoodStock(){
        var foodref = database.ref('Food');
        foodref.on("value",function(data){
            foodObj = data.val();
        })
    }
    updateFoodStock(food){
     database.ref('/').update({
     foodObj:food
     });
    }
    display(){
        var x = 80,y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if (this.foodStock!=0) {
            for(var i=0;i<this.foodStock;i++){
                if (i%10==0) {
                    x=80;
                    y=y+50;
                }
                this.image(this.image,x,y,50,50);
                x=x+50
            }
        }
    }
    bedroom(){
        background(bedRoom,550,500);
    }
    garden(){
        background(garden,550,50);
    }
    washroom(){
        background(washRoom,550,50);
    }
}