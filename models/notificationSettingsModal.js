import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NotificationSettingsSchema = new Schema(
    {
        // notification settings for a particular user
        userId:{ type: Schema.Types.ObjectId, ref: 'User' }, 
        showNotification: {
            type: Boolean,
            required: true,
        },
        // time in which the user want to get the notifications
        // 24:00hrs format 
        notificationTime: {
            from: {
                type: String,
                default: "00:00:00",
            },
            to: {
                type: String,
                default: "23:59:59",
            }
        }       
    },
    // setting changed timestamp
    { timestamps: true }
);

const NotificationSettings = mongoose.model('NotificationSettings', NotificationSettingsSchema);
export default NotificationSettings;