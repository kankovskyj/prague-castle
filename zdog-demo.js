// Made with Zdog

// ----- setup ----- //

var sceneSize = 10;
var isSpinning = true;
var TAU = Zdog.TAU;

var offWhite = '#FED';
var yellow = '#ED0';
var gold = '#EA0';
var orange = '#E62';
var garnet = '#C25';
var eggplant = '#636';


// enable fill, disable stroke for all defaults
[ Zdog.Rect, Zdog.Shape, Zdog.Ellipse ].forEach( function( Item ) {
  Item.defaults.fill = true;
  Item.defaults.stroke = false;
});

var initRotate = { y: TAU/8 };
var turnRatio = 1 / Math.sin( TAU/8 );

var illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  rotate: initRotate,
  zoom: 8,
  // stretch looks circular at 1/8 turn
  scale: { x: turnRatio, z: turnRatio },
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  },
  onResize: function( width, height ) {
    this.zoom = Math.floor( Math.min( width, height ) / sceneSize );
  },
});

// ----- model ----- //

var house = new Zdog.Anchor({
  addTo: illo,
  translate: { x: -2, y: 2, z: 8 },
});

var frontGroup = new Zdog.Group({
  addTo: house,
  translate: { z: 5 },
});
// front wall
new Zdog.Rect({
  addTo: frontGroup,
  width: 14,
  height: 14,
  color: '#CCBDA6',
});

var frontWindow = new Zdog.Rect({
  addTo: frontGroup,
  width: 0.8,
  height: 1.5,
  translate: { x: -6, y: -5 },
  color: '#333333',
});
//first row
frontWindow.copy({
  translate: { x: -4.5, y: -5 },
});
frontWindow.copy({
    translate: { x: -3, y: -5 },
  });
frontWindow.copy({
    translate: { x: -1.5, y: -5 },
  });
frontWindow.copy({
    translate: { x: 0, y: -5 },
  });
frontWindow.copy({
    translate: { x: 1.5, y: -5 },
  });
frontWindow.copy({
    translate: { x: 3, y: -5 },
  });
frontWindow.copy({
    translate: { x: 4.5, y: -5 },
  });
frontWindow.copy({
    translate: { x: 6, y: -5 },
  });
//second row
frontWindow.copy({
    translate: { x: -6, y: -3 },
  });
  frontWindow.copy({
    translate: { x: -4.5, y: -3 },
  });
  frontWindow.copy({
      translate: { x: -3, y: -3 },
    });
  frontWindow.copy({
      translate: { x: -1.5, y: -3 },
    });
  frontWindow.copy({
      translate: { x: 0, y: -3 },
    });
  frontWindow.copy({
      translate: { x: 1.5, y: -3 },
    });
  frontWindow.copy({
      translate: { x: 3, y: -3 },
    });
  frontWindow.copy({
      translate: { x: 4.5, y: -3 },
    });
  frontWindow.copy({
      translate: { x: 6, y: -3 },
    });
//third row
frontWindow.copy({
    translate: { x: -6, y: -1 },
  });
  frontWindow.copy({
    translate: { x: -4.5, y: -1 },
  });
  frontWindow.copy({
      translate: { x: -3, y: -1 },
    });
  frontWindow.copy({
      translate: { x: -1.5, y: -1 },
    });
  frontWindow.copy({
      translate: { x: 0, y: -1 },
    });
  frontWindow.copy({
      translate: { x: 1.5, y: -1 },
    });
  frontWindow.copy({
      translate: { x: 3, y: -1 },
    });
  frontWindow.copy({
      translate: { x: 4.5, y: -1 },
    });
  frontWindow.copy({
      translate: { x: 6, y: -1 },
    });
//fourth row
frontWindow.copy({
    translate: { x: -6, y: 1 },
  });
  frontWindow.copy({
    translate: { x: -4.5, y: 1 },
  });
  frontWindow.copy({
      translate: { x: -3, y: 1 },
    });
  frontWindow.copy({
      translate: { x: -1.5, y: 1 },
    });
  frontWindow.copy({
      translate: { x: 0, y: 1 },
    });
  frontWindow.copy({
      translate: { x: 1.5, y: 1 },
    });
  frontWindow.copy({
      translate: { x: 3, y: 1 },
    });
  frontWindow.copy({
      translate: { x: 4.5, y: 1 },
    });
  frontWindow.copy({
      translate: { x: 6, y: 1 },
    });

    var frontWindow = new Zdog.Rect({
        addTo: frontGroup,
        width: 14,
        height: 3.2,
        translate: { x: 0, y: 5.3 },
        color: '#c6af91',
      });










// backWall
var backGroup = frontGroup.copyGraph({
  translate: { z: -5 },
  rotate: { y: TAU/2 },
});


var rightGroup = new Zdog.Group({
  addTo: house,
  translate: { x: 7 },
  rotate: { y: -TAU/4 },
});
// right wall SIDES
new Zdog.Shape({
  addTo: rightGroup,
  path: [
    { x: -5, y:  7 },
    { x: -5, y: -7 },
    { x:  0, y: -12 },
    { x:  5, y: -7 },
    { x:  5, y:  7 },
  ],
  width: 10,
  height: 14,
  color: '#9c8575',
});

//side
var leftGroup = rightGroup.copyGraph({
  translate: { x: -7 },
  rotate: { y: TAU/4 },
});



// front roof
var frontRoof = new Zdog.Shape({
  addTo: house,
  path: [
    { x: -7, y:  -7, z: 5 },
    { x: -7, y: -12, z: 0 },
    { x:  7, y: -12, z: 0 },
    { x:  7, y:  -7, z: 5 },
  ],
  color: '#6f747a',
});

frontRoof.copy({
  scale: { z: -1 },
  color: '#4e5155',
});

// floor
new Zdog.Rect({
  addTo: house,
  width: 14,
  height: 10,
  translate: { y: 7 },
  rotate: { x: TAU/4 },
  color: '#000',
});


house.copyGraph({
  translate: house.translate.copy().multiply( -1 ),
  translate: { y: 2, x: 11.5, z: 8},
});
house.copyGraph({
    translate: house.translate.copy().multiply( -1 ),
    translate: { y: 2, x: -14, z: 8},
  });
//BUILDING END


//CATHEDRAL//CATHEDRAL
var cathedral = new Zdog.Anchor({
    addTo: illo,
    translate: { x: 3, y: -10, z: -20},
    rotate: { y: 1.56},
  });
  //LONG WALL LEFT POSITION
  var firstGroup = new Zdog.Group({
    addTo: cathedral,
    translate: { z: 5 },
  });
  // LONG WALLS SIZE
  new Zdog.Rect({
    addTo: firstGroup,
    width: 14,
    height: 40,
    color: '#87786a',
  });
  
  // thirdWall
  var thirdGroup = firstGroup.copyGraph({
    translate: { z: -5 },
    rotate: { y: TAU/2 },
  });
  
  
  var secondGroup = new Zdog.Group({
    addTo: cathedral,
    translate: { x: 7 },
    rotate: { y: -TAU/4 },
  });
  // second wall SIDES
  new Zdog.Shape({
    addTo: secondGroup,
    path: [
      { x: -5, y:  20 },
      { x: -5, y: -20 },
      { x:  0, y: -30 },
      { x:  5, y: -20 },
      { x:  5, y:  20 },
    ],
    width: 10,
    height: 14,
    color: '#A99685',
  });
  
  //side
  var firstGroup = secondGroup.copyGraph({
    translate: { x: -7 },
    rotate: { y: TAU/4 },
  });
  
  
  
  // first roof
  var firstRoof = new Zdog.Shape({
    addTo: cathedral,
    path: [
      { x: -7, y:  -20, z: 5 },
      { x: -7, y: -30, z: 0 },
      { x:  7, y: -30, z: 0 },
      { x:  7, y:  -20, z: 5 },
    ],
    color: '#4e5155',
  });
  
  firstRoof.copy({
    scale: { z: -1 },
    color: '#6f747a',
  });
  
  // floor
  new Zdog.Rect({
    addTo: cathedral,
    width: 14,
    height: 10,
    translate: { y: 20 },
    rotate: { x: TAU/4 },
    color: '#000',
  });
  
    //translate: { x: 3, y: -10, z: -15},
    //rotate: { y: 1.56},
    
//cathedral end
cathedral.copyGraph({
  translate: cathedral.translate.copy().multiply( -1 ),
  translate: { y: -10, x: -10, z: -27},
  rotate: { y: TAU/2},
});
cathedral.copyGraph({
  translate: cathedral.translate.copy().multiply( -1 ),
  translate: { x: 3, y: -10, z: -34},
  rotate: { y: 1.56},
});
cathedral.copyGraph({
  translate: cathedral.translate.copy().multiply( -1 ),
  translate: { y: -10, x: 3.5, z: -27},
  rotate: { y: TAU/2},
});
cathedral.copyGraph({
  translate: cathedral.translate.copy().multiply( -1 ),
  translate: { y: -10, x: 17, z: -27},
  rotate: { y: TAU/2},
});
// ----- animate ----- //

function animate() {
    illo.rotate.y += isSpinning ? 0.0003 : 0;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  }
  
  animate();
  