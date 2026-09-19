import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {

  recipe = {
    cardTitle: 'Simple Omelette Recipe',
    cardDescription: 'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
    cardSrc: './public/assets/image-omlette.jpeg'
  }

  preparation = {
    stepName: 'Preparation time', 
    step1: ['Total', 'Approximately 10 minutes'],
    step2 : ['Preparation', '5 minutes'],
    step3 : ['Cooking', '5 minutes']
  };
  ingredients = {
    stepName: 'Ingredients',
    step1: '2-3 large eggs',
    step2: ' Salt, to taste',
    step3: 'Pepper, to tase',
    ste4: '1 tablespoon of butter or oil',
    step5: 'Optional fillings: cheese, diced vegetables, cooked meats, herbs'
  }
  instructions = {
    stepName: 'Instructions',
    step1: ['Beat the eggs:', 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.'],
    step2: ['Heat the pan:', 'Place a non-stick frying pan over medium heat and add butter or oil.'],
    step3: ['Cook the omelette:', 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.'],
    step4: ['Add fillings (optional):', 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.'],
    step5: ['Fold and serve:', 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.'],
    step6: ['Enjoy:', 'Serve hot, with additional salt and pepper if needed.']
  }
  nutrition: any = {
    stepName: 'Nutrition',
    step1: ['Calories', 277, 'kcal'],
    step2: ['Carbs', 0, 'g'],
    step3: ['Protein', 20, 'g'],
    step4: ['Fat', 22, 'g'],
  }

}
