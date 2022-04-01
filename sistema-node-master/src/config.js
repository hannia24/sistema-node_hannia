import {
    config
} from "dotenv";

config();

export const MONGODB_URI =
    process.env.MONGODB_URI ||"mongodb+srv://anota:anota1311@sm51.vgq3v.mongodb.net/test?authSource=admin&replicaSet=atlas-lv3vzg-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";