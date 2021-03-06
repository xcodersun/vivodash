angular.module('VivoDash')
  .controller('DeleteChannelCtrl', ['$uibModalInstance', 'channel', 'channelService', DeleteChannelCtrl]);

function DeleteChannelCtrl($uibModalInstance, channel, channelService) {
  var dcc = this;
  dcc.name = channel.name;

  dcc.ok = function () {
    channelService.deleteChannel(channel.id)
    .then(function (response) {
      $uibModalInstance.close('');
    }).catch(function (e) {
      console.log(e);
    });
  };

  dcc.close = function() {
    $uibModalInstance.close('');
  }
}