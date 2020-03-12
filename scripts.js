// Made with Zdog

let isSpinning = false;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  },
});
//GROUP BUILDING 
var buildingGroup = new Zdog.Group({
    addTo: illo,
    translate: { z: 10 },
  });



const building = new Zdog.Box({
  addTo: buildingGroup,
  width: 320,
  height: 100,
  cornerRadius: 30,
  depth: 70,
  stroke: false,
  cornerRadius: 0.3,
  color: '#E4D2BA', // default face color
  leftFace: '#7C7562',
  rightFace: '#7C7562',
  topFace: '#f03',
  bottomFace: '#000',
  translate: {z: 100}
});




//CATHEDRAL
/*
const cathedral = new Zdog.Box({
    addTo: illo,
    width: 220,
    height: 100,
    cornerRadius: 30,
    depth: 70,
    stroke: false,
    cornerRadius: 0.3,
    color: '#E4D2BA', // default face color
    leftFace: '#7C7562',
    rightFace: '#7C7562',
    topFace: '#f03',
    bottomFace: '#000',
  });
*/
  
function animate() {
  illo.rotate.y += isSpinning ? 0.03 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();
