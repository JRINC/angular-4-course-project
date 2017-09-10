import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Test Recipe', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('A Second Test Recipe', 'This is a Second Test Recipe', 'http://twinqu.com/wp-content/uploads/2012/11/food-photography-nice-images.jpg')
  ];
  
  // @Output() selectedRecipe = new EventEmitter<Recipe>();
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipe: Recipe;
  

  constructor() { }

  ngOnInit() {
  }

  // onRecipeSelected(selectedRc: Recipe) {
  //   this.selectedRecipe.emit(selectedRc);
  // }

  onRecipeSelected(selectedRc: Recipe) {
    this.recipeWasSelected.emit(selectedRc);
  }

}
