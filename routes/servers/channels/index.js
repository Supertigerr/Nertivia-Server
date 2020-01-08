const MainChannelRouter = require("express").Router();

// Middleware
const authenticate = require("../../../middlewares/authenticate");
const UserPresentVerification = require ('./../../../middlewares/UserPresentVerification')
const serverPolicy = require("../../../policies/ServerPolicies");
const checkRolePerms = require('./../../../middlewares/checkRolePermissions');
const {MANAGE_CHANNELS} = require("./../../../utils/rolePermConstants");
// Channels
MainChannelRouter.route('/:server_id/channels').get(
  authenticate,
  UserPresentVerification,
  require("./getServerChannels")
);

// Create
MainChannelRouter.route('/:server_id/channels').put(
  authenticate,
  UserPresentVerification,
  checkRolePerms('Channels', MANAGE_CHANNELS),
  serverPolicy.createChannel,
  require("./createServerChannel")
);

// Update
MainChannelRouter.route('/:server_id/channels/:channel_id').patch(
  authenticate,
  UserPresentVerification,
  checkRolePerms('Channels', MANAGE_CHANNELS),
  serverPolicy.updateChannel,
  require("./updateServerChannel")
);

// Delete
MainChannelRouter.route('/:server_id/channels/:channel_id').delete(
  authenticate,
  UserPresentVerification,
  checkRolePerms('Channels', MANAGE_CHANNELS),
  require("./deleteServerChannel")
);

// position
MainChannelRouter.route('/:server_id/channels/position').put(
  authenticate,
  UserPresentVerification,
  checkRolePerms('Channels', MANAGE_CHANNELS),
  require("./channelPositions")
);

module.exports = MainChannelRouter;
