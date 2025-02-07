'use client';

import { Fascinate } from 'next/font/google';
import { useState } from 'react';

// Recipes Data
const recipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    ingredients: [
      { name: 'Spaghetti', amount: 200, unit: 'grams' },
      { name: 'Pancetta', amount: 100, unit: 'grams' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Pecorino Cheese', amount: 50, unit: 'grams' },
      { name: 'Salt', amount: 1, unit: 'pinch' },
      { name: 'Pepper', amount: 1, unit: 'pinch' },
    ],
    instructions: [
      'Boil water in a large pot.',
      'Add spaghetti and cook until al dente, about 8-10 minutes.',
      'While pasta cooks, heat a pan and cook pancetta until crispy.',
      'Beat eggs in a bowl and add grated Pecorino cheese.',
      'Drain pasta, keeping a little pasta water.',
      'Mix pasta with egg mixture and pancetta, adding pasta water to make a creamy sauce.',
      'Season with salt and pepper to taste. Serve with extra cheese.',
    ],
  },
  {
    id: 2,
    name: 'Chicken Alfredo',
    ingredients: [
      { name: 'Chicken Breast', amount: 2, unit: 'pieces' },
      { name: 'Fettucine Pasta', amount: 250, unit: 'grams' },
      { name: 'Heavy Cream', amount: 240, unit: 'milliliters' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
      { name: 'Parmesan Cheese', amount: 50, unit: 'grams' },
      { name: 'Butter', amount: 2, unit: 'tbsp' },
      { name: 'Salt', amount: 1, unit: 'pinch' },
      { name: 'Pepper', amount: 1, unit: 'pinch' },
    ],
    instructions: [
      'Cook chicken breasts until golden brown, about 7-8 minutes on each side.',
      'Cook fettucine pasta according to package instructions.',
      'In a pan, melt butter and add garlic. Cook until fragrant.',
      'Add heavy cream and bring to a simmer. Stir in Parmesan cheese.',
      'Combine pasta and chicken with the sauce. Mix well.',
      'Season with salt and pepper to taste.',
    ],
  },
  {
    id: 3,
    name: 'Vegetable Stir Fry',
    ingredients: [
      { name: 'Bell Peppers', amount: 2, unit: 'pieces' },
      { name: 'Broccoli', amount: 100, unit: 'grams' },
      { name: 'Carrot', amount: 1, unit: 'piece' },
      { name: 'Tofu', amount: 200, unit: 'grams' },
      { name: 'Soy Sauce', amount: 2, unit: 'tbsp' },
      { name: 'Sesame Oil', amount: 1, unit: 'tbsp' },
      { name: 'Ginger', amount: 1, unit: 'inch' },
      { name: 'Garlic', amount: 2, unit: 'cloves' },
      { name: 'Rice', amount: 200, unit: 'grams' },
    ],
    instructions: [
      'Cook rice according to package instructions.',
      'Heat sesame oil in a pan and sauté garlic and ginger.',
      'Add vegetables and stir-fry for 5-7 minutes.',
      'Add tofu and soy sauce, stir and cook for another 3-5 minutes.',
      'Serve over cooked rice.',
    ],
  },
  {
    id: 4,
    name: 'Beef Tacos',
    ingredients: [
      { name: 'Ground Beef', amount: 250, unit: 'grams' },
      { name: 'Taco Shells', amount: 4, unit: 'pieces' },
      { name: 'Cheese', amount: 50, unit: 'grams' },
      { name: 'Lettuce', amount: 1, unit: 'leaf' },
      { name: 'Tomatoes', amount: 2, unit: 'pieces' },
      { name: 'Taco Sauce', amount: 3, unit: 'tbsp' },
      { name: 'Onion', amount: 1, unit: 'piece' },
    ],
    instructions: [
      'Cook ground beef until browned.',
      'Warm taco shells in the oven.',
      'Chop vegetables and assemble tacos by adding beef, cheese, lettuce, tomato, and onion.',
      'Top with taco sauce and serve.',
    ],
  },
  {
    id: 5,
    name: 'Grilled Salmon',
    ingredients: [
      { name: 'Salmon Fillets', amount: 2, unit: 'pieces' },
      { name: 'Lemon', amount: 1, unit: 'piece' },
      { name: 'Olive Oil', amount: 2, unit: 'tbsp' },
      { name: 'Garlic', amount: 2, unit: 'cloves' },
      { name: 'Parsley', amount: 1, unit: 'tbsp' },
      { name: 'Salt', amount: 1, unit: 'pinch' },
      { name: 'Pepper', amount: 1, unit: 'pinch' },
    ],
    instructions: [
      'Preheat grill to medium-high heat.',
      'Drizzle salmon fillets with olive oil and sprinkle with salt, pepper, and garlic.',
      'Grill salmon for 4-5 minutes per side.',
      'Squeeze fresh lemon juice and top with chopped parsley before serving.',
    ],
  },
];

// IngredientConverter component
function IngredientConverter({ ingredients }) {
  const [isConverterOpen, setIsConverterOpen] = useState(false);

  const allowedUnits = ['ounces', 'milliliters', 'tablespoons', 'teaspoons'];
  const unitToMl = {
    ounces: 29.5735,
    milliliters: 1,
    tablespoons: 14.7868,
    teaspoons: 4.92892,
  };

  const standardizeUnit = (unit) => {
    const lower = unit.toLowerCase();
    if (lower === 'tbsp') return 'tablespoons';
    return lower;
  };

  const convertibleIngredients = ingredients
    .map((ing) => ({ ...ing, unit: standardizeUnit(ing.unit) }))
    .filter((ing) => allowedUnits.includes(ing.unit));

  if (convertibleIngredients.length === 0) {
    return null; // Don't show the converter if no convertible ingredients
  }

  const defaultIngredient = convertibleIngredients[0];
  const defaultTarget =
    allowedUnits.find((u) => u !== defaultIngredient.unit) || defaultIngredient.unit;
  const [selectedIngredient, setSelectedIngredient] = useState(defaultIngredient);
  const [amount, setAmount] = useState(defaultIngredient.amount);
  const [toUnit, setToUnit] = useState(defaultTarget);

  const handleIngredientChange = (e) => {
    const ingName = e.target.value;
    const ing = convertibleIngredients.find((i) => i.name === ingName);
    if (ing) {
      setSelectedIngredient(ing);
      setAmount(ing.amount);
      const newTarget = allowedUnits.find((u) => u !== ing.unit) || ing.unit;
      setToUnit(newTarget);
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleToUnitChange = (e) => {
    setToUnit(e.target.value);
  };

  const fromUnit = selectedIngredient.unit;
  const convertedAmount =
    amount && unitToMl[fromUnit] && unitToMl[toUnit]
      ? (parseFloat(amount) * unitToMl[fromUnit]) / unitToMl[toUnit]
      : 0;

  return (
    <div className="converter-container">
      <div
        className="converter-header"
        onClick={() => setIsConverterOpen(!isConverterOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsConverterOpen(!isConverterOpen)}
      >
        <h4>Unit Converter</h4>
        <span className={`toggle-icon ${isConverterOpen ? 'expanded' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </span>
      </div>
      <div className={`converter-content ${isConverterOpen ? 'expanded' : ''}`}>
        <div className="converter-inputs">
          <label>
            Ingredient:
            <select value={selectedIngredient.name} onChange={handleIngredientChange}>
              {convertibleIngredients.map((ing, index) => (
                <option key={index} value={ing.name}>
                  {ing.name} ({ing.amount} {ing.unit})
                </option>
              ))}
            </select>
          </label>
          <label>
            Amount:
            <input type="number" value={amount} onChange={handleAmountChange} />
            <span className="unit">{fromUnit}</span>
          </label>
          <label>
            Convert to:
            <select value={toUnit} onChange={handleToUnitChange}>
              {allowedUnits.map((unit, index) => (
                <option key={index} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="converted-result">
          <p>
            <strong>Result:</strong> {convertedAmount.toFixed(2)} {toUnit}
          </p>
        </div>
      </div>
    </div>
  );
}

function RecipeCard({ recipe }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="recipe-card">
      <div
        className="recipe-header"
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsExpanded(!isExpanded)}
      >
        <h2>{recipe.name}</h2>
        <span className={`toggle-icon ${isExpanded ? 'expanded' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </span>
      </div>
      <div className={`recipe-content ${isExpanded ? 'expanded' : ''}`}>
        <div className="recipe-grid">
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ing, index) => (
                <li key={index}>
                  <span className="amount">{ing.amount}{ing.unit}</span>
                  <span className="name">{ing.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="instructions">
            <h3>Instructions</h3>
            <ol>
              {recipe.instructions.map((inst, index) => (
                <li key={index}>{inst}</li>
              ))}
            </ol>
          </div>
        </div>
        <IngredientConverter ingredients={recipe.ingredients} />
      </div>
    </div>
  );
}

export default function RecipePage() {
  return (
    <section className="recipe-page">
      <h1>Delicious Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}

