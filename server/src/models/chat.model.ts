import {Schema,model} from "mongoose";

interface Chats {
    chatName: string;
    isGroupChat: Boolean;
    users: Array<Object>;
    latestMessage: Object;
    groupAdmin: Object;
    versionKey: Boolean;
    timestamps: Boolean;
}

const chatSchema = new Schema<Chats>(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        users: [{ type: Schema.Types.ObjectId, ref: "user" }],
        latestMessage: {
          type: Schema.Types.ObjectId,
          ref: "message",
        },
        groupAdmin: { type: Schema.Types.ObjectId, ref: "user" },
    },
    {
        versionKey:false,
        timestamps: true,
    }
)

const Chats = model<Chats>("chat",chatSchema);

export default Chats;