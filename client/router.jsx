import React from "react";
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';

FlowRouter.route('/', {
	action: function(params) {

        mount(MainLayout, {name: 'Arunoda'});
    }
});

FlowRouter.route('/game', {
	action: function(params) {

        mount(MainLayout, {name: 'ss'});
    }
});