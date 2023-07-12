// Write your code here

class Breakfast {


constructor(food,drink){
    this.food = food
    this.drink = drink
}
}

const breakfast = new Breakfast("eggs", "juice")

breakfast.food
breakfast.drink


class Lunch {

    constructor (salad,soup,drink){

        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

const lunch = new Lunch ("side salad", "broccoli cheddar", "soup", "iced tea")

lunch.salad
lunch.soup
lunch.drink


class Dinner {
    #salad;
    #soup;
    #entree;
    #dessert;
  
    constructor(salad, soup, entree, dessert) {
      this.#salad = salad;
      this.#soup = soup;
      this.#entree = entree;
      this.#dessert = dessert;
    }
  
    get salad() {
      return this.#salad;
    }
  
    get soup() {
      return this.#soup;
    }
  
    get entree() {
      return this.#entree;
    }
  
    get dessert() {
      return this.#dessert;
    }
  }
  
  const dinner = new Dinner("balsamic salad", "consommé", "filet mignon", "cheesecake");
  
  console.log(dinner.salad);
  console.log(dinner.soup);
  console.log(dinner.entree);
  console.log(dinner.dessert);