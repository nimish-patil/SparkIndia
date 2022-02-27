import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PrivacySettingsSchema = new Schema(
    {
        // privacy settings for a user
        userId:{ 
            type: Schema.Types.ObjectId,
             ref: 'User' 
        },
        // profile visibility to others
        // myContacts
        // everyone
        // nobody
        profileVisibility: {
            type: String,
            default: "myContacts",
        }, 
        // chat read receipts visibility
        // on or off
        readReceipts: {
            type: Boolean,
            default: true,
        }
    },
    // setting changed timestamp
    { timestamps: true }
);

const PrivacySettings = mongoose.model('PrivacySettings', PrivacySettingsSchema);
export default PrivacySettings;