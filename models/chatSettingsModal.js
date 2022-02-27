import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ChatSettingsSchema = new Schema(
    {
        // chat settings for a particular user
        userId:{ 
            type: Schema.Types.ObjectId,
             ref: 'User'
        },
        // theme: dark, light mode 
        theme: {
            type: Boolean,
            default: true,
        },
        // chat background
        chatWallpaper: {
            type: String,
            default: "blank",
        },
        // font size for the entire app
        // will have to decide the pixel size for these three
        // medium - default
        // small
        // large
        fontSize: {
            type: String,
            default: "medium",
        }
    },
    // setting changed timestamp
    { timestamps: true }
);

const ChatSettings = mongoose.model('ChatSettings', ChatSettingsSchema);
export default ChatSettings;