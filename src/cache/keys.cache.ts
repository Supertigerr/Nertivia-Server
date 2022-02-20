
export const authenticatedUserString = (userId: string) => `user:${userId}`;

export const userPresenceString = (userId: string) => `userPresence:${userId}`;

export const userActivityStatusString = (userId: string) => `userActivityStatus:${userId}`;

// unique array of socket ids by user id.
export const userSocketIdSet = (userId: string) => `userSocketIds:${userId}`;

// get direct message channel by userId and channelId.
export const userDMChannelsHash = (userId: string) => `userDMChannels:${userId}`

// get user id by socket id.
export const socketUserIdString = (socketId: string) => `socketUserId:${socketId}`;

export const serverChannelString = (channelId: string) => `serverChannel:${channelId}`;

// get server member by serverId and member Id. 
export const serverMemberHash = (serverId: string) => `serverMember:${serverId}`;

export const serverString = (serverId: string) => `server:${serverId}`;