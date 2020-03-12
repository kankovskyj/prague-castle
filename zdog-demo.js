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
  zoom: 3,
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
    translate: { y: 2, x: -16, z: 8},
  });
  house.copyGraph({
    translate: house.translate.copy().multiply( -1 ),
    translate: { y: 2, x: 29, z: 5},
    rotate: { y: 5.60},
  });
  house.copyGraph({
    translate: house.translate.copy().multiply( -1 ),
    translate: { y: 2, x: 35, z: 0.5},
    rotate: { y: 5.60},

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
cathedral.copyGraph({
  translate: cathedral.translate.copy().multiply( -1 ),
  translate: { y: -10, x: -20, z: -27},
  rotate: { y: TAU/2},
});
//tower
let tower = new Zdog.Box({
  translate: { y: -22.5, x: -6, z: -18},
  addTo: illo,
  width: 9,
  height: 65,
  depth: 9,
  stroke: false,
  color: '#C6AF91', // default face color
  leftFace: '#87786a',
  rightFace: '#9c8575',
  stroke: 1,
  topFace: '#6F747A',
  bottomFace: '#000',
});
let towerTop = new Zdog.Cone({
  translate: { y: -54, x: -6, z: -18},
  rotate: { x: TAU/4 },
  addTo: illo,
  diameter: 9,
  length: 15,
  stroke: 4,
  color: '#6F747A',
  backface: '#6F747A',
});

//tower end
//front
let vezOne = new Zdog.Box({
  translate: { y: -10, x: -26, z: -19.5},
  addTo: illo,
  width: 5,
  height: 40,
  depth: 5,
  stroke: false,
  color: '#4e5155', // default face color
  leftFace: '#4e5155',
  rightFace: '#4e5155',
  topFace: '#4e5155',
  bottomFace: '#4e5155',
});
vezOne.copyGraph({
  translate: vezOne.translate.copy().multiply( -1 ),
  translate: { y: -10, x: -26, z: -34.5},
});

let vezTwo = new Zdog.Box({
  translate: { y: -42, x: -26, z: -19.5},
  addTo: illo,
  width: 4.2,
  height: 25,
  depth: 4.2,
  stroke: false,
  color: '#3e4144', // default face color
  leftFace: '#3e4144',
  rightFace: '#3e4144',
  topFace: '#3e4144',
  bottomFace: '#3e4144',
});
vezTwo.copyGraph({
  translate: vezTwo.translate.copy().multiply( -1 ),
  translate: { y: -42, x: -26, z: -34.5},
});

let tip = new Zdog.Cone({
  translate: { y: -55, x: -26, z: -34.5},
  rotate: { x: TAU/4 },
  addTo: illo,
  diameter: 3,
  length: 12,
  stroke: 1,
  color: '#434649',
  backface: '#434649',
});
tip.copyGraph({
  translate: tip.translate.copy().multiply( -1 ),
  translate: { y: -55, x: -26, z: -19.5},
});

//back
let backOne = new Zdog.Box({
  translate: { x: 26.5, y: 0.2, z: -27},
  addTo: illo,
  width: 8,
  height: 19,
  depth: 8,
  stroke: 1,
  color: '#4e5155', // default face color
  leftFace: '#4e5155',
  rightFace: '#4e5155',
  topFace: '#6f747a',
  bottomFace: '#000',
  rotate: { y: 1.56},


});

// ----- animate ----- //

function animate() {
    illo.rotate.y += isSpinning ? 0.003 : 0;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  }
  
  animate();
  