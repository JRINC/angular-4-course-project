import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Output() selectedRecipe = new EventEmitter<Recipe>(); // My Approach
  @Output() selectedRecipe = new EventEmitter<void>(); // Approach from teacher
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }
  
  // onRecipeSelected(selectedRc: Recipe) {
  //   this.selectedRecipe.emit(selectedRc);
  // }
  
  onRecipeSelected() {
    this.selectedRecipe.emit();
  }

}
