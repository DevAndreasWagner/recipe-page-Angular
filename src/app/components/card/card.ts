import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {

  title: string = 'Simple Omelette Recipe';
  description: string = 'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.';

  prepTime = ['Approximately 10 minutes', '5 minutes', '5 minutes'];

  ingredients = ['2-3 large eggs', ' Salt, to taste', 'Pepper, to tase', '1 tablespoon of butter or oil', 'Optional fillings: cheese, diced vegetables, cooked meats, herbs']


  instructions = [
    { name: 'Beat the eggs:', text: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.' },
    { name: 'Heat the pan:', text: 'Place a non-stick frying pan over medium heat and add butter or oil.' },
    { name: 'Cook the omelette:', text: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.' },
    { name: 'Add fillings (optional):', text: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.' },
    { name: 'Fold and serve:', text: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.' },
    { name: 'Enjoy:', text: 'Serve hot, with additional salt and pepper if needed.' }
  ]




}
