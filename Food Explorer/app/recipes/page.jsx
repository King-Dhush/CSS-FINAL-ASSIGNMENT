  'use client';

  import { Fascinate } from 'next/font/google';
  import { useState } from 'react';

  // Recipes Data
  const recipes = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      category: 'Italian',
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
        name: 'Hainanese Chicken Rice',
        category: 'Chinese',
        ingredients: [
          { name: 'Chicken', amount: 1, unit: 'whole' },
          { name: 'Rice', amount: 2, unit: 'cups' },
          { name: 'Ginger', amount: 1, unit: 'inch' },
          { name: 'Garlic', amount: 3, unit: 'cloves' },
          { name: 'Soy Sauce', amount: 2, unit: 'tbsp' },
          { name: 'Cucumber', amount: 1, unit: 'piece' },
        ],
        instructions: [
          'Prepare the chicken: Rinse the whole chicken under cold water and pat it dry with paper towels.',
    'In a large pot, bring water to a boil. Add ginger slices, garlic cloves, pandan leaves, and a pinch of salt.',
    'Carefully lower the chicken into the boiling water. Reduce the heat to low and simmer for 30-40 minutes, ensuring the chicken is fully cooked but remains tender.',
    'Remove the chicken from the pot and immediately submerge it in an ice bath to stop the cooking process and retain its juiciness.',
    'Once cooled, rub the chicken with sesame oil and let it rest before cutting into bite-sized pieces.',
    'Prepare the rice: In a separate pan, sauté minced garlic until fragrant. Add rice and stir to coat the grains with the oil.',
    'Pour in chicken stock (from the boiled chicken) and cook the rice according to package instructions.',
    'Prepare the chili sauce: Blend chili sauce with minced garlic, soy sauce, and a splash of chicken stock for dipping.',
    'Slice the cucumber into thin strips for garnish.',
    'Serve the chicken on a plate with sliced cucumbers and green onions. Accompany with steamed rice and chili sauce on the side.',
        ],
      },
      {
        id: 3,
        name: 'Hokkien Mee',
        category: 'Chinese',
        ingredients: [
          { name: 'Egg Noodles', amount: 200, unit: 'grams' },
          { name: 'Prawns', amount: 200, unit: 'grams' },
          { name: 'Pork Ribs', amount: 150, unit: 'grams' },
          { name: 'Soy Sauce', amount: 2, unit: 'tbsp' },
          { name: 'Garlic', amount: 3, unit: 'cloves' },
          { name: 'Eggs', amount: 2, unit: 'large' },
        ],
        instructions: [
          'Stir-fry garlic until fragrant.',
          'Add pork ribs and prawns, cook until tender.',
          'Add noodles and soy sauce, stir-fry until well combined.',
          'Top with fried eggs and serve hot.',
        ],
      },
      {
        id: 4,
        name: 'Xiaolongbao',
        category: 'Chinese',
        ingredients: [
          { name: 'Flour', amount: 200, unit: 'grams' },
          { name: 'Ground Pork', amount: 150, unit: 'grams' },
          { name: 'Ginger', amount: 1, unit: 'inch' },
          { name: 'Soy Sauce', amount: 1, unit: 'tbsp' },
          { name: 'Vinegar', amount: 2, unit: 'tbsp' },
          { name: 'Water', amount: 100, unit: 'milliliters' },
        ],
        instructions: [
          'Mix ground pork with ginger, soy sauce, and water to make the filling.',
          'Roll out flour into thin wrappers and fill with pork mixture.',
          'Steam xiaolongbao for 8-10 minutes.',
          'Serve with vinegar for dipping.',
        ],
      },
    
      // Indian Cuisine
      {
        id: 5,
        name: 'Chicken Briyani',
        category: 'Indian',
        ingredients: [
          { name: 'Basmati Rice', amount: 2, unit: 'cups' },
          { name: 'Chicken', amount: 500, unit: 'grams' },
          { name: 'Yogurt', amount: 1, unit: 'cup' },
          { name: 'Onion', amount: 2, unit: 'pieces' },
          { name: 'Garlic', amount: 3, unit: 'cloves' },
          { name: 'Garam Masala', amount: 2, unit: 'tbsp' },
        ],
        instructions: [
          'Marinate chicken with yogurt, garlic, and garam masala for 1 hour.',
          'Cook basmati rice separately until half-done.',
          'Layer rice and chicken in a pot, cover, and cook on low heat for 30 minutes.',
          'Serve hot with raita or salad.',
        ],
      },
      {
        id: 6,
        name: 'Masala Dosa',
        category: 'Indian',
        ingredients: [
          { name: 'Rice', amount: 1, unit: 'cup' },
          { name: 'Urad Dal', amount: 0.5, unit: 'cup' },
          { name: 'Potato', amount: 2, unit: 'pieces' },
          { name: 'Onion', amount: 1, unit: 'piece' },
          { name: 'Curry Leaves', amount: 10, unit: 'leaves' },
          { name: 'Coconut Chutney', amount: 1, unit: 'serving' },
        ],
        instructions: [
          'Soak rice and urad dal overnight, then grind into a batter.',
          'Ferment the batter for 8-10 hours.',
          'Cook potatoes with onions and curry leaves for the filling.',
          'Spread dosa batter on a hot griddle, add potato filling, and fold.',
          'Serve with coconut chutney.',
        ],
      },
      {
        id: 7,
        name: 'Roti Prata',
        category: 'Indian',
        ingredients: [
          { name: 'Flour', amount: 200, unit: 'grams' },
          { name: 'Water', amount: 100, unit: 'milliliters' },
          { name: 'Butter', amount: 2, unit: 'tbsp' },
          { name: 'Salt', amount: 1, unit: 'pinch' },
        ],
        instructions: [
          'Mix flour, water, and salt to form a dough.',
          'Knead the dough and let it rest for 30 minutes.',
          'Flatten the dough into thin circles, spread butter, and fold.',
          'Cook on a hot griddle until golden brown.',
          'Serve with curry or sugar.',
        ],
      },
    
      // Italian Cuisine
      {
        id: 8,
        name: 'Margherita Pizza',
        category: 'Italian',
        ingredients: [
          { name: 'Pizza Dough', amount: 250, unit: 'grams' },
          { name: 'Tomato Sauce', amount: 100, unit: 'grams' },
          { name: 'Mozzarella Cheese', amount: 150, unit: 'grams' },
          { name: 'Basil Leaves', amount: 5, unit: 'leaves' },
          { name: 'Olive Oil', amount: 1, unit: 'tbsp' },
        ],
        instructions: [
          'Preheat oven to 250°C.',
          'Roll out pizza dough and spread tomato sauce.',
          'Add mozzarella cheese and basil leaves.',
          'Drizzle olive oil and bake for 10-12 minutes.',
          'Serve hot.',
        ],
      },
      {
        id: 9,
        name: 'Risotto ai Funghi',
        category: 'Italian',
        ingredients: [
          { name: 'Arborio Rice', amount: 200, unit: 'grams' },
          { name: 'Mushrooms', amount: 150, unit: 'grams' },
          { name: 'Vegetable Stock', amount: 750, unit: 'milliliters' },
          { name: 'Onion', amount: 1, unit: 'piece' },
          { name: 'Parmesan Cheese', amount: 50, unit: 'grams' },
          { name: 'Butter', amount: 2, unit: 'tbsp' },
        ],
        instructions: [
          'Sauté chopped onion in butter until soft.',
          'Add Arborio rice and stir until coated.',
          'Gradually add vegetable stock while stirring continuously.',
          'After 15 minutes, add mushrooms and continue cooking.',
          'Stir in Parmesan cheese and serve hot.',
        ],
      },
      
    
      // Malay Cuisine
      {
        id: 10,
        name: 'Mee Rebus',
        category: 'Malay',
        ingredients: [
          { name: 'Yellow Noodles', amount: 200, unit: 'grams' },
          { name: 'Potato', amount: 2, unit: 'pieces' },
          { name: 'Tofu', amount: 100, unit: 'grams' },
          { name: 'Bean Sprouts', amount: 50, unit: 'grams' },
          { name: 'Sweet Soy Sauce', amount: 2, unit: 'tbsp' },
          { name: 'Lime', amount: 1, unit: 'piece' },
        ],
        instructions: [
          'Boil potatoes and blend with water to make a thick gravy.',
          'Cook yellow noodles and tofu separately.',
          'Pour gravy over noodles and top with bean sprouts.',
          'Serve with lime wedges and sweet soy sauce.',
        ],
      },
      {
        id: 11,
        name: 'Nasi Lemak',
        category: 'Malay',
        ingredients: [
          { name: 'Rice', amount: 2, unit: 'cups' },
          { name: 'Coconut Milk', amount: 200, unit: 'milliliters' },
          { name: 'Anchovies', amount: 50, unit: 'grams' },
          { name: 'Peanuts', amount: 50, unit: 'grams' },
          { name: 'Sambal', amount: 2, unit: 'tbsp' },
          { name: 'Cucumber', amount: 1, unit: 'piece' },
        ],
        instructions: [
          'Cook rice with coconut milk until fluffy.',
          'Fry anchovies and peanuts until crispy.',
          'Serve rice with sambal, fried anchovies, peanuts, and cucumber slices.',
        ],
      },
      {
        id: 12,
        name: 'Rendang',
        category: 'Malay',
        ingredients: [
          { name: 'Beef', amount: 500, unit: 'grams' },
          { name: 'Coconut Milk', amount: 200, unit: 'milliliters' },
          { name: 'Galangal', amount: 1, unit: 'inch' },
          { name: 'Lemongrass', amount: 2, unit: 'stalks' },
          { name: 'Turmeric', amount: 1, unit: 'tsp' },
          { name: 'Kaffir Lime Leaves', amount: 5, unit: 'leaves' },
        ],
        instructions: [
          'Blend galangal, lemongrass, and turmeric into a paste.',
          'Cook beef with the paste and coconut milk on low heat for 2-3 hours.',
          'Add kaffir lime leaves and simmer until the sauce thickens.',
          'Serve with rice.',
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
        {/* Improved Unit Converter Toggle Button */}
        <button
          className={`converter-header ${isConverterOpen ? 'expanded' : ''}`}
          onClick={() => setIsConverterOpen(!isConverterOpen)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setIsConverterOpen(!isConverterOpen)}
          aria-expanded={isConverterOpen}
        >
          {isConverterOpen ? 'Hide Unit Converter ←' : 'Show Unit Converter →'}
        </button>
  
        {/* Converter Content */}
        {isConverterOpen && (
          <div className="converter-content expanded">
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
              </label>
  
              <label>
                From:
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
                Result: <strong>{convertedAmount.toFixed(2)}</strong> {toUnit}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  function RecipeCard({ recipe }) {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <div className="recipe-card">
        {/* Recipe Header */}
        <div
          className="recipe-header"
          onClick={() => setIsExpanded(!isExpanded)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setIsExpanded(!isExpanded)}
        >
          <h2>{recipe.name}</h2>
          <span className={`toggle-icon ${isExpanded ? 'expanded' : ''}`}>▼</span>
        </div>
  
        {/* Recipe Content */}
        <div className={`recipe-content ${isExpanded ? 'expanded' : ''}`}>
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ing, index) => (
                <li key={index}>
                  <span className="amount">{ing.amount}</span>
                  <span className="unit">{ing.unit}</span>
                  <span>{ing.name}</span>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Ingredient Converter */}
          <IngredientConverter ingredients={recipe.ingredients} />
  
          <div className="instructions">
            <h3>Instructions</h3>
            <ol>
              {recipe.instructions.map((inst, index) => (
                <li key={index}>{inst}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }

  export default function RecipePage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
  
    // Filter recipes based on selected category and search term
    const filteredRecipes = recipes
      .filter((recipe) => {
        // Filter by category
        if (selectedCategory === 'All') return true;
        return recipe.category === selectedCategory;
      })
      .filter((recipe) => {
        // Filter by search term
        return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
  
    return (
      <div className="recipe-page">
        <h1>Delicious Recipes</h1>
  
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
  
        {/* Dropdown for selecting cuisine */}
        <div className="filter-container">
          <label htmlFor="category-filter">Filter by Cuisine: </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Chinese">Chinese</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Malay">Malay</option>
          </select>
        </div>
  
        {/* Render filtered recipes */}
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    );
  }

