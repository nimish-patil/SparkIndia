import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BlockedUserSchema = new Schema(
  {
    // for a particular userId the blocked User's Id
    userId:{ type: Schema.Types.ObjectId, ref: 'User' }, 
    blockedUserId: { type: Schema.Types.ObjectId, ref: 'User'}
  },
  // setting changed timestamp
  { timestamps: true }
);

const BlockedUser = mongoose.model('BlockedUser', BlockedUserSchema);
export default BlockedUser;