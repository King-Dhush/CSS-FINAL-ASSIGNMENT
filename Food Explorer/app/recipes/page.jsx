//student B : Aw Ming Jie S10266864B
'use client';

import { useState } from 'react';

// Function to convert units
const convertUnits = (value, fromUnit, toUnit) => {
  const conversionRates = {
    gramsToOunces: 0.03527396,
    ouncesToGrams: 28.3495,
    cupsToMilliliters: 240,
    millilitersToCups: 0.00416667,
  };

  if (fromUnit === 'grams' && toUnit === 'ounces') {
    return value * conversionRates.gramsToOunces;
  } else if (fromUnit === 'ounces' && toUnit === 'grams') {
    return value * conversionRates.ouncesToGrams;
  } else if (fromUnit === 'cups' && toUnit === 'milliliters') {
    return value * conversionRates.cupsToMilliliters;
  } else if (fromUnit === 'milliliters' && toUnit === 'cups') {
    return value * conversionRates.millilitersToCups;
  } else {
    return value; // No conversion
  }
};

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
      'Season with salt and pepper to taste. Serve with extra cheese.'
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
      'Season with salt and pepper to taste.'
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
      'Serve over cooked rice.'
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
      'Top with taco sauce and serve.'
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
      'Squeeze fresh lemon juice and top with chopped parsley before serving.'
    ],
  },
];

export default function RecipePage() {
  const [amount, setAmount] = useState(1);
  const [fromUnit, setFromUnit] = useState('grams');
  const [toUnit, setToUnit] = useState('ounces');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleAmountChange = (e) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    setConvertedAmount(convertUnits(newAmount, fromUnit, toUnit));
  };

  const handleFromUnitChange = (e) => {
    const newFromUnit = e.target.value;
    setFromUnit(newFromUnit);
    setConvertedAmount(convertUnits(amount, newFromUnit, toUnit));
  };

  const handleToUnitChange = (e) => {
    const newToUnit = e.target.value;
    setToUnit(newToUnit);
    setConvertedAmount(convertUnits(amount, fromUnit, newToUnit));
  };

  return (
    <section style={{ textAlign: 'center', padding: '2rem', maxWidth: '1200px', margin: 'auto' }}>
      <h1>Recipes</h1>
      
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2 style={{ color: '#333', fontSize: '24px', marginBottom: '10px' }}>{recipe.name}</h2>

          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            <h3>Ingredients:</h3>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} style={{ fontSize: '16px', marginBottom: '8px' }}>
                  {ingredient.amount} {ingredient.unit} {ingredient.name}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            <h3>Instructions:</h3>
            <ol style={{ fontSize: '16px', paddingLeft: '20px' }}>
              {recipe.instructions.map((instruction, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h4>Unit Converter:</h4>
            <label>
              Amount:
              <input type="number" value={amount} onChange={handleAmountChange} style={{ margin: '0 10px' }} />
            </label>

            <label>
              From Unit:
              <select value={fromUnit} onChange={handleFromUnitChange} style={{ margin: '0 10px' }}>
                <option value="grams">Grams</option>
                <option value="ounces">Ounces</option>
                <option value="cups">Cups</option>
                <option value="milliliters">Milliliters</option>
              </select>
            </label>

            <span> to </span>

            <label>
              To Unit:
              <select value={toUnit} onChange={handleToUnitChange} style={{ margin: '0 10px' }}>
                <option value="grams">Grams</option>
                <option value="ounces">Ounces</option>
                <option value="cups">Cups</option>
                <option value="milliliters">Milliliters</option>
              </select>
            </label>

            <h4 style={{ marginTop: '10px' }}>Converted: {convertedAmount} {toUnit}</h4>
          </div>
        </div>
      ))}
    </section>
  );
}
