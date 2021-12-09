class QueryExtension extends Autodesk.Viewing.Extension {
    constructor(viewer, options) {
        super(viewer, options);
        this.viewer = viewer;
        this.customize = this.customize.bind(this);
    }

    load() {
        console.log('Load QueryExtension...')
        this.viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, this.customize);
        return true
    }

    unload() {
        return true
    }

    customize() {

    }

}

Autodesk.Viewing.theExtensionManager.registerExtension('QueryExtension', QueryExtension);