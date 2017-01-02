'use strict';

/**
 * Route configuration for the VivoDash module.
 */
angular.module('VivoDash')
.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/sidebar/home/home');

        // Application routes
        $stateProvider
            .state('index', {
                abstract: true,
                views: {
                    '@' : {
                        templateUrl: 'layout/layout.html',
                    },
                    'layout-left@index': {
                        templateUrl: 'layout/left.html',
                    },
                    'layout-top@index': {
                        templateUrl: 'layout/top.html',
                    },
                    'layout-middle@index': {
                        templateUrl: 'layout/middle.html',
                    },
                    'layout-main@index': {
                        templateUrl: 'layout/main.html',
                    },
                },
            })
            .state('sidebar', {
                parent: 'index',
                url: '/sidebar',
                templateUrl: 'layout/sidebar.html',
            })
            .state('sidebar.home', {
                url: '/home/:title',
                views: {
                    'title@index' : {
                        templateUrl: 'layout/title.html',
                        controller: 'TitleCtrl',
                    },
                    'detail@index' : {
                        templateUrl: 'templates/menu-home/home.html',
                    },
                },
            })
            .state('sidebar.account_company_profile', {
                url: '/account_company_profile/:title',
                views: {
                    'title@index' : {
                        templateUrl: 'layout/title.html',
                        controller: 'TitleCtrl',
                    },
                    'detail@index' : {
                        templateUrl: 'templates/menu-account/account_company_profile.html'
                    },
                },
            })
            .state('sidebar.account_api_token', {
                url: '/account_api_token/:title',
                views: {
                    'title@index' : {
                        templateUrl: 'layout/title.html',
                        controller: 'TitleCtrl',
                    },
                    'detail@index' : {
                        templateUrl: 'templates/menu-account/account_api_token.html'
                    },
                },
            })
            .state('sidebar.account_bill_plan', {
                url: '/account_bill_plan/:title',
                views: {
                    'title@index' : {
                        templateUrl: 'layout/title.html',
                        controller: 'TitleCtrl',
                    },
                    'detail@index' : {
                        templateUrl: 'templates/menu-account/account_bill_plan.html'
                    },
                },
            })
            .state('sidebar.channels_summary', {
                url: '/channels_summary/:title',
                views: {
                    'title@index' : {
                        templateUrl: 'layout/title.html',
                        controller: 'TitleCtrl',
                    },
                    'detail@index' : {
                        templateUrl: 'templates/menu-channels/channels_summary.html'
                    },
                },
            })
            .state('sidebar.channels_new_channel', {
                url: '/channels_new_channel/:title',
                views: {
                    'title@index' : {
                        templateUrl: 'layout/title.html',
                        controller: 'TitleCtrl',
                    },
                    'detail@index' : {
                        templateUrl: 'templates/menu-channels/channels_new_channel.html'
                    },
                },
            })
            .state('sidebar.channels_view_channel', {
                url: '/channels_view_channel/:title',
                views: {
                    'title@index' : {
                        templateUrl: 'layout/title.html',
                        controller: 'TitleCtrl',
                    },
                    'detail@index' : {
                        templateUrl: 'templates/menu-channels/channels_view_channel.html'
                    },
                },
            })
            .state('sidebar.devices_summary', {
                url: '/devices_summary/:title',
                views: {
                    'title@index' : {
                        templateUrl: 'layout/title.html',
                        controller: 'TitleCtrl',
                    },
                    'detail@index' : {
                        templateUrl: 'templates/menu-devices/devices_summary.html'
                    },
                },
            })
            .state('sidebar.devices_explore', {
                url: '/devices_explore/:title',
                views: {
                    'title@index' : {
                        templateUrl: 'layout/title.html',
                        controller: 'TitleCtrl',
                    },
                    'detail@index' : {
                        templateUrl: 'templates/menu-devices/devices_explore.html'
                    },
                },
            })
            .state('sidebar.dashboards_summary', {
                url: '/dashboards_summary/:title',
                views: {
                    'title@index' : {
                        templateUrl: 'layout/title.html',
                        controller: 'TitleCtrl',
                    },
                    'detail@index' : {
                        templateUrl: 'templates/menu-dashboards/dashboards_summary.html'
                    },
                },
            })
            .state('sidebar.dashboards_dashboard', {
                url: '/dashboards_dashboard/:title',
                views: {
                    'title@index' : {
                        templateUrl: 'layout/title.html',
                        controller: 'TitleCtrl',
                    },
                    'detail@index' : {
                        templateUrl: 'templates/menu-dashboards/dashboards_dashboard.html'
                    },
                },
            })
            .state('sidebar.dashboards_explore', {
                url: '/dashboards_explore/:title',
                views: {
                    'title@index' : {
                        templateUrl: 'layout/title.html',
                        controller: 'TitleCtrl',
                    },
                    'detail@index' : {
                        templateUrl: 'templates/menu-dashboards/dashboards_explore.html'
                    },
                },
            })
    }
]).controller('TitleCtrl', ['$scope', '$stateParams', TitleCtrl])

function TitleCtrl($scope, $stateParams) {
    title = $stateParams.title;
    $scope.title = title.charAt(0).toUpperCase() + title.slice(1);
    switch (title) {
        case 'home':
            $scope.icon = 'fa fa-home';
            break;
        case 'account':
            $scope.icon = 'fa fa-user-circle-o';
            break;
        case 'channels':
            $scope.icon = 'fa fa-cloud-upload';
            break;
        case 'devices':
            $scope.icon = 'fa fa-laptop';
            break;
        case 'dashboards':
            $scope.icon = 'fa fa-area-chart';
            break;
    }
}
