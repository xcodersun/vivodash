angular.module('VivoDash')
  .controller('DashboardsSummaryCtrl', ['$scope', '$uibModal', '$state', 'channelService', 'dashboardService', 'chartService', 'utilService', DashboardsSummaryCtrl]);

function DashboardsSummaryCtrl($scope, $uibModal, $state, channelService, dashboardService, chartService, utilService) {
  var dsc = this;
  $scope.dashboards = [];

  dashboardService.getAllDashboards()
  .then(function (dashboards) {
    for (var i = 0; i < dashboards.length; i++) {
      // Traverse dashboards
      dashboardService.getDashboard(dashboards[i].id)
      .then(function (dashboard) {
        var db = dashboard;
        var query = angular.fromJson(dashboard.definition);
        var start = utilService.getDateFromNow(-(query.time_range/86400), 'start');
        var end = utilService.getDateFromNow(0, 'end');
        var url = channelService.getCustomSingleTrendUrl(query.channel_id, query.field, 'avg', start, end, query.interval);
        // Create chart
        chartService.singleTrend(url, query.field, start, end)
        .then(function (chart) {
          var item = {};
          item.dashboard = db;
          item.chart = {};
          item.chart = chart;
          $scope.dashboards.push(item);
        }).catch(function (e) {
          console.log(e);
        }); // Create chart done
      }).catch(function (e) {
        console.log(e);
      }); // Traverse dashboards done
    }
  }).catch(function (e) {
    console.log(e);
  });

  dsc.trend = function () {
    dsc.editTrend();
  }

  dsc.editDashboard = function(dashboard) {
    dsc.editTrend(dashboard);
  }

  dsc.deleteDashboard = function(dashboard) {
    var modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'templates/menu-dashboards/views/dashboard_delete_confirm.html',
      controller: 'DashboardDeleteConfirmCtrl',
      controllerAs: 'ddcc',
      backdrop: 'static',
      size: 'sm',
      resolve: {
        dashboard: function() {
          return dashboard;
        }
      }
    });

    modalInstance.result.then(function() {
      var res = modalInstance.result.$$state.value;
      if (res === 'yes') {
        $state.reload();
      }
    });
  }

  dsc.editTrend = function(dashboard) {
    var modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'templates/menu-dashboards/widgets/dashboard_widget_trend.html',
      controller: 'DashboardWidgetTrendCtrl',
      controllerAs: 'dwtc',
      backdrop: 'static',
      size: 'lg',
      resolve: {
        dashboard: function() {
          return dashboard;
        }
      }
    });

    modalInstance.result.then(function() {
      var res = modalInstance.result.$$state.value;
      if (res === 'create') {
        $state.reload();
      }
    });
  }
}
