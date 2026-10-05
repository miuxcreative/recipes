const recipes = [
 {name:'Mango salmon', proteins:['fresh salmon'], vegetables:'Cucumber, roasted broccoli, avocado', fruit:'Mango + pickled red onion', herbs:'Mint + scallion', crunch:'Cashews + hemp', sauce:'Yuzu-ginger vinaigrette', prep:['Yuzu-ginger vinaigrette','Pickled red onion','Smoky crunch','Asian crunch','Roasted crucifers']},
 {name:'Black-currant salmon', proteins:['fresh salmon','canned smoked salmon'], vegetables:'Tomato, cucumber, feta', fruit:'Fresh pomegranate + pickled red onion', herbs:'Dill + parsley', crunch:'Walnuts + pumpkin seeds', sauce:'Black-currant Dijon', prep:['Black-currant Dijon','Pickled red onion','Mediterranean crunch','Roasted crucifers']},
 {name:'Spicy yuzu salmon', proteins:['fresh salmon'], vegetables:'Cucumber, carrot, avocado', fruit:'Pickled cucumber', herbs:'Scallion + parsley', crunch:'Cashew + sesame', sauce:'Spicy aioli + yuzu-ginger vinaigrette', prep:['Spicy aioli','Yuzu-ginger vinaigrette','Pickled cucumber','Asian crunch']},
 {name:'Date + feta salmon', proteins:['fresh salmon'], vegetables:'Roasted cauliflower, cucumber, feta', fruit:'Chopped dates', herbs:'Mint + parsley', crunch:'Walnuts + hemp', sauce:'Champagne-dill vinaigrette', prep:['Champagne-dill vinaigrette','Roasted crucifers','Mediterranean crunch']},
 {name:'Champagne-dill white fish', proteins:['haddock / bass'], vegetables:'Roasted cauliflower, cucumber, tomato', fruit:'Pickled red onion', herbs:'Dill + parsley', crunch:'Walnuts + pumpkin seeds', sauce:'Champagne-dill vinaigrette', prep:['Champagne-dill vinaigrette','Pickled red onion','Mediterranean crunch','Roasted crucifers']},
 {name:'Basil tomato white fish', proteins:['haddock / bass'], vegetables:'Tomato, zucchini, greens', fruit:'White balsamic + pickled onion', herbs:'Basil + parsley', crunch:'Sunflower + hemp', sauce:'Mediterranean vinaigrette', prep:['Mediterranean vinaigrette','Pickled red onion','Mediterranean crunch']},
 {name:'Date + feta white fish', proteins:['haddock / bass'], vegetables:'Roasted cauliflower, cucumber, feta', fruit:'Chopped dates', herbs:'Mint + parsley', crunch:'Walnuts + hemp', sauce:'Champagne-dill vinaigrette', prep:['Champagne-dill vinaigrette','Roasted crucifers','Mediterranean crunch']},
 {name:'Sesame ginger shrimp', proteins:['shrimp'], vegetables:'Cucumber, carrot, broccoli', fruit:'Pickled cucumber', herbs:'Scallion + mint', crunch:'Cashews + sesame', sauce:'Yuzu-ginger vinaigrette', prep:['Yuzu-ginger vinaigrette','Pickled cucumber','Asian crunch','Roasted crucifers']},
 {name:'Mango-lime shrimp', proteins:['shrimp'], vegetables:'Cucumber, avocado, roasted broccoli', fruit:'Mango + pickled jalapeño', herbs:'Mint + scallion', crunch:'Smoky crunch', sauce:'Spicy aioli', prep:['Spicy aioli','Pickled jalapeño','Smoky crunch','Roasted crucifers']},
 {name:'Champagne herb shrimp', proteins:['shrimp'], vegetables:'Tomato, cucumber, greens', fruit:'Pickled red onion', herbs:'Dill + parsley', crunch:'Walnuts + pumpkin seeds', sauce:'Champagne-dill vinaigrette', prep:['Champagne-dill vinaigrette','Pickled red onion','Mediterranean crunch']},
 {name:'Chili-crisp tofu', proteins:['tofu'], vegetables:'Broccoli, cucumber, carrot', fruit:'Pickled jalapeño', herbs:'Scallion + mint-forward Mexican mint, sparingly', crunch:'Cashews + sesame', sauce:'Crunchy chili oil + yuzu vinegar', prep:['Pickled jalapeño','Asian crunch','Roasted crucifers']},
 {name:'Date + feta tofu', proteins:['tofu'], vegetables:'Roasted cauliflower, cucumber, feta', fruit:'Chopped dates', herbs:'Mint + parsley', crunch:'Walnuts + hemp', sauce:'Champagne-dill vinaigrette', prep:['Champagne-dill vinaigrette','Roasted crucifers','Mediterranean crunch']},
 {name:'Sesame cucumber tofu', proteins:['tofu'], vegetables:'Cucumber, carrot, tomato', fruit:'Pickled cucumber', herbs:'Scallion + basil', crunch:'Asian crunch', sauce:'Yuzu-ginger vinaigrette', prep:['Yuzu-ginger vinaigrette','Pickled cucumber','Asian crunch']},
 {name:'Apricot sage chicken', proteins:['chicken'], vegetables:'Brussels sprouts, mushrooms, tomato', fruit:'Dried apricot + pickled onion', herbs:'Sage + parsley', crunch:'Macadamia + sunflower', sauce:'Sherry-sage vinaigrette', prep:['Sherry-sage vinaigrette','Roasted mushrooms','Roasted crucifers','Smoky crunch','Pickled red onion']},
 {name:'Chicken Caesar greens', proteins:['chicken'], vegetables:'Romaine, roasted broccoli, cucumber', fruit:'Cornichon or pickled cucumber', herbs:'Parsley + basil', crunch:'Pacha croutons', sauce:'Egg-free Caesar', prep:['Egg-free Caesar','Pacha croutons','Roasted crucifers','Pickled cucumber']},
 {name:'Lemon herb chicken', proteins:['chicken'], vegetables:'Tomato, cucumber, cauliflower', fruit:'Pickled carrot', herbs:'Dill + parsley', crunch:'Mediterranean crunch', sauce:'Parsley-mint green sauce', prep:['Parsley-mint green sauce','Pickled carrot','Mediterranean crunch','Roasted crucifers']},
 {name:'Apricot sage turkey', proteins:['home-ground turkey'], vegetables:'Brussels sprouts, mushrooms, tomato', fruit:'Dried apricot + pickled onion', herbs:'Sage + parsley', crunch:'Macadamia + sunflower', sauce:'Sherry-sage vinaigrette', prep:['Sherry-sage vinaigrette','Roasted mushrooms','Roasted crucifers','Smoky crunch','Pickled red onion']},
 {name:'Mexican mint turkey', proteins:['home-ground turkey'], vegetables:'Smoky corn, tomato, avocado', fruit:'Pickled jalapeño', herbs:'Mexican mint / Cuban oregano, sparingly + scallion', crunch:'Smoky crunch', sauce:'Parsley-mint green sauce', prep:['Smoky corn','Pickled jalapeño','Smoky crunch','Parsley-mint green sauce']},
 {name:'Corn + bean turkey', proteins:['home-ground turkey'], vegetables:'Smoky corn, black beans, tomato', fruit:'Pickled jalapeño', herbs:'Mexican mint / Cuban oregano, sparingly', crunch:'Pumpkin + sunflower seeds', sauce:'Apple-cider vinaigrette', prep:['Apple-cider vinaigrette','Smoky corn','Pickled jalapeño','Smoky crunch']},
 {name:'Cherry tuna scoop', proteins:['tuna scoop'], vegetables:'Celery, cucumber, tomato, feta', fruit:'Pickled cucumber', herbs:'Parsley + dill', crunch:'Walnuts', sauce:'Aged-cherry vinaigrette', prep:['Aged-cherry vinaigrette','Pickled cucumber','Mediterranean crunch']},
 {name:'Mediterranean tuna', proteins:['tuna scoop'], vegetables:'Tomato, cucumber, olives', fruit:'Pickled red onion', herbs:'Parsley + basil', crunch:'Walnuts + Pacha croutons', sauce:'Mediterranean vinaigrette', prep:['Mediterranean vinaigrette','Pickled red onion','Mediterranean crunch','Pacha croutons']},
 {name:'Cucumber dill tuna', proteins:['tuna scoop'], vegetables:'Cucumber, celery, avocado', fruit:'Pickled carrot', herbs:'Dill + parsley', crunch:'Sunflower + hemp', sauce:'Champagne-dill vinaigrette', prep:['Champagne-dill vinaigrette','Pickled carrot','Mediterranean crunch']},
 {name:'Lemon herb chicken scoop', proteins:['chicken scoop'], vegetables:'Roasted cauliflower, tomato, celery', fruit:'Pickled carrot', herbs:'Dill + parsley', crunch:'Walnuts', sauce:'Parsley-mint green sauce', prep:['Parsley-mint green sauce','Roasted crucifers','Pickled carrot','Mediterranean crunch']},
 {name:'Apricot chicken scoop', proteins:['chicken scoop'], vegetables:'Greens, cucumber, tomato, feta', fruit:'Dried apricot + pickled red onion', herbs:'Sage + parsley', crunch:'Macadamia', sauce:'Sherry-sage vinaigrette', prep:['Sherry-sage vinaigrette','Pickled red onion','Smoky crunch']},
 {name:'Date + feta chicken scoop', proteins:['chicken scoop'], vegetables:'Roasted cauliflower, cucumber, feta', fruit:'Chopped dates', herbs:'Mint + parsley', crunch:'Walnuts + hemp', sauce:'Champagne-dill vinaigrette', prep:['Champagne-dill vinaigrette','Roasted crucifers','Mediterranean crunch']},
 {name:'Sardine Mediterranean', proteins:['sardines'], vegetables:'Tomato, cucumber, black olives', fruit:'Pickled red onion', herbs:'Parsley + basil', crunch:'Walnuts + Pacha croutons', sauce:'Mediterranean vinaigrette', prep:['Mediterranean vinaigrette','Pickled red onion','Mediterranean crunch','Pacha croutons']},
 {name:'Currant sardines', proteins:['sardines'], vegetables:'Tomato, cucumber, feta', fruit:'Fresh pomegranate + pickled onion', herbs:'Dill + parsley', crunch:'Walnuts', sauce:'Black-currant Dijon', prep:['Black-currant Dijon','Pickled red onion','Mediterranean crunch']},
 {name:'Cherry pepper sardines', proteins:['sardines'], vegetables:'Tomato, cucumber, hot cherry peppers', fruit:'Pickled red onion', herbs:'Parsley + basil', crunch:'Sunflower + pumpkin seeds', sauce:'Mediterranean vinaigrette', prep:['Mediterranean vinaigrette','Pickled red onion','Mediterranean crunch']},
 {name:'Mango smoked salmon', proteins:['canned smoked salmon'], vegetables:'Cucumber, avocado, tomato', fruit:'Mango + pickled red onion', herbs:'Dill + mint', crunch:'Cashews + hemp', sauce:'Yuzu-ginger vinaigrette', prep:['Yuzu-ginger vinaigrette','Pickled red onion','Asian crunch']},
 {name:'Dill pomegranate smoked salmon', proteins:['canned smoked salmon'], vegetables:'Cucumber, greens, feta', fruit:'Fresh pomegranate + pickled onion', herbs:'Dill + parsley', crunch:'Walnuts', sauce:'Black-currant Dijon', prep:['Black-currant Dijon','Pickled red onion','Mediterranean crunch']},
 {name:'Cucumber dill smoked salmon', proteins:['canned smoked salmon'], vegetables:'Cucumber, tomato, avocado', fruit:'Pickled cucumber', herbs:'Dill + scallion', crunch:'Asian crunch', sauce:'Cucumber-lemon vinaigrette', prep:['Cucumber-lemon vinaigrette','Pickled cucumber','Asian crunch']},
 {name:'Spicy sprat', proteins:['smoked sprats'], vegetables:'Cucumber, carrot, jalapeño', fruit:'Pickled cucumber', herbs:'Dill + scallion', crunch:'Sesame + cashew', sauce:'Rice-vinegar chili dressing + crunchy chili oil', prep:['Rice-vinegar chili dressing','Pickled cucumber','Pickled jalapeño','Asian crunch']},
 {name:'Yuzu sesame sprats', proteins:['smoked sprats'], vegetables:'Cucumber, carrot, avocado', fruit:'Pickled carrot', herbs:'Scallion + mint', crunch:'Asian crunch', sauce:'Yuzu-ginger vinaigrette', prep:['Yuzu-ginger vinaigrette','Pickled carrot','Asian crunch']},
 {name:'Chili sprat greens', proteins:['smoked sprats'], vegetables:'Tomato, cucumber, greens', fruit:'Pickled jalapeño', herbs:'Parsley + scallion', crunch:'Smoky crunch', sauce:'Rice-vinegar chili dressing + crunchy chili oil', prep:['Rice-vinegar chili dressing','Pickled jalapeño','Smoky crunch']},
 {name:'Mushroom chicken + wild rice', proteins:['slow-cooked mushroom chicken'], vegetables:'Roasted mushrooms, cauliflower, greens', fruit:'Pickled red onion', herbs:'Sage + parsley', crunch:'Walnuts', sauce:'Sherry-sage vinaigrette', prep:['Roasted mushrooms','Roasted crucifers','Cooked quinoa or wild rice','Sherry-sage vinaigrette','Pickled red onion']},
 {name:'Mushroom chicken + corn', proteins:['slow-cooked mushroom chicken'], vegetables:'Mushrooms, smoky corn, tomato', fruit:'Pickled jalapeño', herbs:'Mexican mint / Cuban oregano, sparingly', crunch:'Smoky crunch', sauce:'Parsley-mint green sauce', prep:['Roasted mushrooms','Smoky corn','Smoky crunch','Pickled jalapeño','Parsley-mint green sauce']},
 {name:'Mushroom chicken + dates', proteins:['slow-cooked mushroom chicken'], vegetables:'Mushrooms, roasted cauliflower, feta', fruit:'Chopped dates', herbs:'Sage + mint', crunch:'Walnuts + hemp', sauce:'Champagne-dill vinaigrette', prep:['Roasted mushrooms','Roasted crucifers','Mediterranean crunch','Champagne-dill vinaigrette']}
];
const $ = selector => document.querySelector(selector);
let offset = 0;
function baseFor(value) {
 return value === 'Greens + Pacha' ? 'Romaine or mixed greens + Pacha croutons' :
  value === 'Crucifers + greens' ? 'Roasted broccoli / cauliflower + fresh greens' :
  value === 'Spaghetti squash + greens' ? 'Spaghetti squash + fresh greens' : 'Quinoa or wild rice + fresh greens';
}
function render() {
 const base = $('#base')?.value, protein = $('#protein')?.value;
 if (!base || !protein) return;
 const checked = new Set(JSON.parse(localStorage.getItem('bowlBookReady') || '[]'));
 const matches = recipes.filter(recipe => recipe.proteins.includes(protein));
 const ranked = [...matches].sort((a,b) => b.prep.filter(item=>checked.has(item)).length - a.prep.filter(item=>checked.has(item)).length);
 const start = ranked.length ? offset % ranked.length : 0;
 const selected = [ranked[start], ranked[(start+1)%ranked.length]];
 $('#suggestions').innerHTML = selected.map((recipe,index) => {
  const basePrep = base === 'Greens + Pacha' ? 'Pacha croutons' : base === 'Crucifers + greens' ? 'Roasted crucifers' : base === 'Quinoa / wild rice + greens' ? 'Cooked quinoa or wild rice' : null;
  const prep = [...new Set([...recipe.prep, ...(basePrep ? [basePrep] : [])])];
  const ready = prep.filter(item=>checked.has(item));
  const later = prep.filter(item=>!checked.has(item));
  const status = ready.length ? ` · ${ready.length} ready component${ready.length===1?'':'s'}` : '';
  const freshAction = protein === 'slow-cooked mushroom chicken' ? 'Fresh greens and final assembly; reheat the slow-cooked mushroom chicken' : ['sardines','canned smoked salmon','smoked sprats'].includes(protein) ? `Open and serve ${protein}; keep greens and final assembly fresh` : protein.includes('scoop') ? `Mix ${protein} at serving; keep greens and final assembly fresh` : `Cook ${protein}; wash and dress greens, herbs and fruit at serving`;
  return `<article class="suggestion"><span class="eyebrow">Option ${index+1}${status}</span><h3>${recipe.name}</h3><ul class="rows"><li><strong>Base</strong> ${baseFor(base)}</li><li><strong>Vegetables</strong> ${recipe.vegetables}</li><li><strong>Fruit / pickle</strong> ${recipe.fruit}</li><li><strong>Herbs</strong> ${recipe.herbs}</li><li><strong>Crunch</strong> ${recipe.crunch}</li><li><strong>Sauce</strong> ${recipe.sauce} <span class="pm">PM</span></li><li><strong>Ready from fridge</strong> ${ready.length?ready.join('; '):'No matching components checked yet'}</li><li><strong>Make fresh</strong> ${freshAction}</li><li><strong>Prep if useful</strong> <span class="pm">PM</span> ${later.length?later.join('; '):'All suggested prep is ready'}</li></ul></article>`;
 }).join('');
}
document.addEventListener('DOMContentLoaded', () => {
 if ($('#suggestions')) {
  const saved = JSON.parse(localStorage.getItem('bowlBookReady') || '[]');
  document.querySelectorAll('[data-ready]').forEach(input => {
   input.checked = saved.includes(input.value);
   input.addEventListener('change', () => {
    const checked = [...document.querySelectorAll('[data-ready]:checked')].map(item=>item.value);
    localStorage.setItem('bowlBookReady', JSON.stringify(checked));
    render();
   });
  });
  $('#base').addEventListener('change', () => { offset=0; render(); });
  $('#protein').addEventListener('change', () => { offset=0; render(); });
  $('#reroll').addEventListener('click', () => { offset += 2; render(); });
  render();
 }
 document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  document.querySelectorAll('.bowl-card').forEach(card=>card.hidden=button.dataset.filter!=='all'&&!card.dataset.tags.split(' ').includes(button.dataset.filter));
 }));
});
