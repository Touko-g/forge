// 创建一个 Extension
function EventsTutorial(viewer, options) {
    Autodesk.Viewing.Extension.call(this, viewer, options);
  }
    EventsTutorial.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
    EventsTutorial.prototype.constructor = EventsTutorial;

    EventsTutorial.prototype.load = function() {
        this.onSelectionBinded = this.onSelectionEvent.bind(this);
        this.viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this.onSelectionBinded);
        console.log('EventsTutorial is loaded!');
        return true;
    };
                
    EventsTutorial.prototype.unload = function() {
        this.viewer.removeEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this.onSelectionBinded);
        this.onSelectionBinded = null;
        console.log('EventsTutorial is now unloaded!');
        return true;
    };
  
    

    // Event hanlder for Autodesk.Viewing.SELECTION_CHANGED_EVENT
    EventsTutorial.prototype.onSelectionEvent = function(event) {
        var currSelection = this.viewer.getSelection();
        // console.log('event: ', event)
        // console.log('选中元素：',currSelection[0])
        this.viewer.getProperties(currSelection[0], function(props){
            // console.log('选中元素的属性： ', props)
        })


        // let tr = model.getPlacementTransform();
        //
        // console.log('模型 Transform : ', tr)
    } 

  Autodesk.Viewing.theExtensionManager.registerExtension('EventsTutorial', EventsTutorial);