class RecipeController < ApplicationController
  def naam
    @recipe = Recipe.find(params[:id])
  end

  def prijs
    @recipe = Recipe.find(params[:id])
  end

  def ingredienten
    @recipe = Recipe.find(params[:id])
  end

  def new

  end

  def add
    @recipe = Recipe.add(recipe_params)

    @recipe.save
    redirect_to @recipe
  end

  def create
    @recipe = Recipe.new(recipe_params)

    @recipe.save
    redirect_to @recipe
  end

  private
  def self.of name
    new(name)
  end

  private
  def self.of price
    new(price)
  end

  private
  def self.of ingredient
    new(ingredient)
  end
end
