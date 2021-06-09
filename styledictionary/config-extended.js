const StyleDictionary = require('style-dictionary').extend('./styledictionary/config-extended.json');

const propertiesToCTI = {
  'width': {category: 'size', type: 'dimension'},
  'min-width': {category: 'size', type: 'dimension'},
  'max-width': {category: 'size', type: 'dimension'},
  'height': {category: 'size', type: 'dimension'},
  'min-height': {category: 'size', type: 'dimension'},
  'max-height': {category: 'size', type: 'dimension'},
  'border-width': {category: 'size', type: 'border', item: 'width'},
  'border-radius': { category: 'size', type: 'border', item: 'width' },
  'border-color': {category: 'color', type: 'border'},
  'background-color': {category: 'color', type: 'background'},
  'color': {category: 'color', type: 'font'},
  'text-color': { category: 'color', type: 'font' },
  'padding': {category: 'size', type: 'padding'},
  'padding-vertical': {category: 'size', type: 'padding'},
  'padding-horziontal': {category: 'size', type: 'padding'},
  'icon': {category: 'content', type: 'icon'},
  'font-size': {category: 'size', type: 'font'},
  'line-height': { category: 'size', type: 'line-height' },
  'size': {category: 'size', type: 'icon'},
  'top': {category: 'size', type: 'dimension'},
  'bottom': {category: 'size', type: 'dimension'},
  'left': {category: 'size', type: 'dimension'},
  'right': {category: 'size', type: 'dimension'},
  'font-family': {category: 'content', type: 'font'}
}

const CTITransform = (prop) => {
    // Only do this custom functionality in the 'component' top-level namespace.
    if (prop.path[0] === 'component') {
      // When defining component tokens, the key of the token is the relevant CSS property
      // The key of the token is the last element in the path array
      return propertiesToCTI[prop.path[prop.path.length - 1]];
    } else {
      // Fallback to the original 'attribute/cti' transformer
      return StyleDictionary.transform['attribute/cti'].transformer(prop);
    }
  }

StyleDictionary.registerTransform({
  name: 'attribute/cti/component',
  type: 'attribute',
  transformer: CTITransform
});


StyleDictionary.registerTransform({
    name: 'spacing/rem',
    type: 'value',
    matcher: function(prop) {
      return prop.attributes.category === 'spacing';
    },
    transformer: function(prop) {
      return prop.original.value + 'rem';
    }
  });

  StyleDictionary.registerTransformGroup({
    name: 'scss-extended',
    transforms: [
        'attribute/cti/component',
        'name/cti/kebab',
        'time/seconds',
        'content/icon', 
        'size/rem',
        'color/css',
        'spacing/rem'
    ]
  });

  StyleDictionary.registerTransformGroup({
    name: 'js-extended',
    transforms: [
      'attribute/cti/component',
      'name/cti/pascal',
      'size/rem',
      'color/hex',
      'spacing/rem'
    ]
  });

  StyleDictionary.registerTransformGroup({
    name: 'css-extended',
    transforms: [
      'attribute/cti/component',
      'name/cti/kebab',
      'time/seconds',
      'content/icon',
      'size/rem',
      'color/css',
      'spacing/rem'
    ]
  });

  StyleDictionary.registerTransformGroup({
    name: 'less-extended',
    transforms: [
      'attribute/cti/component',
      'name/cti/kebab',
      'time/seconds',
      'content/icon',
      'size/rem',
      'color/hex',
      'spacing/rem'
    ]
  });

  StyleDictionary.registerTransformGroup({
    name: 'sketch-palette-v2',
    transforms: [
      'attribute/cti/component',      
      'color/sketch'
    ]
  });

  StyleDictionary.registerTransformGroup({
    name: 'react-native-extended',
    transforms: [
      'attribute/cti/component',
      'color/css',
      'size/object',
      'spacing/rem'
    ]
  }); 

  StyleDictionary.buildAllPlatforms();