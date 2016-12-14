function recipeFactory(name, ingredients, steps) {
return {
	name: name,
	ingredients: ingredients,
	steps: steps,
	stepsHtml: function () {
		return "<ol><li>" + this.steps[0] + "<li><li>" + this.steps[1] + "</li><li>" + this.steps[2] + "</li></ol>"
	}
}	ingredientsHtml: function () {
		return "<ol><li>" + this.ingredients[0] + "<li><li>" + this.ingredients[1] + "</li><li>" + this.ingredients[2] + "</li></ol>"
}
}