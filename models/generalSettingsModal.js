import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GeneralSettingsSchema = new Schema(
    {
        language: {
            type: String,
            default: "English",
        }
    },
    // setting changed timestamp
    { timestamps: true }
);

const GeneralSettings = mongoose.model('GeneralSettings', GeneralSettingsSchema);
export default GeneralSettings;