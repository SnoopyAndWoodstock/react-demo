//import indexComponent from '../containers/index/index.component';

const routeConfig = [{
    path: '/',
    //component: indexComponent,
    onEnter: function(nextState, replaceState) {
        //console.log('onEnter', nextState)
        let pathName = nextState.location.pathname.replace(/^\//, '')
        if (pathName == '') {
            replaceState(`index`)
        }
    },
    childRoutes: [{
        path: 'index',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/index/index.component').default)
            })
        }
    }, {
        path: 'product',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/productSearch/productSearch.component').default)
            })
        }
    }, {
        path: 'product-detail',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/productDetail/productDetail.component').default)
            })
        }
    }, {
        path: 'product-search',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/productSearch/productSearch.component').default)
            })
        }
    }, {
        path: 'logistics',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/logistics/logistics.component').default)
            })
        }
    }, {
        path: 'login',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/login/login.component').default)
            })
        }
    }, {
        path: 'yeren',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/yeren/yeren.component').default)
            })
        }
    }, {
        path: 'discuss',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/discuss/discuss.component').default)
            })
        }
    }, {
        path: 'demo',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/demo/demo.component').default)
            })
        }
    }, {
        path: 'calculator',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/calculator/calculator.component').default)
            })
        }
    }, {
        path: 'comment',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/comment/comment.component').default)
            })
        }
    }]
}];

export default routeConfig;